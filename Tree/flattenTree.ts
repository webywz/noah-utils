export interface TreeNode {
    [key: string]: any; // 动态属性
    children: TreeNode[]; // 子节点数组
}

export const flattenTree = (tree: TreeNode[], childrenKey: string = 'children'): TreeNode[] => {
    let result: TreeNode[] = []; // 存储扁平化后的节点

    const traverse = (nodes: TreeNode[]) => {
        for (const node of nodes) {
            result.push(node); // 将节点添加到结果中
            if (node[childrenKey] && node[childrenKey].length > 0) {
                traverse(node[childrenKey]); // 递归遍历子节点
            }
        }
    };

    traverse(tree); // 开始遍历
    return result; // 返回扁平化后的节点数组
}; 