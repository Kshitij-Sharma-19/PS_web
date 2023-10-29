from flask import Flask, render_template_string, request, send_from_directory
import random

app = Flask(__name__)

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)

@app.route('/')
def index():
    return render_template_string(open('index.html').read())

@app.route('/guess')
def check_guess():
    guess = int(request.args.get('value'))
    if guess < secret_number:
        return "Too low!"
    elif guess > secret_number:
        return "Too high!"
    else:
        return "Congratulations! You guessed the number."

# Serve static files (CSS)
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run()
