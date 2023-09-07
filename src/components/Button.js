export default function Button({ clickFunction, children, color, hoverColor }) {
  return (
    <button
      className={` ${color} ${hoverColor} px-6 py-2 shadow-xl`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
}
