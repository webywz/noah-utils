export interface TreeNode {
    [key: string]: any;
    children: TreeNode[];
}

export const delTreeNode = (tree: TreeNode[], id: string, contrastId: string): TreeNode[] => {
    return tree
        .map(node => ({
            ...node,
            children: node.children ? delTreeNode(node.children, id, contrastId) : []
        }))
        .filter(node => node[contrastId] !== id);
} 