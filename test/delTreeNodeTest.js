/*
*当前日期：星期日
*文件路径：test/delTreeNodeTest.js
*IDE 名称：WebStorm
*/
import {treeData} from "./data.js";
import {delTreeNode} from "../Tree/index.js";

export const delTreeNodeTest = () => {
    let newTree = delTreeNode(treeData, '2', 'id')
    console.log(JSON.stringify(newTree))
}