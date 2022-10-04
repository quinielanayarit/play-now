import { FaTimes } from "react-icons/fa"

const CompletedPoolRow = ({pool, onDelete}) => {
  let str = "";
  if(pool.count>1){
    str = ` ${pool.poolStr} - (${pool.count})`;
  } else {
    str = ` ${pool.poolStr}`
  }
  return (
    <div className='task reminder'>
      <h3>
        {str}
        <FaTimes
          size={30}
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(pool.id)}
          />
      </h3>
      <p className="" style={{ fontSize:"15px" }}> 
        {pool.playerName}
        {/* - id: {pool.id} */}
      </p>
    </div>
  )
}

export default CompletedPoolRow