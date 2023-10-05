from armstrong_numbers import find_armstrong_numbers

def test_0():
    assert find_armstrong_numbers([0]) == [0]

def test_small_range():
    assert find_armstrong_numbers(list(range(0, 8))) == [0, 1, 2, 3, 4, 5, 6, 7]

def test_large_range():
    assert find_armstrong_numbers(list(range(0,100))) == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

def test_full_range():
    assert find_armstrong_numbers(list(range(0,999))) == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]