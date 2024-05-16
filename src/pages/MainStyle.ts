import styled, { css, keyframes } from 'styled-components';
import tw from 'twin.macro';

// 공통 스타일 정의
const commonMediaElementStyles = css`
  overflow: hidden;
  position: absolute;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;

  &::before {
    content: '';
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:hover .media-content {
    opacity: 1;
  }

  .media-content {
    display: block;
    height: 100vh;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.4s ease;
  }
`;

// 다양한 변형 스타일 정의
const mediaElementVariants = {
  variant1: css`
    .media-element--0 {
      border-top-left-radius: 15rem;
      border-bottom-right-radius: 15rem;
    }
    .media-element--1 {
      border-radius: 100rem;
    }
    .media-element--2 {
      border-top-right-radius: 30rem;
    }
    .media-element--3 {
      border-bottom-left-radius: 25rem;
    }
    .media-element--4 {
      border-top-right-radius: 40rem;
    }
    .media-element--5 {
      border-top-left-radius: 20rem;
    }
    .media-element--6 {
      border-radius: 100rem;
    }
  `,
  variant2: css`
    .media-element--0 {
      height: 40rem;
      width: 30rem;
      border-top-right-radius: 35rem;
      border-bottom-left-radius: 35rem;
    }
    .media-element--1 {
      height: 40rem;
      width: 30rem;
      border-top-left-radius: 35rem;
      border-bottom-right-radius: 35rem;
      transform: translateX(5rem);
    }
    .media-element--2 {
      border-radius: 23rem;
    }
    .media-element--3 {
      height: 40rem;
      width: 30rem;
      border-top-left-radius: 40rem;
      border-bottom-right-radius: 40rem;
      transform: translateY(5rem);
    }
    .media-element--4 {
      height: 40rem;
      width: 30rem;
      border-top-right-radius: 35rem;
      border-bottom-left-radius: 35rem;
      transform: translate(5rem, 5rem);
    }
    .media-element--5 {
      border-radius: 100rem;
    }
    .media-element--6 {
      border-radius: 100rem;
    }
  `,
  variant3: css`
    .media-element--0 {
      height: 40rem;
      border-top-right-radius: 30rem;
    }
    .media-element--1 {
      height: 40rem;
      border-bottom-right-radius: 35rem;
    }
    .media-element--2 {
      border-top-right-radius: 35rem;
    }
    .media-element--3 {
      height: 40rem;
      width: 40rem;
      border-top-right-radius: 40rem;
      border-bottom-right-radius: 40rem;
      transform: translateY(5rem);
    }
    .media-element--4 {
      height: 40rem;
      width: 20rem;
      border-top-left-radius: 35rem;
      transform: translate(15rem, 5rem);
    }
    .media-element--5 {
      height: 40rem;
      width: 30rem;
      border-top-right-radius: 20rem;
      transform: translateY(-8rem);
    }
    .media-element--6 {
      height: 20rem;
      width: 20rem;

      border-top-right-radius: 20rem;
      transform: translate(-2rem, -6rem);
    }
  `,
  variant4: css`
    .media-element--0 {
      height: 60rem;
      width: 20rem;
      border-radius: 30rem;
    }
    .media-element--1 {
      height: 70rem;
      width: 10rem;
      border-radius: 30rem;
      transform: translate(-5rem, 10rem);
    }
    .media-element--2 {
      height: 80rem;
      width: 30rem;
      border-radius: 30rem;
      transform: translateX(30rem);
    }
    .media-element--3 {
      height: 50rem;
      width: 20rem;
      border-radius: 30rem;
      transform: translate(30rem, -10rem);
    }
    .media-element--4 {
      height: 50rem;
      width: 15rem;
      border-radius: 30rem;
      transform: translate(25rem, -30rem);
    }
    .media-element--5 {
      height: 40rem;
      width: 10rem;
      border-radius: 30rem;
      transform: translate(-10rem);
    }
    .media-element--6 {
      height: 40rem;
      width: 15rem;
      border-radius: 30rem;
      transform: translate(-7.5rem, -15rem);
    }
  `,
  variant5: css`
    .media-element--0 {
      height: 40rem;
      width: 20rem;
      transform: translateY(10rem);
    }
    .media-element--1 {
      height: 40rem;
      width: 10rem;
      transform: translate(-5rem, 30rem);
    }
    .media-element--2 {
      height: 48rem;
      width: 30rem;
      transform: translate(30rem, 30rem);
    }
    .media-element--3 {
      height: 30rem;
      width: 20rem;
      transform: translate(30rem, 15rem);
    }
    .media-element--4 {
      height: 30rem;
      width: 15rem;
      transform: translate(25rem, -35rem);
    }
    .media-element--5 {
      height: 56rem;
      width: 10rem;
      transform: translate(-10rem, -15rem);
    }
    .media-element--6 {
      height: 60rem;
      width: 15rem;
      transform: translate(-7.5rem, -37rem);
    }
  `,
};

