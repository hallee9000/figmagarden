---
title: 疑难杂症
---
## 为什么一拉伸 frame 里面的东西就乱了？ {#things-get-messed-up-when-stretching-frame}

里面元素的 Constraints （响应式约束）没有设置好，可以观看超能铜草帽的视频了解一下：[https://www.bilibili.com/video/BV1gA411B75R。](https://www.bilibili.com/video/BV1gA411B75R%E3%80%82) **如果想在拉伸时保持内部元素不动，可以按住 Cmd（Ctrl）再拉伸。**

## 为什么我刚刚安装的字体 Figma 不显示？ {#installed-font-not-shown}

安装后重启一下就有了，如果是浏览器打开的刷新一下页面。

## 图片拖不进来？

有可能是图片太大了，Figma 限制图片单边最大 4096px。我们可以使用 [Insert Big Image](https://www.figma.com/community/plugin/799646392992487942/Insert-Big-Image) 插件插入大图。

## 为什么打开文件后图片没了，或者图片是模糊的？

这是因为 Figma 还没加载完图片，可以耐心等一会，如果很长时间没出来可以尝试点击小眼睛隐藏再显示。

## 为什么背景模糊没效果？

背景模糊需要该图层是半透明的，你可以调整一下的图层的颜色透明度（注意是调整颜色的透明度而不是图层的透明度）。

![[Pasted image 20231129211941.png]]

## 为什么轮廓化或扁平化有时候会把形状搞乱？

> 本条解决方案来自 [Gleb 的推文](https://x.com/gleb_sexy/status/1588591379537530880?s=20)

有时候在你执行轮廓化（Outline stroke，Cmd+Shift+O）或者扁平化（Flatten，Cmd+E）操作时，形状图层会变得张牙舞爪，比如下图。这里有一些操作可以帮你避免此类情况。

![[Pasted image 20240113141046.png]]


首先，你可以尝试在 Figma 中：
- 复制为 SVG 再粘贴；
- 复制一个出来，把这俩合并在一起（Cmd+E）；
- 复制一个出来，把这俩用布尔 Union 组合在一起。
以上操作没有顺序之分，可以尝试其中一个也可以任意组合。

![[Pasted image 20240113141448.png]]

将一个形状拆分为多个图层，使用布尔 Union 组合，再扁平化。如果拆分一个地方不起作用，尝试拆分另一处。

如果进行 Union 操作时，创建出一个空的形状，那你可以尝试将原始的路径分组，例如首先将路径 1 和 2 合并，然后将结果与路径 3 合并，再扁平化等。

最后，你还可以尝试将形状旋转一定的角度，扁平化之后移动一下，再旋转回来。有时候你也可以试试 [Fill Rule Editor](https://www.figma.com/community/plugin/771155994770327940) 这个插件转换一下 Fill rule。
![[Pasted image 20240113142459.png]]

## 为什么总是显示内存不足或者卡顿？

可能是因为组件中有太多隐藏图层，大家作图时注意一下图层整洁，及时清理不需要的图层。同时，也需要注意一下一个文件或一个 page 里面不要放太多东西，合理拆分文件。如果上面两项你都做得很好，那可能该换电脑了。

## Figma 跟研发对接字体的字重不显示

首先，你需要保证研发电脑上也装了和你一样的字体，并且安装了 [font installer](http://figma.com/downloads)，如果没有的话就让他们安装相同的字体和 font installer 之后重启或刷新一下。更加详细的信息可以看一下超能铜草帽的这个视频：[https://www.bilibili.com/video/BV1m5411V7F9](https://www.bilibili.com/video/BV1m5411V7F9) 。