import styled, { css, keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`w-full h-[100dvh] absolute top-0 left-0 `}
  &.home--2 {
    .home__media__element {
      border-radius: 50%;
    }
    .home__media__element--0 {
      height: 24.8rem;
      transform: translateY(14rem);
    }
    .home__media__element--1 {
      transform: translateY(4rem);
    }
    .home__media__element--2 {
      transform: translate(-16.8rem);
      width: 83.8rem;
    }
    .home__media__element--3 {
      transform: translateY(-4rem);
    }
    .home__media__element--4 {
      height: 24.8rem;
      transform: translateY(3rem);
    }
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
  height: 83.8rem;
  overflow: visible;
  position: relative;
  width: 133.7rem;
`;

export const HomeMediaElement = styled.a<{ $background: string }>`
  overflow: hidden;
  position: absolute;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;

  &::before {
    background: ${({ $background }) => $background};
    content: '';
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:hover {
    .home__media__media {
      opacity: 1;
    }
  }

  .home__media__media {
    display: block;
    height: 100vh;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.4s ease;
  }

  &.home__media__element--0 {
    height: 41.9rem;
    left: 0;
    top: 0;
    width: 24.8rem;
    z-index: 2;
  }

  &.home__media__element--1 {
    height: 41.9rem;
    width: 41.9rem;
    left: 24.8rem;
    top: 0;
    z-index: 2;
  }

  &.home__media__element--2 {
    height: 83.8rem;
    left: 66.7rem;
    top: 0;
    width: 67rem;
    z-index: 1;
  }

  &.home__media__element--3 {
    height: 41.9rem;
    left: 0;
    top: 41.9rem;
    width: 41.9rem;
    z-index: 2;
  }

  &.home__media__element--4 {
    height: 41.9rem;
    left: 41.9rem;
    top: 41.9rem;
    width: 24.8rem;
    z-index: 2;
  }

  &.home__media__element--5 {
    height: 41.9rem;
    left: 91.8rem;
    top: 41.9rem;
    width: 41.9rem;
    z-index: 2;
  }

  &.home__media__element--6 {
    height: 21rem;
    left: 112.75rem;
    top: 62.8rem;
    width: 21rem;
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
