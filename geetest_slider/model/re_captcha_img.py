from PIL import Image
import os
from loguru import logger


class ReCaptchaImg:

    def __init__(self):
        self.Ge = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45, 43, 42, 12, 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]

    @staticmethod
    def read_img(img_path):
        """读取图片"""
        return Image.open(img_path)

    def _restore(self, img, save_path):
        """还原逻辑"""
        height = 160
        width = 260
        new_img = Image.new('RGB', (width, height), (255, 255, 255))
        s = height / 2
        u = 10
        for _ in range(len(self.Ge)):
            c = self.Ge[_] % 26 * 12 + 1
            f = s if self.Ge[_] > 25 else 0
            l = img.crop((c, f, u + c, s + f))
            new_img.paste(l, (int(_ % 26 * 10), int(s if _ > 25 else 0)))
        new_img.save(save_path)

    def restore(self):
        """图片还原"""
        img_dir = os.path.join(os.path.curdir, '../data/captcha_img')
        self._restore(self.read_img(os.path.join(img_dir, 'org_bg.webp')), os.path.join(img_dir, 'bg.jpg'))
        self._restore(self.read_img(os.path.join(img_dir, 'org_full.webp')), os.path.join(img_dir, 'full.jpg'))
        logger.info('已完成验证码图片还原~')


if __name__ == '__main__':
    r = ReCaptchaImg()
    r.restore()
