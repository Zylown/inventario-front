interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ type, onClick }: ButtonProps) {
  return (
    <button
      className="hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg"
      type={type}
      onClick={onClick}
    ></button>
  );
}
