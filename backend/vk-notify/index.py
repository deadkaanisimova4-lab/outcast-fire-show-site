import os
import json
import urllib.request
import urllib.parse
import random
import datetime

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в ВКонтакте через API сообщества."""
    
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    vk_token = os.environ.get('VK_BOT_TOKEN', '')
    if not vk_token:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'VK_BOT_TOKEN не настроен'})
        }

    # Получаем admin user id из переменной окружения (опционально)
    admin_user_id = os.environ.get('VK_ADMIN_USER_ID', '')
    
    # peer_id: если задан admin_user_id — шлём пользователю,
    # иначе пробуем отправить в беседу группы (peer_id = 2000000000 + chat_id)
    # По умолчанию chat_id=1 (первая беседа сообщества)
    if admin_user_id:
        peer_id = int(admin_user_id)
    else:
        # Беседа сообщества: 2000000000 + chat_id
        # chat_id берём из переменной окружения, по умолчанию 1
        chat_id = int(os.environ.get('VK_CHAT_ID', '1'))
        peer_id = 2000000000 + chat_id

    text = (
        f"🔥 Новая заявка с сайта!\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"💬 Комментарий: {message or 'Не указано'}\n\n"
        f"⏰ {datetime.datetime.now().strftime('%d.%m.%Y %H:%M')}"
    )

    params = urllib.parse.urlencode({
        'access_token': vk_token,
        'peer_id': peer_id,
        'message': text,
        'random_id': random.randint(0, 2**31),
        'v': '5.199'
    })

    req = urllib.request.Request(
        f"https://api.vk.com/method/messages.send?{params}",
        method='GET'
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        result = json.loads(resp.read().decode())

    if 'error' in result:
        error_msg = result['error'].get('error_msg', 'Ошибка VK API')
        error_code = result['error'].get('error_code', 0)
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': error_msg, 'code': error_code})
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message_id': result.get('response')})
    }