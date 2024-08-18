/*
*当前日期：星期日
*文件路径：tree/addTree.js
*IDE 名称：WebStorm
*/
/**
 * 导出一个函数，用于在树结构中添加新节点
 * @param root 树的根节点数组
 * @param parentId 新节点的父节点ID
 * @param contrastParentId 用于对比的节点属性
 * @param newNode 待添加的新节点
 * @param isNewNodeParentIdEqualNodeId 是否将新节点的父节点ID设置为当前节点的ID
 * @param onlyId 用于获取节点ID的属性名称
 * @returns {Array} 更新后的树的根节点数组
 *
 */
export const addTree = (root, parentId, contrastParentId, newNode, isNewNodeParentIdEqualNodeId, onlyId) => {
    // 辅助函数，用于递归地在树中添加节点
    function addNodeRecursively(node, parentId, contrastParentId, newNode, isNewNodeParentIdEqualNodeId, onlyId) {
        // 如果当前节点为空，则返回
        if (!node) return;
        // 检查当前节点是否是目标节点
        if (node[contrastParentId] === parentId) {
            // 是目标节点，将新节点添加到其子节点数组中，并返回根节点
            if (isNewNodeParentIdEqualNodeId) {
                newNode[contrastParentId] = node[onlyId]
            }
            node.children.push(newNode);
            return root;
        }
        if (node.children && node.children.length) {
            // 遍历子节点，递归添加
            for (let child of node.children) {
                // 如果递归函数返回了true，表示已成功添加节点，返回true
                if (addNodeRecursively(child, parentId, contrastParentId, newNode, isNewNodeParentIdEqualNodeId, onlyId)) {
                    return true;
                }
            }
        }
        // 未找到合适的位置添加节点，返回false
        return false;
    }
    // 遍历根节点数组，调用辅助函数
    for (let rootElement of root) {
        // 如果添加成功，退出函数，返回更新后的根节点数组
        if (addNodeRecursively(rootElement, parentId, contrastParentId, newNode, isNewNodeParentIdEqualNodeId, onlyId)) {
            return root;
        }
    }
    // 未找到合适的位置添加节点，返回原始根节点数组
    return root
}
