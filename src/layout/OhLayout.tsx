import styled from 'styled-components';
import tw from 'twin.macro';

const TabButton = styled.div`
  ${tw`text-xs bg-transparent text-gray-600 border-0 p-0 cursor-pointer hover:text-white`}
`;

function OhLayout(props: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div className="w-full absolute top-5 flex items-center justify-center z-10">
        <img src="/ohLogo.svg" className="w-d20" />
      </div>
      <div className="w-full absolute bottom-5 flex justify-center">
        <div>
          <img src="/ohhouseLogo.svg" className="w-[200px]" />
          <div className="flex justify-around w-full ">
            <TabButton
              onClick={() => {
                console.log('111');
              }}
            >
              WORKE
            </TabButton>
            <TabButton>SHOP</TabButton>
            <TabButton>SPACE</TabButton>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default OhLayout;
