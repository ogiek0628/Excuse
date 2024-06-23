from crypt import methods
from urllib import request
from flask import Flask, request, jsonify
from flask_cors import CORS
import cons_ai


app = Flask(__name__)
CORS(app)




@app.route("/concider", methods=["POST"])
def concider():
    data  = request.json
    option1 = data.get('option1')
    option2 = data.get('option2')

    # ここでopenaiにてmessageを作成
    message = cons_ai.make_message(option1, option2)

    data = {"message": message}
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True, port=5000)