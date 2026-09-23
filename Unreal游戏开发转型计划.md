# Java 工程师 → Unreal 客户端/引擎开发 转型计划

> 制定日期：2026-09 ｜ 周期：2.5–3 年 ｜ 每周投入：约 8–12 小时
> 背景：3 年 Java 开发经验（OOP、设计模式、工程化能力可迁移）
> 目标市场：国内 UE 项目组（游戏科学、腾讯天美/光子、网易、鸣潮/库洛等）

---

## 一、总体路线图

| 阶段 | 时间 | 主题 | 核心产出 |
|---|---|---|---|
| 0 | 第 1 个月 | 环境与认知 | 跑通示例项目，确定主线 |
| 1 | 第 2–6 个月 | C++ 转型 + UE 入门 | 1–2 个小 prototype |
| 2 | 第 7–12 个月 | UE 系统深化 | 一个可玩垂直切片（Vertical Slice） |
| 3 | 第 13–18 个月 | 图形学与引擎原理 | 3–5 篇技术博客/源码笔记 |
| 4 | 第 19–30 个月 | 方向专精 + 作品集 | 主 Demo + 次 Demo + Game Jam 经历 |
| 5 | 第 30–36 个月 | 求职冲刺 | 简历、面试题库、offer |

主线策略：**玩法编程（Gameplay）→ 逐步深入引擎**。Java 后端经验在联机同步、数据层上是差异化优势。

---

## 二、分阶段计划

### 阶段 0：环境与认知（第 1 个月）

- [ ] **家用机**：安装 Unreal Engine 5（Epic Games Launcher）+ Visual Studio 2022（勾选"使用 C++ 的游戏开发"工作负载，与 UE 官方兼容性最稳）；可选 Rider for Unreal
- [ ] **工作机**：确认 VS 2026 已安装"使用 C++ 的桌面开发"工作负载，能编译控制台 C++ 工程即可（无需 UE）
- [ ] 建立双机 Git 私有仓库（笔记 + C++ 练习 + UE 工程源码），公司/家用双向同步
- [ ] **家用机**：运行并阅读 First Person、Third Person 模板工程源码
- [ ] **家用机**：浏览 Lyra Starter Game，感受正式框架结构
- [ ] **工作机**：了解岗位分工：玩法 / 引擎（渲染、物理、工具链）/ 技术美术（TA），确认主线为玩法方向
- [ ] 建立学习习惯：固定 B 站/笔记目录，本文件夹即学习仓库

**合格标准**：能独立创建工程、改示例参数并观察效果，编辑器操作不再陌生。

### 阶段 1：C++ 转型 + UE 入门（第 2–6 个月）

C++ 重点（对比 Java 心智模型的差异）：

- [ ] 指针与引用、值语义 vs 引用语义（Java 只有引用）
- [ ] 栈/堆内存模型、new/delete、内存泄漏概念
- [ ] RAII、智能指针（unique_ptr / shared_ptr）
- [ ] const 正确性、头文件与编译单元、链接基础
- [ ] 模板基础（能读懂即可，暂不深钻元编程）
- [ ] 移动语义、右值引用（Modern C++）
- [ ] 虚函数表、多重继承与 Java 接口的区别

UE 入门：

- [ ] 蓝图（Blueprint）基础：变量、函数、事件、宏——理解"什么该用蓝图、什么该用 C++"
- [ ] UObject 体系与 Actor 生命周期（BeginPlay / Tick / EndPlay）
- [ ] Component 组件化设计（对比 Java 的组合优于继承，你会很有共鸣）
- [ ] UE C++ API：UPROPERTY / UFUNCTION 宏、属性序列化、委托（Delegate）
- [ ] 调试：断点、UE_LOG、Stat 命令、Visual Studio 混合调试

**里程碑**：完成 1–2 个完整小 prototype（简易 FPS / 平台跳跃），能独立定位并修复崩溃。

### 阶段 2：UE 系统深化（第 7–12 个月）

- [ ] Gameplay Framework 全链路：GameMode / GameState / PlayerController / Pawn / Character / PlayerState / GameInstance
- [ ] Gameplay Tags（标签系统，UE 玩法逻辑的事实标准）
- [ ] 输入系统：Enhanced Input
- [ ] UI：UMG + Slate 基础，MVVM 思路
- [ ] 动画：AnimBP、状态机、Montage、Notify、动画蓝图与 C++ 交互
- [ ] AI：Behavior Tree + Blackboard + EQS
- [ ] 音频：Sound Cue / MetaSound 基础
- [ ] 资产管线：材质编辑器、Niagara 特效基础、Level 编辑、打包（Cook & Package）
- [ ] 版本管理：Perforce（行业主流）或 Git + Git LFS

