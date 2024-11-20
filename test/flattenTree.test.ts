import { flattenTree, TreeNode } from '../Tree/flattenTree';

describe('flattenTree', () => {
    it('should flatten a nested tree structure', () => {
        const tree: TreeNode[] = [
            { id: '1', children: [{ id: '2', children: [] }] },
            { id: '3', children: [] }
        ];
        const flatTree = flattenTree(tree);

        expect(flatTree).toHaveLength(3);
        expect(flatTree.map(node => node.id)).toEqual(['1', '2', '3']);
    });
}); 