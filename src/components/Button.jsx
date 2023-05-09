const formbarButton = {
  border_color: "#769fcd",
  color: "white",
  display: "inline-block",
  padding: "6px 12px",
  font_size: "14px",
  font_weight: "400",
  cursor: "pointer",
  float: "right",
  background: "#769fcd",
  border: "3px solid #769fcd",
  borderRadius: "3px",
};

const Button = ({ clickAddButtonHandler, children }) => {
  return (
    <button style={formbarButton} onClick={clickAddButtonHandler}>
      {children}
    </button>
  );
};

export default Button;