**里程碑**：一个"垂直切片"中型项目（如 Roguelite 战斗 Demo，含 3–5 分钟完整体验循环），录屏发布到 B 站 / itch.io。

### 阶段 3：图形学与引擎原理（第 13–18 个月，可与阶段 4 并行）

数学与图形学：

- [ ] 《3D 数学基础》：向量、矩阵变换、四元数（旋转的表示是高频面试题）
- [ ] 渲染管线：顶点 → 光栅化 → 片元 → 输出合并；Forward vs Deferred
- [ ] PBR 基础概念：BRDF、粗糙度、金属度、IBL
- [ ] HLSL 入门：写 2–3 个自定义 Shader / 材质函数

引擎原理（结合 UE 源码）：

- [ ] 《游戏引擎架构》通读：主循环、游戏线程模型、内存管理、资源系统
- [ ] UE 反射系统：UObject / UClass / UProperty 如何生成与运作
- [ ] UE GC：引用追踪、Reachability、弱/强引用、为什么 UObject 不能随便 delete
- [ ] 模块与插件系统、Build Tool（UBT）构建流程
- [ ] 多线程：GameThread / RenderThread / RHIThread / TaskGraph / 异步加载
- [ ] 帧预算分析：Unreal Insights 使用

**里程碑**：输出 3–5 篇原理/源码阅读博客（掘金、知乎或自有博客）——国内社招强加分项。

### 阶段 4：方向专精 + 作品集（第 19–30 个月）

届时结合兴趣与市场二选一：

- **玩法向（推荐首选，岗位最多）**
  - [ ] Gameplay Ability System（GAS）：Ability / Effect / 属性集 / 预测与确认（Prediction）
  - [ ] 网络同步：Replication、RPC、Dedicated Server、角色移动组件
  - [ ] 战斗手感：输入缓冲、帧数据、受击反馈、镜头
- **引擎向（门槛高、竞争少、天花板高）**
  - [ ] 渲染：Lumen / Nanite 原理、后处理管线
  - [ ] 工具链：编辑器扩展、管线自动化（你的 Java 工程化经验可直接复用）

通用动作：

- [ ] 打磨作品集：1 个高质量主 Demo + 1 个次级 Demo
- [ ] 参加 1–2 次 Game Jam（Global Game Jam / indiePlay 相关活动），积累快速交付与团队协作案例
- [ ] 整理 GitHub：README、动图演示、技术文档

**里程碑**：作品集达到"面试官可深挖 30 分钟"标准。

### 阶段 5：求职冲刺（第 24 个月起可试探性投递，第 30–36 个月主投）

- [ ] 简历叙事：Java 工程素养 + UE 作品集 = "有工程化经验的转型者"
- [ ] C++ 八股：内存管理、虚函数、智能指针、移动语义、多线程与内存序
- [ ] 计算机基础：OS、网络（你有优势）、数据结构算法（用 C++ 重刷 LeetCode 即可）
- [ ] 图形学面试：渲染管线、PBR、遮挡剔除（Z-Buffer / Occlusion Culling）、Draw Call 优化
- [ ] 引擎面试：UObject/GC、GAS、蓝图 vs C++ 取舍、一帧都做了什么、卡顿如何定位
- [ ] 投递策略：先投 2–3 家练手复盘，主力瞄准目标厂商；重视内推、社招初级岗与"校招补录"通道

---

## 三、阶段准备与获取途径详解

> 本章为各阶段开工前的"准备清单"：要做什么准备、装什么软件、从哪里装、资料从哪里获取。所有链接/渠道均为免费或注明价格，均为官方或公认可靠来源。

### 3.0 一次性通用准备（第 1 周完成）

**账号注册**

