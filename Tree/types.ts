// 导出接口定义
export interface TreeNode {
    id: string | number;
    [contrastId: string]: any;  // 允许动态属性访问
    children: TreeNode[];
    // 其他可能的属性...
} 