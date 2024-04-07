interface Props {
  text: string;
  id: string;
  onCompleted: () => void;
  onDiscard: (id: string) => void;
}

export function ListItem({ text, id, onCompleted, onDiscard }: Props) {
  function handleOnDiscard() {
    onDiscard(id);
  }

  return (
    <div>
      <input type="text" id={id} value={text} readOnly />
      <button onClick={onCompleted}>+</button>
      <button onClick={handleOnDiscard}>x</button>
    </div>
  );
}
