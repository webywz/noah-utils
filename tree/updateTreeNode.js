/*
*当前日期：星期日
*文件路径：tree/updateTreeNodeTest.js
*IDE 名称：WebStorm
*/
export const updateTreeNode = (tree, newNode, contrastId = 'id') => {
    return tree.map(node => {
        if (node[contrastId] === newNode[contrastId]) {
            return { ...newNode, children: updateTreeNode(node.children, newNode) };
        }
        return { ...node, children: updateTreeNode(node.children, newNode) };
    });
}