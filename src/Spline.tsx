import { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const IframeWrapper = styled.div`
  ${tw`overflow-hidden relative `}
`;

function Spline() {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  return (
    <>
      <IframeWrapper>
        <div className="relative w-full h-0 pt-[56.25%]">
          <iframe
            src="https://my.spline.design/w4mA0iriJQbYVzqSq27by8zK/"
            className="border-none w-full h-full absolute top-0 left-0"
          ></iframe>
        </div>
      </IframeWrapper>
    </>
  );
}

export default Spline;
