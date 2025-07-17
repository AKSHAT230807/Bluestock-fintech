from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def api_test(request):
    if request.method == 'GET':
        return JsonResponse({
            'message': 'Hello from Django!',
            'status': 'success',
            'data': {
                'app_name': 'BluestockApp',
                'version': '1.0.0'
            }
        })
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            return JsonResponse({
                'message': 'Data received successfully!',
                'received_data': data,
                'status': 'success'
            })
        except json.JSONDecodeError:
            return JsonResponse({
                'message': 'Invalid JSON data',
                'status': 'error'
            }, status=400)