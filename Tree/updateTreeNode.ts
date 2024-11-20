export interface TreeNode {
    [key: string]: any;
    children: TreeNode[];
}

export const updateTreeNode = (tree: TreeNode[], newNode: TreeNode, contrastId: string = 'id'): TreeNode[] => {
    return tree.map(node => {
        if (node[contrastId] === newNode[contrastId]) {
            return { ...newNode, children: node.children ? updateTreeNode(node.children, newNode) : [] };
        }
        return { ...node, children: node.children ? updateTreeNode(node.children, newNode) : [] };
    });
} 