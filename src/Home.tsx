import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  /* ${tw`flex w-full overflow-hidden h-[100dvh] flex-col items-center justify-center`} */
  img {
    mask: url(https://assets.codepen.io/1101822/circles-mask-whole.svg)
      no-repeat center;

    max-width: 100%;
    display: block;
    aspect-ratio: 1;
    object-fit: cover;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    padding: 3vw;
    background-color: #0c0d20;
    display: grid;
    place-content: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 30ch), 1fr));
    gap: 5vmax;
    width: min(80ch, 100%);
    margin-inline: auto;
  }
`;
// const Lower = styled.article`
//   ${tw`w-full h-full flex justify-center items-center bg-light-coral`}
//   ${tw`absolute top-0 bottom-0 z-10`}
// `;
// const Upper = styled.article<{ isUpper?: boolean }>`
//   ${tw`w-full h-full flex justify-center items-center bg-green`}
//   ${tw`absolute top-0 bottom-0 z-10`}
//   ${({ isUpper }) =>
//     isUpper && `animation: ${maskplay} 1.4s steps(22) forwards;`}

//   -webkit-mask: url('/mask1.png');
//   -webkit-mask-size: 2300% 100%;
//   -webkit-mask-position: 0% 0%;
// `;

function Home() {
  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1652794121425-3994156518ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU0NzM1ODk&ixlib=rb-1.2.1&q=80"
        alt=""
      />

      <img
        src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU0NzQ5OTQ&ixlib=rb-1.2.1&q=80"
        alt=""
      />

      <img
        src="https://images.unsplash.com/photo-1475359524104-d101d02a042b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU0NzQ4ODY&ixlib=rb-1.2.1&q=80"
        alt=""
      />

      <img
        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU0NzUxODA&ixlib=rb-1.2.1&q=80"
        alt=""
      />
    </Wrapper>
  );
}

export default Home;