| 账号 | 地址 | 用途 |
|---|---|---|
| Epic Games | epicgames.com（国内可直接注册下载，无需加速器） | 下载 UE、领免费资产 |
| GitHub | github.com | 源码阅读 + 双机 Git 仓库 |
| Gitee | gitee.com | GitHub 访问慢时的国内镜像仓库备选 |
| LeetCode | leetcode.cn | 算法练习（中文站） |
| B 站 | bilibili.com | 视频教程 |
| Fab | fab.com（Epic 资产平台，可用 Epic 账号登录） | 免费/付费模型、材质、动画资产 |
| Nowcoder（牛客） | nowcoder.com | 后期面经、笔试真题 |
| BOSS 直聘 | 招聘 App | 后期求职沟通 |

**家用机硬件与环境检查**
- 硬盘：UE5 引擎本体约 50–100 GB，加工程缓存建议预留 **≥150 GB SSD**（机械盘编译/加载会非常痛苦）
- 内存 ≥16 GB（32 GB 更稳）；显卡建议 NVIDIA RTX 2060 / AMD 同档以上，并更新到最新驱动
- 安装 **Visual Studio 2022 Community**（visualstudio.microsoft.com 免费下载）→ 安装器勾选"**使用 C++ 的桌面开发**"工作负载（UE5.x 官方兼容性最稳；若当前 UE 版本文档要求更新 VS 版本，以文档为准）
- 安装 **Git**（git-scm.com），配置 `git config --global core.longpaths true`（UE 工程路径很深，Windows 必开）

**工作机（仅 VS 2026）**
- 打开 Visual Studio Installer → 修改 → 勾选"使用 C++ 的桌面开发"（含 MSVC 工具集 + Windows SDK），能编译控制台工程即可
- 若公司环境不便安装 Git：用 GitHub 网页端浏览源码/下载 zip 亦可行（周四"源码日"完全够用）
- ⚠️ 合规提醒：学习用的私有仓库**不要混入公司代码**；确认公司网络对 GitHub/网盘的访问政策，避免外发数据违规

**建立学习仓库**（建议目录结构）

```
game-dev-plan/
├── notes/            # 读书笔记、源码笔记（Markdown）
├── cpp-exercises/    # 工作日 VS 控制台练习题
├── design-docs/      # 周末 UE 实践的设计文档/周任务清单
└── weekly-review/    # 周复盘（YYYY-WW.md 命名）
```

### 3.1 阶段 0：环境与认知

| 事项 | 途径 |
|---|---|
| 安装 UE5 | 家用机：epicgames.com 下载 **Epic Games Launcher** → 库 → 侧栏"虚幻引擎"→ 安装最新 5.x 正式版（只装 1 个大版本即可，可勾选"启用程序框架文件"以外的默认组件） |
| 关联 IDE | 首次用 VS 打开 .uproject 时右键 →"生成 Visual Studio 项目文件"；Epic 启动器设置里也可指定引擎路径 |
| 官方入门课 | dev.epicgames.com/documentation → 学习路径："Your First Hour in UE5"（中文文档免费，需 Epic 账号） |
| Lyra / 模板工程 | Launcher 新建项目页直接选择 Lyra Starter Game、First Person 等模板（免费，随安装下载） |
| 岗位认知资料 | Epic 官方招聘页、各厂商技术公众号/知乎（游戏科学、腾讯游戏学院 developer.tencent.com 的公开分享）、GDC 演讲 B 站搬运 |

### 3.2 阶段 1：C++ 转型 + UE 入门

| 资料 | 获取途径 |
|---|---|
| 《C++ Primer（第6版）》 | 京东/当当纸质；微信读书、京东读书等主流电子书平台检索电子版（机械工业出版社） |
| 《Effective C++》《Effective Modern C++》 | 同上，电子/纸质均可 |
| LearnCpp.com | 免费在线，浏览器直接读（英文） |
| cppreference | 权威文档；有中文站 zh.cppreference.com（更新略滞后，以英文为准） |
| B 站 UE5 入门系列 | 搜索"UE5 入门 教程"，筛选 **2023 年后发布、播放量高、成系列** 的 UP 主，选定一套跟完即可，勿多开 |
| UE C++ 练习工程 | 家用机 UE"新建项目 → C++ → 空项目"，周末跟练；工作日在 VS 控制台工程练语法 |

### 3.3 阶段 2：UE 系统深化

