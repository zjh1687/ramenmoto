import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { EffectCoverflow, EffectFade } from 'swiper';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useIsDevice } from './hooks/device';

const Dimmed = styled.div`
  ${tw`absolute w-full h-screen top-0 bg-black/60 z-10`}
`;

const ImgWrapper = styled.div<{ fullSize?: boolean }>`
  ${tw`aspect-square h-[30dvh] relative mobile-lg:h-[30vh]`}
  ${(props) => props.fullSize && tw`!aspect-auto`}
`;

const ImgSlideWrapper = styled.div`
  ${tw`w-full h-screen flex items-center justify-center`}

  transition: all 0.1s;
`;
const ImgFilter = styled.div`
  ${tw`z-10`}
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    314deg,
    transparent 40%,
    rgba(255, 219, 112, 0.8) 45%,
    rgba(132, 50, 255, 0.6) 50%,
    transparent 54%
  );
  filter: brightness(1.1) opacity(0.8);
  mix-blend-mode: color-dodge;
  background-size: 150% 150%;
  background-position: 100%;
`;

const imgList = [
  {
    key: 'orijinhouse',
    img: '/orijinhouselogo.png',
    fullSize: false,
  },
  {
    key: 'ourlife',
    img: '/ourlife.png',
    fullSize: false,
  },
  {
    key: 'orijinapple',
    img: '/orijinapple.png',
    fullSize: false,
  },
  {
    key: 'orientalfilmblue',
    img: '/orientalfilmblue.png',
    fullSize: false,
  },
  {
    key: 'orientalfilmpuple',
    img: '/orientalfilmpuple.png',
    fullSize: true,
  },
];

function SwiperList() {
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const swiperbgEl = useRef<SwiperClass | null>(null);
  const swiperEl = useRef<SwiperClass | null>(null);
  const imgEl = useRef<HTMLDivElement[] | null[]>([]);
  const imgFilterEl = useRef<HTMLDivElement[] | null[]>([]);

  const { isMobileLg } = useIsDevice();

  const imgSlidesPerView = isMobileLg ? 1.1 : 1.4;

  useEffect(() => {
    if (swiperbgEl.current) {
      swiperbgEl.current.setProgress(currentTranslate);
    }
  }, [currentTranslate]);

  const imgMouseEvent = (e: MouseEvent) => {
    if (imgEl.current && imgFilterEl.current) {
      const x = e.clientX;
      const y = e.clientY;
      const rotateX = (20 / window.innerHeight) * y - 10;
      const rotateY = (-20 / window.innerWidth) * x + 10;
      imgEl.current.forEach((e) => {
        e.setAttribute(
          'style',
          `transform : perspective(50vh) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        );
      });

      imgFilterEl.current.forEach((e) => {
        e.setAttribute('style', `background-position : ${x / 5 + y / 5}%`);
      });
    }
  };

  // perspective(3000px)
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('mousemove', (e) => imgMouseEvent(e));
    }
    return () => {
      wrapperRef.current.addEventListener('mousemove', (e) => imgMouseEvent(e));
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="flex w-full overflow-hidden h-[100dvh] flex-col items-center justify-center"
    >
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        slidesPerGroup={1}
        speed={5000}
        modules={[EffectFade]}
        effect="fade"
        onSwiper={(swiper: SwiperClass) => (swiperbgEl.current = swiper)}
      >
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/11.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/22.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/33.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/44.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <Dimmed />
          <video
            className="absolute w-full h-screen top-0 left-0 object-cover"
            src="/44.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="absolute w-full h-full"
        modules={[EffectCoverflow]}
        slidesPerView={imgSlidesPerView}
        effect="coverflow"
        speed={1000}
        slidesPerGroup={1}
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        onSwiper={(swiper: SwiperClass) => (swiperEl.current = swiper)}
        onProgress={(swiper) => setCurrentTranslate(swiper.progress)}
      >
        {imgList.map((el, idx) => {
          return (
            <SwiperSlide key={el.key}>
              <ImgSlideWrapper>
                <ImgWrapper
                  ref={(e) => (imgEl.current[idx] = e)}
                  fullSize={el.fullSize}
                >
                  <ImgFilter ref={(e) => (imgFilterEl.current[idx] = e)} />
                  <img className="w-full h-full testimg" src={el.img} />
                </ImgWrapper>
              </ImgSlideWrapper>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <ImgSlideWrapper>
            <ImgWrapper>
              <img className="w-full h-full" src="/2.webp" />
            </ImgWrapper>
          </ImgSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlideWrapper>
            <ImgWrapper>
              <img className="w-full h-full" src="/3.webp" />
            </ImgWrapper>
          </ImgSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlideWrapper>
            <ImgWrapper>
              <img className="w-full h-full" src="/4.webp" />
            </ImgWrapper>
          </ImgSlideWrapper>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default SwiperList;
