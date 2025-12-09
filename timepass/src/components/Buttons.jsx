export default function Buttons({ option, sO, sL }) {
  return (
    <button
      onClick={() => sO(option)}
      className={`border-2 border-black rounded-lg px-2 transition-all duration-300
        ${sL === option ? "bg-yellow-300 border-4 border-white"  : "bg-gray-200"}
        hover:bg-yellow-300`}
    >
      {option}
    </button>
  );
}
