
def arrange(arr):
    odd = []
    for i in range(1, len(arr), 2):
        odd.append(arr[i])
    even = []
    for i in range(0, len(arr), 2):
        even.append(arr[i])
    return odd + even

print(arrange([1,5,1,25,1,30,1,2,1,4]))


