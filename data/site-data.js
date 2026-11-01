// Edit this file to change page content.
// Optional buttons can be removed from each item's buttons array.
window.siteData = {
  profile: {
    name: "Songyin Wu",
    role: "Research Scientist",
    institution: "NVIDIA",
    institutionUrl: "",
    portraitAlt: "Songyin Wu",
    portraitSrc: "data/assets/profile/songyin-wu.jpg",
    artSrc: "data/assets/site/profile-art.png",
    links: [
      {
        label: "Email",
        href: "mailto:songyinpoi@gmail.com",
        icon: "mail",
        featured: true
      },
      {
        label: "GitHub",
        href: "https://github.com/poiw",
        icon: "github"
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/songyin-wu-900a00271/",
        icon: "linkedin"
      },
      {
        label: "CV",
        href: "data/assets/files/cv.pdf",
        icon: "file"
      }
    ],
    footer: "\u00a9 2026 Songyin Wu"
  },

  bio: {
    title: "Bio",
    paragraphs: [
      [
        "I am Songyin Wu (\u5434\u677e\u9690), a Research Scientist at NVIDIA in ",
        { text: "Applied Deep Learning Research (ADLR)", href: "https://research.nvidia.com/labs/adlr/" },
        ". My work focuses on AI-assisted real-time graphics and rendering, especially methods that make interactive visual experiences more capable, efficient, and expressive."
      ],
      [
        "I received my Ph.D. in Computer Science from the University of California, Santa Barbara, advised by ",
        { text: "Prof. Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/", nowrap: true },
        ". At Peking University, I worked with ",
        { text: "Prof. Baoquan Chen", href: "https://baoquanchen.info/", nowrap: true },
        " while earning my B.S. in Computer Science."
      ]
    ],
    education: {
      title: "Education",
      items: [
        {
          degree: "Ph.D. in Computer Science",
          institution: "University of California, Santa Barbara",
          date: "2022 - 2026"
        },
        {
          degree: "M.S. in Computer Science",
          institution: "University of California, Santa Barbara",
          date: "2022 - 2025"
        },
        {
          degree: "B.S. in Computer Science (Turing Class)",
          institution: "Peking University",
          date: "2017 - 2021"
        }
      ]
    }
  },

  publications: {
    title: "Publications",
    items: [
      {
        title: "DGS-LRM: Real-Time Deformable 3D Gaussian Reconstruction From Monocular Videos",
        authors: [
          { text: "Chieh Hubert Lin", href: "https://hubert0527.github.io/" },
          { text: "Zhaoyang Lv", href: "https://lvzhaoyang.github.io/" },
          { text: "Songyin Wu", href: "index.html" },
          "Zhen Xu",
          "Thu Nguyen-Phuoc",
          { text: "Hung-Yu Tseng", href: "https://hytseng0509.github.io/" },
          "Julian Straub",
          "Numair Khan",
          "Lei Xiao",
          { text: "Ming-Hsuan Yang", href: "https://faculty.ucmerced.edu/mhyang/" },
          "Yuheng Ren",
          { text: "Richard Newcombe", href: "https://rapiderobot.bitbucket.io/" },
          { text: "Zhao Dong", href: "http://flycooler.com/" },
          { text: "Zhengqin Li", href: "https://sites.google.com/view/zhengqinli" }
        ],
        venue: "NeurIPS 2025",
        thumbnailSrc: "https://hubert0527.github.io/dgslrm/assets/teaser.png",
        thumbnailAlt: "DGS-LRM: Real-Time Deformable 3D Gaussian Reconstruction From Monocular Videos",
        buttons: [
          { label: "Website", href: "https://hubert0527.github.io/dgslrm/", icon: "website" },
          { label: "Paper", href: "https://arxiv.org/abs/2506.09997" },
          { label: "Cite", href: "data/assets/citations/dgslrm.bib" }
        ]
      },
      {
        title: "Monocular Online Reconstruction with Enhanced Detail Preservation",
        authors: [
          { text: "Songyin Wu", href: "index.html" },
          { text: "Zhaoyang Lv", href: "https://lvzhaoyang.github.io/" },
          { text: "Yufeng Zhu", href: "https://mike323zyf.github.io/" },
          { text: "Duncan Frost", href: "https://www.linkedin.com/in/duncan-frost-4170832a/" },
          { text: "Zhengqin Li", href: "https://sites.google.com/view/zhengqinli" },
          { text: "Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/" },
          { text: "Carl Ren", href: "https://www.carlyuheng.com/" },
          { text: "Richard Newcombe", href: "https://rapiderobot.bitbucket.io/" },
          { text: "Zhao Dong", href: "http://flycooler.com/" }
        ],
        venue: "ACM SIGGRAPH 2025 (Conference Track)",
        thumbnailSrc: "data/assets/publications/modp.png",
        thumbnailAlt: "Monocular Online Reconstruction with Enhanced Detail Preservation",
        buttons: [
          { label: "Website", href: "MODP/index.html", icon: "website" },
          { label: "Paper", href: "data/assets/files/modp_main.pdf" },
          { label: "Paper (Low-res)", href: "data/assets/files/modp_main_lowres.pdf" },
          { label: "Supplemental", href: "data/assets/files/modp_main_supp.pdf" },
          { label: "Video", href: "https://drive.google.com/file/d/1Y5U7VrXydYTWNdMqinqzgG6aOWXnR4FL/view?usp=sharing" },
          { label: "Code & Data", href: "https://github.com/facebookresearch/Online-3DGS-Monocular" },
          { label: "Cite", href: "data/assets/citations/modp.bib" }
        ]
      },
      {
        title: "GFFE: G-buffer Free Frame Extrapolation for Low-latency Real-time Rendering",
        authors: [
          { text: "Songyin Wu", href: "index.html" },
          "Deepak Vembar",
          "Anton Sochenov",
          "Selvakumar Panneer",
          "Sungye Kim",
          { text: "Anton Kaplanyan", href: "http://kaplanyan.com/" },
          { text: "Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/" }
        ],
        venue: "ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia 2024)",
        thumbnailSrc: "data/assets/publications/gffe.png",
        thumbnailAlt: "GFFE: G-buffer Free Frame Extrapolation for Low-latency Real-time Rendering",
        buttons: [
          { label: "Paper", href: "data/assets/files/gffe_paper.pdf" },
          { label: "Video", href: "https://sites.cs.ucsb.edu/~lingqi/publications/video_gffe.mp4" },
          { label: "Cite", href: "data/assets/citations/gffe.bib" }
        ]
      },
      {
        title: "Unified Gaussian Primitives for Scene Representation and Rendering",
        authors: [
          { text: "Yang Zhou", href: "https://linktr.ee/mangosister" },
          { text: "Songyin Wu", href: "index.html" },
          { text: "Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/" }
        ],
        venue: "ACM Transactions on Graphics 2026",
        thumbnailSrc: "data/assets/publications/unifiedgaussian.png",
        thumbnailAlt: "Unified Gaussian Primitives for Scene Representation and Rendering",
        buttons: [
          { label: "Website", href: "https://mangosister.github.io/gsr_site/", icon: "website" },
          { label: "Paper", href: "https://dl.acm.org/doi/10.1145/3829352" },
          { label: "Cite", href: "data/assets/citations/unifiedgaussian.bib" }
        ]
      },
      {
        title: "ExtraSS: A Framework for Joint Spatial Super Sampling and Frame Extrapolation",
        authors: [
          { text: "Songyin Wu", href: "index.html" },
          "Sungye Kim",
          { text: "Zheng Zeng", href: "https://zheng95z.github.io/" },
          "Deepak Vembar",
          "Sangeeta Jha",
          { text: "Anton Kaplanyan", href: "http://kaplanyan.com/" },
          { text: "Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/" }
        ],
        venue: "ACM SIGGRAPH Asia 2023 (Conference Track)",
        thumbnailSrc: "data/assets/publications/extrass.jpg",
        thumbnailAlt: "ExtraSS: A Framework for Joint Spatial Super Sampling and Frame Extrapolation",
        buttons: [
          { label: "Website", href: "ExtraSS/index.html", icon: "website" },
          { label: "Paper", href: "https://sites.cs.ucsb.edu/~lingqi/publications/paper_siga23extrass.pdf" },
          { label: "Supplemental", href: "https://sites.cs.ucsb.edu/~lingqi/publications/supplementary_siga23extrass.zip" },
          { label: "Video", href: "https://sites.cs.ucsb.edu/~lingqi/publications/video_siga23extrass.mp4" },
          { label: "Cite", href: "data/assets/citations/extrass.bib" }
        ]
      },
      {
        title: "BRDF Importance Baking: A Lightweight Neural Solution to Importance Sampling General Parametric BRDFs",
        authors: [
          { text: "Yaoyi Bai", href: "https://new.express.adobe.com/webpage/l9u7WUZ4EbgzJ?" },
          { text: "Songyin Wu", href: "index.html" },
          { text: "Zheng Zeng", href: "https://zheng95z.github.io/" },
          { text: "Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/" },
          { text: "Beibei Wang", href: "https://wangningbei.github.io/" }
        ],
        venue: "Computer Graphics Forum (Eurographics 2026)",
        thumbnailSrc: "data/assets/publications/otsample.png",
        thumbnailAlt: "BRDF Importance Baking",
        buttons: [
          { label: "Paper", href: "https://onlinelibrary.wiley.com/doi/10.1111/cgf.70286" },
          { label: "Cite", href: "data/assets/citations/otsample.bib" }
        ]
      }
    ]
  },

  projects: {
    title: "Projects",
    items: [
      {
        title: "DLSS 5",
        authors: [
          "Core contributer"
        ],
        venue: "NVIDIA / 2026",
        thumbnailSrc: "https://www.nvidia.com/content/dam/en-zz/nvidiaweb/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/how-nvidia-dlss-5-works.jpg",
        thumbnailAlt: "NVIDIA DLSS 5 neural rendering overview",
        buttons: [
          { label: "Website", href: "https://www.nvidia.com/en-us/geforce/news/dlss5-breakthrough-in-visual-fidelity-for-games/", icon: "website" },
          { label: "Technical Report", href: "https://research.nvidia.com/labs/adlr/DLSS5/" }
        ]
      }
    ]
  },

  experience: {
    title: "Experience",
    items: [
      {
        date: "Jul 2026 \u2013 Present",
        title: "Research Scientist",
        place: "NVIDIA",
        details: "California, USA",
        current: true
      },
      {
        date: "Jun 2025 \u2013 Mar 2026",
        title: "Research Scientist Intern",
        place: "NVIDIA",
        details: "California, USA"
      },
      {
        date: "Jun 2024 \u2013 Jan 2025",
        title: "Research Scientist Intern",
        place: "Meta",
        details: "Washington, USA"
      },
      {
        date: "Jun 2023 \u2013 Sep 2023",
        title: "Research Scientist Intern",
        place: "Intel",
        details: "California, USA"
      },
      {
        date: "Dec 2021 \u2013 Jul 2022",
        title: "Research Scientist Intern",
        place: "Microsoft Research Asia",
        details: "Beijing, China"
      }
    ]
  },

  misc: {
    title: "Misc.",
    items: [
      {
        label: "Interests",
        text: "Anime, Video Games, and Tennis."
      }
    ]
  },

  professionalActivities: {
    title: "Professional Activities",
    groups: [
      {
        label: "International Papers Committee",
        items: [
          "High-Performance Graphics"
        ]
      },
      {
        label: "Reviewers",
        items: [
          "ACM SIGGRAPH",
          "ACM SIGGRAPH ASIA",
          "ACM Transactions on Graphics (TOG)",
          "Eurographics",
          "Pacific Graphics",
          "IEEE Transactions on Visualization and Computer Graphics"
        ]
      }
    ]
  }
};
