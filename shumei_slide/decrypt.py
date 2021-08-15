from Crypto.Cipher import DES
from base64 import standard_b64encode

key = b'2d78962b'  # 密钥 8位或16位,必须为bytes


def pad(text):
    """填充文本，必须是8的倍数"""
    while len(text) % 8 != 0:
        text += '\0'
    return text


des = DES.new(key, DES.MODE_ECB)  # 创建DES实例
text = '[[0,3,0],[22,10,101],[43,11,201],[43,11,301],[43,11,401]]'
padded_text = pad(text)

encrypted_text = des.encrypt(padded_text.encode('utf-8'))  # 加密
print(standard_b64encode(encrypted_text).decode())

