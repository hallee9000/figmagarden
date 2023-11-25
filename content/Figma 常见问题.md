---
tags:
  - 基础
title: Figma 常见问题
---
## 在使用之前

### Figma 如何收费？

> **Figma 最新的收费策略见：**[**https://figmacn.com/post/starter-plan-updates**](https://figmacn.com/post/starter-plan-updates)

Figma 以团队->项目->文件的结构来进行组织，其中“团队”分为**基础版、专业版、组织版和教育版，除了组织版，其他都是针对单个团队来说的**。

你可以把每个团队都看成游乐场，免费的游乐场（基础版）可以随便进去玩，带多少朋友都行（无限编辑者），但是只有三个项目可以玩（项目文件数量受限）；要钱的游乐场（专业版）门票 $15 一个人一个月（编辑者），里面项目可多了（项目文件数量无限制），不想付钱就只能围在栅栏上看别人玩（查看者）。游乐场门票上没名字，所以随便谁进去都行，只要你拿着票就行。对了，你还可以同时买多个游乐场的门票。Drafts 是你的私家花园，别人进不来，你可以自己在里面随便玩。

更多其它细节详见[帮助文档](https://help.figma.com/article/209-figma-plans)

![[figma-teams.png]]

**以我的经验来看，免费的基础版足够前期使用了，等功能都熟悉了再付费使用。如果免费版不够，可以要求公司购买专业版团队。希望大家尽量付费支持，这样 Figma 才能持续不断做出更好的功能。**

### Figma 在哪下载呢？

你可以去[这里](https://www.figma.com/downloads/)下载客户端。

### 有中文版吗？

官方没有，但你可以下载[月维的二次封装版](https://moonvy.com/figmaEX/)，不过每次更新都需要从这里重新下载。

### 如何调用本地字体？

**如果你使用的是 Web 端，需要安装一下** [**Font Installer**](https://www.figma.com/downloads/)**，才可以使用本地字体（客户端不需要）。**推荐看一下[草帽的这个视频](https://www.figmacn.com/post/figma-font-why-and-how)，以后遇到字体问题就不怕了。

### 为什么不支持中文输入呢？

其实是支持的，因为默认是一个英文字体，你只需要切换为一个中文字体就可以了。目前 Figma 字体列表这里显示的都还是英文，你可以手动输入 PingFang SC 或者 Noto Sans SC。

### Figma 如何交付给开发看标注呢？

一般来说你需要使用对方的邮箱邀请一下，Figma 会给他/她发送一封邮件。

![](https://dvpclzgdxhdlfgyqtoud.supabase.co/storage/v1/object/public/post-images/2022-11-08/b29075f6-380d-48ae-b34e-a8349bdbf049.png)

从邮件中的链接点进来，并使用这个邮箱注册一下就可以看标注了。**需要注意的是一定要使用你填写的邮箱注册并且登录进去，否则看不到标注的。**

进来后点击右边的 Inspect 就可以查看属性值了，点击 Export 还可以自己导出切图。

![](https://dvpclzgdxhdlfgyqtoud.supabase.co/storage/v1/object/public/post-images/2022-11-10/ba9b3e71-633e-4754-8d94-eb68e5d6528d.png)

如果你有导出离线标注的需求，也可以使用我做的 [Handoff 插件](https://www.figma.com/community/plugin/830051293378016221/Juuust-Handoff)。

## 基础操作

### Frame 是什么？它和组（Group）有什么区别？

Frame 是一种更先进的组，它不仅可以把元素打包成组，还带有自身属性（背景色、描边、圆角等），内部元素还能通过响应式约束来实现自适应。**如无必要，尽量使用 Frame，不然就浪费了 Figma。**具体细节可以参考下面的文章和视频：

- [如何选择 group（组）或 frame（画框）？](https://www.figmacn.com/post/group-and-frame)
    
- [多用 Frame，不然 Figma 白用了](https://www.bilibili.com/video/BV1Tv411z7bw/)
    

### 普通矩形如何转换为 Frame？Frame 和 Group 如何互相转换？

Frame 和矩形无法互相转换，但是你可以选中矩形后按 Cmd+Option+G （Ctrl+Alt+G）给矩形外边包上一个同样大小的 Frame。而 Frame 和 Group 是可以互相转换的，在右边尺寸上面有一个下拉选项，直接点击切换就行了。

![](https://dvpclzgdxhdlfgyqtoud.supabase.co/storage/v1/object/public/post-images/2022-11-10/f1334c60-71bb-40e7-a034-32e5c8697f7f.jpeg)

### Figma 怎么在手机预览效果呢？

去[这里](https://www.figma.com/downloads/)可以下载 Figma Mirror，你也可以直接在手机浏览器输入 [Figma.com/mirror](https://figma.com/mirror) ，再到电脑上选一个 Frame，就可以预览了。

### 如何等比缩放？

按 K 键（不是按着不动，而是按一下就可以了）后就可以进行缩放操作，再按 V 就可以回到普通缩放模式。

### 为什么一拉伸画板里面的东西就乱了？

里面元素的 Constraints （响应式约束）没有设置好，可以观看超能铜草帽的视频了解一下：[https://www.bilibili.com/video/BV1gA411B75R。](https://www.bilibili.com/video/BV1gA411B75R%E3%80%82) **如果想在拉伸时保持内部元素不动，可以按住 Cmd（Ctrl）再拉伸。**

### 为什么我刚刚安装的字体 Figma 不显示？

安装后重启一下就有了，如果是浏览器打开的刷新一下页面。

### 如何设置蒙版？

选中一个图层，右键选择 Use as mask，再从左侧图层列表中把其它图层拖拽到它上面。按快捷键 Cmd+Ctrl+M（Ctrl+Alt+M）也可以。顺便提一下，对于矩形、圆角矩形和圆形这种常规形状不需要使用蒙版，直接用 Frame 的裁切内容（Clip content）就行了。

![](https://dvpclzgdxhdlfgyqtoud.supabase.co/storage/v1/object/public/post-images/2022-11-10/69f800ec-fd11-4e3a-afcc-a0719fc3effe.png)

### 如何水平或垂直翻转图层呢？

选中图层，按快捷键 Shift+H （水平翻转）或 Shift+V （垂直翻转）。

### 如何调用组件？

可以直接从左侧 Assets 里面拖拽进画布。如果没有付费，只支持调用当前文件内组件；如果买了专业版或组织版，需要点击左侧 Assets 面板顶部的小书图标将组件发布出来，才可以在其他文件调用。

![调用与发布组件](https://6678-fx-2g8sb0jud25ff34e-1255718578.tcb.qcloud.la/cloudbase-cms/upload/2021-01-30/xwKg57w2ubCun1R2watKmtFKFCh97mBy_.png)

### 如何使文字或形状倾斜？

可以使用插件 [SkewDat](https://www.figma.com/community/plugin/741472919529947576/SkewDat) 或者 [Easometric](https://www.figma.com/community/plugin/750743440401413268/Easometric)。

### 怎么画虚线？

设置描边（Stroke）之后，点击三个点，在 Dashes 里面填写一个数字即可。这里的数字代表线段和空隙的长度，你还可以写 `2,3` 这种格式，表示 2px 线段 3px 空隙这样间隔的虚线。

![画虚线](https://6678-fx-2g8sb0jud25ff34e-1255718578.tcb.qcloud.la/cloudbase-cms/upload/2021-01-30/v25_VpS-3o1O93xPowmW0aMYaQ2YDTdN_.png)

### 如何只给线段一头设置箭头？

需要选中形状按回车进入编辑模式，选中一个锚点，在右边 Stroke 里面将其设置为箭头。

### 复制一个图层的所有属性

Mac 为 Cmd+Option+C，Windows 为 Ctrl+Alt+C。

### 复制一个图层单个属性

在右侧面板中选中该属性，按 Cmd+C（Ctrl+C）复制。颜色、描边、效果都可以这么选，按住 Cmd（Ctrl）还可以选中多个。

### 批量修改文本图层字体

选中一个文本图层，点击左上角菜单，依次进入 Edit -> Select all with same font，即可选中相同字体的图层，接着再到右侧属性里面替换字体即可。

![选中具有相同字体的文本图层](https://6678-fx-2g8sb0jud25ff34e-1255718578.tcb.qcloud.la/cloudbase-cms/upload/2021-01-30/8sJfLukE-lCnEp7uTZjuxNUJp0dM9IxF_.png)

### 如何对图片进行拉伸？

在 Figma 内，图片是一种填充方式，点击右侧面板中的 Fill 栏可以看到 image 各项属性，你可以点击顶部的下拉菜单来切换填充方式。顺便提一下，按下 Cmd+Option（Ctrl+Alt）并双击一个图片就可以把它变为裁切模式，裁切后的图片可以拉伸。

### 图片拖不进来？

有可能是图片太大了，使用 [Insert Big Image](https://www.figma.com/community/plugin/799646392992487942/Insert-Big-Image) 插件就可以了。

### 为什么打开文件后图片没了，或者图片是模糊的？

这是因为 Figma 还没加载完图片，可以耐心等一会，如果很长时间没出来可以尝试点击小眼睛隐藏再显示。

### 为什么背景模糊没效果。

背景模糊需要该图层是半透明的，你可以调整一下的图层的颜色透明度（注意是调整颜色的透明度而不是图层的透明度）。

![背景模糊](https://6678-fx-2g8sb0jud25ff34e-1255718578.tcb.qcloud.la/cloudbase-cms/upload/2021-01-30/il-2w59JKbFv250o77JR8ujZxzDp8Z9v_.png)

### 为什么总是显示内存不足或者卡顿？

可能是因为组件中有太多隐藏图层，大家作图时注意一下图层整洁，及时清理不需要的图层。同时，也需要注意一下一个文件或一个 page 里面不要放太多东西，合理拆分文件。如果上面两项你都做得很好，那可能该换电脑了。

### Figma 跟研发对接字体的字重不显示

首先，你需要保证研发电脑上也装了和你一样的字体，并且安装了 [font installer](http://figma.com/downloads)，如果没有的话就让他们安装相同的字体和 font installer 之后重启或刷新一下。更加详细的信息可以看一下超能铜草帽的这个视频：[https://www.bilibili.com/video/BV1m5411V7F9](https://www.bilibili.com/video/BV1m5411V7F9) 。

### 可以同时导出同一画布上的不同图层（形状）吗？

按住 Cmd（Ctrl）选中多个你要导出的图层，在右边面板最下面的 Export 点击导出按钮就行了。

### 如何导出一整个 PDF

点击左上角菜单，输入 PDF 搜索，选择 Export frames to PDF。

![导出一整个 PDF](https://6678-fx-2g8sb0jud25ff34e-1255718578.tcb.qcloud.la/cloudbase-cms/upload/2021-01-30/Y8S4nDi4xvQYCR0Vzm46q2WWdJMw-c2r_.png)

### Figma 如何导出其他文件？例如 Sketch

可以用 [Convertify Figma to Sketch XD 插件](https://www.figma.com/community/plugin/849159306117999028/Convertify-Figma-to-Sketch%2FXD)进行转换，不过这个插件只有几次免费试用。

## 其他

### Figma 要怎么入门呢？

推荐你观看[官方视频](https://www.figmacn.com/post/official-videos)和[超能铜草帽的视频](https://space.bilibili.com/108104104/)，然后上手练习。我还写过一篇[学习资源汇总](https://www.figmacn.com/post/figma-tutorial-and-resources)，可以参考参考。

### Figma 有哪些神奇的技巧？

Figma 有太多神细节和神技巧了。推荐你观看一下[这个视频](https://www.figmacn.com/post/figma-tips-tricks-superpower-your-workflow)，可以大大提高效率。此外还可以看一下[草帽的花式技巧视频](https://www.figmacn.com/post/figma-tips-and-tricks)和[Figma 独门秘笈](https://www.ifigma.design/)，以及我这个 [Figma 神奇的细节和技巧](https://space.bilibili.com/336488122/channel/detail?cid=98010)。

### 有没有 Figma 快捷键汇总？

有的，请看[这里](https://www.figmacn.com/post/all-figma-shortcuts)。

### 有没有 Figma 最佳实践？

我之前翻译过几篇，还有一些国内团队的实践心得：

- [使用 Figma 完成产品设计工作流](https://www.figmacn.com/post/juns-figma-workflow)
    
- [Figma 最佳实践（上）](https://www.figmacn.com/post/best-practice-1)
    
- [Figma 最佳实践（下）](https://www.figmacn.com/post/best-practice-2)
    
- [如何选择 group（组）或 frame（画框）？](https://www.figmacn.com/post/group-and-frame)
    
- [Figma 实践：以为是个青铜结果是个王者](https://www.figmacn.com/post/yux-figma-practice)
    
- [首先，你知道什么是 Figma 吧？](https://www.figmacn.com/post/figma-comprehensive-guide-by-red-ued)
    
- [最全的 Sketch 转 Figma 指南！](https://www.figmacn.com/post/sketch-to-figma-guide)
    

### Figma 有哪些好用的插件？

官方的[插件列表](https://www.figma.com/community?tab=plugins)可以看一下，此外也可以看一下[这个用户整理的一份插件列表](https://www.figmacn.com/post/recommended-figma-pugins)。不过 Figma 不安装插件已经很强大了，如无必要不用安装一堆插件。

### Figma 与 Sketch 相比有哪些优势？

好看、顺滑、符合直觉的组件机制以及云端统一文件管理，总的来说 Figma 是真正为设计师而做的产品，让你可以专心于设计本身而无需关心其他问题。目前唯一的问题可能是网络，但我觉得对一个追求上进的设计师来说这不算问题。

### Sketch 用户如何转向 Figma？

可以直接导入 Sketch 文件，但有可能会错乱，需要对文件稍作修改。有几篇文章可以看看：

- [最全的 Sketch 转 Figma 指南！](https://figmacn.com/post/sketch-to-figma-guide)
    
- [想从Sketch 切换到 Figma？送你一份详细的过渡指南！](https://figmacn.com/post/from-sketch-to-figma)