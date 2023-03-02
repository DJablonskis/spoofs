import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { MdContentCopy } from 'react-icons/md'

export default function Words({ spoof, symbols, total }) {

    const [copied, setCopied] = useState("")

    function generateSpoofs(word) {
        let versions = []

        if (word.length > 0) replaceLetter(word, versions)

        return versions
    }


    function replaceLetter(word, list, position = 0) {

        if (word.length > 0 && position >= word.length) {

            return list.push(typeof (word) === "string" ? word : word.join(""))
        }

        if (!symbols[word[position]]) return replaceLetter(word, list, position + 1)

        symbols[word[position]].filter(element => element.used).forEach(element => {
            let w = [...word]
            w[position] = element.l
            return replaceLetter(w, list, position + 1)
        });

    }

    return <div>
        <h3> {total} posible combination{total === 1 ? "" : "s"}:</h3>
        <div className="wordsContainer">

            {
                generateSpoofs(spoof).map(w => (
                    <span key={w} className="word">
                        {w} <CopyToClipboard text={w} onCopy={() => setCopied(w)} ><MdContentCopy style={{ color: w === copied ? "red" : "#ffffff" }} /></CopyToClipboard>
                    </span>)
                )
            }
        </div>
    </div>

}