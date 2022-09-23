import { FaPlusCircle } from "react-icons/fa";

const AddButton = ({ color, title, onClick, onShow, pool }) => {
  return (
    <button
      onClick={()=>onClick(pool)}
      style={{ backgroundColor: color, color:"white", fontSize:"larger" , textAlign:"center", verticalAlign:"middle", display:"inline-block" }}
      className={ "btn"} 
      title="Agregar"
      // className={ "btn " + (!onShow ? 'disable' : '')} 
    >
      {title}
      <FaPlusCircle
          style={{ color: "white", cursor: "pointer", marginLeft:"10px" }}
          // onClick={() => onClick(pool)}
          size={25}
        />
    </button>
  );
};

export default AddButton;
