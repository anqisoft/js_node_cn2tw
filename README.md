Created on Wed Jan 10 2024 20:09:00<br>

### Introduce
<ul>
<li><en_us>Translate file content from Simplified Chinese to Traditional Chinese.</en_us></li>
<li><zh_cn>翻译文件中的简体中文到繁体中文</zh_cn></li>
<li><zh_tw>翻譯文件中的簡體中文到繁體中文</zh_tw></li>
</ul>

### Usage1
```bash
npm i -g @dishanqian/cn2tw
cn2tw zh_cn.txt zh_tw.txt
```

### Usage2
```bash
npm i @dishanqian/cn2tw
```
```javascript
const { convert } = require('@dishanqian/cn2tw');
// convert('sourceFilename', 'goalFilename');
convert('zh_cn.txt', 'zh_tw.txt');
```

### Develop
```bash
git clone git+ssh://git@github.com/anqisoft/js_node_cn2tw
cd js_node_cn2tw

npm i @dishanqian/cn_and_tw

# test
node test/index.js zh_cn.txt zh_tw.txt
```

## This
### typescript
github: https://github.com/anqisoft/ts_deno_cn2tw
<br>deno: https://deno.land/x/cn2tw

### javascript
github: https://github.com/anqisoft/js_node_cn2tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn2tw

## Base
### typescript
github: https://github.com/anqisoft/ts_cn_and_tw
<br>deno: https://deno.land/x/cn_and_tw

### javascript
github: https://github.com/anqisoft/js_cn_and_tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn_and_tw

## Sibling
### typescript
github: https://github.com/anqisoft/ts_deno_tw2cn
<br>deno: https://deno.land/x/tw2cn

### javascript
github: https://github.com/anqisoft/js_node_tw2cn
<br>npmjs: https://www.npmjs.com/package/@dishanqian/tw2cn