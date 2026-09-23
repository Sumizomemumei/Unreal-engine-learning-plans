const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '周计划');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const WD = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const p2 = (n) => String(n).padStart(2, '0');
const fmtFull = (d) => `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
const fmtShort = (d) => `${d.getMonth() + 1}/${d.getDate()}`;

function weekDays(i) {
  const days = [];
  let start, count;
  if (i === 1) { start = new Date(2026, 8, 24); count = 4; }
  else {
    start = new Date(2026, 8, 28);
    start.setDate(start.getDate() + (i - 2) * 7);
    count = 7;
  }
  for (let d = 0; d < count; d++) {
    const dt = new Date(start);
    dt.setDate(start.getDate() + d);
    days.push(dt);
  }
  return days;
}

const PHASES = [
  { name: '阶段0 · 环境与认知', start: 1, weeks: 4 },
  { name: '阶段1 · C++ 转型 + UE 入门', start: 5, weeks: 22 },
  { name: '阶段2 · UE 系统深化（垂直切片）', start: 27, weeks: 26 },
  { name: '阶段3 · 图形学与引擎原理', start: 53, weeks: 26 },
  { name: '阶段4 · 方向专精 + 作品集（GAS 主线）', start: 79, weeks: 52 },
  { name: '阶段5 · 求职冲刺', start: 131, weeks: 26 },
];
const phaseOf = (i) => PHASES.find((ph) => i >= ph.start && i < ph.start + ph.weeks);

// [学习线A(周一至周三晚), UE线B(周二文档/周四源码/周末实践)]
const P1 = [
  ['C++ 基础与 Java 差异：类型 / 运算符 / 控制流', '把 First Person 模板的 C++ 代码逐行读懂（加中文注释）'],
  ['函数：声明与定义 / 默认参数 / 重载', '给模板工程加血量变量与伤害日志'],
  ['指针与引用（心智模型最大差异，重点攻克）', '蓝图基础：变量 / 函数 / 事件，做一个开门交互'],
  ['复合类型：指针的指针 / const 引用 / auto', '蓝图与 C++ 混合：简单 UI 交互'],
  ['string、vector 与数组', '动态生成：SpawnActor 生成可拾取物'],
  ['动态内存：new/delete、内存泄漏、悬垂指针', 'Actor 生命周期：BeginPlay / Tick / EndPlay 实验与笔记'],
  ['RAII 与智能指针：unique_ptr / shared_ptr', '组件化：写一个自定义 ActorComponent'],
  ['作用域、生命周期与链接；命名空间', 'UE 调试三板斧：断点 / UE_LOG / PrintString'],
  ['《Effective C++》条目 1–20', '原型1（简易FPS）周1：射击与命中判定'],
  ['《Effective C++》条目 21–35', '原型1 周2：敌人生成与生命流程'],
  ['类：构造/析构、三/五法则、拷贝控制', '原型1 周3：HUD 与 GameMode 游戏流程'],
  ['运算符重载与隐式类型转换', '原型1 周4：手感打磨 + 录屏存档'],
  ['继承与虚函数、vtable 思想（对比 Java）', '蓝图通信三件套：接口 / Cast / 事件，对比实验'],
  ['委托与回调：函数指针 / std::function（对比 Java Listener）', 'Enhanced Input 初探：重构原型1输入'],
  ['模板：函数/类模板（对比 Java 泛型）', '动画蓝图基础：角色待机 / 移动'],
  ['STL 容器与迭代器：vector / map 熟练化', '行为树初探：怪物简单巡逻'],
  ['移动语义与右值引用（《Effective Modern C++》选读）', 'UMG 基础：搭建主菜单'],
  ['lambda 表达式与现代写法', '音效：受击与拾取声音反馈'],
  ['异常处理与 RAII 资源管理', '原型2（平台跳跃）周1：移动与关卡'],
  ['编译与链接：头文件守卫 / .lib / 常见报错排查', '原型2 周2：收集物与胜利条件'],
  ['多线程入门：std::thread / mutex（对比 JUC，建立映射）', '原型2 周3：UI 收尾 + 录屏'],
  ['阶段1复盘：整理《我的 Java 惯性错误清单》20 条', '作品归档：两个原型整理进 Git，发布展示'],
];

const P2 = [
  ['Gameplay Framework 全链路深读（GameMode / GameState / PlayerController / Pawn / Character）', '创建垂直切片工程 + 自己的 GameMode 跑通'],
  ['Gameplay Tags 深读', '用 Tags 驱动状态机：buff / 禁用实验'],
  ['Enhanced Input：IMC / 组合键 / 手柄', '输入系统全面重构为手柄可用'],
  ['Character 移动组件与行走模式', '冲刺 / 蹲伏 / 体力系统'],
  ['UMG 布局与数据绑定', '战斗 HUD：血条 / 体力 / 技能 CD'],
  ['UI 逻辑分层（MVC 思想，类比你的前后端经验）', '主菜单 / 暂停 / 结算全流程打通'],
  ['动画蓝图架构与 Blend Space', 'Locomotion 位移动画完整配置'],
  ['动画状态机与过渡规则', '跳跃 + 攻击动画连接'],
  ['Montage 与 Notify', '攻击动画驱动伤害判定'],
  ['行为树 + 黑板', '敌人 AI 周1：巡逻 / 追击 / 攻击'],
  ['EQS 与 AI Perception', '敌人 AI 周2：视听感知与警觉等级'],
  ['音频：SoundCue / MetaSound', '战斗音效与 BGM 分层'],
  ['材质系统：参数 / 函数 / 实例', '三个场景的材质升级'],
  ['Niagara 初探', '受击与拾取特效'],
  ['关卡流程与加载', '大厅 → 战斗两关卡串联'],
  ['垂直切片设计文档：核心循环 + Scope 清单', '设计评审并定稿（design-docs/）'],
  ['GAS 预习：属性集合概念', '切片迭代1：战斗循环'],
  ['性能思维：Tick 规避 / 缓存友好', '切片迭代1：敌潮与刷怪'],
  ['SaveGame 与序列化', '切片迭代2：存档与分数持久'],
  ['打包发布：Cook / Windows 独立运行', '切片迭代2：可玩版本打包自测'],
  ['源码阅读：Actor 与组件体系', '切片迭代3：手柄与 UI 完善'],
  ['源码阅读：委托与事件系统', '切片迭代3：bug bash'],
  ['GDC 战斗手游技术分享（B站搬运）', '数值调平衡 + 录 5 分钟完整流程'],
  ['Git LFS 工程实践与分支策略', '仓库整理：README + 截图 + 演示链接'],
  ['验收自问：一次攻击从输入到结算经过几行代码？', '切片发布到 B 站 / itch.io'],
  ['阶段2复盘 + 阶段3书目到货与环境准备', '缓冲周：按反馈修缺'],
];

const P3 = [
  ['3D 数学：向量、点积、叉积', 'UE 中验证：攻击角度判定'],
  ['3D 数学：矩阵与变换', '工作机写变换组合 C++ 小 demo'],
  ['3D 数学：四元数与旋转', '相机四元数插值平滑'],
  ['数学章复盘 + 错题整理', '课后习题集中完成（笔记）'],
  ['LearnOpenGL：渲染管线与三角形', '公司机编译 GLFW + OpenGL 跑通'],
  ['LearnOpenGL：着色器入门', '顶点 / 片元着色器练习'],
  ['LearnOpenGL：纹理与变换', '贴图 + 矩阵变换练习'],
  ['LearnOpenGL：坐标系统与深度测试', '旋转立方体完整 demo'],
  ['《游戏引擎架构》：引擎总览与游戏主循环', '画 UE 一帧流程图（笔记）'],
  ['《游戏引擎架构》：游戏循环与帧预算', 'Unreal Insights 剖析自己项目一帧'],
  ['《游戏引擎架构》：实时渲染引擎架构', '观察渲染 Pass 与渲染文档'],
  ['《游戏引擎架构》：着色器系统', '自定义 .usf 着色器实验'],
  ['《游戏引擎架构》：内存管理', 'stat memory 实测资产内存'],
  ['《游戏引擎架构》：数据结构与空间划分', '公司机写四叉树 / 空间哈希 demo'],
  ['《游戏引擎架构》：多线程与 Job 系统', 'AsyncTask / TaskGraph 实验'],
  ['《实时渲染》：管线与光栅化', '手写 Lambert / Blinn-Phong shader'],
  ['《实时渲染》：光照模型与 PBR 入门', 'PBR 参数调整实验与笔记'],
  ['《实时渲染》：阴影技术', 'CSM 阴影设置对比'],
  ['UE 源码：对象系统（UObject / UClass / UProperty）', '源码笔记1：对象创建链路'],
  ['UE 源码：反射机制（GENERATED_BODY 背后）', '源码笔记2：反射如何驱动蓝图暴露'],
  ['UE 源码：垃圾回收（可达性分析）', '源码笔记3：强弱引用 GC 实验'],
  ['UE 源码：模块与插件系统', '写一个最小插件'],
  ['UE 源码：Slate 与 UI 架构', '自定义 Slate 工具窗口'],
  ['精读《一帧发生了什么》类经典文章', '发布博客1：主循环与帧预算'],
  ['博客周：源码笔记重组成文', '发布博客2：UObject 与 GC'],
  ['阶段3复盘 + 专精决策（建议玩法 GAS 向）', '主项目环境准备 + 休整'],
];

const P4 = [
  ['GAS 总览：ASC / Ability / Effect / Attributes', '主项目立项：C++ 空工程 + GAS 模块 + 仓库骨架'],
  ['Gameplay Effect：Magnitude / Execution', '伤害与治疗 GE 实现'],
  ['AttributeSet 与属性结算', '血量 / 耐力 + HUD 接线'],
  ['GameplayCue 表现系统', '受击音 / 光 / 震屏反馈'],
  ['GameplayTags 在 GAS：免疫与状态', '眩晕 / 中毒 debuff'],
  ['AbilityTask 任务机制', '蓄力技能'],
  ['Cost 与 Cooldown', '技能消耗与 CD 显示'],
  ['Targeting 目标系统', '技能范围指示器'],
  ['预测与确认（Prediction）', '局域网多开观察预测表现'],
  ['GDC 战斗手感分享（B站搬运）', '输入缓冲与顿帧打磨'],
  ['网络复制基础：bReplicates / 条件', 'Listen Server + 客户端最小联机'],
  ['RPC 与属性复制', '技能与属性联机验证'],
  ['Dedicated Server 架构', '打包本机 dedicated server 运行'],
  ['CharacterMovement 复制与校正', 'net emu 模拟延迟测橡皮筋'],
  ['里程碑1设计文档：GAS 战斗切片', '里程碑1迭代1：战斗循环'],
  ['里程碑1迭代2', '里程碑1迭代2：敌人种类'],
  ['里程碑1迭代3', '里程碑1打磨 + 录屏'],
  ['博客3：GAS 踩坑实录', '里程碑1发布 + 收集反馈'],
  ['GameplayAbilities 进阶：Montage 同步 / 取消窗口', '技能与动画紧耦合'],
  ['行为树进阶与 Boss 设计', '三阶段 Boss'],
  ['PCG 程序化生成初探', '简单房间随机化'],
  ['数据驱动：DataTable / Curve', '技能全表驱动重构'],
  ['存档与局外成长系统', '解锁 / 强化元进度'],
  ['Unreal Insights 剖析实战', 'CPU / GPU 预算治理'],
  ['内存与资产优化', '纹理 / LOD / 冗余资产清理'],
  ['里程碑2设计', '里程碑2迭代1：多关卡流程'],
  ['里程碑2迭代2', '里程碑2迭代2：美术 polish（Fab 免费资产）'],
  ['里程碑2迭代3', '开场与过场（Level Sequence）'],
  ['里程碑2打磨', '打包发布里程碑2版本'],
  ['Game Jam 预习：itch.io/jams 选赛事 + 模板工程', '4 小时小作品练手'],
  ['Global Game Jam / 线上 Jam day1', '48h 极限创作'],
  ['Jam day2 与投票', 'Jam 作品发布 + 复盘'],
  ['Jam 收获整合进主项目', '主项目 bug bash'],
  ['阅读周：GDC / 官方技术文章两篇', '缓冲：清 backlog'],
  ['副项目A设计：编辑器工具（发挥工程背景）', '副项目A迭代1'],
  ['副项目A迭代2', '副项目A完成 + 发布'],
  ['副项目B设计：打包自动化 / CI（后端经验复用）', '副项目B迭代1'],
  ['副项目B迭代2', '副项目B完成 + 文档'],
  ['主项目迭代5：内容扩展', '新怪 + 新技能'],
  ['主项目迭代5（续）', '数值平衡与数据调优'],
  ['主项目迭代6：联机鲁棒性', '断线重连处理'],
  ['主项目迭代6（续）', 'UX 完善（引导 / 设置页）'],
  ['里程碑3设计：10 分钟完整体验版', '迭代1：主循环串联'],
  ['里程碑3迭代2', '迭代2：难度曲线'],
  ['里程碑3打磨', 'Press kit：截图 / 简介 / 预告片'],
  ['发布计划：itch.io 页面 + B站 devlog 系列', '公开 demo 发布'],
  ['Devlog 文章 / 视频第1期', '社区反馈整合'],
  ['主项目架构文档重写（design-docs）', '技术债重构'],
  ['博客4：网络同步与预测复盘', '联机压力测试'],
  ['博客5：性能优化全记录', '主项目最终版'],
  ['作品集包装：GitHub Pages + README + reel 素材', '三件套完整性检查'],
  ['阶段4总复盘：面试 30 分钟深挖自问清单', '休整 + 启动 C++ 八股'],
];

const P5 = [
  ['C++ 八股1：内存模型 / 栈堆 / 指针 vs 引用', '重读主项目代码：能解释每一处'],
  ['C++ 八股2：构造析构 / 三·五法则 / RAII', '项目架构图 + 1 分钟讲稿'],
  ['C++ 八股3：虚函数与 vtable', '自问：为何这样设计（组件 / GAS / 数据驱动）'],
  ['C++ 八股4：智能指针与资源所有权', '准备 3 个真实 bug 故事（STAR）'],
  ['C++ 八股5：模板与 Modern C++（移动 / lambda）', 'LeetCode：数组与字符串（C++）'],
  ['C++ 八股6：并发（mutex / atomic / 死锁）', 'LeetCode：链表与树'],
  ['C++ 八股7：STL 容器底层原理', 'LeetCode：二分与排序'],
  ['综合模拟：每日口述 2 题并录音回听', 'LeetCode：栈队列 / 滑动窗口'],
  ['OS 面试：进程与线程 / 内存 / IPC', 'UObject 与 GC 深挖 20 问'],
  ['网络面试：TCP/UDP / 可靠模型（对照 UE 复制）', 'Replication 与 RPC 面试题'],
  ['图形面试：渲染管线一口气讲全', '材质与后处理面试题'],
  ['图形面试：PBR / 光照 / 阴影', '性能题：定位卡顿的三层思路'],
  ['数学面试：四元数 / 点积叉积应用题', '动画系统面试题'],
  ['引擎面试：一帧内发生了什么', 'GAS 面试题'],
  ['引擎面试：内存 / 多线程 / 加载优化', '模拟面试（找人或录屏自查）'],
  ['算法场景题：寻路 / 空间划分 / 随机', 'LeetCode：BFS / DFS'],
  ['简历 v1 完成（单页 Markdown 导出 PDF）', '5 分钟项目讲稿 + demo 演练'],
  ['简历互评迭代 v2（2–3 位同行）', '面经清单：补第一批缺口'],
  ['目标公司清单 + 投递跟踪表（腾讯 / 网易 / 游戏科学 / 库洛等）', '练手批投递 2–3 家'],
  ['牛客游戏开发笔试真题练习', '笔试后复盘归档'],
  ['面试表达训练：自我介绍 / 项目深挖', '练手面复盘文档'],
  ['复盘练手新题并补强', 'devlog 更新保持作品曝光'],
  ['主力批投递 + 内推码推进', '作品集素材刷新版'],
  ['引擎源码题冲刺（UObject / GC / 模块）', '面试节奏与心态复盘'],
  ['谈薪与 offer 评估（团队 / 技术栈 / 项目周期）', '剩余缺口扫尾'],
  ['全程复盘：转型纪实文章 + 下一阶段计划', '休整'],
];

const TOPICS = { 5: P1, 27: P2, 53: P3, 79: P4, 131: P5 };

const CUSTOM = {
  1: [
    ['公司', '1h', '账号与仓库：注册 Epic / GitHub 账号；建 GitHub 私有仓 game-dev-plan 并把本计划文件夹推上去（若公司网络受限，用手机完成，公司机只做只读浏览）', '仓库地址记入 notes/'],
    ['公司', '1h', '工作机：Visual Studio Installer 修改安装 → 确认勾选"使用 C++ 的桌面开发"；建控制台工程写第一个指针练习（cpp-exercises/001）；顺手浏览 Epic 官方文档《Your First Hour》', '练习可编译运行'],
    ['家用', '2–3h', '装机主战场：Epic Games Launcher → 安装 UE5 最新正式版；安装 VS2022 Community（C++ 桌面负载）；安装 Git 并执行 git config --global core.longpaths true；新建 First Person（C++）模板工程 → 右键生成 VS 项目文件', '引擎与工程都成功启动'],
    ['家用', '1–2h', '跑通 First Person 并在 BeginPlay 打断点调试（第一次 UE+C++ 联调体验）；新建 Lyra 工程浏览结构；写第一篇周复盘 weekly-review/week-001.md', '复盘笔记'],
  ],
  2: [
    ['公司', '1h', '【输入】Epic 文档"玩法快速入门"；整理编辑器界面笔记 notes/ue-editor-basics.md（对照你熟悉的 IDE 概念记差异）', '1 篇笔记'],
    ['公司', '1h', '【输入】蓝图基础文档；B 站筛选 2023 年后的 UE5 入门系列课，选定一套，只看前 2 集并记录下次跟看集数（切勿多开贪多）', '选定课程链接'],
    ['公司', '1h–2h', '【实践】工作机 VS：C++ 热身——变量 / 引用 / const 与 Java 差异三小题（cpp-exercises/002–004）', '代码提交'],
    ['公司', '1h', '【源码】浏览 github.com/EpicGames/UnrealEngine 目录结构，重点看 Engine/Source/Runtime 下 Core / CoreUObject / Engine 三大模块，写 design-docs/w2-source-map.md', '目录认知地图'],
    ['公司', '1h', '【复盘】写 weekly-review/week-002.md；定周末任务：跟选定系列完成"蓝图拾取物品"小例子', '周末清单'],
    ['家用', '2–3h', '【引擎】跟 B 站系列：用蓝图完成"拾取物品 + 计数"小 demo（第一次完整做出可交互的东西）', '可玩 demo'],
    ['家用', '1–2h', '【引擎】收尾提交 Git；把"这周没搞懂的东西"写进 notes/questions.md（后续每周续写）', 'commit + 问题清单'],
  ],
  3: [
    ['公司', '1h', '【输入】岗位认知：玩法 / 引擎 / TA 三方向差异与招聘要求画像（各看 2 份真实 JD + 技术公众号文章），写 notes/roles.md 并定主线一句话', '岗位决策笔记'],
    ['公司', '1h', '【输入】Epic 文档"使用 C++ 进行编程"章节；注册 LeetCode 并用任意语言做 1 题 easy 热身', '文档笔记'],
    ['公司', '1h–2h', '【实践】工作机 VS：函数 / 作用域 / 栈与堆小练习（cpp-exercises/005–006）', '代码提交'],
    ['公司', '1h', '【源码】读 Lyra 架构分析文章（B 站 / 知乎），记下 3 个看不懂的新术语（如 GameplayTag），作为下周阅读线索', '术语清单'],
    ['公司', '1h', '【复盘】weekly-review/week-003.md；定周末任务：把拾取 demo 改成 C++ Actor', '周末清单'],
    ['家用', '2–3h', '【引擎】第一个 UE C++ 类：继承 AActor，BeginPlay 打印日志 + Tick 移动方块，体验"改代码→编译→看效果"闭环', '跑通截图'],
    ['家用', '1–2h', '【引擎】收尾提交；在 questions.md 里回答上周 3 个术语（答不上的标记为阶段1目标）', 'commit'],
  ],
  4: [
    ['公司', '1h', '【输入】《C++ Primer（第6版）》京东下单；读第 1 章（或 LearnCpp 对应入门节），做笔记', '笔记 + 书已下单'],
    ['公司', '1h', '【输入】通读计划文档中阶段1的 W5–W26 主题表（周计划文件夹），标出心中没底的周，提前准备问题', '风险标记'],
    ['公司', '1h–2h', '【实践】cpp-exercises/007：把本周函数 / 作用域知识写成 3 个"猜输出"小陷阱题并验证', '代码提交'],
    ['公司', '1h', '【设计】原型1（简易 FPS 或平台跳跃，二选一）纸面设计：需要哪些类、哪些蓝图、预期范围 4 周内做完', 'design-docs/prototype1.md'],
    ['公司', '1h', '【复盘】阶段0整体复盘：对照合格标准（能独立建 UE C++ 工程 + 编译 + 调试），不达标项列补救清单', 'notes/phase0-retro.md'],
    ['家用', '2–3h', '【引擎】B 站系列进度：编辑器进阶（项目设置 / 内容浏览器 / 快捷键），把手头 demo 操作熟练度提上来', '跟练完成'],
    ['家用', '1–2h', '【引擎】阶段0验收 + push；休整，预告明天进入阶段1（W5 起为固定日课模板）', '验收勾选'],
  ],
};

function topicRow(a, b, day, place, time, mode) {
  const map = {
    mon: ['【输入·学习线】今日研读：' + a + '。笔记写入 notes/，末尾用 1–2 句记录"与 Java/已有经验的差异点"', '1 篇笔记'],
    tue: ['【输入·UE线】文档线：读 Epic 官方文档 / 开发者社区中与"' + b + '"相关的章节，末尾列出"周末想动手验证的点"', '验证清单'],
    wed: ['【实践】把本周所学落成代码：工作机 VS 写小练习（cpp-exercises/）或 LeetCode C++ 1–2 题；纯引擎主题周则做对应小程序验证', '可运行代码'],
    thu: ['【源码/设计】浏览 GitHub 源码或架构文章（主题：' + b + '）；把周末实现方案写进 design-docs/', '设计小记'],
    fri: ['【复盘】写 weekly-review/（学到什么 / 卡在哪 / 清单完成度）；敲定明天实现清单', '周复盘'],
    sat: ['【家用·UE】实现：' + b + '（2–3h，做完 > 做好）', '可运行结果'],
    sun: ['【家用·UE】调试收尾、git push；把周末冒出的新问题写进下周阅读计划', 'commit 记录'],
  };
  return map[mode];
}

const MODES = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

function genWeek(i) {
  const days = weekDays(i);
  const ph = phaseOf(i);
  const lineIdx = i - ph.start;
  const A = i >= 5 ? TOPICS[ph.start][lineIdx][0] : '';
  const B = i >= 5 ? TOPICS[ph.start][lineIdx][1] : '';
  const range = `${fmtFull(days[0])} ~ ${fmtFull(days[days.length - 1])}`;
  let md = `# 第 ${p2(i)} 周（${range}）\n\n`;
  md += `> ${ph.name} ｜ 本阶段第 ${lineIdx + 1}/${ph.weeks} 周\n`;
  if (i >= 5) md += `>\n> **学习线 A**：${A}\n> **UE 线 B**：${B}\n`;
  md += `\n## 每日执行\n\n| 日期 | 星期 | 机器 | 时长 | 行动 | 产出/检验 |\n|---|---|---|---|---|---|\n`;
  if (i <= 4) {
    CUSTOM[i].forEach((row, idx) => {
      const dt = days[idx];
      md += `| ${fmtShort(dt)} | ${WD[dt.getDay()]} | ${row[0]} | ${row[1]} | ${row[2]} | ${row[3]} |\n`;
    });
  } else {
    days.forEach((dt, idx) => {
      const place = [0, 6].includes(dt.getDay()) ? '家用' : '公司';
      const time = dt.getDay() === 3 ? '1–2h' : dt.getDay() === 6 ? '2–3h' : dt.getDay() === 0 ? '1–2h' : '1h';
      const [act, out] = topicRow(A, B, dt, place, time, MODES[idx]);
      md += `| ${fmtShort(dt)} | ${WD[dt.getDay()]} | ${place} | ${time} | ${act} | ${out} |\n`;
    });
  }
  md += `\n## 本周验收\n\n- [ ] notes/ 新增学习线笔记（${A ? '「' + A + '」' : '本周任务见上表'}）\n`;
  if (i >= 5) {
    md += `- [ ] cpp-exercises/ 或 design-docs/ 有本周新产出\n- [ ] 周末 UE 成果已提交 Git：${B}\n`;
  }
  md += `- [ ] weekly-review/ 本周复盘已写\n- [ ] 本文件勾选框全部打过钩\n\n## 复盘三问（周五 + 周日晚各答一次）\n\n1. 本周最扎实的一个收获是什么？\n2. 最卡我在哪里？需要换资料还是继续磕？\n3. 下周第一优先要动手的点？\n\n---\n*本文件由 generate_weekly_plans.js 生成；调整计划请改脚本中的主题表后重新运行。*\n`;
  fs.writeFileSync(path.join(OUT, `第${p2(i)}周_${fmtFull(days[0])}.md`), md, 'utf8');
  return { i, range, ph: ph.name, A, B };
}

