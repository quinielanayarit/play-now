import { FaTimes } from "react-icons/fa"

const CompletedPoolRow = ({pool, onDelete}) => {
  return (
    <div className='task reminder'>
      <h3>
        {` ${pool.poolStr} `}  
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