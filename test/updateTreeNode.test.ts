import { updateTreeNode, TreeNode } from '../Tree/updateTreeNode';

describe('updateTreeNode', () => {
    it('should update a node with the given id', () => {
        const tree: TreeNode[] = [
            { id: '1', children: [] }
        ];
        const newNode: TreeNode = { id: '1', name: 'updated', children: [] };
        const updatedTree = updateTreeNode(tree, newNode, 'id');

        expect(updatedTree[0].name).toBe('updated');
    });

    it('should not update any node if id does not match', () => {
        const tree: TreeNode[] = [
            { id: '1', children: [] }
        ];
        const newNode: TreeNode = { id: '2', name: 'updated', children: [] };
        const updatedTree = updateTreeNode(tree, newNode, 'id');

        expect(updatedTree[0].name).toBeUndefined();
    });
}); 