const formbarButton = {
  backgroundColor: "beige",
  border: "none",
  borderRadius: "10px",
  color: "black",
  fontWeight: "700",
  height: "40px",
  width: "140px",
};

const Button = ({ clickAddButtonHandler, children }) => {
  return (
    <button style={formbarButton} onClick={clickAddButtonHandler}>
      {children}
    </button>
  );
};

export default Button;
