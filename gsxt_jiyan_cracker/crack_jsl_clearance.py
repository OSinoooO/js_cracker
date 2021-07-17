import hashlib


def _hash(val: str):
    return hashlib.sha1(val.encode()).hexdigest()


def get_jsl_clearance(ct, bts, chars):
    chars_len = len(chars)
    for i in range(chars_len):
        for j in range(chars_len):
            jsl_clearance = bts[0] + chars[i] + chars[j] + bts[1]
            if _hash(jsl_clearance) == ct:
                return jsl_clearance


if __name__ == '__main__':
    go = {'bts': ['1625996292.468|0|Ep7', 'hi6cQlg6zg7RgtFT5mjr1w%3D'],
 'chars': 'dztHBFjXhnLADwIpjjpGxr',
 'ct': '2c716d479ab209a45b547d2cac9aacde351521c2c83d6b5d5c0010f650a2377d',
 'ha': 'sha256',
 'tn': '__jsl_clearance',
 'vt': '3600',
 'wt': '1500'}

    __jsl_clearance = get_jsl_clearance(go['ct'], go['bts'], go['chars'])
    print(__jsl_clearance)
