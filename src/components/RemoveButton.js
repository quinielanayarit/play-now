import { FaTrashAlt } from "react-icons/fa";

const RemoveButton = ({ color, title, onClick, onShow, pool }) => {
const handleClick = (e) => {
  e.preventDefault();

  onClick()

  let obj = e.target;
  let txt = obj.innerHTML;
  let ch = obj.childNodes

  setTimeout(()=>{
    obj.innerHTML = txt
    ch[1].classList.remove('animation-btn')
    ch[1].classList.remove('bounce-btn')
    obj.classList.remove('animation-btn')
  }, 500);
  ch[1].classList.add('animation-btn')
  ch[1].classList.add('bounce-btn')
  obj.classList.add('animation-btn')
}
  return (
    <button
      onClick={handleClick }
      // style={{ backgroundColor: color, color:"white", fontSize:"larger" , textAlign:"center", verticalAlign:"middle", display:"inline-block" }}
      className={ "btn"}
      id="clean-btn"
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
