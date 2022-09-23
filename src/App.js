import { useState, useEffect } from "react";
import Table from "./components/Table";
import CurrentPool from "./components/CurrentPool";
import CompletedPoolsTable from "./components/CompletedPoolsTable";
import SectionButtons from "./components/SectionButtons";
import Header from "./components/Header";

const App = (props) => {
  const price = 30;
  const whatsURL = "https://api.whatsapp.com/send/?";
  const phoneNumber = "5213414392552";
  const UNSELECTED_SIGN = "*";
  const data = [
    {
      id: 1,
      localValue: false,
      localTeamIcon: "puebla.jpeg",
      localTeamName: "Puebla",
      drawValue: false,
      visitingTeamIcon: "america.jpeg",
      visitingTeamName: "America",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
    {
      id: 2,
      localValue: "",
      localTeamIcon: "juarez.jpeg",
      localTeamName: "Juarez",
      drawValue: "",
      visitingTeamIcon: "pumas.jpeg",
      visitingTeamName: "Pumas",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },
    {
      id: 3,
      localValue: "",
      localTeamIcon: "inter.jpeg",
      localTeamName: "Inter",
      drawValue: "",
      visitingTeamIcon: "roma.jpeg",
      visitingTeamName: "Roma",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },
    {
      id: 4,
      localValue: "",
      localTeamIcon: "san-luis.jpeg",
      localTeamName: "San Luis",
      drawValue: "",
      visitingTeamIcon: "tigres.jpeg",
      visitingTeamName: "Tigres",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },
    {
      id: 5,
      localValue: "",
      localTeamIcon: "monterrey.jpeg",
      localTeamName: "Monterrey",
      drawValue: "",
      visitingTeamIcon: "pachuca.jpeg",
      visitingTeamName: "Pachuca",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },
    {
      id: 6,
      localValue: "",
      localTeamIcon: "cruz-azul.jpeg",
      localTeamName: "Cruz Azul",
      drawValue: "",
      visitingTeamIcon: "guadalajara.jpeg",
      visitingTeamName: "Chivas",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },
    {
      id: 7,
      localValue: "",
      localTeamIcon: "manchester-city.jpeg",
      localTeamName: "M. City",
      drawValue: "",
      visitingTeamIcon: "manchester-united.jpeg",
      visitingTeamName: "M. United",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },
    {
      id: 8,
      localValue: "",
      localTeamIcon: "santos.jpeg",
      localTeamName: "Santos",
      drawValue: "",
      visitingTeamIcon: "mazatlan.jpeg",
      visitingTeamName: "Mazatlan",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },{
      id: 9,
      localValue: "",
      localTeamIcon: "leon.jpeg",
      localTeamName: "Leon",
      drawValue: "",
      visitingTeamIcon: "tijuana.jpeg",
      visitingTeamName: "Tijuana",
      visitingValue: "",
      choice: UNSELECTED_SIGN,
    },
  ];
  const [games, setGame] = useState(data);
  const poolSize = games.length;
  const poolArray = Array(poolSize).fill(UNSELECTED_SIGN);
  const [completedPools, setCompletedPools] = useState([]);
  const [showAddButton, setShowAddButton] = useState(false);
  const [poolSelection, setPoolSelection] = useState(poolArray);
  const [playerName, setPlayerGame] = useState("");

  // ToggleChoice
  const toggleChoice = (id, type) => {
    if (type === "L") {
      setGame(
        games.map((game) =>
          game.id === id
            ? ((game.localValue = !game.localValue),
              (game.choice = type),
              (game.drawValue = false),
              (game.visitingValue = false),
              { ...game, choice: type })
            : game
        )
      );
    } else if (type === "E") {
      setGame(
        games.map((game) =>
          game.id === id
            ? ((game.drawValue = !game.drawValue),
              (game.choice = type),
              (game.localValue = false),
              (game.visitingValue = false),
              { ...game, choice: type })
            : game
        )
      );
    } else if (type === "V") {
      setGame(
        games.map((game) =>
          game.id === id
            ? ((game.visitingValue = !game.visitingValue),
              (game.choice = type),
              (game.drawValue = false),
              (game.localValue = false),
              { ...game, choice: type })
            : game
        )
      );
    }

    setGame(
      games.map((game) =>
        game.id === id &&
        !game.localValue &&
        !game.drawValue &&
        !game.visitingValue
          ? { ...game, choice: UNSELECTED_SIGN }
          : game
      )
    );

    setPoolSelection(
      games.map((game) =>
        game.id === id &&
        !game.localValue &&
        !game.drawValue &&
        !game.visitingValue
          ? (game.choice = UNSELECTED_SIGN)
          : game.choice
      )
    );
  };

  const getCompletedPools = () => {
    return completedPools.length;
  };

  // Add Pool
  const addPool = (pool) => {
    if (!playerName || playerName === "") {
      alert("Necesario ingresar un nombre");
      return;
    } else if (pool.includes(UNSELECTED_SIGN)) {
      alert("Necesario llenar todos los partidos");
      return;
    }
    const id = Math.floor(Math.random() * 10000) + 1;
    const txtPool = pool.join("|");
    const newPool = {
      id: id,
      playerName: playerName,
      poolStr: txtPool,
    };

    cleanFields();
    setCompletedPools([...completedPools, newPool]);
  };


  const updatePlayerGame = (text) => {
    setPlayerGame(text);
  };

  // Delete Pool
  const deletePool = (id) => {
    setCompletedPools(completedPools.filter((pool) => pool.id !== id));
  };

  // Clean All Fields 
  const cleanAll = () => {
    setCompletedPools([]);
    setPoolSelection(poolArray);
    setPlayerGame("");
    setGame(
      games.map((game) => ({
        ...game,
        choice: UNSELECTED_SIGN,
        localValue: false,
        drawValue: false,
        visitingValue: false,
      }))
    );
  };

  const cleanFields = () => {
    setPoolSelection(poolArray);
    setGame(
      games.map((game) => ({
        ...game,
        choice: UNSELECTED_SIGN,
        localValue: false,
        drawValue: false,
        visitingValue: false,
      }))
    );
  };

  // Send Pools, open whatsap API with pre-filled info
  const sendPools = () => {
    if(completedPools.length === 0){
      alert("No tiene quinielas para enviar");
      return;
    }
    var poolsMsg = "";
    completedPools.map(
      (p) =>
        (poolsMsg +=
          p.poolStr.replaceAll("|", "++") + "  " + p.playerName + "\r\n")
    );
    const urlEncodedMsg =
      whatsURL +
      encodeURI(
        "phone=" +
          phoneNumber +
          "&text=" +
          poolsMsg +
          "&type=phone_number&app_absent=0"
      );

    console.log(urlEncodedMsg);
    window.location.href = urlEncodedMsg;
    // window.location.replace(urlEncodedMsg);
  };

  useEffect(() => {
    setPoolSelection(poolSelection);
    setPlayerGame(playerName);
    setShowAddButton(!poolSelection.includes(UNSELECTED_SIGN));
    setCompletedPools(completedPools);
  }, [poolSelection, playerName, completedPools]);

  return (
    <div>
      <Header title="Quiniela NAYARIT" subtitle="JORNADA #17" />
      <Table onToggle={toggleChoice} games={games} />
      <CurrentPool poolText={poolSelection} />
      <SectionButtons
        addPool={addPool}
        pool={poolSelection}
        completedPools={getCompletedPools()}
        title="Agregar"
        onChangeName={updatePlayerGame}
        onShow={showAddButton}
        onClean={cleanAll}
        onSend={sendPools}
        value={playerName}
      />
      <div className="container form-control" style={{ textAlign: "right", display:"inline-flex"}}>
          <b>Total: $ {price * completedPools.length}</b>
      </div>

      {completedPools != null && completedPools.length > 0 ? (
        <CompletedPoolsTable pools={completedPools} onDelete={deletePool} />
      ) : (
        <div className="container form-control" style={{ textAlign: "center" }}>
          <p>No tiene quinielas llenadas</p>
        </div>
      )}
    </div>
  );
};

export default App;
