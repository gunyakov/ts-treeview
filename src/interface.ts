export interface ListItem {
    id:string,
    text:string,
    icon: string,
    closed: boolean,
    items: Array<ListItem> | null
}

export interface Options {
    element: string,
    class: Array<string>,
    header: string | null,
    editable: boolean,
    items: Array<ListItem>
}
