export interface ListItem {
    id:string,
    text:string,
    icon: Array<string>,
    closed: boolean,
    items: Array<ListItem> | null
}

export interface Options {
    element: string,
    class: Array<string>,
    header: string | null,
    headerClass: Array<string>,
    editable: boolean,
    items: Array<ListItem>,
    listClass: Array<string>
    subListClass: Array<string>,
    listSubClass: Array<string>,
    listSubArrowClass: Array<string>,
    itemClass: Array<string>
}
