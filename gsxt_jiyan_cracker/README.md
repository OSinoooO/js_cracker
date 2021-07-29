> 目标网址：http://www.gsxt.gov.cn/SearchItemCaptcha?t=1627198030389  （t为当前时间戳）

加速乐特征：

- “`__jsl`”开头的cookie

## 破解流程：

### 第一步：

请求目标网址，会返回状态为521的响应，其响应内容为一段设置cookie的js，将其抠出来运行之后，获得cookie值“`__jsl_clearance`”。

### 第二步：

cookie带上js生成的“`__jsl_clearance`”和第一步中返回的cookie值“`__jsluid_h`”再次请求目标网址，返回状态为521的响应，其响应内容为一段混淆js代码，其是生成真正的“`__jsl_clearance`”值的关键代码。

混淆代码中有一个很重要的对象：

```python
{'bts': ['1627199909.798|0|Fvk', '2FsCJDBZ3Vy1Yk9aI9vXVfbo%3D'],
 'chars': 'MQUFxgIOEYkH%iHLgVrMFe',
 'ct': '69772dff1afe6e88a969640397eb8bca3515cc6fe6eb36ab1d866ca4ff9208da',
 'ha': 'sha256',  # 这个hash函数名会变
 'tn': '__jsl_clearance',
 'vt': '3600',
 'wt': '1500'}
```

核心加密逻辑就是对参数`bts`和`chars`做拼接处理（中间会加几个字符），然后对拼接后的字符串进行hash（使用的hash函数就是参数`ha`，本例为“`sha256`”），然后对比参数`ct`，如果相同，则返回此时拼接后的字符串，否则替换中间的几个字符，继续hash并对比参数`ct`。

用python实现其逻辑：

```python
import hashlib


def _hash(val: str, hash_name: str):
    """hash方法"""
    hash_func = getattr(hashlib, hash_name)
    return hash_func(val.encode()).hexdigest()


def get_jsl_clearance(ct, bts, chars, hash_name):
    """加速乐cookie加密逻辑"""
    chars_len = len(chars)
    for i in range(chars_len):
        for j in range(chars_len):
            jsl_clearance = bts[0] + chars[i] + chars[j] + bts[1]
            if _hash(jsl_clearance, hash_name) == ct:
                return jsl_clearance
```

### 第三步：

带上第二步生成的cookie值“`__jsl_clearance`”再次访问目标网址，返回状态码为200的响应，至此破解结束。

