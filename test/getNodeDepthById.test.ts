import { getNodeDepthById, TreeNode } from '../Tree/getNodeDepthById';

describe('getNodeDepthById', () => {
    it('should return the correct depth of a node', () => {
        const tree: TreeNode[] = [
            { id: '1', children: [{ id: '2', children: [{ id: '3', children: [] }] }] }
        ];
        const depth = getNodeDepthById(tree, '3');

        expect(depth).toBe(2);
    });

    it('should return -1 if the node is not found', () => {
        const tree: TreeNode[] = [
            { id: '1', children: [] }
        ];
        const depth = getNodeDepthById(tree, '2');

        expect(depth).toBe(-1);
    });
}); 