# Homework Assignment #5
# Basic Loops
# FizzBuzz

# Fizz = []
# Buzz = []
# FizzBuzz = []
# Prime = []

for num in range(1, 101):
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            # Prime.append(num)
            print(num, 'Prime')
            continue
    if num % 3 == 0 and num % 5 == 0:
        # FizzBuzz.append(num)
        print(num, 'FizzBuzz')
        continue
    elif num % 3 == 0:
        # Fizz.append(num)
        print(num, 'Fizz')
        continue
    elif num % 5 == 0:
        # Buzz.append(num)
        print(num, 'Buzz')
        continue

# print("Fizz", Fizz)
# print("Buzz", Buzz)
# print("FizzBuzz", FizzBuzz)
# print("Prime", Prime)
