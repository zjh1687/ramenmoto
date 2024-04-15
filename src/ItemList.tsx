import styled from 'styled-components';
import tw from 'twin.macro';

const ListItem = styled.li`
  ${tw`relative w-d10 h-full mr-0.5`}
`;

const ListImg = styled.div<{ src: string }>`
  ${tw`bg-cover absolute top-0 left-0 w-full h-full`}
  ${(props) => props.src && `background-image: url(${props.src})`}
`;

function ItemList() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img className="w-[200px] h-d20" src="/orijinlogo-1.svg" />
      <h3 className="mb-d10 mt-0">ORIJIN HOUSE</h3>
      <div className="w-[800px] h-[360px] overflow-hidden">
        <ul className="w-full h-full flex list-none p-0">
          <ListItem>
            <ListImg src="/supreme1.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme2.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme3.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme4.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme5.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme6.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme7.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme8.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme9.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme10.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme11.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme12.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme13.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme14.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme15.png"></ListImg>
          </ListItem>
          <ListItem>
            <ListImg src="/supreme16.png"></ListImg>
          </ListItem>
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
