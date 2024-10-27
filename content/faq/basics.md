---
title: 基础问题
tags:
  - 基础
---
## Frame 是什么？它和组（Group）有什么区别？ {#frame-vs-group}

Frame 是一种更先进的组，它不仅可以把元素打包成组，还带有自身属性（背景色、描边、圆角等），内部元素还能通过响应式约束来实现自适应。**如无必要，尽量使用 Frame，不然就浪费了 Figma。**具体细节可以参考下面的文章和视频：

- [如何选择 group（组）或 frame（画框）？](https://www.figmacn.com/post/group-and-frame)
- [多用 Frame，不然 Figma 白用了](https://www.bilibili.com/video/BV1Tv411z7bw/)

## 普通矩形如何转换为 Frame？ {#swap-rectangle-to-frame}
可以在矩形上方放一个元素，比如文字图层，选中它们并点击右边的添加自动布局（auto layout），就可以将这个矩形变为 frame，这个矩形的背景色、描边都会被复制到新的 frame 上。

![[convert-rectangle-to-frame.mp4]]

## Frame 和 Group 如何互相转换？ {#swap-group-to-frame}

选中 Group 后，在右边尺寸上面有一个下拉选项，直接点击切换就行了。

![[Pasted image 20231129204951.png]]

## Figma 怎么在手机预览效果呢？ {#preview-in-mobile}

去[这里](https://www.figma.com/downloads/)可以下载 Figma Mirror，你也可以直接在手机浏览器输入 [Figma.com/mirror](https://figma.com/mirror) ，再到电脑上选一个 Frame，就可以预览了。

## 如何等比缩放？ {#scale}

按 K 键（不是按着不动，而是按一下就可以了）后就可以进行缩放操作，再按 V 就可以回到普通缩放模式。

## 如何设置蒙版？ {#how-to-set-mask}

选中一个图层，右键选择 Use as mask，再从左侧图层列表中把其它图层拖拽到它上面。按快捷键 `Cmd+Ctrl+M`（Windows 是 `Ctrl+Alt+M`）也可以。顺便提一下，对于矩形、圆角矩形和圆形这种常规形状不需要使用蒙版，直接用 Frame 的裁切内容（Clip content）就行了。

![[Pasted image 20231129205022.png]]

## 如何水平或垂直翻转图层呢？ {#how-to-flip}

选中图层，按快捷键 Shift+H （水平翻转）或 Shift+V （垂直翻转）。

## 如何调用组件？

可以直接从左侧 Assets 里面拖拽进画布。如果没有付费，只支持调用当前文件内组件；如果买了专业版或组织版，需要点击左侧 Assets 面板顶部的小书图标将组件发布出来，才可以在其他文件调用。

## 如何使文字或形状倾斜？

可以使用插件 [Skew](https://www.figma.com/community/plugin/1219749104610050886) 或者 [Easometric](https://www.figma.com/community/plugin/750743440401413268/Easometric)。

## 怎么画虚线？

设置描边（Stroke）之后，点击三个点，在 Dashes 里面填写一个数字即可。这里的数字代表线段和空隙的长度，你还可以写 `2,3` 这种格式，表示 2px 线段 3px 空隙这样间隔的虚线。

![[Pasted image 20231129205220.png]]

## 如何只给线段一头设置箭头？

需要选中形状按回车进入编辑模式，选中一个锚点，在右边 Stroke 里面将其设置为箭头。

![[04732d0b-ed42-4c95-8558-c89cd0ad39da.mp4]]

## 如何对图片进行拉伸？

在 Figma 内，图片是一种填充方式，点击右侧面板中的 Fill 栏可以看到 image 各项属性，你可以点击顶部的下拉菜单来切换填充方式。顺便提一下，按下 Cmd+Option（Ctrl+Alt）并双击一个图片就可以把它变为裁切模式，裁切后的图片可以拉伸。

![[3b6bfbbc-7d84-415c-8c41-d08eff716b1a.mp4]]

## 左侧栏图层缩略图上有一个框是啥意思？

如下图，这种图层是自动布局内部的绝对定位图层，它可以自由定位而不受自动布局的影响。想要了解更多可以看[这个视频](https://www.bilibili.com/video/BV1yK411c712?p=14)。

![[Pasted image 20231129213522.png]]

## 可以同时导出同一画布上的不同图层（形状）吗？

按住 Cmd（Ctrl）选中多个你要导出的图层，在右边面板最下面的 Export 点击导出按钮就行了。

## 如何导出一整个 PDF

点击左上角菜单，依次选择 File -> Export frames to PDF。

![[Pasted image 20231129212034.png]]

## Figma 如何导出其他文件？例如 Sketch

可以用 [Convertify Figma to Sketch XD 插件](https://www.figma.com/community/plugin/849159306117999028/Convertify-Figma-to-Sketch%2FXD)进行转换，不过这个插件只有几次免费试用。

## Figma 有哪些神奇的技巧？

Figma 有很多神奇的技巧，推荐你观看一下[这个视频](https://www.bilibili.com/video/BV1x4411B7qv)，可以大大提高效率。此外还可以看一下[Figma 独门秘笈](https://www.ifigma.design/)，以及我这个 [Figma 神奇的细节和技巧](https://space.bilibili.com/336488122/channel/detail?cid=98010)。

另外，我还在 [[figma/tricks/basics]] 长期更新一些小技巧。

## 有没有 Figma 快捷键汇总？

有的，请看 [[all-shortcuts]]。

## Figma 有哪些好用的插件？

可以看看 [Tovi](https://tovi.fun/) 的[推荐插件](https://figma.tovi.fun/)。
