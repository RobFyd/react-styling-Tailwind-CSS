import { Item } from "../Item/Item";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledListItem = styled(Item)`
  margin-bottom: 50px;
`;

const WIDTH = 120;

export function List() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <button
        className={`bg-transparent border border-solid border-current p-3 rounded-[5px] cursor-pointer w-[${WIDTH}px] text-salmon transition-colors m-8 hover:text-white hover:bg-salmon`}
        onClick={() => alert(`Number of emojis: ${emojis.length}`)}
      >
        Show emoji count
      </button>
      <ul className="flex flex-col gap-8 p-8">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </div>
  );
}
