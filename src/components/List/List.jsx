import { Item } from "../Item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const WIDTH = 120;

export function List() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <button
        className={`cursor-pointer rounded-[5px] border border-solid border-current bg-transparent p-3 w-[${WIDTH}px] m-8 text-salmon transition-colors hover:bg-salmon hover:text-white`}
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
