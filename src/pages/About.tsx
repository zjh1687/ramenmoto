import styled from 'styled-components';

const PinkBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <PinkBackground>
      <h1>Page Two</h1>
      <p>Welcome to the second page!</p>
    </PinkBackground>
  );
}

export default About;
