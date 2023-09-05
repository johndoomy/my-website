export default function Button({ clickFunction, children, color, hoverColor }) {
  return (
    <button
      className={`rounded-full ${color} ${hoverColor} px-6 py-2 shadow-xl`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
}
