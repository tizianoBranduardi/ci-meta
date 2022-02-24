curl -XPOST http://51.182.126.80:5000/api/v1/security/login -d \
    '{"username": "tbranduardi", "password": "tiziano", "provider": "db"}' \
    -H "Content-Type: application/json" | export TOKEN=$(python3 -c "import sys, json; print(json.load(sys.stdin)['access_token'])")



curl http://51.182.126.80:5000/api/v1/document/ \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN"