import { computerVisionTranslation as EnTranslation } from "@/languages/en/work/computer-vision";

export const computerVisionTranslation: typeof EnTranslation = {
  title: "运用深度学习于图书馆人物侦测",
  fact: {
    role: "我的角色",
    researcher: "研究员",
    developer: "程序员",
    UIUX: "UI / UX 设计师",
    tool: "使用的工具",
    duration: "项目持续时间",
    time: "1 年 6 个月",
    platform: "平台",
  },
  context: {
    title: "項目背景",
    pandemic: {
      title: "新冠肺炎",
      description:
        "2020 年初新冠肺炎的爆发彻底改变了日常生活，带来了前所未有的一波限制措施。世界各国政府实施了严格的封锁措施，命令人们待在家里，关闭非必要的企业。社交聚会被禁止，随着边境关闭和航班停飞，旅行几乎完全停止。学校和大学转向在线学习，打破了传统的教育模式。口罩强制令变得无处不在，改变了社交互动和公众行为。这些措施旨在遏制病毒的传播，但也带来了对社会、经济和文化规范的重大干扰。",
    },
    restriction: {
      title: "新问题",
      description:
        "在健康限制的背景下，许多图书馆采取了限制同时访客数量的措施。读者通常需要提前预订时间段来使用设施。一旦进入，图书馆实施了社交距离协议，限制每个区域的人数，并鼓励佩戴口罩。这些措施旨在确保访客的安全，同时允许有限的图书馆资源和服务的访问。",
    },
    goal: {
      title: "我们的目标",
      description:
        "根据背景，本项目研究打造一款结合了物体识别与人数统计功能，并应用于《铭传大学桃园校区图书馆》的系统。通过物体识别，即时计算入馆人数，同时检测违禁品与违规行为，并将计算出的人数数据用作分析，进而协助图书馆员掌握馆内的现状。",
    },
  },
  timeline: {
    title: "项目时间表",
    research: {
      title: "研究",
      duration: "1年",
      audit: "审计",
      technology: "技术探索和学习",
      stack: "技术栈确认",
      intake: "项目接收和对齐",
    },
    design: {
      title: "设计",
      duration: "3个月",
      ui: "用户界面",
      feature: "功能确认",
    },
    development: {
      title: "开发",
      duration: "3个月",
      application: "应用规范文件",
    },
  },
  feature: {
    title: "项目特性",
    footage: "即时画面",
    count: "访客计数",
    detection: "检测并警报可疑活动",
    analyze: "分析以前的统计数据",
    export: "CSV格式汇出统计数据",
  },
  architecture: {
    title: "项目架构",
    camera: "摄像头录制",
    detection: {
      title: "使用 YOLOv4 演算法进行物体侦测",
      basic: "收集基本特征",
      map: "收集不同层次的特征图",
      object: "预测物体类型和坐标",
      filter: "过滤和验证结果",
    },
    tracking: {
      title: "使用 DeepSORT 演算法进行物体追踪",
      predict: "使用卡尔曼滤波预测下一个坐标",
      mahalanobis: "马哈拉诺比斯距离",
      appearance: "深度外观描述",
      relation: "预测和结果之间的关系",
      filter: "使用匈牙利算法过滤和验证结果",
    },
    process: {
      title: "结果处理和保存",
      count: "访客计数统计",
      capture: "截图访客的违规行为",
      export: "数据汇出",
    },
  },
  design: {
    title: "项目设计",
    footage: {
      title: "即时画面",
      description1: "总览的主要功能。",
      description2:
        "根据画面内容即时识别人，口罩和非法物体。如允许就用绿框显示，否则用红框显示。",
      description3: "当识别到非法物体时，系统会自动以下警告声。",
    },
    main: {
      title: "主要功能",
      description1: "更多总览的功能",
      description2: "1. 显示当日数据（当日入馆总人数，目前馆内人数）。",
      description3: "2. 显示识别非法物体时截图的截图清单。",
    },
    statistic: {
      title: "分析现有的统计数据",
      description1: "利用现有的数据预判将来可能有的的人潮。",
      description2: "1. 选择日期（单日或期间）。",
      description3: "2. 利用三个按钮控制结果（更新，切换格式和汇出 CSV 档）。",
    },
    setting: {
      title: "设置",
      description1: "已目前的需求功能客制化。",
      description2: "1. 开关相关物体的侦测。",
      description3: "2. 调整侦测非法物体时的警报音量。",
    },
  },
};
