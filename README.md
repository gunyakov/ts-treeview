# ts-treeview

TreeView List written with TypeScript for easy integration into projects. Based on Bootstrap styles, but code is very simple and you can change everything by ourselves.

No dependencies, vanila JS

[Demo](https://gunyakov.github.io/ts-treeview/demo/)

## Instalation

Include in your html file `ts-treeview.css` and `ts-treeview.js` from `dist` folder.

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
<div class="treeview w-20 border my-4" id="treeview">
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
This code will parse HTML and bind events to list.

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
This code will parse JSON, make DOM for list and bind events.

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
* User custom id for item. If empty ID will be gnerated in next patter:
* For top level ID will be 0, 1, 2, 3.
* For sub items ID will be 0.0, 0.1, ..., 3.0, 3.1
* For sub sub items ID will be 0.0.0, 0.0.1, ..., 3.0.0, 3.0.1
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
|on(<[EventType](#eventtype)>, (ID:string))|void| Register callback what will be fired. Item ID will be returned where event happend.|
|update(<[Item](#item)>)|bollean|Update item by new json data. Replace/delete all sub items if not stated in json. Return `true` if element with ID was found, false - if not.|
|remove(<ID:string>)| boolean | Remove item from DOM. Remove alsu all subitems. Return `true` if element was found, `false` - if not.|

## EventType

```ts
edit = "edit",
itemclick = "item.click",
itemdblclick = "item.dblclick",
folderclick = "folder.click",
folderdblclick = "folder.dblclick",
itemcheckbox = "item.checkbox",
foldercheckbox = "folder.checkbox"
```