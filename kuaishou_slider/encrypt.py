from Crypto.Cipher import AES
import base64


class Encrypt:

    def __init__(self, key, iv):
        self.key = self.text_add_to_16(key.encode('utf-8'))
        self.iv = self.text_add_to_16(iv.encode('utf-8'))

    @staticmethod
    def text_add_to_16(text):
        """文本填充至16位"""
        while len(text) % 16 != 0:
            text += '\0'
        return text

    def pkcs7padding(self, text):
        """明文使用PKCS7填充"""
        bs = 16
        length = len(text)
        bytes_length = len(text.encode('utf-8'))
        padding_size = length if (bytes_length == length) else bytes_length
        padding = bs - padding_size % bs
        padding_text = chr(padding) * padding
        self.coding = chr(padding)
        return text + padding_text

    def aes_encrypt(self, content):
        """AES加密"""
        cipher = AES.new(self.key, AES.MODE_CBC, self.iv)
        # 处理明文
        content_padding = self.pkcs7padding(content)
        # 加密
        encrypt_bytes = cipher.encrypt(content_padding.encode('utf-8'))
        # 重新编码
        result = str(base64.b64encode(encrypt_bytes), encoding='utf-8')
        return result

    def aes_decrypt(self, content):
        """AES解密"""
        cipher = AES.new(self.key, AES.MODE_CBC, self.iv)
        content = base64.b64decode(content)
        text = cipher.decrypt(content).decode('utf-8')
        return text.rstrip(self.coding)


if __name__ == '__main__':
    iv = 'hs2s8eop6pn6cf89'
    key = 'v4dj1g1lfekof8sz'
    a = Encrypt(key=key, iv=iv)
    e = a.aes_encrypt(
        'captchaSn=Cgp6dC5jYXB0Y2hhEqsCkLi6PsJvhcWRvIgnhx1S89fN8yF66-Ub26cdFY0dzk_n6EgLOCO2AERflx8ILYAUGe-PZoXBARwlqxOZY-6NWjdLy3EeSMhXCqXNM5nqHV2V6G4HYwPpSM9HjGCoABwZJEVTNEITFFRYVAX6YOkFXrc_szPyQau5dHml9IFGsdjaGnWmHgMSfYFt185yGCrCzg5Wk9IIN54I7MAjjeQ-ttsB-hGbtW51F28kQm953_eaeBEyUFi19ci492l9UT-KiOX1xEFaSQ9mb4LfjsF2lTy8VnhxTDU2QpHYCe-_VMd79yXemjGPeE3tmIfL3Fowhj4DQZJ7QPrAq9R5-UhdqczWEBEmr19OrAqO7J2KnWISL5CMKofFKqMjySVztTJr4ph84pG0F19X0cgaEgwGTEI41EjiurMkmQ-JJIJmgygFMAI&bgDisWidth=418&bgDisHeight=243&cutDisWidth=74&cutDisHeight=74&relativeX=186&relativeY=81&trajectory=55-0-57%2C61-0-58%2C64-0-59%2C67-0-60%2C69-0-61%2C75-0-62%2C78-0-63%2C86-0-64%2C89-0-65%2C94-0-66%2C97-0-67%2C100-0-68%2C111-0-69%2C114-0-70%2C120-0-71%2C122-0-72%2C128-0-73%2C134-0-74%2C136-0-75%2C145-0-76%2C150-0-77%2C156-0-78%2C159-0-79%2C167-0-80%2C170-0-81%2C178-0-82%2C184-0-83%2C189-0-84%2C192-0-85%2C198-0-86%2C203-0-87%2C212-0-88%2C217-0-89%2C223-0-90%2C223-0-91%2C229-0-92%2C234-0-93%2C243-0-94%2C245-0-95%2C254-0-96%2C256-0-97%2C262-0-98%2C268-0-99%2C276-0-100%2C282-0-101%2C287-0-102%2C293-0-103%2C301-0-104%2C304-0-105%2C310-0-106%2C315-0-107%2C321-0-108%2C326-0-109%2C332-0-110%2C335-0-111%2C340-0-112%2C346-0-113%2C351-0-114%2C357-0-115%2C360-0-116%2C365-0-117%2C368-0-118%2C374-0-119%2C379-0-120%2C382-0-121%2C388-0-122%2C391-0-123%2C393-0-124%2C402-0-125%2C402-0-126%2C407-0-127%2C413-0-128%2C413-0-129%2C416-0-130%2C418-0-131%2C424-0-132%2C430-0-133%2C432-0-134%2C435-0-135%2C435-0-136%2C438-0-137%2C444-0-138%2C446-0-139%2C449-0-140%2C452-0-141%2C455-0-142%2C458-0-143%2C460-0-144%2C463-0-145%2C466-0-146%2C469-0-147%2C469-0-148%2C472-0-150%2C477-0-151%2C480-0-153%2C480-0-154%2C483-0-155%2C486-0-157%2C488-0-159%2C491-0-162')
    d = a.aes_decrypt(e)
    print("加密:", e)
    print("解密:", d)
