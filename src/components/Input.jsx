const inputCustom = {
  height: "35px",
  width: "100%",
  boxSizing: "border-box",
  marginBottom: "15px",
};

const Input = ({ type, placeholder, clickAddInputHandler }) => {
  return (
    <input
      type={type}
      style={inputCustom}
      placeholder={placeholder}
      onChange={clickAddInputHandler}
    ></input>
  );
};

export default Input;
