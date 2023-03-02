export default ({ data, selectedLetter, toggle }) => {
    return <div className="symbolsContainer"> {data[selectedLetter].map(s => <span onClick={() => toggle(selectedLetter, s.l)} key={s.l} className={"symbol" + (s.used ? "" : " disabled")}>{s.l}</span>)} </div >
}