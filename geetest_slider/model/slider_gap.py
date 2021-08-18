from PIL import Image, ImageDraw
from loguru import logger
import os


class SlideCrack(object):

    def __init__(self, gap_img, bg):
        self.gap_img = gap_img
        self.bg = bg

    @staticmethod
    def pixel_is_equal(image1, image2, x, y):
        """
        判断两张图片的像素是否相等,不想等即为缺口位置
        :param image1:
        :param image2:
        :param x:  x坐标
        :param y: y 坐标
        :return:
        """
        # 取两个图片的像素点
        pixel1 = image1.load()[x, y]
        pixel2 = image2.load()[x, y]
        threshold = 60  # 像素色差
        if abs(pixel1[0]-pixel2[0]) < threshold and abs(pixel1[1]-pixel2[1]) < threshold and abs(pixel1[2]-pixel2[2]) <threshold:
            return True
        else:
            return False

    def get_gap(self, image1, image2):
        """
        获取缺口位置
        :param image1:完整图片
        :param image2: 带缺口的图片
        :return:
        """
        left = 60  # 设置一个起始量,因为验证码一般不可能在左边，加快识别速度
        for i in range(left, image1.size[0]):
            for j in range(image1.size[1]):
                if not self.pixel_is_equal(image1, image2, i, j):
                    left = i
                    return left
        return left

    def run(self):
        bg = Image.open(self.bg)
        gap_img = Image.open(self.gap_img)
        # 获取缺口的位置
        gap = self.get_gap(bg, gap_img)
        draw = ImageDraw.Draw(gap_img)
        draw.line((gap, 0, gap, gap_img.size[1]), fill=128)
        img_dir = os.path.join(os.path.curdir, '../data/captcha_img')
        gap_img.save(os.path.join(img_dir, 'result.jpg'))
        logger.info(f'获取到图片缺口距离： gap -> {gap}')
        return gap


if __name__ == "__main__":
    img_dir = os.path.join(os.path.curdir, '../data/captcha_img')
    img1 = os.path.join(img_dir, 'bg.jpg')  # 带缺口的背景图
    img2 = os.path.join(img_dir, 'full.jpg')  # 不带缺口的背景图
    gt = SlideCrack(img1, img2)
    gt.run()
