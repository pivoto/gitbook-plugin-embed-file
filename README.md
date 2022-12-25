# gitbook-plugin-embed-file

修改自：[https://github.com/azu/gitbook-plugin-include-codeblock](./ref.md 'https://github.com/azu/gitbook-plugin-include-codeblock')

兼容对`docsify`内嵌文件的引用方式。
```markdown
[filename](../_media/example.md ':include')
```

## 安装使用

- book.json 中添加配置
```json
{
  "plugins": [
    "embed-file"
  ]
}
```

- 执行安装命令
```sh
gitbook install
```

## 配置项

| option | value | Description |
| --- | --- | --- |
| `template` | `{"default","full","ace",...}` or custom path | reindent code if marker or slice is used |
| `unindent` | `{true,false}` default:`false` | reindent code if marker or slice is used |
| `fixlang` | `{true,false}` default:`false` | fix some errors with code lang (e.g C++, ...) |
| `lang` | `{"c_cpp","javascript", ...}` | lang color syntax (not set => auto deduce, see [lang section](#hardcoded-class)). |
| `edit` | `{true,false}` | [allow edit code](https://github.com/ymcatar/gitbook-plugin-ace/blob/master/README.md) (**ace template required**) |
| `check` | `{true,false}` | [syntax validation](https://github.com/ymcatar/gitbook-plugin-ace/blob/master/README.md) (**ace template required**) |
| `theme` | `{"monokai","coffee",...}` | [check syntax](https://github.com/ymcatar/gitbook-plugin-ace/blob/master/README.md) (**ace template required**) |

在`book.json`中配置，如：
```json
{
    "gitbook": "3.x.x",
    "pluginsConfig": {
        "embed-file": {
            "template": "ace",
            "unindent": true,
            "theme": "monokai"
        }
    }
}
```



