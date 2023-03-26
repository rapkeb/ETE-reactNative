import os
import requests

def main():
    # Perform the task (e.g., generate an output file)
    output_filename = 'output.txt'
    with open(output_filename, 'w') as f:
        f.write('Hello, world!')

if __name__ == '__main__':
    main()