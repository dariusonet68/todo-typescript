interface Props {
  onClick: (value: string) => void;
}

export function Header({ onClick }: Props) {
  function handleOnClick() {
    const input = document.getElementById("todo-input") as HTMLInputElement;
    const value = input.value;
    onClick(value);
    input.value = "";
  }

  return (
    <div>
      <input id="todo-input" type="text" />
      <button onClick={handleOnClick}>+</button>
    </div>
  );
}
