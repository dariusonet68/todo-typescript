interface Props{
    text:string;
    onCompleted: () => void;
    onDiscard: () => void


}

export function ListItem ({text, onCompleted, onDiscard}:Props) {
    return (<div>
            <input type="text" value={text}readOnly/>
            <button onClick={onCompleted}>+</button>
            <button onClick={onDiscard}>x</button>
        </div>)

}