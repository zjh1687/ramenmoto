import { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`w-full h-screen absolute top-0 left-0 `}
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

const HomeContent = styled.div`
  ${tw`absolute`}

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HomeMedia = styled.div`
  display: block;
  height: 83.8rem;
  overflow: visible;
  position: relative;
  width: 133.7rem;
`;

const HomeMediaElement = styled.a<{ bg: string }>`
  overflow: hidden;
  position: absolute;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::before {
    background: ${({ bg }) => bg};
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

const HoverableImage = () => {
  const [homeStyle, setHomeStyle] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHomeStyle((style) => (!style ? 'home--2' : ''));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper className={homeStyle}>
      <div className="h-screen">
        <HomeContent>
          <HomeMedia className="home__media">
            <HomeMediaElement
              className="home__media__element home__media__element--0"
              bg="#9bce51"
              href="/projects/clover/"
              id="clover"
            >
              <img
                alt="Clover"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </HomeMediaElement>
            <HomeMediaElement
              bg="#ffe31b"
              className="home__media__element home__media__element--1"
              href="/projects/mailchimp/"
              id="mailchimp"
            >
              <img
                alt="Mailchimp"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </HomeMediaElement>
            <HomeMediaElement
              bg="#b7bac5"
              className="home__media__element home__media__element--2"
              href="/projects/mta/"
              id="mta"
            >
              <img
                alt="MTA"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </HomeMediaElement>

            <HomeMediaElement
              bg="#65bc4d"
              className="home__media__element home__media__element--3"
              href="/projects/freshdirect/"
              id="freshdirect"
            >
              <img
                alt="Freshdirect"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </HomeMediaElement>
            <HomeMediaElement
              bg="#cdcccc"
              className="home__media__element home__media__element--4"
              href="/projects/wwc/"
              id="wwc"
            >
              <img
                alt="WWC"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </HomeMediaElement>
            <HomeMediaElement
              bg="#2157a4"
              className="home__media__element home__media__element--5"
              href="/projects/gainbridge/"
              id="gainbridge"
            >
              <img
                alt="Gainbridge"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </HomeMediaElement>
            <HomeMediaElement
              bg="#85cef1"
              className="home__media__element home__media__element--6"
              href="/projects/vista/"
              id="vista"
            >
              <img
                alt="Vista"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </HomeMediaElement>
          </HomeMedia>
        </HomeContent>
      </div>
    </Wrapper>
  );
};

export default HoverableImage;
