/*
*当前日期：星期日
*文件路径：tree/delTreeNode.js
*IDE 名称：WebStorm
*/
export const delTreeNode = (tree, id, contrastId) => {
    return tree
        .map(node => ({
            ...node,
            children: delTreeNode(node.children, id, contrastId)
        }))
        .filter(node => node[contrastId] !== id);
}