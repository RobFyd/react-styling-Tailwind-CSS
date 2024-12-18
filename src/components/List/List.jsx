import { Item } from "../Item/Item";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledListItem = styled(Item)`
  margin-bottom: 50px;
`;

export function List() {
  return (
    <>
      <button onClick={() => alert(`Number of emojis: ${emojis.length}`)}>
        Show emoji count
      </button>
      <ul className="flex flex-col gap-8 p-8">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
