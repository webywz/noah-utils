import { TreeNode } from './types';

export function delTreeNode(tree: TreeNode[], id: string | number, contrastId: string = 'id'): TreeNode[] {
    return tree
        .filter(node => node[contrastId] !== id)
        .map(node => ({
            ...node,
            children: node.children ? delTreeNode(node.children, id, contrastId) : []
        }));
} 