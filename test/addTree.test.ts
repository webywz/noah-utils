/*
 * @Author: Noah
 * @Date: 2024-11-19 22:33:41
 * @LastEditTime: 2024-11-19 22:33:44
 * @FilePath: \noah-utils\test\addTreeTest.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { addTree, TreeNode } from '../Tree/addTree';

describe('addTree', () => {
    it('should add a new node to the correct parent', () => {
        const root: TreeNode[] = [
            { id: '1', children: [] },
            { id: '2', children: [] }
        ];
        const newNode: TreeNode = { id: '3', children: [] };
        const updatedTree = addTree(root, '1', 'id', newNode, false, 'id');

        expect(updatedTree[0].children).toContainEqual(newNode);
    });

    it('should not add a node if parentId does not match', () => {
        const root: TreeNode[] = [
            { id: '1', children: [] }
        ];
        const newNode: TreeNode = { id: '3', children: [] };
        const updatedTree = addTree(root, '2', 'id', newNode, false, 'id');

        expect(updatedTree[0].children).not.toContainEqual(newNode);
    });
});