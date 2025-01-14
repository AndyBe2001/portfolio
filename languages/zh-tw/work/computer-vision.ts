import { computerVisionTranslation as EnTranslation } from "@/languages/en/work/computer-vision";

export const computerVisionTranslation: typeof EnTranslation = {
  title: "運用深度學習技術於圖書館人物偵測",
  fact: {
    role: "我的角色",
    researcher: "研究員",
    developer: "開發者",
    UIUX: "UI / UX 設計師",
    tool: "使用的工具",
    duration: "專案持續時間",
    time: "1 年 6 個月",
    platform: "平台",
  },
  context: {
    title: "專案背景",
    pandemic: {
      title: "新冠肺炎",
      description:
        "2020年初新冠肺炎的爆發徹底改變了日常生活，帶來了前所未有的一波限制措施。世界各國政府實施了嚴格的封鎖措施，命令人們待在家裡，關閉非必要的企業。社交聚會被禁止，隨著邊境關閉和航班停飛，旅行幾乎完全停止。學校和大學轉向線上學習，打破了傳統的教育模式。口罩強制令變得無處不在，改變了社交互動和公眾行為。這些措施旨在遏制病毒的傳播，但也帶來了對社會、經濟和文化規範的重大干擾。",
    },
    restriction: {
      title: "新問題",
      description:
        "在健康限制的情境下，許多圖書館實施了限制同時進入人數的措施。讀者通常需要提前預約時間段才能使用設施。一旦進入，圖書館會實施社交距離協議，限制每個區域的人數，並鼓勵戴口罩。這些措施旨在確保訪客的安全，同時允許有限的圖書館資源和服務的訪問。",
    },
    goal: {
      title: "我們的目標",
      description:
        "根據背景，本專題研究打造一款結合了物件辨識與人數統計功能，並使用於《銘傳大學桃園校區圖書館》的系統。透過物件辨識，得以即時計算入館人數，同時偵測違禁品與違規行為，並且將計算出的人數資料用作分析，進而協助圖書館員掌握館中的現況。",
    },
  },
  timeline: {
    title: "專案時間軸",
    research: {
      title: "研究",
      duration: "1 年",
      audit: "審核",
      technology: "技術探索和學習",
      stack: "技術棧確認",
      intake: "專案收納和對齊",
    },
    design: {
      title: "設計",
      duration: "3 個月",
      ui: "用戶界面",
      feature: "功能確認",
    },
    development: {
      title: "開發",
      duration: "3 個月",
      application: "應用規格文件",
    },
  },
  feature: {
    title: "專案特色",
    footage: "即時影像",
    count: "訪客計數",
    detection: "檢測並警報可疑活動",
    analyze: "分析以前的統計數據",
    export: "CSV 格式匯出統計數據",
  },
  architecture: {
    title: "專案架構",
    camera: "攝像頭錄製",
    detection: {
      title: "使用 YOLOv4 演算法進行物件偵測 ",
      basic: "收集基本特徵",
      map: "在不同層面上收集特徵圖",
      object: "預測物體類型和座標",
      filter: "過濾和驗證結果",
    },
    tracking: {
      title: "使用 DeepSORT 演算法進行物件追蹤 ",
      predict: "使用卡爾曼濾波器",
      mahalanobis: "馬哈拉諾比斯距離",
      appearance: "外觀描述符",
      relation: "預測和結果之間的關係",
      filter: "使用匈牙利算法過濾和驗證結果",
    },
    process: {
      title: "結果的邏輯處理和保存",
      count: "訪客計數統計",
      capture: "捕獲訪客的非法行為",
      export: "數據匯出",
    },
  },
  design: {
    title: "專案設計",
    footage: {
      title: "即時影像",
      description1: "總覽的主要功能。",
      description2:
        "根據影像内容即時辨識人，口罩和非法物體。如允許就用綠框顯示，否則用紅框顯示。",
      description3: "當辨識到非法物體時，系統會自動以下警告聲。",
    },
    main: {
      title: "主要功能",
      description1: "更多總覽功能。",
      description2: "1. 顯示當日數據（當日入館總人數，目前館内人數）。",
      description3: "2. 顯示辨識非法物體時截圖的截圖清單。",
    },
    statistic: {
      title: "分析以前的統計數據",
      description1: "利用現有的數據預判將來的可能有的人潮。",
      description2: "1. 選擇日期（單日或期間）。 ",
      description3: "2. 利用三個按鈕控制結果（更新，切換格式和匯出 CSV 檔）。",
    },
    setting: {
      title: "設置",
      description1: "已目前的需求功能客制化。",
      description2: "1. 開關相關物體的偵測。",
      description3: "2. 調整偵測非法物體時的警告音量。",
    },
  },
};
