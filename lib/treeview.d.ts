import { ListItem, Options } from "./interface";
import { EventType, ItemType } from "./enum";
declare class TreeList {
    private _el;
    private _CB;
    private _options;
    constructor(options: Options);
    setElements(data: Array<ListItem>): void;
    on(event: EventType, callback: CallableFunction): void;
    private _init;
    private _events;
    checkbox(enable: boolean, type?: ItemType): void;
    update(item: ListItem): boolean;
    remove(elID: string): boolean;
    private _clearCheckBox;
    private _makeCheckBox;
    private _makeHeader;
    private _makeItem;
    private _drawHTML;
}
export default TreeList;