export const Wrapper = styled.div`
  ${tw`w-full h-[100dvh] absolute top-0 left-0`}
  &.variant1 {
    ${mediaElementVariants.variant1}
  }
  &.variant2 {
    ${mediaElementVariants.variant2}
  }
  &.variant3 {
    ${mediaElementVariants.variant3}
  }
  &.variant4 {
    ${mediaElementVariants.variant4}
  }
  &.variant5 {
    ${mediaElementVariants.variant5}
  }
`;

export const HomeContent = styled.div`
  ${tw`absolute`}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeMedia = styled.div`
  display: block;
  height: 80rem;
  overflow: visible;
  position: relative;
  width: 120rem;
`;

export const MediaElement = styled.a<{ $background: string }>`
  ${commonMediaElementStyles}
  background: ${({ $background }) => $background};

  &.media-element--0 {
    height: 35rem;
    width: 25rem;
    left: 0;
    top: 0;
    z-index: 2;
  }

  &.media-element--1 {
    height: 35rem;
    width: 35rem;
    left: 25rem;
    top: 0;
    z-index: 2;
  }

  &.media-element--2 {
    height: 80rem;
    width: 60rem;
    left: 60rem;
    top: 0;
    z-index: 1;
  }

  &.media-element--3 {
    height: 45rem;
    width: 25rem;
    left: 0;
    top: 35rem;
    z-index: 2;
  }

  &.media-element--4 {
    height: 45rem;
    width: 35rem;
    left: 25rem;
    top: 35rem;
    z-index: 2;
  }

  &.media-element--5 {
    height: 45rem;
    width: 45rem;
    left: 75rem;
    top: 35rem;
    z-index: 2;
  }

  &.media-element--6 {
    height: 30rem;
    width: 30rem;
    left: 82.5rem;
    top: 42.5rem;
    z-index: 3;
  }
`;

const fullScreenFade = keyframes`
  from {
    width: 0;
    height: 0;
    opacity: 1;
    border-radius: 50%;
  }

  to {
    width: 200vw;
    height: 200vw;
    opacity: 1;
    border-radius: 0;
  }
`;

const mobileFullScreenFade = keyframes`
  from {
    width: 0;
    height: 0;
    opacity: 1;
    border-radius: 50%;
  }

  to {
    width: 200vw;
    height: 150dvh;
    opacity: 1;
    border-radius: 0;
  }
`;

export const AnimatedOverlay = styled.div<{
  $animateState?: boolean;
  $backgroundColor: string;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.$backgroundColor};
  width: 0;
  height: 0;
  opacity: 0;
  z-index: 10;
  animation: ${(props) =>
    props.$animateState
      ? css`
          ${fullScreenFade} 1s cubic-bezier(0.645, 0.045, 0.355, 1)
        `
      : 'none'};

  @media (max-width: 500px) {
    animation: ${(props) =>
      props.$animateState
        ? css`
            ${mobileFullScreenFade} 1s cubic-bezier(0.645, 0.045, 0.355, 1)
          `
        : 'none'};
  }
`;