const rows = [];
for (let i = 1; i <= 156; i++) rows.push(genWeek(i));

let idx = `# 周计划索引（共 156 周：2026-09-24 ~ ${fmtFull(weekDays(156)[6])}）\n\n`;
idx += `> 使用方法：打开当周文件，照表逐日执行；每周五与周日晚回答"复盘三问"并勾选验收。\n> 进度落后时不要跳周补课，直接在当周文件的行动格里微调；阶段性调整请修改 ../generate_weekly_plans.js 主题表后重新生成。\n\n`;
for (const ph of PHASES) {
  idx += `## ${ph.name}（W${ph.start}–W${ph.start + ph.weeks - 1}）\n\n| 周 | 日期 | 本周 UE 线 |\n|---|---|---|\n`;
  rows.filter((r) => r.i >= ph.start && r.i < ph.start + ph.weeks).forEach((r) => {
    idx += `| [第${p2(r.i)}周](./第${p2(r.i)}周_${r.range.slice(0, 10)}.md) | ${r.range} | ${r.B || '（见文件内每日任务）'} |\n`;
  });
  idx += `\n`;
}
fs.writeFileSync(path.join(OUT, 'README.md'), idx, 'utf8');
console.log(`生成完成：${rows.length} 个周文件 + README 索引，输出目录：${OUT}`);
