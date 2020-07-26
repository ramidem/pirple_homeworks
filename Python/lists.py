myUniqueList = []
myLeftovers = []

def addToList(any):
    if any in myUniqueList:
        myLeftovers.append(any)
        print(False)
    else:
        myUniqueList.append(any)
        print(True)

addToList("apples")
addToList("mango")
addToList(1)
addToList(2)
addToList(1)
addToList("mango")
addToList("unicorn")

print(myUniqueList)
print(myLeftovers)

