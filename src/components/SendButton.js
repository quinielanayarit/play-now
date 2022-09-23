import { FaWhatsapp } from "react-icons/fa";

const SendButton = ({ color, title, onSend, onShow, pool, completedPools }) => {
  return (
    <button
      onClick={()=>onSend()}
      style={{ backgroundColor: color, color:"white", fontSize:"larger" , textAlign:"center", verticalAlign:"middle" }}
      className={ "btn"} 
      title="Enviar quinielas"
    >
      {`${title} (${completedPools})`}
      <FaWhatsapp
          style={{ color: "white", cursor: "pointer", marginLeft:"10px" }}
          size={25}
        />
    </button>
  );
};

export default SendButton;
