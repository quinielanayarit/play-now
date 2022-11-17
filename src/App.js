import { useState, useEffect } from "react";
import Table from "./components/Table";
import CurrentPool from "./components/CurrentPool";
import CompletedPoolsTable from "./components/CompletedPoolsTable";
import SectionButtons from "./components/SectionButtons";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";

const App = (props) => {
  const mainTitle = "QUINIELA NAYARIT";
  const subTitle = "MUNDIAL 1.1"
  const noticeCloseDate = "Cierre: Sábado 19 de Noviembre 19:30 HRS"

  document.title = mainTitle + ' - ' + subTitle + ' ⚽';

  const price = 20;
  // const doubleTriple = true;
  // let countDoubleTriple = 1;

  const whatsURL = "https://api.whatsapp.com/send/?";
  const phoneNumber = "5213414392552";
  const UNSELECTED_SIGN = "*";
  const data = [
    {
      id: 1,
      localValue: false,
      localTeamIcon: "qat.png",
      localTeamName: "qatar",
      drawValue: false,
      visitingTeamIcon: "ecu.png",
      visitingTeamName: "ecuador",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
      {
      id: 2,
      localValue: false,
      localTeamIcon: "usa.png",
      localTeamName: "estados unidos",
      drawValue: false,
      visitingTeamIcon: "wal.png",
      visitingTeamName: "gales",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
        {
      id: 3,
      localValue: false,
      localTeamIcon: "arg.png",
      localTeamName: "argentina",
      drawValue: false,
      visitingTeamIcon: "ksa.png",
      visitingTeamName: "arabia saudita",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
    {
      id: 4,
      localValue: false,
      localTeamIcon: "den.png",
      localTeamName: "dinamarca",
      drawValue: false,
      visitingTeamIcon: "tun.png",
      visitingTeamName: "túnez",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
    {
      id: 5,
      localValue: false,
      localTeamIcon: "mex.png",
      localTeamName: "méxico",
      drawValue: false,
      visitingTeamIcon: "pol.png",
      visitingTeamName: "polonia",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
    {
      id: 6,
      localValue: false,
      localTeamIcon: "fra.png",
      localTeamName: "francia",
      drawValue: false,
      visitingTeamIcon: "aus.png",
      visitingTeamName: "australia",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
        {
      id: 7,
      localValue: false,
      localTeamIcon: "ger.png",
      localTeamName: "alemania",
      drawValue: false,
      visitingTeamIcon: "jpn.png",
      visitingTeamName: "japón",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
    {
      id: 8,
      localValue: false,
      localTeamIcon: "esp.png",
      localTeamName: "España",
      drawValue: false,
      visitingTeamIcon: "crc.png",
      visitingTeamName: "costa rica",
      visitingValue: false,
      choice: UNSELECTED_SIGN,
    },
    {
      id: 9,
      localValue: false,
      localTeamIcon: "bel.png",
      localTeamName: "belgica",
      drawValue: false,
      visitingTeamIcon: "can.png",
      visitingTeamName: "canadá",
      visitingValue: false,
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
  // const [globalCount, setGlobalCount] = useState(0);
  const [countDoubleTriple, setCountDoubleTriple] = useState(0);
  const [doubleTriple, setDoubleTriple] = useState(false);

  // ToggleChoice
  const toggleChoice = (id, type) => {
    switch (type) {
      case "L":
        setGame(
          games.map((game) =>
            game.id === id && !doubleTriple
              ? ((game.localValue = !game.localValue),
                (game.choice = (game.localValue) ? type : UNSELECTED_SIGN),
                (game.drawValue = false),
                (game.visitingValue = false),
                { ...game, choice: (game.localValue) ? type : UNSELECTED_SIGN })
              : game.id === id && doubleTriple
              ? ((game.localValue = !game.localValue),
                (game.choice = getChoices(game)),
                { ...game, choice: getChoices(game) })
              : game
          )
        );
        break;
      case "E":
        setGame(
          games.map((game) =>
            game.id === id && !doubleTriple
              ? ((game.drawValue = !game.drawValue),
                (game.choice = (game.drawValue) ? type : UNSELECTED_SIGN),
                (game.localValue = false),
                (game.visitingValue = false),
                { ...game, choice: (game.drawValue) ? type : UNSELECTED_SIGN })
              : game.id === id && doubleTriple
              ? ((game.drawValue = !game.drawValue),
                (game.choice = getChoices(game)),
                { ...game, choice: getChoices(game) })
              : game
          )
        );
        break;
      case "V":
        setGame(
          games.map((game) =>
            game.id === id && !doubleTriple
              ? ((game.visitingValue = !game.visitingValue),
                (game.choice = (game.visitingValue) ? type : UNSELECTED_SIGN),
                (game.drawValue = false),
                (game.localValue = false),
                { ...game, choice: (game.visitingValue) ? type : UNSELECTED_SIGN })
              : game.id === id && doubleTriple
              ? ((game.visitingValue = !game.visitingValue),
                (game.choice = getChoices(game)),
                { ...game, choice: getChoices(game) })
              : game
          )
        );
        break;

      default:
        break;
    }
    
    // Update the selection string with the the selected choice
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
    // setGame(
    //   games.map((game) =>
    //     game.id === id &&
    //     !game.localValue &&
    //     !game.drawValue &&
    //     !game.visitingValue
    //       ? { ...game, choice: UNSELECTED_SIGN }
    //       : game
    //   )
    // );

    calculateDoubleTriple();
  };
  

  const calculateDoubleTriple = () => {
    let tmp = 1;
    games.map((game) => {
      tmp *= game.choice.length;
      setCountDoubleTriple(tmp);
      // console.log("choice_lenght: " + game.choice.length);
      return tmp;
    });
    // console.log("COUNT: " + countDoubleTriple);
  };

  const getChoices = (game) => {
    let doubleTripleTmpValue = "";
    if (game.localValue) {
      doubleTripleTmpValue += "L";
    }
    if (game.drawValue) {
      doubleTripleTmpValue += "E";
    }
    if (game.visitingValue) {
      doubleTripleTmpValue += "V";
    }
    if (!game.localValue && !game.drawValue && !game.visitingValue)
      doubleTripleTmpValue = UNSELECTED_SIGN;
    return doubleTripleTmpValue;
  };

  const getCompletedPools = () => {
    // return completedPools.length;
    return completedPools.reduce((psum, pool) => psum + pool.count, 0);
  };

  // Add Pool
  const addPool = (pool) => {
    
    // setTimeout(()=> {
      // console.log("DOUBLE_TRIPLE: " + countDoubleTriple);
    // },2000);

    if (!playerName || playerName === "") {
      // alert("Es necesario ingresar un nombre");
      let p = {b:false, data: 'Nombre requerido'};
      return new Promise((resolve, reject) => {
        reject(p)
      })
    } else if (pool.includes(UNSELECTED_SIGN)) {
      // alert("Es necesario llenar todos los partidos");
      let p =  {b:false, data: 'Llenar todos los partidos'};
      return new Promise((resolve, reject) => {
        reject(p)
      })
    }
    const id = Math.floor(Math.random() * 10000) + 1;
    const txtPool = pool.join("|");
    const newPool = {
      id: id,
      playerName: playerName,
      poolStr: txtPool,
      count: countDoubleTriple,
    };

    cleanFields();
    setCompletedPools([...completedPools, newPool]);
    return new Promise((resolve, reject) => {
      resolve({b:true, data: 'Quiniela agregada correctamente!'})
    });
    // setCountDoubleTriple(1)
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
    setCountDoubleTriple(0);
    setDoubleTriple(false);
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
    setCountDoubleTriple(0);
    // setDoubleTriple(false);
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
    if (completedPools.length === 0) {
      return new Promise((resolve, reject) => {
      //  console.log("Zero pools");
        reject({b:false, data: "No tiene quinielas para enviar"});
      });
    }
    var poolsMsg = '';
    completedPools.map(
      (p) => {
        (poolsMsg += p.poolStr.replaceAll('|', '++') + ' ' + p.playerName);
        (poolsMsg += doubleTriple && p.count > 1 ? '  (' + p.count + ')' : '');
        (poolsMsg += '\r\n');
        return poolsMsg;
      }
    );
    poolsMsg += 'Total: $' + price * getCompletedPools() + '\r\n';
    const urlEncodedMsg =
      whatsURL +
      encodeURI(
        "phone=" +
          phoneNumber +
          "&text=" +
          poolsMsg +
          "&type=phone_number&app_absent=0"
      );

    return new Promise((resolve, reject) => {
      resolve({b: true, data: urlEncodedMsg});
    });

    // console.log(urlEncodedMsg);
    // window.location.href = urlEncodedMsg;
    // window.location.replace(urlEncodedMsg);
  };

  const updateDoubleTriple = (value) => {
    // console.log("UPDATE DOUBLES_TRIPLES: " + value);
    setDoubleTriple(value);
    if(!value) 
      cleanFields();
  }

  useEffect(() => {
    setPoolSelection(poolSelection);
    setPlayerGame(playerName);
    setShowAddButton(!poolSelection.includes(UNSELECTED_SIGN));
    setCompletedPools(completedPools);
    setDoubleTriple(doubleTriple);
  }, [poolSelection, playerName, completedPools, countDoubleTriple, doubleTriple]);

  return (
    <div className="wrapper">
      <Header title={mainTitle} subtitle={subTitle} notice={noticeCloseDate} />
      <Table onToggle={toggleChoice} games={games} />
      <CurrentPool poolText={poolSelection} count={countDoubleTriple} />
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
      <div
        className="container totales">
        <b style={{  fontSize:"larger" }}>Total: $ {price * getCompletedPools()}</b><br />
        <span style={{ }}>{ getCompletedPools() } Quiniela(s)</span>
          <ToggleButton label="Dobles / Triples " onChanged={ updateDoubleTriple }
          onChangeSet={doubleTriple} />
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
