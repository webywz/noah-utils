/*
*当前日期：星期日
*文件路径：test/updateTreeNodeTest.js
*IDE 名称：WebStorm
*/
//测试用例
import {updateTreeNode} from '../Tree/index.js';
import { treeData } from "./data.js";

export const updateTreeNodeTest = () => {
    let newTree = updateTreeNode(treeData, {id: '3', name: '更新节点', children: []}, 'id');
    console.log(JSON.stringify(newTree))
    return newTree
}