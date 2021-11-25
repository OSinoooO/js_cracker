import json

# 模板
with open('ts1.json') as f:
    ts_1 = json.load(f)

with open('ts2.json') as f:
    ts_2 = json.load(f)


ts_2_keys = list(ts_2.keys())
for index, key in enumerate(ts_1):
    ts_1[key] = ts_2[ts_2_keys[index]]


with open('ts3.json', 'w') as f:
    json.dump(ts_1, f, ensure_ascii=False)
print('ok')
