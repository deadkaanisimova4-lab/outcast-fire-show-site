import os
import json
import psycopg2
from datetime import datetime


def handler(event: dict, context) -> dict:
    """Управление календарём доступности дат: сколько шоу и инсталляций можно принять на дату.
    GET — публичный просмотр доступности (по месяцу или диапазону).
    POST — админ задаёт лимиты на дату (требует пароль в заголовке X-Admin-Password).
    DELETE — админ сбрасывает лимит на дату (требует пароль).
    """
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
        'Access-Control-Max-Age': '86400'
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    dsn = os.environ['DATABASE_URL']
    conn = psycopg2.connect(dsn)
    conn.autocommit = True
    cur = conn.cursor()

    try:
        if method == 'GET':
            params = event.get('queryStringParameters') or {}
            month = params.get('month')

            if month:
                cur.execute(
                    "SELECT date, show_limit, installation_limit FROM availability "
                    "WHERE to_char(date, 'YYYY-MM') = %s ORDER BY date",
                    (month,)
                )
            else:
                cur.execute(
                    "SELECT date, show_limit, installation_limit FROM availability "
                    "WHERE date >= CURRENT_DATE ORDER BY date"
                )

            rows = cur.fetchall()
            result = [
                {
                    'date': row[0].strftime('%Y-%m-%d'),
                    'show_limit': row[1],
                    'installation_limit': row[2]
                }
                for row in rows
            ]
            return {
                'statusCode': 200,
                'headers': cors_headers,
                'body': json.dumps({'dates': result}, ensure_ascii=False)
            }

        admin_password = os.environ.get('ADMIN_PASSWORD', '')
        headers = event.get('headers', {}) or {}
        provided_password = headers.get('X-Admin-Password') or headers.get('x-admin-password')

        if not admin_password or provided_password != admin_password:
            return {
                'statusCode': 401,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Неверный пароль администратора'}, ensure_ascii=False)
            }

        if method == 'POST':
            body = json.loads(event.get('body', '{}'))
            date_str = body.get('date', '').strip()
            show_limit = int(body.get('show_limit', 0))
            installation_limit = int(body.get('installation_limit', 0))

            datetime.strptime(date_str, '%Y-%m-%d')

            cur.execute(
                """
                INSERT INTO availability (date, show_limit, installation_limit, updated_at)
                VALUES (%s, %s, %s, NOW())
                ON CONFLICT (date) DO UPDATE
                SET show_limit = EXCLUDED.show_limit,
                    installation_limit = EXCLUDED.installation_limit,
                    updated_at = NOW()
                """,
                (date_str, show_limit, installation_limit)
            )

            return {
                'statusCode': 200,
                'headers': cors_headers,
                'body': json.dumps({'success': True}, ensure_ascii=False)
            }

        if method == 'DELETE':
            params = event.get('queryStringParameters') or {}
            date_str = params.get('date', '').strip()
            datetime.strptime(date_str, '%Y-%m-%d')

            cur.execute("DELETE FROM availability WHERE date = %s", (date_str,))

            return {
                'statusCode': 200,
                'headers': cors_headers,
                'body': json.dumps({'success': True}, ensure_ascii=False)
            }

        return {
            'statusCode': 405,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Метод не поддерживается'}, ensure_ascii=False)
        }
    finally:
        cur.close()
        conn.close()
