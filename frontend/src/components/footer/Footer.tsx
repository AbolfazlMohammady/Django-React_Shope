import React from "react";
import Container from "../container/Container";
function Footer() {
  return (
    <footer className="bg-slate-800 text-right text-white h-[350px] bottom-0 ">
      <Container>
        <div className="w-[100%] py-8 flex  justify-center  gap-14 flex-row-reverse ">
          <div className="w-[30%] ">
            <H1>فروشگاه اینترنتی زنبیل</H1>
            <P>
              فروشگاه اینترنتی زنبیل به عنوان یکی از قدیمی‌ترین فروشگاه های
              اینترنتی با بیش از یک دهه تجربه، با ماموریت ایجاد "تجربه یک خرید
              خوب با تضمین بهترین قیمت"
            </P>
          </div>

          <div className="flex flex-col gap-4 w-[30%]">
            <H1>نیاز به راهنمایی دارید؟</H1>

            <div className="flex flex-col gap-3 ">
              <H1>021-88649751-2</H1>
              <P>
                تهران، بلوار آفریقا (نلسون ماندلا)، خیابان سپر، پلاک 17، طبقه 5
              </P>
            </div>
            <div className="flex flex-col gap-2 ">
              <P>کد پستی: 1518718317</P>
              <div className="flex gap-3 ">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABWVBMVEVyHVFHcEx0Fvp8Fv1yFP1/FfyLCOyfBOmtAeS7AuDHAd3UANjZAs7rD6xyFvzjANTqAMHoA7l2F/yPFfx8GPmfD/zFF/XVWujoZuLyZt3pRt/yGdHyA8j1AKTViPj/9Pr////8g9f9A7r3DZz5vO794Pf+ruj9B6uzFPv7JLv+AJr+BI/+YMP/1vD+AIThG+n9GZn/vd3/YZz+AXP+GoT/r8r+AmT/b5z+HHH+I3f+G2P/ur7+FFD+Klb+fYv/wcr+LUf+LWX+AFn+Nzr+Ohz+RT7+inP+Si7/ztD+TxL/zbv+Wy//9fH+WgL+c1X+ZyX+PUv+Bzv+VXD+cxr/6eL+aQT+eAX+nDj+gwD+gxH+fSL+rYn+jwD+iwL+XhX/3rn/1bH9ZR/+lwP+nwH+xHH8ZC3+qAH+sAD+wAP+x1P+zGb+pl79mQn+uAD9J3T+ygD9O1n8pRL9twuaEkMNAAAAc3RSTlMBAF3G///////////GW9j//9nY/1r///////////7//////8b/////////////////////////////////////////////////////////////////////////////////xf///1v////////Y/9j/2VzGSus+GgAAAeNJREFUeAFFjEWiU0EQRc/tqu74V9wZ4TBiB6wG3wpzVoQ7zHCXeELypHH+KVchJAESaEs0IUv0Zv+7fwLgSAOk9ZFghcnfDw4AAg18cyhWCKNVob9NCZjQLWVrEGhJbJGDoCBpMwCrJTETAKBWgdeRGb4dmJW56PdI/KU1K4X15N+AFsW0+3/WVm7Pa0Pmu4Fh7HcbRIjMIhr3FItUGAH4SNZKjK32YjKpK3Iv0yUY0b8g0Vs0oK+8wbeyMBAQwVeo44R1z7XWq6rqpn5jiTmAeQO3iceg9zkYzKvc71iEmMFbqCJJ4tDcKFrLjX5D/MEdq8GpIUUgd/tgGboTgiUDPDZ44SXNpr0gWRcAgqEmEPJRNVPOxYaOth0oAHdCxWoOzslH+RCvlafYMgFUHvAIHoCjz16io80BrH/j0AAcJ9KWKkhn5sRyGjsDtr/sqyrsWNO1cW9/cDNLZgHLSzVvn+wMq9qbKKwy7TiIaKTW56pzW6Oa+N1OKEQdvvl2RyOE4DEOZurd1cHNeab27tyjOPfhFlucXP04ovF97B6jTOzdJwFLaNAff7N6c8incH1VpiSR67q2VgjzUU7JgbMTiQtFKmgAsCAuczlflmVZn7iGBFc1awB/p4tqUS3LDb8OPwBrSrZIO/KHZwAAAABJRU5ErkJggg=="
                  alt="instagram"
                />
                <img src="https://telegram.org/favicon.ico" alt="telegram" />
                <img src="https://twitter.com/favicon.ico" alt="twitter" />
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse justify-around gap-8 ">
            <ul className="flex flex-col gap-2">
              <H1>خدمات مشتریان</H1>
              <P>پیگیری سفارش</P>
              <P>پشتیبانی زنبیل</P>
            </ul>
            <ul className="flex flex-col gap-2">
              <H1>فروشگاه اینترنتی زنبیل</H1>
              <P>درباره زنبیل</P>
              <P>قوانین و مقررات</P>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-b border-slate-300 py-1">
          <h1>زنبیل، تجربه یک خرید خوب با تضمین بهترین قیمت</h1>
        </div>
        <h1 className="text-center border-slate-300 pt-1">
          Copyright © 2024 - 2012 zanbil.ir. All Rights Reserved
        </h1>
      </Container>
    </footer>
  );
}

export default Footer;

function H1({ children }) {
  return <h1 className="text-lg font-bold">{children} </h1>;
}
function P({ children }) {
  return <p className="text-base text-slate-500">{children}</p>;
}
