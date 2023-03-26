import os
import requests

def main(event, context):
    # Perform the task (e.g., generate an output file)
    output_filename = 'output.txt'
    with open(output_filename, 'w') as f:
        f.write('Hello, world!')

    # Return the contents of the output file as the Lambda response
    with open(output_filename, 'r') as f:
        response_body = f.read()

    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'text/plain'},
        'body': response_body
    }

def test():
    # Test the function locally by simulating an event
    event = {}
    context = {}
    response = main(event, context)
    print(response)

if __name__ == '__main__':
    test()