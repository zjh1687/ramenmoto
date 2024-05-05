import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainStyle';

function MainPage() {
  const [homeStyle, setHomeStyle] = useState('');
  const [animateState, setAnimateState] = useState(false);
  const [animateColor, setAnimateColor] = useState('');

  const navigate = useNavigate();

  const startAnimation = (props: { url: string; bgColor: string }) => {
    setAnimateColor(props.bgColor);
    setAnimateState(true);
    setTimeout(() => {
      setAnimateState(false);
      navigate(props.url);
    }, 800); // 시간은 애니메이션 지속 시간과 일치해야 합니다.
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHomeStyle((style) => (!style ? 'home--2' : ''));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.Wrapper className={homeStyle}>
      <S.AnimatedOverlay
        $animateState={animateState ? animateState : undefined}
        $backgroundColor={animateColor}
      />
      <div className="h-screen">
        <S.HomeContent>
          <S.HomeMedia className="home__media">
            <S.HomeMediaElement
              className="home__media__element home__media__element--0"
              $background="#9bce51"
              id="clover"
              onClick={() =>
                startAnimation({ url: '/project/horizon', bgColor: '#9bce51' })
              }
            >
              <img
                alt="Clover"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </S.HomeMediaElement>
            <S.HomeMediaElement
              $background="#ffe31b"
              className="home__media__element home__media__element--1"
              id="mailchimp"
              onClick={() =>
                startAnimation({ url: '/project/space', bgColor: '#ffe31b' })
              }
            >
              <img
                alt="Mailchimp"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </S.HomeMediaElement>
            <S.HomeMediaElement
              $background="#b7bac5"
              className="home__media__element home__media__element--2"
              id="mta"
            >
              <img
                alt="MTA"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </S.HomeMediaElement>

            <S.HomeMediaElement
              $background="#65bc4d"
              className="home__media__element home__media__element--3"
              id="freshdirect"
            >
              <img
                alt="Freshdirect"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </S.HomeMediaElement>
            <S.HomeMediaElement
              $background="#cdcccc"
              className="home__media__element home__media__element--4"
              id="wwc"
            >
              <img
                alt="WWC"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </S.HomeMediaElement>
            <S.HomeMediaElement
              $background="#2157a4"
              className="home__media__element home__media__element--5"
              id="gainbridge"
            >
              <img
                alt="Gainbridge"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </S.HomeMediaElement>
            <S.HomeMediaElement
              $background="#85cef1"
              className="home__media__element home__media__element--6"
              id="vista"
            >
              <img
                alt="Vista"
                className="home__media__media"
                data-src="/ramen-soup-svgrepo-com.svg"
                src="/ramen-soup-svgrepo-com.svg"
              />
            </S.HomeMediaElement>
          </S.HomeMedia>
          <div
            className="cursor-pointer"
            onClick={() =>
              startAnimation({ url: '/project/about', bgColor: 'pink' })
            }
          >
            <span className="underline">About ORIJIN HOUSE</span>
          </div>
        </S.HomeContent>
      </div>
    </S.Wrapper>
  );
}

export default MainPage;
