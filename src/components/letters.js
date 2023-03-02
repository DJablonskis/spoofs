import Letter from "./letter"
export default ({ letters, selectedLetter, changeSelectedLetter, word }) => {

    let keys = Object.keys(letters)
    return (
        <div className="lettersContainer">
            {keys.map(d => word.includes(d) && <Letter word={word} key={d} using={letters[d].filter(l => l.used).length} total={letters[d].length} changeSelectedLetter={changeSelectedLetter} index={d} selectedLetter={selectedLetter} onClick={() => changeSelectedLetter(d)} />)}
        </div>)
}