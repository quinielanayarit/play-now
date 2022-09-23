// import

const CurrentPool = ({poolText}) => {
  return (
    <div className="container poolSelection">
      <h1>
        {poolText.map((i) => ' ' + i + ' ')}
        {/* {poolText} */}
      </h1>
    </div>
  )
}

export default CurrentPool