import "./index.css";

function Button({ title, variant = "contained", onClick }: ButtonProps) {
  let className = 'btn';

  if(variant === "outlined") className += " btn-outlined";
  if(variant === "contained") className += " btn-contained";
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
}

export default Button;

export interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  onClick?: () => void;
}
