from flask import Flask, request, jsonify
import speech_recognition as sr
import wave

from pydub import AudioSegment
from pydub.utils import make_chunks

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

            # Set the output file name and format
            output_file = "output.wav"
            file_format = wave.Wave_write(output_file)

            # Set the audio parameters
            sample_rate = 44100
            sample_width = 2
            channels = 1

            # Write the audio data to the output file
            file_format.setframerate(sample_rate)
            file_format.setsampwidth(sample_width)
            file_format.setnchannels(channels)
            file_format.writeframes(audio.get_wav_data())

            # Close the output file
            file_format.close()

            try:
                # use Google's speech recognition API to convert speech to text
                text = r.recognize_google(audio)

                # Load audio file
                audio_file = AudioSegment.from_wav("output.wav")

                # Split audio into chunks of 4 seconds
                chunk_length_ms = 4000
                chunks = make_chunks(audio_file, chunk_length_ms)

                # Save each chunk as a separate audio file
                for i, chunk in enumerate(chunks):
                    chunk_name = f"chunk{i}.wav"
                    chunk.export(chunk_name, format="wav")
                    print(f"Saved {chunk_name}")

                return jsonify("You said: {}".format(text))
            except sr.UnknownValueError:
                return jsonify("Could not understand audio")
            except sr.RequestError as e:
                return jsonify("Could not request results from Google Speech Recognition service; {0}".format(e))


if __name__ == '__main__':
     app.run()
     # app.run(host='172.16.189.25')



# from flask import Flask, request, jsonify
# import speech_recognition as sr
# import wave
#
# from pydub import AudioSegment
# from pydub.utils import make_chunks
#
# def main():
#     # initialize the recognizer
#     r = sr.Recognizer()
#
#     # use the default microphone as the source
#     with sr.Microphone() as source:
#         source.energy_threshold = 150
#         # return jsonify("hello world")
#         print("Say something!")
#         while True:
#             # listen for audio input from the user
#             audio = r.listen(source)
#
#             # Set the output file name and format
#             output_file = "output.wav"
#             file_format = wave.Wave_write(output_file)
#
#             # Set the audio parameters
#             sample_rate = 44100
#             sample_width = 2
#             channels = 1
#
#             # Write the audio data to the output file
#             file_format.setframerate(sample_rate)
#             file_format.setsampwidth(sample_width)
#             file_format.setnchannels(channels)
#             file_format.writeframes(audio.get_wav_data())
#
#             # Close the output file
#             file_format.close()
#
#             try:
#                 # use Google's speech recognition API to convert speech to text
#                 text = r.recognize_google(audio)
#
#                 # Load audio file
#                 audio_file = AudioSegment.from_wav("output.wav")
#
#                 # Split audio into chunks of 4 seconds
#                 chunk_length_ms = 4000
#                 chunks = make_chunks(audio_file, chunk_length_ms)
#
#                 # Save each chunk as a separate audio file
#                 for i, chunk in enumerate(chunks):
#                     chunk_name = f"chunk{i}.wav"
#                     chunk.export(chunk_name, format="wav")
#                     print(f"Saved {chunk_name}")
#
#                 return jsonify("You said: {}".format(text))
#             except sr.UnknownValueError:
#                 return jsonify("Could not understand audio")
#             except sr.RequestError as e:
#                 return jsonify("Could not request results from Google Speech Recognition service; {0}".format(e))
#
# if __name__ == '__main__':
#     main()