import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 시트를 임포트합니다.

// 애니메이션 정의
const expandAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  ${tw`w-full h-screen flex items-center overflow-hidden`}
  touch-action: none;
`;

const ImageGallery = styled.div`
  ${tw`px-d20 flex items-center`}
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  gap: 20px;
  scrollbar-width: none; // Firefox
  /* animation: ${expandAnimation} 1s ease-out forwards; */

  ::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  img {
    ${tw`px-d2 w-full aspect-classic`}
  }
`;

const images = [
  '/WWc.svg',
  '/ramen-soup-svgrepo-com.svg',
  '/ramen-soup-svgrepo-com.svg',
  '/ramen-soup-svgrepo-com.svg',
  '/ramen-soup-svgrepo-com.svg',
];

function Space() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const startY = useRef(0);

  useEffect(() => {
    AOS.init({
      once: true, // 애니메이션을 한 번만 실행
      delay: 1000, // 애니메이션 시작 전 지연 시간
      duration: 700, // 애니메이션 지속 시간
    }); // AOS 초기화
  }, []);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (galleryRef.current) {
      const adjustment = e.deltaY * 0.5; // 스크롤 속도 조절
      galleryRef.current.scrollLeft += adjustment;
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].clientY; // 시작 X 좌표 저장
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (galleryRef.current) {
      const currentY = e.touches[0].clientY;
      const deltaY = startY.current - currentY; // 시작점과 현재점의 Y 차이 계산
      galleryRef.current.scrollLeft += deltaY * 0.1; //  계산된 차이만큼 가로 스크롤 이동
      e.preventDefault(); // 기본 스크롤 동작 방지
    }
  };
  useEffect(() => {
    const galleryElement = galleryRef.current;

    galleryElement.addEventListener(
      'touchmove',
      (e: TouchEvent) => handleTouchMove(e),
      {
        passive: false,
      },
    );

    return () => {
      galleryElement.removeEventListener('touchmove', () => handleTouchMove);
    };
  }, []);

  return (
    <Wrapper>
      <ImageGallery
        ref={galleryRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
      >
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Photo ${index + 1}`}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          />
        ))}
      </ImageGallery>
    </Wrapper>
  );
}

export default Space;
