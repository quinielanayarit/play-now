const Table = ({ games, onToggle }) => {

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
          {games.map((val, key) => {
            return (
              <tr key={key} >
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  <div
                    className={  `choice-field ${val.localValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    // style={{ backgroundColor: "red", height: "100%" }}
                    onClick={(e) => onToggle(val.id, "L")}
                  ></div>
                </td>
                <td style={{ textAlign: "left" }}>
                  <img src={ `images/${val.localTeamIcon } `} alt="" width={"45px"} />
                  {/* {val.localTeamIcon}  */}
                </td>
                <td style={{ fontWeight:"bold", textTransform:"uppercase" }}>{val.localTeamName} </td>
                <td style={{ height: "inherit", width: "100px", display: 'contents' }}>
                  {val.drawValue}
                  <div
                    className={  `choice-field ${val.drawValue ? 'selected' : ''}` } onDoubleClick={() => onToggle(val.id)}
                    onClick={(e) => onToggle(val.id, "E")}
                  ></div>
                </td>
                <td style={{ fontWeight:"bold", textTransform:"uppercase" }}>{val.visitingTeamName} </td>
                <td style={{ textAlign: "right" }}>
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
