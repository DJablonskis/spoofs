import data from "./data.js"
import { useState } from "react"
import Letters from "./components/letters"
import Symbols from "./components/symbols"
import Input from "./components/input"
import Words from "./components/words.js"

function App() {


  let [usedSymbols, setUsedSymbols] = useState(data)
  let [selectedLetter, setSelectedLetter] = useState("")
  let [word, setWord] = useState("")

  function changeSelectedLetter(letter) {
    setSelectedLetter(old => old === letter ? "" : letter)
  }

  function updateInput(e) {
    let value = e.target.value.toLowerCase()
    setWord(value);
    if (!value.includes(selectedLetter)) {
      setSelectedLetter("")
    }

  }

  function toggleSymbol(letter, symbol) {
    setUsedSymbols(old => {
      return (
        {
          ...old,
          [letter]: old[letter].map(set => set.l === symbol ? { l: symbol, used: !set.used } : set)
        })
    })
  }


  function addNumbers(tally, currentValue) {
    return tally * (usedSymbols[currentValue] ? usedSymbols[currentValue].filter(e => e.used).length : 1)
  }


  return (
    <div className="App">
      <h1>Unicode Spoofs Generator</h1>
      <p>Type in the word you want to spoof and choose aditional symbols to generate posible permutations. </p>
      <p>Only lower case symbols a-z are currently supported.</p>
      <Input
        onChange={updateInput}
        value={word}
      />
      <Letters letters={usedSymbols} word={word} selectedLetter={selectedLetter} changeSelectedLetter={changeSelectedLetter} />
      {selectedLetter && <Symbols toggle={toggleSymbol} data={usedSymbols} selectedLetter={selectedLetter} />}

      {word !== "" && <Words total={word.split("").reduce(addNumbers, 1)} spoof={word} symbols={usedSymbols} />}


    </div>
  );
}

export default App;
