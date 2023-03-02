export default ({ index, selectedLetter, changeSelectedLetter, total, using }) => {
    return (
        <div onClick={() => changeSelectedLetter(index)} className="letterBox">
            <span style={{ color: selectedLetter === index ? "red" : "black" }}>{index} </span>
            <span className="letterDetails">{using + "/" + total}</span>
        </div>

    )
}