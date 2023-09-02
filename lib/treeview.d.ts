import { ListItem, Options } from "./interface";
import { EventType } from "./enum";
declare class TreeList {
    private _el;
    private _options;
    constructor(options: Options);
    setElements(data: Array<ListItem>): void;
    on(event: EventType, callback: CallableFunction): void;
    private _init;
    private _events;
    private _makeHeader;
    private _makeItem;
    private _drawHTML;
}
export default TreeList;
