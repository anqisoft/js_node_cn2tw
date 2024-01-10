"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * index.ts
 *
 * Usage: ```
npm i -g @dishanqian/cn2tw
cn2tw P:\anqi\Desktop\tech\js\_test\js_node_cn2tw\zh_cn.txt P:\anqi\Desktop\tech\js\_test\js_node_cn2tw\zh_tw.txt
 * ```
 *
 * Usage: ```
node index.js P:\anqi\Desktop\tech\js\_test\js_node_cn2tw\zh_cn.txt P:\anqi\Desktop\tech\js\_test\js_node_cn2tw\zh_tw.txt
 * ```
 *
 * <en_us>
 * Created on Wed Jan 10 2024 20:09:00
 * Feature: Translate file content from Simplified Chinese to Traditional Chinese.</en_us>
 *
 * <zh_cn>
 * 创建：2024年1月10日 20:09:00
 * 功能：翻译文件中的简体中文到繁体中文。
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月10日 20:09:00
 * 功能：翻譯文件中的簡體中文到繁體中文。
 * </zh_tw>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;

const fs = require('fs');
const { cn2tw } = require('@dishanqian/cn_and_tw');
/**
 * <en_us>Convert Simplified Chinese to Traditional Chinese in a file</en_us>
 * <zh_cn>转换文件中的简体中文到繁体中文</zh_cn>
 * <zh_tw>轉換檔案中的簡體中文到繁體中文</zh_tw>
 *
 * @param sourceFilename string <en_us>Original document, including simplified Chinese</en_us><zh_cn>原始文件，含简体中文</zh_cn><zh_tw>原始文件，含簡體中文</zh_tw>
 * @param goalFilename string <en_us>Target traditional Chinese file</en_us><zh_cn>目标繁体文件</zh_cn><zh_tw>目標繁體文件</zh_tw>
 *
 * @returns boolean <en_us>Conversion is successful or not.</en_us><zh_cn>转换成功与否</zh_cn><zh_tw>轉換成功與否</zh_tw>
 */
function convert(sourceFilename, goalFilename) {
    // https://nodejs.org/api/fs.html
    const FILE_WRITE_MODE = { mode: 0o777 };
    try {
        const SOURCE_CONTENT = fs.readFileSync(sourceFilename).toString();
        // console.log(SOURCE_CONTENT);
        fs.writeFileSync(goalFilename, cn2tw(SOURCE_CONTENT), FILE_WRITE_MODE);
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
exports.convert = convert;
(() => {
    const { argv } = require('node:process');
    const START_DATE = new Date();
    const [source, goal] = argv.slice(2);
    console.log(convert(source, goal));
    const END_DATE = new Date();
    const USED_MILLISECONDS = END_DATE.getTime() - START_DATE.getTime();
    console.log('Used', USED_MILLISECONDS, 'milliseconds, it is equivalent to ', parseFloat((USED_MILLISECONDS / 1000).toFixed(4)));
})();
