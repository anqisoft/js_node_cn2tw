Created on Wed Jan 10 2024 20:09:00<br>

### Introduce
<ul>
<li><en_us>Translate file content from Simplified Chinese to Traditional Chinese.</en_us></li>
<li><zh_cn>翻译文件中的简体中文到繁体中文</zh_cn></li>
<li><zh_tw>翻譯文件中的簡體中文到繁體中文</zh_tw></li>
</ul>

### Import
```typescript
import { convert } from 'https://deno.land/x/cn2tw/@v0.0.1/index.ts';
```

### Usage1
```bash
::deno run --allow-run --allow-read --allow-write https://deno.land/x/cn2tw/@v0.0.1/index.ts ~sourceFilename~ ~goalFilename~
deno run --allow-run --allow-read --allow-write https://deno.land/x/cn2tw/@v0.0.1/index.ts zh_cn.txt zh_tw.txt
```

### Usage2
```typescript
import { convert } from 'https://deno.land/x/cn2tw/@v0.0.1/index.ts';
// convert(~sourceFilename1~, ~goalFilename1~);
convert('zh_cn.txt', 'zh_tw.txt');
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