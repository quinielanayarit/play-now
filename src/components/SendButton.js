import { FaWhatsapp } from "react-icons/fa";

const SendButton = ({ color, title, onSend, onShow, pool, completedPools }) => {
  const handleClick = async (e) => {
    e.preventDefault();

    let obj = e.target;
    let txt = obj.innerHTML;
    // let btn = document.getElementById('send-btn');
    try {
      let response = await onSend();
      console.log(response);
      if (response) {
        setTimeout(() => {
          obj.innerHTML = txt;
          obj.classList.remove("animation-btn-add");
          window.location.href = response.data;
        }, 900);
        obj.classList.add("animation-btn-add");
        // btn.style.display = "none";
        // btn.classList.remove("confirm-add-icon");
      }
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        obj.innerHTML = txt;
        obj.classList.remove("animation-denied");
        alert(err.data);
      }, 700);
      obj.classList.add("animation-denied");
    }
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
      }}
      className={"btn"}
      id="send-btn"
      title="Enviar quinielas"
    >
      {`${title} (${completedPools})`}
      <FaWhatsapp
        style={{ color: "white", cursor: "pointer", marginLeft: "10px" }}
        size={25}
        id="send-btn-icon"
      />
    </button>
  );
};

export default SendButton;
