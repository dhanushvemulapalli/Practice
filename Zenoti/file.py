try :
    m = 2 /0
    print(m)
except Exception as e:
    # print("error, Devide By 0")
    # print(e)
    # raise Exception("/ by 000")
    pass
finally:
    print("finally")

raise Exception("/ by 000")