| 资料 | 获取途径 |
|---|---|
| Gameplay Framework / UMG / Enhanced Input / Behavior Tree 指南 | Epic 官方文档对应章节（dev.epicgames.com/documentation，中文），全部免费 |
| 免费美术资产（做 Demo 用） | **Fab**（fab.com）免费专区 + Epic 账号在 UE 内免费使用原 Quixel Megascans 扫描资产；**Kenney.nl**（CC0 素材包）；itch.io 免费素材区 |
| 免费动画库 | **Mixamo**（mixamo.com，Adobe 账号免费登录，下载 FBX 动画直接可用于 UE） |
| 版本管理 | UE 工程用 Git + **Git LFS**（GitHub 免费档额度紧张，可用 **Gitee 私有仓库**，免费 LFS 额度更宽松）；Perforce 为行业工具（Helix Core 5 用户内免费），此阶段了解即可，求职时能说出区别就够 |
| 录屏 | OBS Studio（obsproject.com，免费开源），Demo 演示视频用 |

### 3.4 阶段 3：图形学与引擎原理

| 资料 | 获取途径 |
|---|---|
| 《3D 数学基础：图形与游戏开发》 | 京东/当当纸质（清华大学出版社） |
| 《游戏引擎架构》（第3版） | 京东/当当纸质（电子工业出版社）；部分电子书平台有上架 |
| 《实时渲染》RTR | 纸质中文第3版；**第4版英文原书**在官网 rer3d.com 购买电子版，官网还提供部分样章 PDF 免费读 |
| GPU Gems 1 | NVIDIA 官网**免费在线全文**：developer.nvidia.com/gpugems（2、3 卷同样免费） |
| LearnOpenGL | learnopengl-cn.github.io 免费中文全文；其 GLFW+OpenGL 示例为公司机 VS 可直接编译的控制台程序 |
| UE 源码 | github.com/EpicGames/UnrealEngine 在线浏览；完整 clone 需在 dev.epicgames.com 个人设置中**绑定 GitHub 账号**（免费，需 Epic 账号）获得官方仓库访问权 |
| GDC 演讲 | GDC 官方 YouTube 频道大量免费演讲；B 站搜索"GDC 虚幻"有搬运（《永劫无间》《原神》相关技术分享等） |
| Unreal Insights | UE 内置，无需单独安装；也可在 Epic Launcher 设置勾选"独立版本"启用 |
| Shader 练手 | Shadertoy.com（在线 GLSL，免费）练思想；HLSL 以 UE 材质编辑器 + 官方 HLSL 着色器文档为准 |

### 3.5 阶段 4：方向专精 + 作品集

| 资料 | 获取途径 |
|---|---|
| GAS 官方资料 | Epic 文档"Gameplay Ability System"章节 + Lyra 工程源码（Launcher 直接创建） |
| GAS 系统课程（英文） | Udemy 搜索 Stephen Ulibarri 的 UE5 C++/GAS 系列课程，付费但常年促销约 $10–20，是该领域公认入门课 |
| 网络同步 | Epic 文档"网络复制（Network Replication）"专题；《Game Engine Architecture》网络章节 |
| Game Jam | **itch.io/jams**（常年线上 game jam，个人可远程参加）；**Global Game Jam**（globalgamejam.org，每年 1 月，国内多个线下站点）；indiePlay（中国 indie 游戏盛典）作为了解行业生态的窗口 |
| 作品发布 | B 站账号（视频）+ itch.io 账号（网页/客户端 Demo，免费注册发布）+ GitHub Pages（项目主页，免费） |

### 3.6 阶段 5：求职冲刺

| 资料 | 获取途径 |
|---|---|
| 游戏开发面经 | Nowcoder（牛客）App/网站 → 讨论区搜"UE 客户端 面试""游戏开发"；GitHub 搜"C++ 面试"类整理仓库 |
| C++/OS/网络 八股 | 《Effective C++》系列 + 牛客题库；不需要额外买书 |
| 简历工具 | Markdown 简历开源方案（GitHub 搜 resume / 简历模板，在线构建后导出 PDF），简洁单页为准 |
| 投递渠道 | 各公司官方社招官网（腾讯 join.qq.com、网易 games 招聘页、游戏科学官网等）+ BOSS 直聘 + **内推**（B 站/牛客/掘金上员工发的内推码，转化率最高） |
| 笔试真题 | 牛客"动态求职"区历年真题 + 力扣周赛（保持手感） |

---

## 四、每周执行节奏（双机分工）

