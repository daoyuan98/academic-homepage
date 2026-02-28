// ============================================================
// Edit this file to customize your academic homepage.
// All bilingual content uses [en, zh] tuples.
// ============================================================

export const profile = {
  name: ["Guangzhi Wang", "王广智"] as [string, string],
  title: ["Senior Researcher", "高级 AI 研究员"] as [string, string],
  affiliation: "Tencent",
  affiliationUrl: "https://tencent.com",
  location: ["Shenzhen, China", "中国深圳"] as [string, string],
  avatar: "/avatar.jpg", // 记得把你的帅照放到 public 文件夹下，重命名为 avatar.jpg
  links: [
    { label: "Email", url: "mailto:guangzhi.wang@u.nus.edu" }, // 已同步为简历邮箱
    { label: "GitHub", url: "https://github.com/daoyuan98" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=riUAC6kAAAAJ&hl=en" },
  ],
  bio: [
    "I am a Senior Researcher at ARC Lab, Tencent PCG, based in Shenzhen. My research focuses on: <strong>generative world, agents and their interactions</strong>. Prior to this, I obtained my Ph.D. from the National University of Singapore, supervised by Prof. Mohan Kankanhalli. I obtained my bachelor degree from Zhejiang University.",
    "你好！我是腾讯 PCG ARC Lab 的高级研究员。我的核心研究愿景是：<strong>生成式世界、智能体、及其交互</strong>。此前，我在新加坡国立大学获得博士学位，在浙江大学获得本科学位。",
  ] as [string, string],
  callout: [
    '<strong class="text-destructive">Join Us:</strong> We are actively seeking self-motivated <strong>research interns</strong> to work on Vision-Language-Action (VLA) models and generative environments. We also welcome <strong>collaborations</strong> of all forms. Reach out via <a href="mailto:guangzhi.wang@u.nus.edu" class="text-primary hover:underline">email</a>.',
    '<strong class="text-destructive">人才招募与合作：</strong> 长期寻找极具自驱力的<strong>研究实习生</strong>，共同探索 VLA 模型与生成式世界；同时非常欢迎<strong>各种形式的学术合作</strong>，期待通过<a href="mailto:guangzhi.wang@u.nus.edu" class="text-primary hover:underline">邮件</a>交流。',
  ] as [string, string],
}



export const news = [
  {
    date: "Feb 2026",
    content: [
      'Two papers (<a href="#">CubeComposer</a> and <a href="#">FlashIn</a>) accepted to CVPR 2026.',
      '两篇论文（<a href="#">CubeComposer</a> 和 <a href="#">FlashIn</a>）被顶级会议 CVPR 2026 接收。',
    ] as [string, string],
  },
  {
    date: "Jan 2026",
    content: [
      'Two papers (<a href="#">Gencompositor</a> and <a href="#">Tooncomposer</a>) accepted to ICLR 2026.',
      '两篇论文（<a href="#">Gencompositor</a> 和 <a href="#">Tooncomposer</a>）被顶级会议 ICLR 2026 接收。',
    ] as [string, string],
  },
  {
    date: "Aug 2025",
    content: [
      'One paper (<a href="#">Blobctrl</a>) accepted to SIGGRAPH Asia 2025.',
      '一篇论文（<a href="#">Blobctrl</a>）被图形学顶会 SIGGRAPH Asia 2025 接收。',
    ] as [string, string],
  },
  {
    date: "Feb 2024",
    content: [
      'Three papers accepted to CVPR 2024.',
      '三篇论文被机器视觉顶会 CVPR 2024 接收。',
    ] as [string, string],
  },
  {
    date: "Jul 2023",
    content: [
      'Released <a href="https://arxiv.org/abs/2307.16125">SEED-Bench</a>, a comprehensive benchmark for Multimodal LLMs.',
      '发布多模态大语言模型（MLLM）核心评测基准 <a href="https://arxiv.org/abs/2307.16125">SEED-Bench</a>。',
    ] as [string, string],
  },
]

export type Publication = {
  title: string
  authors: string
  venue: string
  venueClass: "top" | "arxiv" | "journal"
  year: number
  tags: string[]
  paperUrl?: string
  codeUrl?: string
  stars?: number
}

export const publicationTags = [
  { key: "all", label: ["All", "全部"] as [string, string] },
  // 1. 把 Video 拔高，统称为生成式模型
  { key: "generation", label: ["Generative Models", "生成式底座 (Video/Image)"] as [string, string] }, 
  // 2. VLM 保持不变，这是现在的绝对风口
  { key: "vlm", label: ["Multimodal LLMs", "多模态大模型"] as [string, string] },
  // 3. 终极包装：把 3D 和传统 CV 包装成具身感知！
  { key: "embodied", label: ["Embodied Perception (HOI)", "具身感知与物理交互"] as [string, string] }, 
  { key: "cv", label: ["General Computer Vision", "计算机视觉"] as [string, string] },
]

export const publications: Publication[] = [
  {
    title: "CubeComposer: Spatio-Temporal Autoregressive 4K 360° Video Generation from Perspective Video",
    authors: "Lingen Li, <b>Guangzhi Wang</b>*, Xiaoyu Li, Zhaoyang Zhang, Qi Dou, Jinwei Gu, Tianfan Xue, Ying Shan",
    venue: "CVPR",
    venueClass: "top",
    year: 2026,
    tags: ["selected", "generation"],
    paperUrl: "#", // 稍后有了链接记得补上
  },
  {
    title: "FlashIn: Fast and Accurate Image Inversion for Real-time Image Editing",
    authors: "<b>Guangzhi Wang</b>",
    venue: "CVPR",
    year: 2026,
    venueClass: "top",
    tags: ["selected", "generation"],
    paperUrl: "#",
    description: "Special thanks to Zhaoyang Zhang, Xiaoyu Li, and Ying Shan for their insightful discussions and support during this project.",
  },
  {
    title: "CCRemover: Towards Contextually Consistent Removal of Objects and Visual Effects in Videos",
    authors: "<b>Guangzhi Wang</b>, Xiaoyu Li, Xiaodong Cun, Lingen Li, Ying Shan",
    venue: "Coming Soon",
    venueClass: "arxiv",
    year: 2026,
    tags: ["generation"],
    paperUrl: "#",
  },
  {
    title: "EditProp: Consistent Video-to-Video Translation by Editing Propagation",
    authors: "<b>Guangzhi Wang</b>, Xiaoyu Li, Xiaodong Cun, Zhaoyang Zhang, Ying Shan",
    venue: "Coming Soon",
    venueClass: "arxiv",
    year: 2026,
    tags: ["generation"],
    paperUrl: "#",
  },
  {
    title: "Tooncomposer: Streamlining cartoon production with generative post-keyframing",
    authors: "Lingen Li, <b>Guangzhi Wang</b>*, Zhaoyang Zhang, Yaowei Li, Xiaoyu Li, Dou Qi, Jinwei Gu, Tianfan Xue, Ying Shan",
    venue: "ICLR",
    venueClass: "top",
    year: 2026,
    tags: ["selected", "generation"],
    paperUrl: "#",
  },
  {
    title: "Gencompositor: generative video compositing with diffusion transformer",
    authors: "Shuzhou Yang, Xiaoyu Li, Xiaodong Cun, <b>Guangzhi Wang</b>, Lingen Li, Ying Shan, Jian Zhang",
    venue: "ICLR",
    venueClass: "top",
    year: 2026,
    tags: ["selected", "generation"],
    paperUrl: "#",
  },
  {
    title: "Blobctrl: A unified and flexible framework for element-level image generation and editing",
    authors: "Yaowei Li, Lingen Li, Zhaoyang Zhang, Xiaoyu Li, <b>Guangzhi Wang</b>, Hongxiang Li, Xiaodong Cun, Ying Shan, Yuexian Zou",
    venue: "SIGGRAPH Asia",
    venueClass: "top",
    year: 2025,
    tags: ["selected", "generation"],
    paperUrl: "#",
  },
  {
    title: "S3Editor: A Sparse Semantic-Disentangled Self-Training Framework for Face Video Editing",
    authors: "<b>Guangzhi Wang</b>, Tianyi Chen, Kamran Ghasedi, Hsiang Tao Wu, Tianyu Ding, Chris Nuesmeyer, Ilya Zharkov, Mohan Kankanhalli, Luming Liang",
    venue: "ArXiv",
    venueClass: "arxiv",
    year: 2024,
    tags: ["selected", "generation"],
    paperUrl: "https://arxiv.org/abs/2404.08111",
  },
  {
    title: "SEED-Bench-2: Benchmarking multimodal large language models",
    authors: "Bohao Li, Yuying Ge, Yixiao Ge, <b>Guangzhi Wang</b>, Rui Wang, Ruimao Zhang, Ying Shan",
    venue: "CVPR",
    venueClass: "top",
    year: 2024,
    tags: ["selected", "vlm"],
    paperUrl: "#",
  },
  {
    title: "SEED-Bench: Benchmarking Multimodal LLMs with Generative Comprehension",
    authors: "Bohao Li*, Rui Wang*, <b>Guangzhi Wang</b>*, Yuying Ge, Yixiao Ge, Ying Shan",
    venue: "ArXiv",
    venueClass: "arxiv",
    year: 2023,
    tags: ["selected", "vlm"],
    paperUrl: "https://arxiv.org/abs/2307.16125",
  },
  {
    title: "What makes for good visual tokenizers for large language models?",
    authors: "<b>Guangzhi Wang</b>, Yixiao Ge, Xiaohan Ding, Mohan Kankanhalli, Ying Shan",
    venue: "ArXiv",
    venueClass: "arxiv",
    year: 2023,
    tags: ["all", "vlm"],
    paperUrl: "https://arxiv.org/abs/2305.12223",
  },
  {
    title: "Bilateral Adaptation for Human-Object Interaction Detection with Occlusion-Robustness",
    authors: "<b>Guangzhi Wang</b>, Yangyang Guo, Ziwei Xu, Mohan Kankanhalli",
    venue: "CVPR",
    venueClass: "top",
    year: 2024,
    tags: ["all", "cv", "embodied"],
    paperUrl: "#",
  },
  {
    title: "PELA: Learning parameter-efficient models with low-rank approximation",
    authors: "Yangyang Guo, <b>Guangzhi Wang</b>, Mohan Kankanhalli",
    venue: "CVPR",
    venueClass: "top",
    year: 2024,
    tags: ["all", "cv"],
    paperUrl: "#",
  },
  {
    title: "Text to Point Cloud Localization with Relation-Enhanced Transformer",
    authors: "<b>Guangzhi Wang</b>, Hehe Fan, Mohan Kankanhalli",
    venue: "AAAI",
    venueClass: "top",
    year: 2023,
    tags: ["all", "embodied", "cv"],
    paperUrl: "#",
  },
  {
    title: "Distance Matters in Human-Object Interaction Detection",
    authors: "<b>Guangzhi Wang</b>, Yangyang Guo, Yongkang Wong, Mohan Kankanhalli",
    venue: "ACM MM",
    venueClass: "top",
    year: 2022,
    tags: ["all", "embodied", "cv"],
    paperUrl: "#",
  },
  {
    title: "Chairs Can be Stood on: Overcoming Object Bias in Human-Object Interaction Detection",
    authors: "<b>Guangzhi Wang</b>, Yangyang Guo, Yongkang Wong, Mohan Kankanhalli",
    venue: "ECCV",
    venueClass: "top",
    year: 2022,
    tags: ["all", "embodied", "cv"],
    paperUrl: "#",
  },
  {
    title: "Semantic-aware Triplet Loss for Image Classification",
    authors: "<b>Guangzhi Wang</b>, Yangyang Guo, Ziwei Xu, Yongkang Wong, Mohan Kankanhalli",
    venue: "IEEE TMM",
    venueClass: "journal",
    year: 2022,
    tags: ["all", "cv"],
    paperUrl: "#",
  },
  {
    title: "Multi-source distilling domain adaptation",
    authors: "<b>Guangzhi Wang</b>*, Sicheng Zhao*, Shanghang Zhang, Yang Gu, Yaxian Li, Zhichao Song, Pengfei Xu, Runbo Hu, Hua Chai, Kurt Keutzer",
    venue: "AAAI (Oral)",
    venueClass: "top",
    year: 2020,
    tags: ["all", "cv"],
    paperUrl: "#",
  },
]

export const experience = [
  {
    period: "2024 - Present",
    role: ["Senior Researcher, Tencent", "高级研究员，腾讯"] as [string, string],
  },
]

export const education = [
  {
    period: "2020.01 - 2024.05",
    degree: ["Ph.D. in Data Science", "数据科学博士"] as [string, string],
    school: ["National University of Singapore (NUS)", "新加坡国立大学"] as [string, string],
    details: ["Advisor: Prof. Mohan S. Kankanhalli", "导师：Mohan S. Kankanhalli 教授"] as [string, string],
  },
  {
    period: "2015.08 - 2019.06",
    degree: ["B.E. in Computer Science and Technology", "计算机科学与技术学士"] as [string, string],
    school: ["Zhejiang University (ZJU)", "浙江大学"] as [string, string],
    details: ["Advisor: Prof. Jianling Sun | He Zhijun Class", "导师：孙建伶 教授 | 何志均班成员"] as [string, string],
  }
]

export const awards = [];

export const academicService = {
  conferences: {
    label: ["Conference PC Member/Reviewer", "会议审稿人"] as [string, string],
    items: "CVPR, ICCV, ECCV, ICLR, NeurIPS, AAAI, ACM MM",
  },
  journals: {
    label: ["Journal Reviewer", "期刊审稿人"] as [string, string],
    items: "IEEE TPAMI, IEEE TMM, IJCV",
  },
}

export const internships = [
  {
    period: "2023.07 - 2023.09",
    role: ["Research Intern, Microsoft Research (Seattle)", "研究实习生，微软研究院（西雅图）"] as [string, string],
  },
  {
    period: "2023.01 - 2023.06",
    role: ["Research Intern, Tencent PCG, ARC Lab (Beijing)", "研究实习生，腾讯 PCG, ARC Lab（北京）"] as [string, string],
  },
  {
    period: "2019.10 - 2019.12",
    role: ["Algorithm Intern, Hikvision Research Institute (Hangzhou)", "算法实习生，海康威视研究院（杭州）"] as [string, string],
  },
  {
    period: "2018.11 - 2019.03",
    role: ["Algorithm Research Intern, DiDi (Beijing)", "算法研究实习生，滴滴出行（北京）"] as [string, string],
  },
]