export default function Input({ onChange, value }) {
    return <div className="wordInput">
        <input name="word" placeholder="type here..." value={value} onChange={onChange}></input>
    </div>
}