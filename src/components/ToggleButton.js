

const ToggleButton = ({label, onChanged, onChangeSet}) => {

  const handleChange = (e) => {
    onChanged(e.target.checked);
  }

  return (
    <div className="" style={{ textAlign: "center"}}>
      <b className="name-double-triple">
        {label}{""}
      </b>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name="switchDoubleTriple" id="switchDoubleTriple" onChange={handleChange} checked={ onChangeSet ? 'checked' : ''}/>
        <label htmlFor="switchDoubleTriple" className="label" >
          <span className="inner" />
          <span className="switch" />
        </label>

      </div>
    </div>
  )
}

export default ToggleButton