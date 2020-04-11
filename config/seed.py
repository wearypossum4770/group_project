import json
import os
import sqlite3
from datetime import datetime as dt
conn=sqlite3.connect('db.sqlite3')
c=conn.cursor()

seed_data = []
with open("/Users/dragoomdoc/Desktop/code_snippets/Django_Blog/snippets/posts.json", 'r') as this_seed:
        my_data = json.load(this_seed)
        for post in my_data:
            seed_data.append(tuple(post.values()))
print(seed_data)
that = dt.now()
c.executemany(f'''insert into blog_post values (title text, content text,{that} author_id real )''', seed_data)
conn.fetchone()
conn.commit()
conn.close()