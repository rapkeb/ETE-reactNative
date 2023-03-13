from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/weather')
def weather():
    # location = request.args.get('location')
    # # Use location to get weather data from an external API or database
    # data = {'location': location, 'temperature': 72}
    return jsonify("my name is omri")


if __name__ == '__main__':
    app.run()