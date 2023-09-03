import { slideDown, slideUp } from "./animate";
import { ListItem, Options } from "./interface";
import { EventType, ItemType } from "./enum";
import { CB } from "./callbacks";
import { makeInput } from "./DOM/input";
import { makeHeader } from "./DOM/header";
import { makeEl } from "./DOM/element";
import { toggleClass } from "./helpers/class";

class TreeList {

    private _el:HTMLElement | null = null;

    private _CB:CB;

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
        checkBoxClass: ["mx-1", "form-check-input"],
        itemClass: []
    }

    constructor(options: Options) {

        this._CB = new CB();

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
        this._CB.on(event, callback);
    } 

    private _init() {
        let listMain = this._el?.getElementsByTagName('ul')[0];
        if(typeof listMain != "undefined") {
            this._events(listMain);
        }   
    }

    private _events(el:HTMLElement, itemID:string = "") {
        let CB = this._CB;

        let thisClass = this;

        if(typeof el != "undefined") {
            let listLi = el.children;
            for(let i = 0; i < listLi.length; i++) {
                let item = listLi[i] as HTMLElement;
                let id = itemID.length == 0 ? i.toString() : itemID + ":" + i.toString()
                if(!item.getAttribute("tl-id")) item.setAttribute("tl-id", id);
                //Get UL from element
                let ul = item.querySelector(":scope > ul") as HTMLElement;
                let a = item.querySelector(":scope > a") as HTMLElement;
                //If ul present
                if(ul && a) {
                    //Make same for inner UL
                    this._events(ul, id);
                    //Bind click event
                    a.addEventListener("click", (e) => {
                        e.stopPropagation();
                        if(e.detail == 1) {
                            CB.fire(EventType.folderclick, item.getAttribute("tl-id"));

                            a.classList.toggle("open");

                            let arrow = a.querySelector(":scope > i") as HTMLElement;
                            if(arrow) arrow.classList.toggle("down");

                            let icon = a.querySelector(":scope > span > i") as HTMLElement;
                            let iconClose = "";
                            let iconOpen = "";
                            
                            if (icon) {
                                iconClose = icon.getAttribute("class-close");
                                iconOpen = icon.getAttribute("class-open");
                            }
                            if(ul.classList.contains("active")) {
                                ul.classList.remove("active");
                                item.classList.contains("treeview-animated-items") ? slideUp(ul) : ul.style.display = "none";
                                if(iconClose && iconOpen) toggleClass(icon, iconOpen.split(" "), iconClose.split(" "));
                            }
                            else {
                                ul.classList.add("active");
                                item.classList.contains("treeview-animated-items") ? slideDown(ul) : ul.style.display = "block";
                                if(iconClose && iconOpen) toggleClass(icon, iconClose.split(" "), iconOpen.split(" "));
                            }
                        }
                        if (e.detail == 2) {
                            CB.fire(EventType.folderdblclick, item.getAttribute("tl-id"));
                        }
                        
                    });
                    let checkBox = a.querySelector(":scope > input[type='checkbox']") as HTMLInputElement;
                    checkBox?.addEventListener("click", (e) => {
                        e.stopPropagation();
                        CB.fire(EventType.foldercheckbox, item.getAttribute("tl-id"), checkBox.checked);
                    });
                }
                else {
                    let checkBox = item.querySelector(":scope > input[type='checkbox']") as HTMLInputElement;
                    checkBox?.addEventListener("click", (e) => {
                        e.stopPropagation();
                        CB.fire(EventType.itemcheckbox, item.getAttribute("tl-id"), checkBox.checked);
                    });
                    item.addEventListener("click", (e) => {
                        e.stopPropagation();
                        if(e.detail == 1) CB.fire(EventType.itemclick, item.getAttribute("tl-id"));
                        else CB.fire(EventType.itemdblclick, item.getAttribute("tl-id"));
                    });
                }
                //Bind double click event
                item?.addEventListener("dblclick", (e) => {
                    e.stopPropagation();
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

    public checkbox(enable:boolean, type:ItemType = ItemType.both) {
        this._clearCheckBox();
        let el = this._el?.querySelector(":scope > ul") as HTMLElement;
        if(el) this._makeCheckBox(enable, type, el);
    }

    public update(item:ListItem):boolean {
        let el = this._el.querySelector(`[tr-id='${item.id}]`) as HTMLElement;
        if(el) {
            el.replaceWith(this._makeItem(item, item.id));
            this._events(el);
            return true;
        }
        return false;
    }

    public remove(elID:string):boolean {
        let el = this._el.querySelector(`[tr-id='${elID}]`) as HTMLElement;
        if(el) {
            el.remove();
            return true;
        }
        return false;
    }

    private _clearCheckBox() {
        let el = this._el?.querySelector(":scope > ul");
        el.querySelectorAll("input[type='checkbox']").forEach((inEl) => {
            inEl.remove();
        })
    }

    private _makeCheckBox(enable:boolean, type:ItemType, el:HTMLElement) {
        if(enable) {
            let CB = this._CB;
            if(el) {
                let listLi = el.children;
                for(let i = 0; i < listLi.length; i++) {
                    let item = listLi[i] as HTMLElement;
                    let a = item.querySelector(":scope > a") as HTMLElement || null;
                    //Get checkbox directly from item or include link
                    let checkBox = item.querySelector(":scope > input[type='checkbox']") as HTMLInputElement || a?.querySelector(":scope > input[type='checkbox']") as HTMLInputElement;
                    //If checkbox missing and enable for checkboxes
                    if(!checkBox && enable) {
                        checkBox = makeEl("input", this._options.checkBoxClass, "checkbox") as HTMLInputElement;
                        if(a && (type == ItemType.both || type == ItemType.folder)) {
                            let span = a.querySelector(":scope > span");
                            if(span) {
                                checkBox.addEventListener("click", (e) => {
                                    e.stopPropagation();
                                    CB.fire(EventType.foldercheckbox, item.getAttribute("tl-id"), checkBox.checked);
                                });
                                span.prepend(checkBox);
                            }
                        }
                        if(!a && (type == ItemType.item || type == ItemType.both)) {
                            checkBox.addEventListener("click", (e) => {
                                e.stopPropagation();
                                CB.fire(EventType.itemcheckbox, item.getAttribute("tl-id"), checkBox.checked);
                            });
                            item.prepend(checkBox);
                        }
                        let ul = item.querySelector(":scope > ul") as HTMLElement;
                        if(ul) this._makeCheckBox(enable, type, ul);
                    }
                }
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
            if(item.checkBox) {       
                span.append(makeEl("input", this._options.checkBoxClass, "checkbox"));
            }
            if(item.icon) {
                let icon = makeEl("i", [...item.icon, "ic-w", "mx-1"]);
                if(item.icon) icon.setAttribute("class-close", item.icon.join(" "));
                if(item.iconOpen) icon.setAttribute("class-open", item.iconOpen.join(" "));
                span.append(icon);
            }

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
            if(item.checkBox) {
                li.append(makeEl("input", this._options.checkBoxClass, "checkbox"));
            }
            if(item.icon) {
                let icon = makeEl("i", [...item.icon, "ic-w", "mx-1"]);
                if(item.icon) icon.setAttribute("class-close", item.icon.join(" "));
                if(item.iconOpen) icon.setAttribute("class-open", item.iconOpen.join(" "));
                li.append(icon);
            }
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