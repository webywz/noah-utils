/*
 * @Author: Noah
 * @Date: 2024-11-19 22:17:25
 * @LastEditTime: 2024-11-19 22:44:22
 * @FilePath: \noah-utils\index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
/*
*当前日期：星期日
*文件路径：/index.js
*IDE 名称：WebStorm
*/
import * as utilsTree from "./Tree/index.js";
import * as utilsNumber from "./Number/index.js";

// 导出所有方法
export const utils = {
    ...utilsTree,
    ...utilsNumber
};