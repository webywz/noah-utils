/*
*当前日期：星期日
*文件路径：test/addTreeTest.js
*IDE 名称：WebStorm
*/
import {addTree} from "../tree/index.js";
const treeData = [
    {
        "id": "1",
        "parentId": "0",
        "name": "根节点",
        "children": [
            {
                "id": "2",
                "parentId": "1",
                "name": "子节点1",
                "children": [
                    {
                        "id": "4",
                        "parentId": "2",
                        "name": "孙节点1-1",
                        "children": []
                    },
                    {
                        "id": "5",
                        "parentId": "2",
                        "name": "孙节点1-2",
                        "children": []
                    }
                ]
            },
            {
                "id": "3",
                "parentId": "1",
                "name": "子节点2",
                "children": [
                    {
                        "id": "6",
                        "parentId": "3",
                        "name": "孙节点2-1",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "10",
        "parentId": "0",
        "name": "根节点",
        "children": [
            {
                "id": "11",
                "parentId": "10",
                "name": "子节点1",
                "children": [
                    {
                        "id": "111",
                        "parentId": "11",
                        "name": "孙节点1-1",
                        "children": []
                    },
                    {
                        "id": "112",
                        "parentId": "11",
                        "name": "孙节点1-2",
                        "children": []
                    }
                ]
            },
            {
                "id": "12",
                "parentId": "1",
                "name": "子节点2",
                "children": [
                    {
                        "id": "121",
                        "parentId": "12",
                        "name": "孙节点2-1",
                        "children": []
                    }
                ]
            }
        ]
    }
]
export const addTreeTest = () => {
    const addNode = { id: 123, name: 'addNode' }
    let newTree = addTree(treeData, '1','parentId', addNode, false, 'id')
    console.log(JSON.stringify(newTree))
}