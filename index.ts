/*
 * @Author: Noah
 * @Date: 2024-11-19 22:17:25
 * @LastEditTime: 2024-11-19 22:44:22
 * @Description: 工具库入口文件
 */

// Tree 相关工具函数
import { delTreeNode } from './Tree/delTreeNode';
import { flattenTree } from './Tree/flattenTree';
import { getNodeDepthById } from './Tree/getNodeDepthById';
import { updateTreeNode } from './Tree/updateTreeNode';

// Number 相关工具函数
import { formatCurrency } from './Number/formatCurrency';

// 重新导出所有函数
export { delTreeNode } from './Tree/delTreeNode';
export { flattenTree } from './Tree/flattenTree';
export { getNodeDepthById } from './Tree/getNodeDepthById';
export { updateTreeNode } from './Tree/updateTreeNode';
export { formatCurrency } from './Number/formatCurrency';
export * from './Date/dateFormat';

// 导出类型定义
export type { TreeNode } from './Tree/types';

// 默认导出所有工具
const utils = {
    // Tree
    delTreeNode: delTreeNode,
    flattenTree: flattenTree,
    getNodeDepthById: getNodeDepthById,
    updateTreeNode: updateTreeNode,
    // Number
    formatCurrency: formatCurrency,
    // 其他工具函数...
};

export default utils; 