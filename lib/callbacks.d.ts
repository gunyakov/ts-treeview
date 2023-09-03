import { EventType } from "./enum";
declare class CB {
    private _callbacks;
    /**
     * Fire callback according EventType
     * @param {EventType} event - Type of event
     * @param {any} data - First data for callback
     * @param {any} data1 - Second data for callback
     * @param {any} data2 - Third data for callback
     * @param {any} data3 - Forth data for callback
     * @param {any} data4 - Fifth data for callback
     */
    fire(event: EventType, data?: any, data1?: any, data2?: any, data3?: any, data4?: any): void;
    /**
     * Register callback function to fire when EventType happened.
     * @param {EventType} event - Event type for callback
     * @param callback - Callback function what will be fired
     */
    on(event: EventType, callback: CallableFunction): void;
}
export { CB };
