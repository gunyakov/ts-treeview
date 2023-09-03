# ts-treeview

TreeView List written with TypeScript for easy integration into projects. Based on Bootstrap styles, but code is very simple and you can change everything by ourselves.

No dependencies, vanila JS

I made this tree view becouse i cant find 'easy to use' treeview for TS and my NodeJs project [Maptorium](https://github.com/gunyakov/maptorium-server)

[Demo](https://gunyakov.github.io/ts-treeview/demo/)

## Instalation

In your html file, add `ts-treeview.css` and `ts-treeview.js` from the folder `dist`.

#### For TS users 

Install ts-treeview by npm manager

```
npm install ts-treeview
```
After include ts-treeview to your project

```js
import TreeView from "ts-treeview";
```
## Usage

#### HTML prepared list

```html
<div id="treeview">
    <h6 class="pt-3 pl-3">Folders</h6>
    <hr>
    <ul class="mb-1 pl-3 pb-2">
        <li>
            <a class="closed">
                <i class="fas fa-angle-right rotate"></i>
                <span><i class="far fa-envelope-open ic-w mx-1"></i>Mail</span>
            </a>
            <ul class="nested">
                <li><i class="far fa-bell ic-w mr-1"></i>Offers</li>
                <li><i class="far fa-address-book ic-w mr-1"></i>Contacts</li>
                <li>
                    <a class="closed">
                      <i class="fas fa-angle-right rotate"></i>
                      <span><i class="far fa-calendar-alt ic-w mx-1"></i>Calendar</span>
                    </a>
                    <ul class="nested">
                      <li><i class="far fa-clock ic-w mr-1"></i>Deadlines</li>
                      <li><i class="fas fa-users ic-w mr-1"></i>Meetings</li>
                      <li><i class="fas fa-basketball-ball ic-w mr-1"></i>Workouts</li>
                      <li><i class="fas fa-mug-hot ic-w mr-1"></i>Events</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```
After init TreeList plugin. 
```js
let treeview = new TreeList({
    element: "treeview"
});
```
This code parses HTML and binds events to the list.

#### JSON Data

```js
let listData = [
    {
        text: "Mail",
        icon: ["far", "fa-envelope-open"],
        id: "someidstring",
        items: [
            {
                text: "Offers",
                icon: ["far", "fa-bell"]
            },
            {
                text: "Contacts",
                icon: ["far", "fa-address-book"]
            },
            {
                text: "Calendar",
                icon: ["far", "fa-calendar-alt"],
                items: [
                    {
                        text: "Deadlines",
                        icon: ["far", "fa-clock"]
                    },
                    {
                        text: "Meetings",
                        icon: ["fas", "fa-users"]
                    },
                    {
                        text: "Workouts",
                        icon: ["fas", "fa-basketball-ball"]
                    },
                    {
                        text: "Events",
                        icon: ["fas", "fa-mug-hot"]
                    }
                ]
            }
        ]
    }
]
```
Prepare HTML container 
```html
<div id="treeview"></div>
```
After init TreeList plugin. 
```js
let treeview = new TreeList({
    element: "treeview",
    items: listData
});
```
This code parses JSON, does DOM for list and binds events.

## Options

#### Class

```js
//HTML container ID where list will be attached
element: string,
//Change default class for container
class: Array<string>,
//If null, no header will be created
header: string | null,
//Change default class for header 
headerClass: Array<string>,
//If true, dblclick event on item will replace item with text field. (not implemented)
editable: boolean,
//Array with list items
items: Array<ListItem>,
//Replace standart class for item there
listClass: Array<string>,
//Replace standart class for sub list
subListClass: Array<string>,
//Replace standart class for item what not contain sub items
itemClass: Array<string>
//If item contain sub items, item will be created with this class instead of itemClass
listSubClass: Array<string>,
//If litem contain sub items, arrow with class will be shown
listSubArrowClass: Array<string>,
//Replace standart check box class
checkBoxClass: Array<string>,
```
#### Item
```js
/*
* Custom ID for item. If ID is empty, it will be inserted in the next step:
* For top level ID will be 0, 1, 2, 3.
* For child items ID will be 0.0, 0.1, ..., 3.0, 3.1
* For child items ID will be 0.0.0, 0.0.1, ..., 3.0.0, 3.0.1
* And so on
*/
id:string,
//Item text
text:string,
//Item icon class
icon: Array<string>,
//Reserved. Not implemented.
closed: boolean,
//If item must be together with check box
checkBox: boolean,
//List of sub items
items: Array<ListItem> | null
```

## Methods

| Method | Returns | Description |
|-|-|-|
|on(<[EventType](#eventtype)>, (ID:string))|void| Register the recall to be triggered. The item ID is returned where the event occurred.|
|update(<[Item](#item)>)|bollean|Update items with new json data. Replace/delete all sub-items if not specified in json. Returns `true` if item was found with ID, false - if not.|
|remove(<ID:string>)| boolean | Remove item from DOM. Also remove all sub-items. Returns `true` if item was found, `false` - if not.|

## EventType

Available events for the list. If an item has sub-items, that item is recognized as a folder.

```ts
edit = "edit",
itemclick = "item.click",
itemdblclick = "item.dblclick",
folderclick = "folder.click",
folderdblclick = "folder.dblclick",
itemcheckbox = "item.checkbox",
foldercheckbox = "folder.checkbox"
```

## Example

```js
//init Treelist and parse JSON Data
let treeview = new TreeList({
    element: "treeview",
    items: listData
});
//Fired when item is clicked
treeview.on("item.click", (elID) => {
    console.log('Element click', elID);
});
//Fired when item is dbl clicked.
treeview.on("item.dblclick", (elID) => {
    console.log("Element dblclick", elID);
})
//Fired when item what have sub items is clicked.
treeview.on("folder.click", (elID) => {
    console.log('Folder click', elID);
});
//Fired when item what have sub items is dbl clicked.
treeview.on("folder.dblclick", (elID) => {
    console.log("Folder dblclick", elID);
})
//Fired when checkbox for item is clicked
treeview.on("item.checkbox", (elID, checked) => {
    console.log('Item checkbox', elID, checked);
});
//Fired when checkbox for folder is clicked.
treeview.on("folder.checkbox", (elID, checked) => {
    console.log("Folder checkbox", elID, checked);
})
document.getElementById("itemEnable").addEventListener("click", () => {
    //Show checkboxes for items only
    treeview.checkbox(true, "item");
});

document.getElementById("folderEnable").addEventListener("click", () => {
    //Show checkboxes for folder only
    treeview.checkbox(true, "folder");
});

document.getElementById("bothEnable").addEventListener("click", () => {
    //Show checkboxes for folder and item
    treeview.checkbox(true, "both");
});

document.getElementById("bothDisable").addEventListener("click", () => {
    //Hide checkboxes
    treeview.checkbox(false);
});
```