# from flask import Flask, request, jsonify
#
# app = Flask(__name__)
#
# @app.route('/weather')
# def weather():
#     # location = request.args.get('location')
#     # # Use location to get weather data from an external API or database
#     # data = {'location': location, 'temperature': 72}
#     return jsonify("my name is omri")
#
#
# if __name__ == '__main__':
#     app.run()


from flask import Flask, request, jsonify
import speech_recognition as sr

app = Flask(__name__)

@app.route('/weather')
def weather():
    # initialize the recognizer
    r = sr.Recognizer()

    # use the default microphone as the source
    with sr.Microphone() as source:
        source.energy_threshold = 150
        # return jsonify("hello world")
        print("Say something!")
        while True:
            # listen for audio input from the user
            audio = r.listen(source)

            try:
                # use Google's speech recognition API to convert speech to text
                text = r.recognize_google(audio)
                return jsonify("You said: {}".format(text))
            except sr.UnknownValueError:
                return jsonify("Could not understand audio")
            except sr.RequestError as e:
                return jsonify("Could not request results from Google Speech Recognition service; {0}".format(e))


if __name__ == '__main__':
     app.run()
     # app.run(host='172.16.189.25')