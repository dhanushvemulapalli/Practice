# 4️⃣ Convert data fetched from API into a DataFrame and export to DB

import pandas as pd
import requests

res = requests.get('https://api.github.com/events')

df = pd.DataFrame(res.json())
df.to_csv('events.csv')