export interface ListItem {
    id?:string,
    text:string,
    icon?: Array<string>,
    iconOpen?: Array<string>,
    closed?: boolean,
    checkBox?: boolean,
    items?: Array<ListItem> | null,
    button?: {
        add?: boolean,
        edit?: boolean,
        delete?: boolean
    }
}

export interface Options {
    element: string,
    class?: Array<string>,
    header?: string | null,
    headerClass?: Array<string>,
    editable?: boolean,
    items: Array<ListItem>,
    listClass?: Array<string>
    subListClass?: Array<string>,
    listSubClass?: Array<string>,
    listSubArrowClass?: Array<string>,
    checkBoxClass?: Array<string>,
    itemClass?: Array<string>,
    button?: {
        add?: boolean,
        edit?: boolean,
        delete?: boolean
    },
    buttons?: {
        class?: Array<string>,
        green?: Array<string>,
        red?: Array<string>,
        blue?: Array<string>,
        yellow?: Array<string>,
        addIcon?: Array<string>,
        editIcon?: Array<string>,
        deleteIcon?: Array<string>
    },
    animate?: boolean,
    animateSpeed?: number
}
