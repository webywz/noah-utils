/*
*当前日期：星期日
*文件路径：tree/getNodeDepthById.js
*IDE 名称：WebStorm
*/
export const getNodeDepthById = (tree, id) => {
    const findDepth = (nodes, currentDepth) => {
        for (const node of nodes) {
            if (node.id === id) {
                return currentDepth;
            }
            if (node.children.length > 0) {
                const depth = findDepth(node.children, currentDepth + 1);
                if (depth !== -1) {
                    return depth;
                }
            }
        }
        return -1;  // 节点未找到时返回 -1
    };

    return findDepth(tree, 0);
};