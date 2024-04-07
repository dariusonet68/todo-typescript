import { List, ListItemData } from "../components/list/List"


const data: ListItemData[] = [{text:'primu todo'}, {text:'primu todo'}]

export function Home (){
    return <div><List data={data}/></div>
}