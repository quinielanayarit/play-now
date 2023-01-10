const Table = ({ games, onToggle, note }) => {

  let mainGames = games.filter((game) => game.type === undefined);
  let extraGames = games.filter((game) => game.type === "extra");

  return (
    <div className="poolTable">
      <table className="" style={{ width: "100%" }} align="center" border="1">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>L</th>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "25%" }}></th>
            <th style={{ width: "10%" }}>E</th>
            <th style={{ width: "25%" }}></th>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "10%" }}>V</th>
          </tr>
        </thead>
        <tbody>
          {mainGames.map((val, key) => {
            return (
              <tr key={key} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  <div
                    className={  `choice-field ${val.localValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    // style={{ backgroundColor: "red", height: "100%" }}
                    onClick={(e) => onToggle(val.id, "L")}
                  ></div>
                </td>
                <td style={{ textAlign: "left" }} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>
                  <img src={ `images/${val.localTeamIcon } `} alt="" width={"45px"} />
                  {/* {val.localTeamIcon}  */}
                </td>
                <td style={{ fontWeight:"bold", textTransform:"uppercase" }}
                className={ `${val.type === "extra" ? 'extra-game' : ''}` }>{val.localTeamName} </td>
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  {val.drawValue}
                  <div
                    className={  `choice-field ${val.drawValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    onClick={(e) => onToggle(val.id, "E")}
                  ></div>
                </td>
                <td style={{ fontWeight:"bold", textTransform:"uppercase" }} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>{val.visitingTeamName} </td>
                <td style={{ textAlign: "right" }} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>
                  <img src={ `images/${val.visitingTeamIcon}`} alt="" width={"45px"} />
                  {/* {val.visitingTeamIcon}  */}
                </td>
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  <div
                    className={  `choice-field ${val.visitingValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    onClick={(e) => onToggle(val.id, "V")}
                  ></div>
                </td>
              </tr>
            )
          })}

          { extraGames.length > 0 ?
             <tr className="extra-game">
                <td colSpan={7}>
                  <span className=" note">
                    {note}
                  </span>
                </td>
              </tr>
              : ''
            }

          {extraGames.map((val, key) => {
            return <tr key={key} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  <div
                    className={  `choice-field ${val.localValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    // style={{ backgroundColor: "red", height: "100%" }}
                    onClick={(e) => onToggle(val.id, "L")}
                  ></div>
                </td>
                <td style={{ textAlign: "left" }} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>
                  <img src={ `images/${val.localTeamIcon } `} alt="" width={"45px"} />
                  {/* {val.localTeamIcon}  */}
                </td>
                <td style={{ fontWeight:"bold", textTransform:"uppercase" }}
                className={ `${val.type === "extra" ? 'extra-game' : ''}` }>{val.localTeamName} </td>
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  {val.drawValue}
                  <div
                    className={  `choice-field ${val.drawValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    onClick={(e) => onToggle(val.id, "E")}
                  ></div>
                </td>
                <td style={{ fontWeight:"bold", textTransform:"uppercase" }} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>{val.visitingTeamName} </td>
                <td style={{ textAlign: "right" }} className={ `${val.type === "extra" ? 'extra-game' : ''}` }>
                  <img src={ `images/${val.visitingTeamIcon}`} alt="" width={"45px"} />
                  {/* {val.visitingTeamIcon}  */}
                </td>
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  <div
                    className={  `choice-field ${val.visitingValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    onClick={(e) => onToggle(val.id, "V")}
                  ></div>
                </td>
              </tr>
          })}


        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>
              <div className="container note">
              <span>
                <b>NOTA:</b> Partidos  <span style={{ color: "red", fontWeight:"bold" }}> de este color</span> seran considerados en caso de cancelacion de partidos o criterio de desempate
              </span>
            </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
