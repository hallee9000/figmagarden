---
title: 设计系统
tags:
  - 设计系统
  - 变量
---
## 移动组件到另一个文件 {#move-component-to-another-file}

有时候我们希望把组件从一个文件移动到另一个文件，并保持设计稿中组件的连接。比如下面的视频中，我们把按钮组件从 App 文件移动到 Design system 文件，我们可以这么操作：
1. 在 App 文件中将该组件发布为团队组件库（Team library）；
2. 在 Design system 文件中开启 App 组件库，Design system 文件同时也要发布为组件库；
3. 在 App 文件中使用 `Cmd + X` 剪切按钮组件，到 Design system 文件中使用 `Cmd + V` 粘贴；
4. 此时在右下角会询问是否要发布刚刚粘贴的组件，点击发布；
5. 回到 App 文件更新组件，这个组件就连接到转移的组件了。

![[move-component-to-another-page.mp4]]
## 替换组件实例时保持自适应 {#keep-auto-layout-when-switch-variants}
当我们的头像组件容器尺寸为固定（fixed）时，把它放在其他组件内，切换尺寸变体时，它的尺寸不会变化；我们可以把头像容器设置为自动布局的自适应内容（hug content），这样当我们切换变体时，它的尺寸就会变化了。

![[nested-component.mp4]]