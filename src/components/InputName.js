import { useState } from "react";
const InputName = ({ onChangeName, value="" }) => {
  const [text, setText] = useState(value);
  
  const changeText = (text) => {
    onChangeName(text);
    setText(text);
  };
  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="Nombre participante"
        className="form-control input-name " 
        style= {{width:"inherit", height:"2em", fontSize:"large"}}
        onChange={(e) => changeText(e.target.value)}
        title="Nombre"
      />
    </>
  );
};

export default InputName;
