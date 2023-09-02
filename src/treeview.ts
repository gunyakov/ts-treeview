import { slideDown, slideUp } from "./animate";
import { ListItem, Options } from "./interface";
import { EventType } from "./enum";
import { on, fire } from "./callbacks";
import { makeInput } from "./DOM/input";
import { makeHeader } from "./DOM/header";
import { makeEl } from "./DOM/element";

class TreeList {

    private _el:HTMLElement | null = null;

    private _options:Options = {
        element: "treeview",
        class: ["treeview", "w-20", "border", "my-4"],
        header: "Demo header",
        headerClass: ["pt-3", "pl-3"],
        editable: false,
        items: [],
        listClass: ['mb-1', "pl-3", "pb-2"],
        subListClass: ['nested'],
        listSubClass: ['closed'],
        listSubArrowClass: ["fas", "fa-angle-right", "rotate"],
        itemClass: []
    }

    constructor(options: Options) {

        this._options = {...this._options, ...options};

        this._el= document.getElementById(this._options.element);
        if(this._el) {
            this._options.class.forEach(element => {
                this._el?.classList.add(element);
            });
            if(this._options.items.length > 0) {
                this._drawHTML();
            }
            this._init();
        }
    }

    public setElements(data: Array<ListItem>) {
        if(!data || data?.length < 1) return;
    }

    public on(event:EventType, callback:CallableFunction) {
        on(event, callback);
    } 

    private _init() {
        let listMain = this._el?.getElementsByTagName('ul')[0];
        if(typeof listMain != "undefined") {
            this._events(listMain);
        }   
    }

    private _events(el:HTMLElement, itemID:string = "") {
        if(typeof el != "undefined") {
            let listLi = el.children;
            for(let i = 0; i < listLi.length; i++) {
                let item = listLi[i] as HTMLElement;
                let id = itemID.length == 0 ? i.toString() : itemID + ":" + i.toString()
                if(!item.getAttribute("tl-id")) item.setAttribute("tl-id", id);
                //Get UL from element
                let ul = item.getElementsByTagName("ul")[0] as HTMLElement;
                let a = item.getElementsByTagName("a")[0] as HTMLElement;
                //If ul present
                if(ul && a) {
                    //Make same for inner UL
                    this._events(ul, id);
                    //Bind click event
                    a?.addEventListener("click", (e) => {
                        e.stopPropagation();
                        fire(EventType.click, item.getAttribute("tl-id"));
                        a?.classList.toggle("open");
                        let icon = item.getElementsByTagName("i")[0];
                        if (icon) icon.classList.toggle("down");
                        if(ul.classList.contains("active")) {
                            ul.classList.remove("active");
                            item.classList.contains("treeview-animated-items") ? slideUp(ul) : ul.style.display = "none";;
                        }
                        else {
                            ul.classList.add("active");
                            item.classList.contains("treeview-animated-items") ? slideDown(ul) : ul.style.display = "block";;
                        }
                    });
                }
                else {
                    item.addEventListener("click", (e) => {
                        e.stopPropagation();
                        fire(EventType.click, item.getAttribute("tl-id"));
                    });
                }
                //Bind double click event
                item?.addEventListener("dblclick", (e) => {
                    e.stopPropagation();
                    fire(EventType.dblclick, item.getAttribute("tl-id"));
                    //If list must be editable
                    if(this._options.editable) {
                        let txtEl = makeInput();
                        txtEl.style.height = a.offsetHeight + "px";
                        let span = item.getElementsByTagName("span")[0];
                        if(span && a) {
                            a.append(txtEl);
                            span.style.display = "none";
                        }
                    }
                    
                });
                
            }
        }   
    }

    private _makeHeader() {
        let el = makeHeader(this._options.header, this._options.headerClass);
        this._el?.append(el);
        this._el?.append(document.createElement("hr"));
    }

    private _makeItem(item:ListItem, itemID:string) {
        let li = makeEl("li", this._options.itemClass);

        if(item.id) li.setAttribute("tl-id", item.id);
        else li.setAttribute("tl-id", itemID);

        if(item.items) {
            let a = makeEl("a", this._options.listSubClass);
            let arrow = makeEl("i", this._options.listSubArrowClass);
            a.append(arrow);

            let span = makeEl("span");
            let icon = makeEl("i", [...item.icon, "ic-w", "mx-1"]);
            span.append(icon);
            span.append(item.text);
            a.append(span);
            li.append(a);

            let subList = makeEl("ul", this._options.subListClass);
            subList.style.display = "none";
            for(let i = 0; i < item.items.length; i++) {
                subList.append(this._makeItem(item.items[i], itemID + ":" + i.toString()));
            }
            li.append(subList);
        }
        else {
            let i = makeEl("i", [...item.icon, "ic-w", "mx-1"]);
            li.append(i);
            li.append(item.text);
        }
        return li;
        
    }

    private _drawHTML() {
        if(this._el) this._el.innerHTML = "";
        if(this._options.header) this._makeHeader();
        let mainUL = makeEl("ul", this._options.listClass);
        this._options.items.forEach((item, index) => {
            mainUL.append(this._makeItem(item, index.toString()));
        });
        this._el?.append(mainUL);
    }
}

export default TreeList;