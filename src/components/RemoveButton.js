import { FaTrashAlt } from "react-icons/fa";

const RemoveButton = ({ color, title, onClick, onShow, pool }) => {
  return (
    <button
      onClick={()=>onClick()}
      style={{ backgroundColor: color, color:"white", fontSize:"larger" , textAlign:"center", verticalAlign:"middle", display:"inline-block" }}
      className={ "btn"} 
      title="Limpiar campos"
      // className={ "btn " + (!onShow ? 'disable' : '')} 
    >
      {title}
      <FaTrashAlt
          style={{ color: "white", cursor: "pointer", marginLeft:"10px"}}
          size={25}
          // onClick={() => onClick("click")}
        />
    </button>
  );
};

export default RemoveButton;
