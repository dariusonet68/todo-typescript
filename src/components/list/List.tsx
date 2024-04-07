import { useState } from 'react';
import { ListItem } from './ListItem';

export interface ListItemData {
    text: string;
}

interface Props {
    data: ListItemData[]
}

export function List ({data}:Props) {
    const [_data,setData]=useState<ListItemData[]>(data)
    function handleOnComplete() {

    }

    function handleOnDiscard() {
        
        setData([])
    }
    return (
        <div>
            {
                _data.map((listItem)=>{

                    return <ListItem onCompleted={handleOnComplete} onDiscard={handleOnDiscard} text={listItem.text} />
                })
            }
            
        </div>

    )
}