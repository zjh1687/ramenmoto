import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`w-full h-[100vh] flex justify-center items-center`}
  .bg {
    ${tw`w-d20 h-d20 object-cover bg-bittersweet aspect-square`}
    mask: url('/ramen-soup-svgrepo-com.svg')
      no-repeat center;
  }
`;

function Home() {
  return (
    <Wrapper>
      <div className="bg" />
    </Wrapper>
  );
}

export default Home;
