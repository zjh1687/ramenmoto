import styled from 'styled-components';

const PinkBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <PinkBackground>
      <img className="w-full h-full" src="/OHlogo.svg" alt="logo" />
    </PinkBackground>
  );
}

export default About;
