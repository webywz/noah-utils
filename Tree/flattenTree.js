/*
*当前日期：星期日
*文件路径：Tree/flattenTree.js
*IDE 名称：WebStorm
*/
/**
 * 将树结构平铺为一维数组
 * @param {Array} tree - 要平铺的树结构数组
 * @param {string} [childrenKey='children'] - 子节点的键名，默认为 'children'
 * @returns {Array} - 平铺后的节点数组
 */
export const flattenTree = (tree, childrenKey = 'children') => {
    let result = [];

    const traverse = (nodes) => {
        for (const node of nodes) {
            result.push(node);  // 添加当前节点到结果数组
            if (node[childrenKey] && node[childrenKey].length > 0) {
                traverse(node[childrenKey]);  // 递归处理子节点
            }
        }
    };

    traverse(tree);
    return result;
};
