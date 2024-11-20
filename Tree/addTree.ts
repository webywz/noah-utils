/*
 * @Author: Noah
 * @Date: 2024-11-19 22:28:59
 * @LastEditTime: 2024-11-19 22:33:21
 * @FilePath: \noah-utils\Tree\addTree.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
export interface TreeNode {
    [key: string]: any; // 动态属性，允许节点有任意键值对
    children: TreeNode[]; // 子节点数组
}

export const addTree = (
    root: TreeNode[], // 树的根节点数组
    parentId: string, // 父节点的ID
    contrastParentId: string, // 用于比较的父节点ID
    newNode: TreeNode, // 要添加的新节点
    isNewNodeParentIdEqualNodeId: boolean, // 是否将新节点的父ID设置为节点ID
    onlyId: string // 唯一标识符
): TreeNode[] => {
    function addNodeRecursively(
        node: TreeNode,
        parentId: string,
        contrastParentId: string,
        newNode: TreeNode,
        isNewNodeParentIdEqualNodeId: boolean,
        onlyId: string
    ): boolean {
        if (!node) return false; // 如果节点不存在，返回false
        if (node[contrastParentId] === parentId) { // 如果找到匹配的父节点
            if (isNewNodeParentIdEqualNodeId) {
                newNode[contrastParentId] = node[onlyId]; // 设置新节点的父ID
            }
            node.children.push(newNode); // 添加新节点到子节点数组
            return true; // 返回true表示添加成功
        }
        if (node.children && node.children.length) { // 如果有子节点
            for (let child of node.children) {
                if (addNodeRecursively(child, parentId, contrastParentId, newNode, isNewNodeParentIdEqualNodeId, onlyId)) {
                    return true; // 递归添加节点
                }
            }
        }
        return false; // 未找到匹配的父节点
    }

    for (let rootElement of root) {
        if (addNodeRecursively(rootElement, parentId, contrastParentId, newNode, isNewNodeParentIdEqualNodeId, onlyId)) {
            return root; // 如果成功添加，返回更新后的根节点数组
        }
    }
    return root; // 返回原始根节点数组
} 