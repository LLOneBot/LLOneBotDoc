# 快速开始

LLOneBot 支持最新版本的 QQ。不推荐使用太老的版本，因其可能会有一些问题。

## Windows 一键安装方案

<https://github.com/super1207/install_llob/releases> 下载 exe，双击运行即可，之后打开 QQ 的设置，看到了 `LLOneBot` 就代表安装成功了。

## 通用安装方法

::: details 安装 LiteLoaderQQNT
**注意在安装之前先关闭 QQ！**

推荐使用 [一键安装脚本](https://github.com/Mzdyl/LiteLoaderQQNT_Install/releases)，支持 Windows、Linux、MacOS

安装成功后打开 QQ 的设置，看到了 `LiteLoaderQQNT` 就代表安装成功了

![](../../asset/img/getting-started/llqqnt-install-success.png)

::: tip
手动安装见 [LiteLoaderQQNT文档](https://liteloaderqqnt.github.io/guide/install.html)
:::

::: details 安装 LLOneBot

下载 [LLOneBot](https://github.com/LLOneBot/LLOneBot/releases) 最新版本 解压放到 `plugins` 目录下，然后重启 QQ 即可

::: tip
plugins 目录可以在 LiteLoaderQQNT 的页面找到并一键打开
![](../../asset/img/getting-started/open-plugins-dir.png)

目录结构如下:
```
├── plugins
│   ├── LLOneBot
│   │   └── main/main.cjs
│   │   └── preload/preload.cjs
│   │   └── renderer/index.js
│   │   └── manifest.json
│   │   └── node_modules/...
```
:::

::: details 检查是否安装成功

重启 QQ 后，打开设置，看到 `LLOneBot` ，代表安装成功

![](../../asset/img/getting-started/llonebot-install-success.png)
:::

## Linux 手动安装

Linux 安装方法与 Windows 类似，只是需要手动安装 LiteLoaderQQNT

## Linux docker 安装

参考 <https://github.com/LLOneBot/llonebot.nix>

## 下一步

参阅[对接其他框架](./configuration.md#对接其他框架)。