> 📅 **逐日任务已拆解为 156 个周文件**：见 `周计划/` 文件夹（入口 `周计划/README.md`，从 2026-09-24 起每周一份）。
> 计划改版/主题重排：编辑 `generate_weekly_plans.js` 顶部的主题表后运行 `node generate_weekly_plans.js` 即可全部重新生成。

> 约束：工作电脑仅 VS 2026、无法运行 UE 引擎；家用电脑可跑 UE。
> 总思路：**工作日"输入 + 轻实践"（纸面与 C++ 代码），周末"输出 + 引擎实践"（UE 落地）**，形成"周中读代码、周末跑代码"的闭环。

### 工作日 · 公司电脑（1–2h/天，逐日主题）

| 星期 | 时长 | 行动 |
|---|---|---|
| 周一 | 1h | **理论输入日**：读 C++ 书（Primer / Effective 系列）或阶段书目（《游戏引擎架构》《3D 数学基础》），做笔记 |
| 周二 | 1h | **理论输入日**：读 Epic 官方文档 / Developer Community 教程 / UE 源码文章，把"想亲手验证的点"记入《周末任务清单》 |
| 周三 | 1–2h | **动手实践日**：VS 2026 建 C++ 控制台工程，把当天所学写代码验证（指针、RAII、智能指针、多线程）；或 LeetCode 用 C++ 刷 1–2 题 |
| 周四 | 1h | **源码/设计日**：GitHub 在线阅读 EpicGames/UnrealEngine 源码（重点跟当阶段模块，如 UObject/GC/Gameplay Ability System），或纸面设计周末要做的 Demo 的类结构与流程 |
| 周五 | 1h | **复盘规划日**：周复盘笔记、整理《周末任务清单》（明确到"周六 2h 完成 XXX 可验证目标"）；机动时间看视频教程 |

要点：
- 所有笔记、练习题、UE 工程源码放同一个 **Git 私有仓库**（GitHub/Gitee），公司/家里双向 push-pull，两机无缝衔接
- 公司电脑建议装一个 Markdown 笔记工具（VS Code / Obsidian，若软件受限则用仓库内 .md 直接写）
- 工作日不碰引擎也能持续推进：C++、数学、图形学理论、源码阅读、算法、博客写作占转型期 60% 以上工作量

### 周末 · 家用电脑（2–4h × 2 天，整块输出）

| 时段 | 行动 |
|---|---|
| 周六（2–3h） | 按《周末任务清单》执行 UE 实践：跟教程、写 prototype、实现周中设计的模块；遇到周中"想验证的点"优先做 |
| 周日（1–2h） | 调试与收尾：修 Bug、提交 Git、录屏/截图记录进展；把周末产生的新问题写回周中阅读计划 |

### 双机分工与阶段映射

| 阶段 | 工作日（公司电脑） | 周末（家用电脑） |
|---|---|---|
| 0 环境 | 了解 UE 架构、读官方文档、确认 VS 2026 已装"使用 C++ 的桌面开发"工作负载 | 安装 UE5 + 跑通 First Person / Lyra 示例 |
| 1 C++ 入门 | C++ 书 + 控制台练习 + LeetCode | UE 入门教程跟做、小 prototype |
| 2 系统深化 | 文档/源码阅读、垂直切片方案设计 | 垂直切片实现与调试、打包 |
| 3 图形学引擎 | 数学/《引擎架构》/RTR 阅读；公司机可编译 LearnOpenGL 等轻量控制台级图形样例 | Shader 实操、Unreal Insights 性能分析 |
| 4 专精作品集 | GAS/网络文档与源码、写技术博客 | 主/次 Demo 打磨、Game Jam |
| 5 求职 | C++ 八股、算法、简历与面经整理 | 项目复盘演练、作品集录屏 |

原则：**"做完"优先于"做好"**，每个 Demo 严格控制范围（Scope），杜绝烂尾。
每 3–6 个月做一次复盘：调整书单、评估进度、跟踪引擎版本与市场变化。

---

## 五、参考资料清单（速查索引，获取渠道详见第三章）

### C++
| 资料 | 说明 |
|---|---|
| 《C++ Primer（第6版）》 | 主教材，阶段 1 选读（跳过与 Java 相似部分，重点看内存、模板、智能指针） |
| 《Effective C++（第3版）》 | 55 条改善程序与设计的规范，阶段 1 后半起常备 |
| 《Effective Modern C++》 | 42 条针对 C++11/14 的实务（auto、移动语义、并发） |
| cppreference.com | 权威 API 查询，替代搜索引擎 |
| LearnCpp.com | 免费英文教程，体系清晰，适合碎片时间 |

