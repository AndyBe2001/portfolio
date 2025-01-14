export const computerVisionTranslation = {
  title: "Deep Learning Technology for Object Detection in Libraries",
  fact: {
    role: "Role I played as",
    researcher: "Researcher",
    developer: "Developer",
    UIUX: "UI / UX Designer",
    tool: "Tools I used",
    duration: "Project duration",
    time: "1 year 6 months",
    platform: "Platform",
  },
  context: {
    title: "Context",
    pandemic: {
      title: "World pandemic",
      description:
        "The onset of the global pandemic in early 2020 radically transformed daily life, ushering in a wave of unprecedented restrictions. Governments worldwide imposed strict lockdowns, mandating stay-at-home orders and shuttering businesses deemed non-essential. Social gatherings were banned, and travel came to a virtual standstill as borders closed and flights were grounded. Schools and universities shifted to online learning, disrupting traditional education models. Mask mandates became ubiquitous, altering social interactions and public behavior. These measures aimed to curb the spread of the virus but also brought about significant disruptions to social, economic, and cultural norms.",
    },
    restriction: {
      title: "The problem",
      description:
        "In the context of health restrictions, many libraries implemented measures limiting the number of simultaneous visitors. Readers were often required to book a time slot in advance to access the facilities. Once inside, libraries implemented social distancing protocols, limiting the number of people in each section, and encouraging the wearing of face masks. These measures aimed to ensure the safety of visitors while allowing limited access to library resources and services.",
    },
    goal: {
      title: "Our objective",
      description:
        "Based on the background, this project aims to develop a system that combines object recognition and visitor counting, and apply it to the library of Ming Chuan University's Taoyuan campus. From object recognition and real-time counting of visitors, to also detecting prohibited items and violations of internal rules. The counted visitor data is then analyzed to assist librarians in understanding the current situation within the library.",
    },
  },
  timeline: {
    title: "Project timeline",
    research: {
      title: "Research",
      duration: "1 year",
      audit: "Audit",
      technology: "Technology discovery and learning",
      stack: "Stack confirmation",
      intake: "Project intake and alignment",
    },
    design: {
      title: "Design",
      duration: "3 months",
      ui: "User interface",
      feature: "Feature confirmation",
    },
    development: {
      title: "Development",
      duration: "3 months",
      application: "Applying specifications document",
    },
  },
  feature: {
    title: "Project features",
    footage: "Live footage",
    count: "Visitor count",
    detection: "Detect and alert suspicious activity",
    analyze: "View previous statistics",
    export: "Export statistics with CSV",
  },
  architecture: {
    title: "Project architecture",
    camera: "Camera recording",
    detection: {
      title: "Object detection using YOLOv4 algorithm",
      basic: "Collect basic features",
      map: "Collect feature maps on different layer",
      object: "Predict object type and coordinate",
      filter: "Filter and validate results",
    },
    tracking: {
      title: "Tracking object using DeepSORT algorithm",
      predict: "Predict futur coordinate using Kalman filter",
      mahalanobis: "Mahalanobis distance",
      appearance: "Appearance descriptor",
      relation: "Relation between predictions and results",
      filter: "Filter and validate result using Hungarian algorithm",
    },
    process: {
      title: "Results logical process and save",
      count: "Visitor count statistics",
      capture: "Visitor illegal behavior capture",
      export: "Data export",
    },
  },
  design: {
    title: "Project design",
    footage: {
      title: "Live footage",
      description1: "Dashboard most requested feature.",
      description2:
        "Based on the footage content, people, masks and illegal objects can be identified in real time and outlined in green if allowed and red if it is not.",
      description3:
        "Once an illegal object is detected, the following alert sound is triggered.",
    },
    main: {
      title: "Main features",
      description1: "More feature on the dashboard.",
      description2:
        "1. Shows daily statistics with total number of entry today and the number of people in the library.",
      description3:
        "2. Contains the list of screenshot took when detecting illegal object.",
    },
    statistic: {
      title: "Analyze previous statistics",
      description1:
        "Developed for the administrators in order to predict futur visitor activities using previous statistics.",
      description2: "1. Select date (single or range).",
      description3:
        "2. Control results with 3 buttons (refresh chart, switch chart format and export with CSV format).",
    },
    setting: {
      title: "Setting",
      description1: "Customize features for current need.",
      description2: "1. Enable or disable detections of selected object.",
      description3:
        "2. Change the volume of alert sound when suspicious activity is detected.",
    },
  },
};
