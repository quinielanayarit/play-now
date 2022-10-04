import { FaPlusCircle, FaCheckCircle } from "react-icons/fa";

const AddButton = ({ color, title, onClick, onShow, pool }) => {
  let once = true;
  const handleClick = async (e) => {
    e.preventDefault();

    if (!once) return;
    once = false;

    let obj = e.target;
    let txt = obj.innerHTML;
    let icon1 = document.getElementById("confirm-add-icon");
    let icon2 = document.getElementById("add-icon");

    try {
      let response = await onClick(pool);
      if (response) {
        setTimeout(() => {
          obj.innerHTML = txt;
          obj.classList.remove("animation-btn-add");
          icon1.style.display = "hidden";
          icon1.classList.remove("animation-btn-add-icon");
          icon2.style.display = "inline";
          icon2.classList.add("confirm-add-icon");
        }, 700);
        obj.classList.add("animation-btn-add");
        icon2.style.display = "none";
        icon2.classList.remove("confirm-add-icon");
        icon1.style.display = "inline";
        icon1.classList.add("animation-btn-add-icon");
      }
    } catch (err) {
      setTimeout(() => {
          obj.innerHTML = txt;
          obj.classList.remove("animation-denied");
          // icon1.style.display = "hidden";
          // icon1.classList.remove("animation-btn-add-icon");
          // icon2.style.display = "inline";
          // icon2.classList.add("confirm-add-icon");
          
          alert(err.data);
        }, 700);
        obj.classList.add("animation-denied");
        // icon2.style.display = "none";
        // icon2.classList.remove("confirm-add-icon");
        // icon1.style.display = "inline";
        // icon1.classList.add("animation-btn-add-icon");
    }
    once = true;
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: "white",
        fontSize: "larger",
        textAlign: "center",
        verticalAlign: "middle",
        display: "inline-block",
      }}
      className={"btn"}
      id="add-btn"
      title="Agregar"
      // className={ "btn " + (!onShow ? 'disable' : '')}
    >
      {title}
      <FaPlusCircle
        // style={{ color: "white", cursor: "pointer", marginLeft: "10px" }}
        // onClick={() => onClick(pool)}
        size={25}
        id="add-icon"
      />
      <FaCheckCircle
        // style={{ color: "green", cursor: "pointer", marginLeft: "10px", display:"none" }}
        size={25}
        // visibility='hidden'
        display="none"
        id="confirm-add-icon"
      />
    </button>
  );
};

export default AddButton;
