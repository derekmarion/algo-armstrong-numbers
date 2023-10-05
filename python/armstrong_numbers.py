# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    output = []
    for number in numbers:
        num_digits = len([num for num in str(number)])
        sum_powers = sum(pow(number, num_digits) for number in (int(num) for num in str(number)))
        if sum_powers == number:
            output.append(number)
    return output