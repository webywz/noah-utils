export interface TreeNode {
    [key: string]: any;
    children: TreeNode[];
}

export const getNodeDepthById = (tree: TreeNode[], id: string): number => {
    const findDepth = (nodes: TreeNode[], currentDepth: number): number => {
        for (const node of nodes) {
            if (node.id === id) {
                return currentDepth;
            }
            if (node.children && node.children.length > 0) {
                const depth = findDepth(node.children, currentDepth + 1);
                if (depth !== -1) {
                    return depth;
                }
            }
        }
        return -1;
    };

    return findDepth(tree, 0);
}; 