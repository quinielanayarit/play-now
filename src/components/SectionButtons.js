import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import SendButton from "./SendButton";
import InputName from "./InputName";

const SectionButtons = ({
  addPool,
  title,
  onShow,
  pool,
  onChangeName,
  onClean,
  onSend,
  completedPools,
  value,
}) => {
  return (
    <div
      className="container"
      style={{ padding: "1em", width: "100%", display: "grid" }}
    >
      <InputName onChangeName={onChangeName} value={value} />
      <AddButton
        onShow={onShow}
        title={title}
        pool={pool}
        color="#0A1929"
        onClick={addPool}
      />
      <RemoveButton
        onShow={onShow}
        title="Limpiar"
        pool={pool}
        color="#4f030c"
        onClick={onClean}
      />
      <SendButton
        onShow={onShow}
        title="Enviar"
        pool={pool}
        color="green"
        onSend={onSend}
        completedPools={completedPools}
      />
    </div>
  );
};

export default SectionButtons;
