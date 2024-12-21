function Button({ title, variant = "contained", onClick }: ButtonProps) {
  let styles: any = {
    padding: "5px 10px",
    cursor: "pointer",
  };

  if (variant === "outlined") {
    styles = {
      ...styles,
      backgroundColor: "transparent",
      border: "1px solid black",
    };
  }

  if (variant === "contained") {
    styles = {
      ...styles,
      backgroundColor: "black",
      color: "white",
    };
  }
  return <button onClick={onClick} style={styles}>{title}</button>;
}

export default Button;

export interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  onClick?: () => void;
}
