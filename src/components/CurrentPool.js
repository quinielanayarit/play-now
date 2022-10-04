// import

const CurrentPool = ({poolText, count}) => {
  return (
    <div className="container poolSelection">
      <h1>
        {poolText.map((i) => ' ' + i + ' ')}
        {/* {poolText} */}
      </h1>
        <span>{ poolText.every((v) => v === '*') ? 0 : count} Quiniela(s)</span>
    </div>
  )
}

export default CurrentPool