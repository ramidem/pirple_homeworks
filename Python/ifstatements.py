# checkSame will check if two or all integers are equal
# checkSame will take 3 parameters

def checkSame(a, b, c):
    a = int(a)
    b = int(b)
    c = int(c)

    if a == b and b == c:
        print("All numbers are equal")

    elif a == b:
        print("a and b are equal")

    elif b == c:
        print("b and c are equal")

    elif a == c:
        print("a and c are equal")

    else:
        print("All numbers are not equal")

checkSame(1, 1, 1)
checkSame(1, 1, "1")
checkSame(1, 1, "2")
checkSame("4", 2, "2")
checkSame(3, 2, "1")
checkSame(6, 5, "5")
