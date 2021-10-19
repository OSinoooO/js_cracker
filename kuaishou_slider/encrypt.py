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
        'captchaSn=Cgp6dC5jYXB0Y2hhEqoCr3J49MICwOmrmBtauo_nTWDnTqMlaOMG3kmYM_S5bGtiqgbOr40GeB_NAcVvbOg-434ZBaXjLpr6_DCD7qnfFsgtIfTX_sim1AlHoY98IPaaDvkmCerTU7lT-YAlknPohe1ROaP6GHXOec-pI7o7gbU7i7W8jhyuGmBmfLdZtdAyrEQEldgRV27hbKPq742s72X8rcLbI5iKLMtxTaChdzQHoDKBO0DshyKRF5Pv3IEFzMpMvjjeavXOKW0UCY1gotUTudrOcixiT7gb4scIYGrIYZ8IHQVpKrjzExyjcUEITyMkvUjDzwBONtONJmJz0VSLydYIXSjbBqAHCLzSvM4Bj_sirtp_br8wzftA1LGODDdLJahviY3AlJ8HYjHsB3N0CVeK-iYypxoS54ssUG9lohNGVZAr9FBgG9oLKAUwAg&bgDisWidth=328&bgDisHeight=191&cutDisWidth=58&cutDisHeight=58&relativeX=198&relativeY=65&trajectory=342%7C13%7C259%2C346%7C13%7C262%2C350%7C13%7C265%2C353%7C13%7C267%2C360%7C13%7C270%2C364%7C13%7C271%2C367%7C13%7C274%2C371%7C13%7C276%2C375%7C13%7C280%2C378%7C13%7C282%2C385%7C13%7C284%2C389%7C13%7C287%2C392%7C13%7C290%2C396%7C13%7C294%2C400%7C13%7C299%2C403%7C13%7C304%2C407%7C13%7C307%2C410%7C13%7C315%2C414%7C13%7C346%2C414%7C13%7C372%2C417%7C13%7C382%2C421%7C13%7C389%2C425%7C13%7C393%2C428%7C13%7C398%2C432%7C13%7C402%2C435%7C13%7C407%2C439%7C13%7C411%2C442%7C13%7C414%2C446%7C13%7C417%2C450%7C13%7C420%2C453%7C13%7C423%2C457%7C13%7C428%2C460%7C13%7C430%2C464%7C13%7C433%2C471%7C13%7C435%2C475%7C13%7C439%2C478%7C13%7C442%2C482%7C13%7C447%2C485%7C13%7C451%2C489%7C13%7C453%2C492%7C13%7C458%2C496%7C13%7C464%2C500%7C13%7C470%2C503%7C13%7C475%2C507%7C13%7C481%2C510%7C13%7C485%2C514%7C13%7C491%2C517%7C13%7C499%2C521%7C13%7C509%2C525%7C13%7C516%2C528%7C13%7C533%2C532%7C13%7C558%2C532%7C12%7C567%2C535%7C12%7C569%2C539%7C12%7C582%2C542%7C12%7C592%2C546%7C12%7C598%2C550%7C12%7C603%2C553%7C12%7C611%2C557%7C12%7C623%2C560%7C12%7C644%2C560%7C11%7C646%2C564%7C11%7C654%2C567%7C11%7C667%2C571%7C11%7C676%2C575%7C11%7C684%2C578%7C11%7C695%2C582%7C11%7C705%2C585%7C11%7C707%2C589%7C11%7C716%2C592%7C11%7C722%2C596%7C11%7C726%2C600%7C11%7C735%2C603%7C11%7C742%2C607%7C11%7C749%2C610%7C11%7C753%2C614%7C11%7C761%2C614%7C12%7C771%2C617%7C12%7C777%2C621%7C12%7C798%2C625%7C12%7C803%2C628%7C12%7C816%2C632%7C12%7C828%2C632%7C13%7C830%2C635%7C13%7C834%2C639%7C13%7C851%2C642%7C13%7C855%2C646%7C13%7C869%2C646%7C14%7C881%2C650%7C14%7C886%2C653%7C14%7C895%2C657%7C14%7C907%2C660%7C14%7C918%2C660%7C15%7C926%2C664%7C15%7C927%2C667%7C15%7C940%2C671%7C15%7C955%2C671%7C16%7C961%2C675%7C16%7C962%2C678%7C16%7C978&gpuInfo=%7B%22glRenderer%22%3A%22WebKit%20WebGL%22%2C%22glVendor%22%3A%22WebKit%22%2C%22unmaskRenderer%22%3A%22ANGLE%20%28Intel%2C%20Mesa%20Intel%28R%29%20UHD%20Graphics%20630%20%28CFL%20GT2%29%2C%20OpenGL%204.6%20%28Core%20Profile%29%20Mesa%2020.3.4%29%22%2C%22unmaskVendor%22%3A%22Google%20Inc.%20%28Intel%29%22%7D')
    d = a.aes_decrypt(e)
    print("加密:", e)
    print("解密:", d)
