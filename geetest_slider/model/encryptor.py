from Crypto.Cipher import AES
import base64


class Encryptor:

    def __init__(self, key, iv):
        self.key = key.encode('utf-8')
        self.iv = iv.encode('utf-8')

    def pkcs7padding(self, text):
        """明文使用PKCS7填充"""
        bs = 16
        length = len(text)
        bytes_length = len(text.encode('utf-8'))
        padding_size = length if (bytes_length == length) else bytes_length
        padding = bs - padding_size % bs
        padding_text = chr(padding) * padding
        return text + padding_text

    def aes_encrypt(self, content, model=AES.MODE_CBC):
        """AES加密"""
        cipher = AES.new(self.key, model, self.iv)
        # 处理明文
        content_padding = self.pkcs7padding(content)
        # 加密
        encrypt_bytes = cipher.encrypt(content_padding.encode('utf-8'))
        # 重新编码
        result = str(base64.b64encode(encrypt_bytes), encoding='utf-8')
        return result


if __name__ == '__main__':
    test_key = '64e20a8951b5df12'
    test_iv = '0000000000000000'
    data = "{\"lang\":\"zh-cn\",\"type\":\"fullpage\",\"tt\":\"M:G8Pjp8Pjp8Pjp19A(Up8Pjp8Pj9?M5U5,(b((5(b(()98((((q((((eb((8e(nbe(55n((bb(A.M(e55b,)be(b5qb((bbb((2(U-)5AM91d7)(?/-N1?9U-)7@W)NABROkif.N)US)(j--5@9Q5P-iM97)(E-*9N5?-N1?M9-U-)M92)1?-c7)(U/)M91E-*5?M9/)(NM92)Mj1E-*-N3)(A3)(?M9/)(N9d-cM95@M9:R.H3@YL2N)VfP1?M9-U7)3*M?7*M?M9-N1E/*.O_*(P3)(?N(-c3)(?-U-)7)(E-*MM/)MN1?-N3)(A7)(P/)(f.?.?Ac)gC(WE5(8(n,,e5((((5(5b5e5((((b5b5be(,((55e,5,5e(,((5((,((5(((5dgob96kNDb9@)Mc9I3*b9-*//M),)(E-(/*()NM(9-)(9-*(9-)M9(E-(-L)M9(U5(/.(*M9(9-)(9-)(U-(-)M9(E-(-)M9(E-(15/),)(9-M4)(9-)(9ME-PMb-U5)3*(?7,(?Mb-*/*M)MM(E1(/)M)(93)()(9-)M9(9-*(9/)()(9-)M9(.91)(9-)ME)qqb(,qqqM(((()(9Y(FjFS(E/(/E)SFTSEFNS)SEFNM/FSELS/FSEFM/E(((/7f(MA*(,-9/*(MC/(RN91E1*)*/-(M2EE*9Q1E1*C/(M1.MM1E1*/*(RN(1E1.N(1E5*C/(MC/(TN92)N(1E1*(RMM1E1*/*(MC-(NMM1.Mb1*(cA(5/(.)9(bI(5*(*A-(b1.(M199*)91*A*(R)b299*-*(Q-,(N(M1*)91*-*(M1/(M1*(b1(0qqqqM((\",\"light\":\"INPUT_0\",\"s\":\"c7c3e21112fe4f741921cb3e4ff9f7cb\",\"h\":\"5b4c7181420b2054fb8732a1655d84f0\",\"hh\":\"2550a007f64821a6820db7472a05fd6c\",\"hi\":\"f4ce373c6a2d63f4b5927980153aaa21\",\"vip_order\":-1,\"ct\":-1,\"ep\":{\"v\":\"9.0.7\",\"de\":false,\"te\":false,\"me\":true,\"ven\":\"Google Inc. (NVIDIA)\",\"ren\":\"ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-26.21.14.4166)\",\"fp\":[\"move\",813,474,1629013256826,\"pointermove\"],\"lp\":[\"up\",769,404,1629013259743,\"pointerup\"],\"em\":{\"ph\":0,\"cp\":0,\"ek\":\"11\",\"wd\":1,\"nt\":0,\"si\":0,\"sc\":0},\"tm\":{\"a\":1629013245681,\"b\":1629013245722,\"c\":1629013245801,\"d\":0,\"e\":0,\"f\":1629013245683,\"g\":1629013245683,\"h\":1629013245683,\"i\":1629013245683,\"j\":1629013245683,\"k\":0,\"l\":1629013245689,\"m\":1629013245714,\"n\":1629013245717,\"o\":1629013245812,\"p\":1629013246024,\"q\":1629013246024,\"r\":1629013246024,\"s\":1629013253135,\"t\":1629013253135,\"u\":1629013253135},\"by\":2},\"passtime\":12629,\"rp\":\"856cc93cb8eda22b05c97c45806d63a9\",\"captcha_token\":\"448404039\"}"
    encryptor = Encryptor(test_key, test_iv)
    result = encryptor.aes_encrypt(data)
    print(result)


