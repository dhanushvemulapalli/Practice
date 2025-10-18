import requests
import time
# res = requests.get('https://api.github.com/events')
res = requests.get("https://w3schools.com/python/demopage.htm")
print(res.text)
    
try :
    res = requests.get("https://w3schols.com/python/demopage.htm")
    print(res.text)
except Exception as e:
    print(e)
finally:
    print("finally")