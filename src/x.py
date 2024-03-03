import requests
from flask import Flask, jsonify
from flask_cors import CORS




app = Flask(__name__)
CORS(app, origins='*')

@app.route('/getCoinData/a')
def get_data():
    url = f'https://api.chainabuse.com/v0/reports?address=a&includePrivate=false&page=1&perPage=50'

    headers = {
        "accept": "application/json",
        "authorization": "Basic <redacted>"
    }

    response = requests.get(url, headers=headers)
    print(response)
    return jsonify(response.text)

if __name__ == '__main__':
    app.run(debug=True)

