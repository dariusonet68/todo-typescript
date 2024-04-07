import { ListItem } from "./ListItem";

export interface ListItemData {
  text: string;
  id: string;
}

interface Props {
  data: ListItemData[];
  onDiscard: (id: string) => void;
}

export function List({ data, onDiscard }: Props) {
  function handleOnComplete() {}

  return (
    <div>
      {data.map((listItem) => {
        return (
          <ListItem
            onCompleted={handleOnComplete}
            onDiscard={onDiscard}
            text={listItem.text}
            id={listItem.id}
          />
        );
      })}
    </div>
  );
}
