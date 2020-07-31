# Homework Assignment #6: Advanced Loops

def draw_board(rows, columns):
    col_minus = columns - 1
    for row in range(rows):
        if row % 2 == 0:
            for col in range(1, columns):
                if col % 2 == 1:
                    if col != col_minus:
                        print(" ", end="")
                    else:
                        print(" ")
                else:
                    if col != col_minus:
                        print("|", end="")
                    else:
                        print("|")
        else:
            print("-"*columns)

draw_board(5, 6)

