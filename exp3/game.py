import random

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)

def check_guess(guess):
    if guess < secret_number:
        return "Too low!"
    elif guess > secret_number:
        return "Too high!"
    else:
        return "Congratulations! You guessed the number."

# Main game loop
while True:
    guess = int(input("Guess the number between 1 and 100: "))
    result = check_guess(guess)
    print(result)
    if guess == secret_number:
        break
