import { slideDown, slideUp } from "./animate";
import { ListItem, Options } from "./interface";
import { EventType } from "./enum";
import { on, fire } from "./callbacks";
import { makeInput } from "./DOM/input";

class TreeList {

    private _el:HTMLElement | null = null;

    private _options:Options = {
        element: "treeview",
        class: ["treeview-animated", "w-20", "border", "my-4"],
        header: null,
        editable: false,
        items: [],
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
            else {
                this._init();
            }
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

    private _events(el:HTMLElement) {
        if(typeof el != "undefined") {
            console.log(el);
            let listLi = el.children;
            for(let i = 0; i < listLi.length; i++) {
                let item = listLi[i] as HTMLElement;
                console.log(item);
                //Get UL from element
                let ul = item.getElementsByTagName("ul")[0] as HTMLElement;
                let a = item.getElementsByTagName("a")[0] as HTMLElement;
                console.log(a);
                //If ul present
                if(ul && a) {
                    //Make same for inner UL
                    this._events(ul);
                    //Bind click event
                    a?.addEventListener("click", (e) => {
                        e.stopPropagation();
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
                //If list must be editable
                if(this._options.editable) {
                    //Bind double click event
                    a?.addEventListener("dblclick", (e) => {
                        e.stopPropagation();
                        let txtEl = makeInput();
                        txtEl.style.height = a.offsetHeight + "px";
                        let span = item.getElementsByTagName("span")[0];
                        if(span && a) {
                            a.append(txtEl);
                            span.style.display = "none";
                        }
                    });
                }
            }
        }   
    }

    private _addClass(el:HTMLElement, classList: Array<string>) {
        if(classList.length > 0) {
            classList.forEach((item) => {
                el.classList.add(item);
            });
        }
        return el;
    }

    private _createHeader(str:string, classList: Array<string> = []) {
        let el = document.createElement("h6");
        el.innerText = str;
        this._el?.appendChild(this._addClass(el, classList));
        this._el?.appendChild(document.createElement("hr"));
    }

    private _createItem(item:ListItem) {

    }

    private _drawHTML() {
        if(this._options.header) this._createHeader;
    }
}

export default TreeList;