import { delTreeNode, TreeNode } from '../Tree/delTreeNode';

describe('delTreeNode', () => {
    it('should delete a node with the given id', () => {
        const tree: TreeNode[] = [
            { id: '1', children: [{ id: '2', children: [] }] }
        ];
        const updatedTree = delTreeNode(tree, '2', 'id');

        expect(updatedTree[0].children).toHaveLength(0);
    });

    it('should not delete any node if id does not match', () => {
        const tree: TreeNode[] = [
            { id: '1', children: [{ id: '2', children: [] }] }
        ];
        const updatedTree = delTreeNode(tree, '3', 'id');

        expect(updatedTree[0].children).toHaveLength(1);
    });
}); 