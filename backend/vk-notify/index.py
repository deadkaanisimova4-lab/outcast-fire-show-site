import os
import json
import urllib.request
import urllib.parse
import random
import datetime

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в беседу группы ВКонтакте."""
    
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
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    vk_token = os.environ.get('VK_BOT_TOKEN', '')
    peer_id = -203229964

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
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': result['error'].get('error_msg', 'Ошибка VK API')})
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }