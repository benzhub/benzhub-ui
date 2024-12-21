function Button({ title, variant = "contained" }: ButtonProps) {
    let styles: any = {
      padding: "5px 10px",
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
    return <button style={styles}>{title}</button>;
}
  
export default Button;
  
export interface ButtonProps {
    title: string;
    variant?: "outlined" | "contained";
}
  