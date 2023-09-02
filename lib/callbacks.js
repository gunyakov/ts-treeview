import { EventType } from "./enum";
//-----------------------------------------------------------------------------------------------
//CALLBACKS LIST AND FIRE FUNCTION
//-----------------------------------------------------------------------------------------------
var _callbacks = []; //Calback array
/**
 * Fire callback according EventType
 * @param {EventType} event - Type of event
 * @param {any} data - First data for callback
 * @param {any} data1 - Second data for callback
 * @param {any} data2 - Third data for callback
 * @param {any} data3 - Forth data for callback
 * @param {any} data4 - Fifth data for callback
 */
export function fire(event, data, data1, data2, data3, data4) {
    if (data === void 0) { data = false; }
    if (data1 === void 0) { data1 = false; }
    if (data2 === void 0) { data2 = false; }
    if (data3 === void 0) { data3 = false; }
    if (data4 === void 0) { data4 = false; }
    //@ts-ignore
    var callback = _callbacks[event];
    if (callback) {
        callback(data, data1, data2, data3, data4);
    }
    else {
        console.log("Callback ".concat(event, " have no assigned function."));
    }
}
/**
 * Register callback function to fire when EventType happened.
 * @param {EventType} event - Event type for callback
 * @param callback - Callback function what will be fired
 */
export function on(event, callback) {
    var values = Object.values(EventType);
    if (values.includes(event)) {
        //Push function to callbacks list
        //@ts-ignore
        _callbacks[event] = callback;
    }
    else {
        console.log("Wrong event type. Pls check it again", event);
    }
}
//# sourceMappingURL=callbacks.js.map