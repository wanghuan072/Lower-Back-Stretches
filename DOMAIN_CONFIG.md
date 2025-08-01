# 域名配置说明

## 概述

本项目已将所有域名相关的配置统一替换为占位符 `https://your-domain.com`，方便后期批量修改为正式域名。

## 需要修改的文件

### 1. 核心配置文件

| 文件路径 | 修改内容 | 说明 |
|---------|---------|------|
| `index.html` | `https://your-domain.com/` | 默认canonical URL |
| `src/utils/structuredData.js` | `https://your-domain.com` | 网站基础信息URL |
| `src/utils/seo.js` | `https://your-domain.com` | SEO工具中的baseUrl |
| `src/router/index.js` | `https://your-domain.com` | 路由守卫中的baseUrl |
| `src/utils/sitemapConfig.js` | `https://your-domain.com` | 站点地图hostname |
| `vite.config.js` | `https://your-domain.com` | Vite插件配置hostname |
| `public/robots.txt` | `https://your-domain.com/sitemap.xml` | 站点地图URL |

### 2. 文档文件

| 文件路径 | 修改内容 | 说明 |
|---------|---------|------|
| `SITEMAP_README.md` | `https://your-domain.com` | 文档中的域名说明 |
| `SEO_OPTIMIZATION.md` | `https://your-domain.com` | SEO文档中的域名说明 |

## 批量修改方法

### 方法1：使用编辑器全局搜索替换

1. 在VS Code或其他编辑器中打开项目根目录
2. 使用全局搜索功能 (Ctrl+Shift+F)
3. 搜索：`https://your-domain.com`
4. 替换为：`https://your-actual-domain.com`
5. 确认所有匹配项并替换

### 方法2：使用命令行批量替换

#### Windows (PowerShell)
```powershell
# 在项目根目录执行
Get-ChildItem -Recurse -Include *.js,*.vue,*.html,*.md,*.txt | ForEach-Object {
    (Get-Content $_.FullName) | ForEach-Object {
        $_ -replace 'https://your-domain\.com', 'https://your-actual-domain.com'
    } | Set-Content $_.FullName
}
```

#### Linux/Mac (Bash)
```bash
# 在项目根目录执行
find . -type f \( -name "*.js" -o -name "*.vue" -o -name "*.html" -o -name "*.md" -o -name "*.txt" \) -exec sed -i 's|https://your-domain\.com|https://your-actual-domain.com|g' {} \;
```

### 方法3：使用Node.js脚本

创建 `update-domain.js` 文件：

```javascript
const fs = require('fs');
const path = require('path');

const oldDomain = 'https://your-domain.com';
const newDomain = 'https://your-actual-domain.com';

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(oldDomain)) {
      content = content.replace(new RegExp(oldDomain.replace(/\./g, '\\.'), 'g'), newDomain);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath);
    } else if (stat.isFile()) {
      const ext = path.extname(file);
      if (['.js', '.vue', '.html', '.md', '.txt'].includes(ext)) {
        updateFile(filePath);
      }
    }
  });
}

console.log('Starting domain update...');
walkDir('.');
console.log('Domain update completed!');
```

运行脚本：
```bash
node update-domain.js
```

## 验证修改

修改完成后，请验证以下内容：

### 1. 构建测试
```bash
npm run build
```

### 2. 检查生成的文件
- 检查 `dist/sitemap.xml` 中的URL
- 检查 `dist/robots.txt` 中的站点地图URL
- 检查 `dist/index.html` 中的canonical URL

### 3. 功能测试
- 启动开发服务器：`npm run dev`
- 访问各个页面，检查SEO标签
- 验证结构化数据中的URL

## 注意事项

1. **备份项目**：修改前请备份整个项目
2. **测试环境**：先在测试环境验证修改效果
3. **搜索引擎**：修改域名后需要重新提交站点地图到搜索引擎
4. **缓存清理**：清除浏览器缓存和CDN缓存
5. **301重定向**：如果是从旧域名迁移，需要设置301重定向

## 常见问题

### Q: 修改后站点地图不更新？
A: 重新运行 `npm run build` 生成新的站点地图

### Q: 搜索引擎还是显示旧域名？
A: 需要时间让搜索引擎重新爬取，可以主动提交新的站点地图

### Q: 社交媒体分享还是显示旧域名？
A: 清除社交媒体平台的缓存，或使用Facebook调试工具刷新

## 更新日志

- **v1.0.0**: 初始域名占位符配置
- 统一使用 `https://your-domain.com` 作为占位符
- 创建批量修改指南 