### Unreal Engine
| 资料 | 说明 |
|---|---|
| Epic 官方中文文档（dev.epicgames.com/documentation） | 最权威的入门手册 + API 参考 |
| 《Your First Hour in UE5》官方视频课 | 阶段 0/1 入门 |
| Lyra Starter Game | 官方范例，学习 GAS 与现代化框架组织方式 |
| Valley of the Ancient | 官方高质量场景范例，学习资产管线 |
| Unreal On Demand | 官方订阅制视频教程平台（含大量 GDC/UGS 演讲） |
| B 站 UE5 免费入门系列 | 选播放量高、成体系的 UP 主系列课跟完即可，勿贪多 |
| 《Gameplay Ability System》官方文档 | 阶段 4 玩法向核心 |
| Epic Developer Community（dev.epicgames.com/community） | 免费教程库 + 官方论坛 |

### 图形学与引擎原理
| 资料 | 说明 |
|---|---|
| 《3D 数学基础：图形与游戏开发》（Fletcher Dunn） | 向量/矩阵/四元数，薄但精 |
| 《游戏引擎架构》（Jason Gregory，第3版） | 引擎全貌必读，阶段 3 主线 |
| 《实时渲染》（Real-Time Rendering，RTR） | 图形学圣经，选读渲染管线与 PBR 章节 |
| GPU Gems 1（NVIDIA 官方免费在线书） | 实战技巧库，按需查阅 |
| GDC Vault / 各厂商 GDC 演讲（B 站多有搬运） | 大厂工程实践（如《原神》《永劫无间》相关技术分享） |
| Unreal Insights 官方文档 | 性能分析工具 |

### 求职与其他
| 资料 | 说明 |
|---|---|
| LeetCode（用 C++ 重刷 HOT 100） | 算法面试，Java 底子可省一半时间 |
| 《剑指 Offer》 | 可选，国内笔试常见题型 |
| itch.io / B 站 | 作品发布与曝光渠道 |
| Global Game Jam（globalgamejam.org） | 每年 1 月，48 小时极限开发 |
| 掘金/知乎"UE5"话题 | 中文社区经验帖与面经 |

### 工作电脑适用（无 UE、仅 VS 2026）
| 资料/工具 | 说明 |
|---|---|
| GitHub: EpicGames/UnrealEngine | 在线阅读 UE 源码（申请 Epic 账号关联 GitHub 可得完整仓库，也可浏览器直接看），无需引擎 |
| VS 2026"使用 C++ 的桌面开发"工作负载 | 编译控制台 C++ 练习的前提，请确认已安装 |
| LearnOpenGL 中文教程（learnopengl-cn.github.io） | 教程自带的 GLFW + OpenGL 示例为控制台级轻量程序，公司机可编译运行，是阶段 3 图形学的主力自学材料 |
| cppreference.com / LearnCpp.com | 文档站与碎片化教程，浏览器即可 |
| Git 私有仓库（GitHub/Gitee） | 双机同步笔记、练习题与 UE 工程源码的枢纽 |

---

## 六、风险与对策

| 风险 | 对策 |
|---|---|
| 时间碎片化导致项目烂尾 | 每个 Demo 限定 4–8 周，范围小于能力 |
| C++ 转型阵痛超预期 | 阶段 1 以"能调试 UE 工程"为合格线，深层细节留到阶段 3 |
| 引擎大版本变化（UE6）/AI 工具链冲击 | 图形学、框架设计、源码理解不过时；每半年复盘一次技术选型 |
| 阶段 2 结束进度不及预期 | 备选路线：平移 Unity 玩法岗（C# 一周上手、岗位更多），作品集与图形学知识两条线通用 |

---

## 七、季度自查表（每季度末打钩复盘）

- [ ] 本季度计划任务完成率 ≥ 70%？
- [ ] 是否有可运行/可展示的新产出？
- [ ] C++ 是否还在按"Java 思维"写代码（大量裸 new、不写析构）？
- [ ] 博客/笔记是否持续更新？
- [ ] 是否需要调整下季度目标或整体路线？

> 建议每完成一个阶段，回到本文件更新勾选状态与心得，让这份计划随你的成长而演化。
