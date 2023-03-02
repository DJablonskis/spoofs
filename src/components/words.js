export default function words({ spoof, symbols, total }) {

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

    return <div className="wordsContainer"><p>Total posible combinations: {total}</p>{generateSpoofs(spoof).map(w => <span key={w}>{w}</span>)}</div>
}