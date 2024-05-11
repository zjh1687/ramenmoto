import * as PANOLENS from 'panolens';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const ViewerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box; // 패딩과 테두리를 포함한 크기 계산
  overflow: hidden; // 컨테이너 크기를 넘어가는 부분 숨김
`;

const TextSection = styled.section`
  ${tw`text-white absolute left-1/2 top-1/2`}
  font-size: 72px;
  font-weight: 500;
  letter-spacing: 2px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-out;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const BackHome = styled.div`
  ${tw`absolute top-5 right-5 w-10 h-10 cursor-pointer`}
`;

const SpacePage = () => {
  const navigate = useNavigate();

  const viewerRef = useRef(null);
  const panoramaRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      // THREE.js와 PANOLENS를 이용한 뷰어 초기화
      const viewer = new PANOLENS.Viewer({
        container: viewerRef.current, // 참조된 div 요소
        autoHideInfospot: false, // 핫스팟 자동 숨김 비활성화
        autoHideControlBar: true,
        controlBar: true, // 하단의 컨트롤 바 표시
        controlButtons: ['fullscreen'], // 표시할 컨트롤 버튼
      });
      viewerRef.current = viewer;
      // 임시 이미지 URL을 사용하여 파노라마 이미지 생성
      const panorama = new PANOLENS.ImagePanorama('/ramenmoto-360.jpeg');
      panoramaRef.current = panorama;

      // 이미지를 뷰어에 추가
      viewer.add(panorama);
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose(); // 컴포넌트 언마운트 시 뷰어 자원 해제
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <ViewerContainer ref={viewerRef} />
      <TextSection>RAMEN MOTO</TextSection>
      <BackHome onClick={() => navigate('/')}>
        <img className="w-full h-full" src="/ramen-soup-svgrepo-com.svg" />
      </BackHome>
    </div>
  );
};

export default SpacePage;
