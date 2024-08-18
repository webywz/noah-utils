/*
*当前日期：星期日
*文件路径：test/addTreeTest.js
*IDE 名称：WebStorm
*/
import {addTree} from "../tree/index.js";
import {treeData} from "./data.js";
export const addTreeTest = () => {
    const addNode = { id: 123, name: 'addNode' }
    let newTree = addTree(treeData, '1','parentId', addNode, false, 'id')
    console.log(JSON.stringify(newTree))
}