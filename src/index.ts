import TreeList from "./treeview";
//-----------------------------------------------------------------------------------------------
//MINIT
//-----------------------------------------------------------------------------------------------
export default TreeList;
//@ts-ignore
getGlobalObject().TreeList = TreeList;

function getGlobalObject() {
	if (typeof globalThis !== 'undefined') { return globalThis; }
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	//if (typeof global !== 'undefined') { return global; }

	throw new Error('Unable to locate global object.');
}