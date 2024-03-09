# 快速开始

## 通用安装方法

::: details 安装 LiteLoaderQQNT
**注意在安装之前请先关闭 QQ ！**

推荐使用 [一键安装脚本](https://github.com/Mzdyl/LiteLoaderQQNT_Install/releases)，支持 Windows、Linux、MacOS

安装成功后打开QQ的设置，看到了 `LiteLoaderQQNT` 就代表安装成功了.

![](../../asset/img/llqqnt-install-success.png)

::: tip
手动安装见 [LiteLoaderQQNT文档](https://liteloaderqqnt.github.io/guide/install.html)
:::

::: details 安装 LLOneBot

如果是通过一键脚本安装了 LiteLoaderQQNT ，则可以在插件商店搜索 `LLOneBot` 直接在线安装
![](../../asset/img/install-llonebot-from-plugin-store.png)

如果是手动安装，将下载 [LLOneBot](https://github.com/LLOneBot/LLOneBot/releases) 最新版本 解压放到 `plugins` 目录下，然后重启 QQ 即可.

::: tip
plugins 目录可以在 LiteLoaderQQNT 的页面找到并一键打开.
![](../../asset/img/open-plugins-dir.png)

目录结构如下:
```
├── plugins
│   ├── LLOneBot
│   │   └── main.js
│   │   └── preload.js
│   │   └── renderer.js
│   │   └── manifest.json
│   │   └── node_modules/...
```
:::

::: details 检查是否安装成功

**重启 QQ 后，打开设置，看到 `LLOneBot` ，代表安装成功.**

![](../../asset/img/llonebot-install-success.png)
:::

## Linux 容器化快速安装

具体问题参考: [LLOneBot-Docker](https://github.com/MliKiowa/llonebot-docker)

::: code-group

```sh [Curl]
bash <(curl -s -L https://cdn.jsdelivr.net/gh/MliKiowa/llonebot-docker/fastboot.sh)
```

::: 

## 使用termux安装

具体问题参考: [LLOneBot-Termux](https://github.com/LLOneBot/llonebot-termux)

::: code-group

```sh [Curl]
bash -c "$(curl -L https://github.com/LLOneBot/llonebot-termux/raw/main/onekey.sh)"
```

::: 


