import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainStyle';

interface MediaElementProps {
  className: string;
  background: string;
  id: string;
  onClick?: () => void;
  alt: string;
  src: string;
}

const MediaElement: React.FC<MediaElementProps> = ({
  className,
  background,
  id,
  onClick,
  alt,
  src,
}) => (
  <S.MediaElement
    className={className}
    $background={background}
    id={id}
    onClick={onClick}
  >
    <img alt={alt} className="media-content" data-src={src} src={src} />
  </S.MediaElement>
);

const MainPage: React.FC = () => {
  const [homeStyleNum, setHomeStyleNum] = useState(0);
  const [animateState, setAnimateState] = useState(false);
  const [animateColor, setAnimateColor] = useState('');

  const navigate = useNavigate();

  const startAnimation = (props: { url: string; bgColor: string }) => {
    setAnimateColor(props.bgColor);
    setAnimateState(true);
    setTimeout(() => {
      setAnimateState(false);
      navigate(props.url);
    }, 800); // 애니메이션 지속 시간과 일치해야 합니다.
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHomeStyleNum((prevStyle) => (prevStyle >= 5 ? 0 : prevStyle + 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.Wrapper className={`variant${homeStyleNum}`}>
      <S.AnimatedOverlay
        $animateState={animateState ? animateState : undefined}
        $backgroundColor={animateColor}
      />
      <div className="h-screen">
        <S.HomeContent>
          <S.HomeMedia>
            <MediaElement
              className="media-element media-element--0"
              background="#4F5F19"
              id="clover"
              onClick={() =>
                startAnimation({ url: '/project/horizon', bgColor: '#4F5F19' })
              }
              alt="Clover"
              src="/ramen-soup-svgrepo-com.svg"
            />
            <MediaElement
              className="media-element media-element--1"
              background="#EFD8B6"
              id="mailchimp"
              onClick={() =>
                startAnimation({ url: '/project/space', bgColor: '#EFD8B6' })
              }
              alt="Mailchimp"
              src="/ramen-soup-svgrepo-com.svg"
            />
            <MediaElement
              className="media-element media-element--2"
              background="#0A0A0A"
              id="mta"
              alt="MTA"
              src="/ramen-soup-svgrepo-com.svg"
            />
            <MediaElement
              className="media-element media-element--3"
              background="#EF9C42"
              id="freshdirect"
              alt="Freshdirect"
              src="/ramen-soup-svgrepo-com.svg"
            />
            <MediaElement
              className="media-element media-element--4"
              background="#74574B"
              id="wwc"
              alt="WWC"
              src="/ramen-soup-svgrepo-com.svg"
            />
            <MediaElement
              className="media-element media-element--5"
              background="#BC9874"
              id="gainbridge"
              alt="Gainbridge"
              src="/ramen-soup-svgrepo-com.svg"
            />
            <MediaElement
              className="media-element media-element--6"
              background="#F6D145"
              id="vista"
              alt="Vista"
              src="/ramen-soup-svgrepo-com.svg"
            />
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
};

export default MainPage;
