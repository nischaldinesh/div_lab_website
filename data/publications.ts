//   {
//     year: 2025,
//     title:
//       "Understanding Bias in Perceiving Dimensionality Reduction Projections",
//     authors:
//       "Seoyoung Doh, Hyeon Jeon, Sungbok Shin, Ghulam Jilani Quadri, Nam Wook Kim, and Jinwook Seo. ",
//     venue:
//       "VIS 2025 Workshop on Visualization for Communication (VisComm), 2025.",
//     image: {
//       src: "/publications/publications.png",
//       alt: "Image",
//     },
//     links: [
//       { label: "DOI", href: "https://arxiv.org/abs/2410.05579" },
//       { label: "PDF", href: "https://arxiv.org/pdf/2410.05579" },
//     ],
//   },

export type PublicationLink = {
  label: string;
  href: string;
};

export type PublicationDetail = {
  abstract?: string;
  pdf?: string;
  bibtex?: string;
  hero?: { src: string; alt: string };
};

export type Publication = {
  slug: string;
  year: number;
  title: string;
  authors: string;
  venue: string;
  image: { src: string; alt: string };
  links: PublicationLink[];
  highlight?: string;
  detail?: PublicationDetail;
};

export const publicationsIntro = {
  description:
    "We publish at Visualization, HCI, and Visual Computing journals and conferences, such as IEEE VIS, IEEE TVCG, ACM CHI, EuroVIS, and ACM ASSETS.",
  scholarHref:
    "https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ",
  keywords: [
    "Design Optimization",
    "Visual Comprehension",
    "Empirical Research",
    "Perception",
    "Perceptual Variability",
  ],
};

export const publications: Publication[] = [
  {
    slug: "discrepancies-in-mental-workload",
    year: 2025,
    title:
      " Discrepancies in Mental Workload Estimation: Self-Reported versus EEG-Based Measures in Data Visualization Evaluation",
    authors:
      "Soobin Yim, Sangbong Yoo, Chanyoung Yoon, Chanyoung Jung, Chansoo Kim, Yun Jang, Ghulam Jilani Quadri",
    venue: "Preprint",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2507.09262" }],
    image: { src: "/publications/discrepancies.png", alt: "Distortion Image" },
    detail: {
      hero: {
        src: "/publications/discrepancies.png",
        alt: "Distortion Image",
      },
      pdf: "",
      abstract: `Accurate assessment of mental workload (MW) is
crucial for understanding cognitive processes during visualization
tasks. While EEG-based measures are emerging as promising
alternatives to conventional assessment techniques, such as self-
report measures, studies examining consistency across these
different methodologies are limited. In a preliminary study, we
observed indications of potential discrepancies between EEG-
based and self-reported MW measures. Motivated by these
preliminary observations, our study further explores the discrep-
ancies between EEG-based and self-reported MW assessment
methods through an experiment involving visualization tasks. In
the experiment, we employ two benchmark tasks: the Visualiza-
tion Literacy Assessment Test (VLAT) and a Spatial Visualization
(SV) task. EEG signals are recorded from participants using
a 32-channel system at a sampling rate of 128 Hz during
the visualization tasks. For each participant, MW is estimated
using an EEG-based model built on a Graph Attention Network
(GAT) architecture, and these estimates are compared with
conventional MW measures to examine potential discrepancies.
Our findings reveal notable discrepancies between task difficulty
and EEG-based MW estimates, as well as between EEG-based
and self-reported MW measures across varying task difficulty
levels. Additionally, the observed patterns suggest the presence
of unconscious cognitive effort that may not be captured by self-
report alone.`,
      bibtex: `@inproceedings{wang2025characterizing,
  title={Characterizing Visualization Perception with Psychological Phenomena: Uncovering the Role of Subitizing in Data Visualization},
  author={Wang, Arran Zeyu and Quadri, Ghulam Jilani and Zhu, Mengyuan and Tseng, Chin and Szafir, Danielle Albers},
  booktitle={IEEE VIS},
  year={2025}
}`,
    },
  },
  {
    slug: "evaluating-line-chart",
    year: 2025,
    title:
      "Evaluating Line Chart Strategies for Mitigating Density of Temporal Data: The Impact on Trend, Prediction and Decision-Making",
    authors: "Rifta Ara Proma; Ghulam Jilani Quadri; Paul Rosen",
    venue: "20th International Symposium on Visual Computing 2025",
    links: [{ label: "PDF", href: "" }],
    image: { src: "/publications/discrepancies.png", alt: "Distortion Image" },
  },
  // 2025
  {
    slug: "distortion-aware",
    year: 2025,
    title:
      "Distortion-aware Brushing for Reliable Cluster Analysis in Multidimensional Projections",
    authors:
      "Hyeon Jeon, Micha  ̈el Aupetit, Soohyun Lee, Kwon Ko, Youngtaek Kim, Ghulam Jilani Quadri, and Jinwook Seo",
    venue: "IEEE Transactions on Visualization and Computer Graphics",
    image: { src: "/publications/distortion.png", alt: "Distortion Image" },
    links: [{ label: "PDF", href: "" }],
    detail: {
      hero: {
        src: "/publications/distortion.png",
        alt: "Distortion Image",
      },
      pdf: "",
      abstract: `Brushing is a common interaction technique in 2D scatterplots, allowing users to select clustered points within a
continuous, enclosed region for further analysis or filtering. However, applying conventional brushing to 2D representations of
multidimensional (MD) data, i.e., Multidimensional Projections (MDPs), can lead to unreliable cluster analysis due to MDP-induced
distortions that inaccurately represent the cluster structure of the original MD data. To alleviate this problem, we introduce a novel
brushing technique for MDPs called Distortion-aware brushing. As users perform brushing, Distortion-aware brushing correct
distortions around the currently brushed points by dynamically relocating points in the projection, pulling data points close to the
brushed points in MD space while pushing distant ones apart. This dynamic adjustment helps users brush MD clusters more
accurately, leading to more reliable cluster analysis. Our user studies with 24 participants show that Distortion-aware brushing
significantly outperforms previous brushing techniques for MDPs in accurately separating clusters in the MD space and remains robust
against distortions. We further demonstrate the effectiveness of our technique through two use cases: (1) conducting cluster analysis
of geospatial data and (2) interactively labeling MD clusters`,
      bibtex: `@inproceedings{wang2025characterizing,
  title={Characterizing Visualization Perception with Psychological Phenomena: Uncovering the Role of Subitizing in Data Visualization},
  author={Wang, Arran Zeyu and Quadri, Ghulam Jilani and Zhu, Mengyuan and Tseng, Chin and Szafir, Danielle Albers},
  booktitle={IEEE VIS},
  year={2025}
}`,
    },
  },
  {
    slug: "understanding-bias",
    year: 2025,
    title:
      "Understanding Bias in Perceiving Dimensionality Reduction Projections",
    authors:
      "Seoyoung Doh, Hyeon Jeon, Sungbok Shin, Ghulam Jilani Quadri, Nam Wook Kim, and Jinwook Seo.",
    venue:
      "VIS 2025 Workshop on Visualization for Communication (VisComm), 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2507.20805" }],
    image: { src: "/publications/bias.png", alt: "Bias Image" },
    detail: {
      hero: {
        src: "/publications/bias.png",
        alt: "bias Image",
      },
      pdf: "",
      abstract: `Selecting the dimensionality reduction technique that faithfully represents the structure is essential for reliable visual communication
and analytics. In reality, however, practitioners favor projections for
other attractions, such as aesthetics and visual saliency, over the
projection’s structural faithfulness, a bias we define as visual interestingness. In this research, we conduct a user study that (1) verifies
the existence of such bias and (2) explains why the bias exists. Our
study suggests that visual interestingness biases practitioners’ preferences when selecting projections for analysis, and this bias intensifies with color-encoded labels and shorter exposure time. Based
on our findings, we discuss strategies to mitigate bias in perceiving
and interpreting DR projections.`,
      bibtex: `@inproceedings{wang2025characterizing,
  title={Characterizing Visualization Perception with Psychological Phenomena: Uncovering the Role of Subitizing in Data Visualization},
  author={Wang, Arran Zeyu and Quadri, Ghulam Jilani and Zhu, Mengyuan and Tseng, Chin and Szafir, Danielle Albers},
  booktitle={IEEE VIS},
  year={2025}
}`,
    },
  },
  {
    slug: "subitizing-visualization",
    year: 2025,
    title:
      "Characterizing Visualization Perception with Psychological Phenomena: Uncovering the Role of Subitizing in Data Visualization",
    authors:
      "Arran Zeyu Wang, Ghulam Jilani Quadri, Mengyuan Zhu, Chin Tseng, and Danielle Albers Szafir.",
    venue:
      "In Proceedings of IEEE VIS, 2025. To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/publication_0.png", alt: "Subitizing teaser" },
    links: [
      { label: "DOI", href: "https://arxiv.org/abs/2410.05579" },
      { label: "PDF", href: "https://arxiv.org/pdf/2410.05579" },
    ],
    detail: {
      hero: {
        src: "/publications/publication_0.png",
        alt: "Subitizing teaser",
      },
      pdf: "",
      abstract: `Understanding how people perceive visualizations is crucial for designing effective visual data representations; however, many heuristic design guidelines are derived from specific tasks or visualization types, without considering the constraints or conditions under which those guidelines hold. In this work, we aimed to assess existing design heuristics for categorical visualization using well-established psychological knowledge. Specifically, we examine the impact of the subitizing phenomenon in cognitive psychology—people’s ability to automatically recognize a small set of objects instantly without counting—in data visualizations. We conducted three experiments with multi-class scatterplots—between 2 and 15 classes with varying design choices—across three different tasks—class estimation, correlation comparison, and clustering judgments—to understand how performance changes as the number of classes (and therefore set size) increases. Our results indicate if the category number is smaller than six, people tend to perform well at all tasks, providing empirical evidence of subitizing in visualization. When category numbers increased, performance fell, with the magnitude of the performance change depending on task and encoding. Our study bridges the gap between heuristic guidelines and empirical evidence by applying well-established psychological theories, suggesting future opportunities for using psychological theories and constructs to characterize visualization perception.`,
      bibtex: `@inproceedings{wang2025characterizing,
  title={Characterizing Visualization Perception with Psychological Phenomena: Uncovering the Role of Subitizing in Data Visualization},
  author={Wang, Arran Zeyu and Quadri, Ghulam Jilani and Zhu, Mengyuan and Tseng, Chin and Szafir, Danielle Albers},
  booktitle={IEEE VIS},
  year={2025}
}`,
    },
  },
  {
    slug: "annotation-survey-2025",
    year: 2025,
    title:
      "A Survey on Annotations in Information Visualization: Empirical Insights, Applications, and Challenges",
    authors:
      "Md Dilshadur Rahman, Bhavana Doppalapudi, Ghulam Jilani Quadri, Paul Rosen.",
    venue:
      "To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: {
      src: "/publications/publication_1.png",
      alt: "Annotation survey",
    },
    links: [
      { label: "DOI", href: "https://arxiv.org/abs/2410.05579" },
      { label: "PDF", href: "https://arxiv.org/pdf/2410.05579" },
    ],
    detail: {
      hero: {
        src: "/publications/publication_1.png",
        alt: "Annotation survey teaser",
      },
      pdf: "https://arxiv.org/pdf/2410.05579",
      abstract: `We present a comprehensive survey on the use of annotations in information visualization, highlighting their crucial role in improving audience understanding and engagement with visual data. Our investigation encompasses empirical studies on annotations, showcasing their impact on user engagement, interaction, comprehension, and memorability across various contexts. We also study existing tools and techniques for creating annotations and their diverse applications, enhancing understanding of both practical and theoretical aspects. Additionally, we identify research gaps and propose potential future research directions, making this survey a resource for researchers, visualization designers, and practitioners. An interactive web resource detailing the surveyed papers is available at https://shape-vis.github.io/annotation_star/.`,
      bibtex: `@article{mdrahman2025survey,
  title   = {A Survey on Annotations in Information Visualization: Empirical Insights, Applications, and Challenges},
  author  = {Rahman, Md Dilshadur and Doppalapudi, Bhavana and Quadri, Ghulam Jilani and Rosen, Paul},
  journal = {IEEE Transactions on Visualization and Computer Graphics},
  year    = {2025},
  doi     = {10.48550/arXiv.2410.05579}
}`,
    },
  },
  // 2024
  {
    slug: "shape-it-up",
    year: 2024,
    title:
      "Shape It Up: An Empirically Grounded Approach for Designing Shape Palettes",
    authors:
      "Chin Tseng, Arran Zeyu Wang, Ghulam Jilani Quadri, and Danielle Albers Szafir.",
    venue:
      "In Proceedings of IEEE VIS 2024; published in IEEE Transactions on Visualization and Computer Graphics (TVCG), 2025.",
    image: { src: "/publications/shape.png", alt: "Shape It Up" },
    links: [
      {
        label: "DOI",
        href: "https://ieeexplore.ieee.org/abstract/document/10681156",
      },
      { label: "PDF", href: "https://arxiv.org/pdf/2408.16079" },
      { label: "Shape Tool", href: "https://shape-it-up-eec5e.web.app/" },
    ],
    detail: {
      hero: { src: "/publications/shape.png", alt: "Shape It Up teaser" },
      pdf: "https://arxiv.org/pdf/2408.16079",
      abstract: `Shape is commonly used to distinguish between categories in multi-class scatterplots. However, we lack empirically-validated guidance for creating shape palettes that support effective perception. We present a series of three crowdsourced experiments studying how shape characteristics affect category identification in scatterplots. Our experiments measure how shape characteristics including geometry, fill, and orientation affect people's ability to identify point categories quickly and accurately. We find that shape perception is influenced by multiple factors, including a shape's geometric properties and its rendered size. Based on these findings, we derive a set of design guidelines for creating effective shape palettes and demonstrate their application in a proof-of-concept tool for generating shape palettes based on our experimental results.`,
      bibtex: `@ARTICLE{10681156,
  author={Tseng, Chin and Wang, Arran Zeyu and Quadri, Ghulam Jilani and Szafir, Danielle Albers},
  journal={IEEE Transactions on Visualization and Computer Graphics}, 
  title={Shape It Up: An Empirically Grounded Approach for Designing Shape Palettes}, 
  year={2025},
  volume={31},
  number={1},
  pages={349-359},
  keywords={Shape;Image color analysis;Data visualization;Visualization;Encoding;Data models;Guidelines;Categorical perception;shape perception;multiclass scatterplots;visualization effectiveness;quantitative study},
  doi={10.1109/TVCG.2024.3456385}
}`,
    },
  },
  {
    slug: "annotation-design-space",
    year: 2024,
    title:
      "A Qualitative Analysis of Common Practices in Annotations: A Taxonomy and Design Space",
    authors:
      "Dilshad ur Rahman, Ghulam Jilani Quadri, Bhavana Doppalapudi, Danielle Albers Szafir, and Paul Rosen.",
    venue:
      "In Proceedings of IEEE VIS 2024; published in IEEE Transactions on Visualization and Computer Graphics (TVCG), 2025.",
    image: {
      src: "/publications/publication_2.png",
      alt: "Annotation design space",
    },
    links: [
      {
        label: "DOI",
        href: "https://ieeexplore.ieee.org/abstract/document/10670067",
      },
      { label: "PDF", href: "https://arxiv.org/pdf/2306.06043" },
      {
        label: "Data",
        href: "https://osf.io/e5zq9/?view_only=173a644eb5d3448c832408baf3b050b0",
      },
    ],
    detail: {
      hero: {
        src: "/publications/publication_2.png",
        alt: "Annotation design space teaser",
      },
      pdf: "https://arxiv.org/pdf/2306.06043",
      abstract: `Annotations play a vital role in highlighting critical aspects of visualizations, aiding in data externalization and exploration, collaborative sensemaking, and visual storytelling. However, despite their widespread use, we identified a lack of a design space for common practices for annotations. In this paper, we evaluated over 1,800 static annotated charts to understand how people annotate visualizations in practice. Through qualitative coding of these diverse real-world annotated charts, we explored three primary aspects of annotation usage patterns: analytic purposes for chart annotations (e.g., present, identify, summarize, or compare data features), mechanisms for chart annotations (e.g., types and combinations of annotations used, frequency of different annotation types across chart types, etc.), and the data source used to generate the annotations. We then synthesized our findings into a design space of annotations, highlighting key design choices for chart annotations. We presented three case studies illustrating our design space as a practical framework for chart annotations to enhance the communication of visualization insights. All supplemental materials are available at https://shorturl.at/bAGM1.`,
      bibtex: `@ARTICLE{10670067,
  author={Rahman, Md Dilshadur and Quadri, Ghulam Jilani and Doppalapudi, Bhavana and Szafir, Danielle Albers and Rosen, Paul},
  journal={IEEE Transactions on Visualization and Computer Graphics}, 
  title={A Qualitative Analysis of Common Practices in Annotations: A Taxonomy and Design Space}, 
  year={2025},
  volume={31},
  number={1},
  pages={360-370},
  keywords={Annotations;Data visualization;Connectors;Visualization;Collaboration;Image color analysis;Electronic mail;Annotations;visualizations;qualitative study;design space;taxonomy},
  doi={10.1109/TVCG.2024.3456359}}`,
    },
  },
  {
    slug: "evaluation-method-balance",
    year: 2024,
    title:
      "Striking the Right Balance: Systematic Assessment of Evaluation Method Distribution Across Contribution Types",
    authors:
      "Feng Lin, Arran Zeyu Wang, Dilshad ur Rahman, Danielle Albers Szafir, and Ghulam Jilani Quadri.",
    venue: "In Proceedings of BELIV Workshop at IEEE VIS 2024.",
    image: {
      src: "/publications/publication_3.png",
      alt: "Evaluation method balance",
    },
    links: [
      {
        label: "DOI",
        href: "https://www.computer.org/csdl/proceedings-article/beliv/2024/284600a129/22a0EOOwpQA",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2408.16080" },
    ],
    detail: {
      hero: {
        src: "/publications/publication_3.png",
        alt: "Evaluation method balance teaser",
      },
      pdf: "https://arxiv.org/pdf/2408.16080",
      abstract: `In the rapidly evolving field of information visualization, rigorous evaluation is essential for validating new techniques, understanding user interactions, and demonstrating the effectiveness and usability of visualizations. Faithful evaluations provide valuable insights into how users interact with and perceive the system, enabling designers to identify potential weaknesses and make informed decisions about design choices and improvements. However, an emerging trend of multiple evaluations within a single research raises critical questions about the sustainability, feasibility, and methodological rigor of such an approach. New researchers and students, influenced by this trend, may believe that multiple evaluations are necessary for a study, regardless of the contribution types. However, the number of evaluations in a study should depend on its contributions and merits, not on the trend of including multiple evaluations to strengthen a paper. So, how many evaluations are enough? This is a situational question and cannot be formulaically determined. Our objective is to summarize current trends and patterns to assess the distribution of evaluation methods over different paper contribution types. In this paper, we identify this trend through a non-exhaustive literature survey of evaluation patterns in 214 papers in the two most recent years’ VIS issues in IEEE TVCG from 2023 and 2024. We then discuss various evaluation strategy patterns in the information visualization field to guide practical choices and how this paper will open avenues for further discussion.`,
      bibtex: `@INPROCEEDINGS{10756059,
  author    = {Lin, Feng and Wang, Arran Zeyu and Rahman, Md Dilshadur and Szafir, Danielle Albers and Quadri, Ghulam Jilani},
  booktitle = {2024 IEEE Evaluation and Beyond - Methodological Approaches for Visualization (BELIV)},
  title     = {Striking the Right Balance: Systematic Assessment of Evaluation Method Distribution Across Contribution Types},
  year      = {2024},
  pages     = {129-135},
  abstract  = {In the rapidly evolving field of information visualization, rigorous evaluation is essential for validating new techniques, understanding user interactions, and demonstrating the effectiveness and usability of visualizations. Faithful evaluations provide valuable insights into how users interact with and perceive the system, enabling designers to identify potential weaknesses and make informed decisions about design choices and improvements. However, an emerging trend of multiple evaluations within a single research raises critical questions about the sustainability, feasibility, and methodological rigor of such an approach. New researchers and students, influenced by this trend, may believe - multiple evaluations are necessary for a study, regardless of the contribution types. However, the number of evaluations in a study should depend on its contributions and merits, not on the trend of including multiple evaluations to strengthen a paper. So, how many evaluations are enough? This is a situational question and cannot be formulaically determined. Our objective is to summarize current trends and patterns to assess the distribution of evaluation methods over different paper contribution types. In this paper, we identify this trend through a non-exhaustive literature survey of evaluation patterns in 214 papers in the two most recent years' VIS issues in IEEE TVCG from 2023 and 2024. We then discuss various evaluation strategy patterns in the information visualization field to guide practical choices and how this paper will open avenues for further discussion.},
  keywords  = {Surveys; Visualization; Technological innovation; Systematics; Reviews; Market research; Complexity theory; Reliability; Usability; Sustainable development},
  doi       = {10.1109/BELIV64461.2024.00020},
  url       = {https://doi.ieeecomputersociety.org/10.1109/BELIV64461.2024.00020},
  publisher = {IEEE Computer Society},
  address   = {Los Alamitos, CA, USA},
  month     = {Oct}
}`,
    },
  },
  {
    slug: "our-stories-our-data",
    year: 2024,
    title:
      "Our Stories, Our Data: Co-designing Visualizations with People with Intellectual and Developmental Disabilities",
    authors:
      "Keke Wu, Ghulam Jilani Quadri, Arran Zeyu Wang, David Kwame Osei-Tutu, Emma Peterson, Varsha Koushik, and Danielle Albers Szafir.",
    venue:
      "In the Proceedings of ACM SIGACCESS Conference on Computers and Accessibility, 2024.",
    image: {
      src: "/publications/publication_4.png",
      alt: "Our Stories Our Data",
    },
    links: [
      {
        label: "DOI",
        href: "https://dl.acm.org/doi/abs/10.1145/3663548.3675615",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2408.16072" },
    ],
    detail: {
      hero: {
        src: "/publications/publication_4.png",
        alt: "Our Stories Our Data teaser",
      },
      pdf: "https://arxiv.org/pdf/2408.16072",
      abstract: `Individuals with Intellectual and Developmental Disabilities (IDD) have unique needs and challenges when working with data. While visualization aims to make data more accessible to a broad audience, our understanding of how to design cognitively accessible visualizations remains limited. In this study, we engaged 20 participants with IDD as co-designers to explore how they approach and visualize data. Our preliminary investigation paired four participants as data pen-pals in a six-week online asynchronous participatory design workshop. In response to the observed conceptual, technological, and emotional struggles with data, we subsequently organized a two-day in-person co-design workshop with 16 participants to further understand relevant visualization authoring and sensemaking strategies. Reflecting on how participants engaged with and represented data, we propose two strategies for cognitively accessible data visualizations: transforming numbers into narratives and blending data design with everyday aesthetics. Our findings emphasize the importance of involving individuals with IDD in the design process, demonstrating their capacity for data analysis and expression, and underscoring the need for a narrative and tangible approach to accessible data visualization.`,
      bibtex: `@inproceedings{Wu_2024, series={ASSETS ’24},
  title={Our Stories, Our Data: Co-designing Visualizations with People with Intellectual and Developmental Disabilities},
  url={http://dx.doi.org/10.1145/3663548.3675615},
  DOI={10.1145/3663548.3675615},
  booktitle={The 26th International ACM SIGACCESS Conference on Computers and Accessibility},
  publisher={ACM},
  author={Wu, Keke and Quadri, Ghulam Jilani and Wang, Arran Zeyu and Osei-Tutu, David Kwame and Petersen, Emma and Koushik, Varsha and Szafir, Danielle Albers},
  year={2024},
  month=oct,
  pages={1–17},
  collection={ASSETS ’24}
}`,
    },
  },
  {
    slug: "annotation-barchart",
    year: 2024,
    title:
      "Exploring Annotation Taxonomy in Grouped Bar Charts: A Qualitative Classroom Study",
    authors:
      "Dilshad ur Rahman, Ghulam Jilani Quadri, Danielle Albers Szafir, and Paul Rosen.",
    venue: "Information Visualization, 2024.",
    image: {
      src: "/publications/publication_5.png",
      alt: "Grouped bar chart annotations",
    },
    links: [
      {
        label: "DOI",
        href: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
      },
    ],
    detail: {
      pdf: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
    },
  },
  {
    slug: "task-design-optimized",
    year: 2024,
    title:
      "Toward Constructing Frameworks for Task- and Design-Optimized Visualizations",
    authors: "Ghulam Jilani Quadri.",
    venue: "IEEE Computer Graphics and Applications (CG&A), 2024.",
    image: {
      src: "/publications/publication_6.png",
      alt: "Task & design optimized",
    },
    links: [
      { label: "DOI", href: "https://ieeexplore.ieee.org/document/10736168" },
    ],
    detail: {
      hero: {
        src: "/publications/publication_6.png",
        alt: "Task & design optimized teaser",
      },
      pdf: "https://ieeexplore.ieee.org/document/10736168",
      abstract: `Visualization is crucial to augment and enhance human understanding and decision-making in today’s data-driven world. However, the way data are visualized can influence and drastically change the conclusions people draw using data. The findings around visualization effectiveness are nuanced, and guidelines for effective visualization design depend on the visual channels used, chart types, and analysis tasks. This points to a significant need to understand the intersection of these factors to create optimized visualizations. We need a framework to define this intersection that fills the gap by providing a task-optimized visualization design for better quality and higher decision-making confidence that gives designers objective guidance. A task-optimized visualization design framework strategically integrates visual channels, visualization types, and specific low-level tasks to enhance data interpretation and optimize user task performance. We discuss constructing a visualization framework that considers both human perception for encoding techniques and the task being performed, enabling optimizing visualization design to maximize efficiency. Furthermore, we highlight a task-optimized framework’s impact and potential applications.`,
      bibtex: `@ARTICLE{10736168,
  author={Quadri, Ghulam Jilani},
  journal={IEEE Computer Graphics and Applications}, 
  title={Toward Constructing Frameworks for Task- and Design-Optimized Visualizations}, 
  year={2024},
  volume={44},
  number={5},
  pages={104-113},
  keywords={Visualization;Decision making;Data visualization;Encoding;Guidelines},
  doi={10.1109/MCG.2024.3429828}
}`,
    },
  },
  {
    slug: "do-you-see-what-i-see",
    year: 2024,
    title:
      "Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension",
    authors:
      "Ghulam Jilani Quadri, Arran Zeyu Wang, Zhehao Wang, Jennifer Adorno, Paul Rosen, and Danielle Albers Szafir.",
    venue:
      "In Proceedings of ACM CHI 2024: ACM Conference on Human Factors in Computing Systems, 2024.",
    image: {
      src: "/publications/publication_7.png",
      alt: "High-level comprehension",
    },
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/10.1145/3613904.3642813" },
      { label: "PDF", href: "https://arxiv.org/pdf/2402.15605" },
      { label: "Data", href: "https://osf.io/869ev/" },
    ],
    detail: {
      hero: {
        src: "/publications/publication_7.png",
        alt: "High-level comprehension teaser",
      },
      pdf: "https://arxiv.org/pdf/2402.15605",
      abstract: `Designers often create visualizations to achieve specific high-level analytical or communication goals. These goals require people to naturally extract complex, contextualized, and interconnected patterns in data. While limited prior work has studied general high-level interpretation, prevailing perceptual studies of visualization effectiveness primarily focus on isolated, predefined, low-level tasks, such as estimating statistical quantities. This study more holistically explores visualization interpretation to examine the alignment between designers’ communicative goals and what their audience sees in a visualization, which we refer to as their comprehension. We found that statistics people effectively estimate from visualizations in classical graphical perception studies may differ from the patterns people intuitively comprehend in a visualization. We conducted a qualitative study on three types of visualizations—line graphs, bar graphs, and scatterplots—to investigate the high-level patterns people naturally draw from a visualization. Participants described a series of graphs using natural language and think-aloud protocols. We found that comprehension varies with a range of factors, including graph complexity and data distribution. Specifically, 1) a visualization’s stated objective often does not align with people’s comprehension, 2) results from traditional experiments may not predict the knowledge people build with a graph, and 3) chart type alone is insufficient to predict the information people extract from a graph. Our study confirms the importance of defining visualization effectiveness from multiple perspectives to assess and inform visualization practices.`,
      bibtex: `@inproceedings{10.1145/3613904.3642813,
author = {Quadri, Ghulam Jilani and Wang, Arran Zeyu and Wang, Zhehao and Adorno, Jennifer and Rosen, Paul and Szafir, Danielle Albers},
title = {Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension},
year = {2024},
isbn = {9798400703300},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3613904.3642813},
doi = {10.1145/3613904.3642813},
abstract = {Designers often create visualizations to achieve specific high-level analytical or communication goals. These goals require people to naturally extract complex, contextualized, and interconnected patterns in data. While limited prior work has studied general high-level interpretation, prevailing perceptual studies of visualization effectiveness primarily focus on isolated, predefined, low-level tasks, such as estimating statistical quantities. This study more holistically explores visualization interpretation to examine the alignment between designers’ communicative goals and what their audience sees in a visualization, which we refer to as their comprehension. We found that statistics people effectively estimate from visualizations in classical graphical perception studies may differ from the patterns people intuitively comprehend in a visualization. We conducted a qualitative study on three types of visualizations—line graphs, bar graphs, and scatterplots—to investigate the high-level patterns people naturally draw from a visualization. Participants described a series of graphs using natural language and think-aloud protocols. We found that comprehension varies with a range of factors, including graph complexity and data distribution. Specifically, 1) a visualization’s stated objective often does not align with people’s comprehension, 2) results from traditional experiments may not predict the knowledge people build with a graph, and 3) chart type alone is insufficient to predict the information people extract from a graph. Our study confirms the importance of defining visualization effectiveness from multiple perspectives to assess and inform visualization practices.},
booktitle = {Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems},
articleno = {204},
numpages = {26},
keywords = {Communicative goals, High-level comprehension, Insight, Qualitative evaluation, Visualization},
location = {Honolulu, HI, USA},
series = {CHI '24}
}`,
    },
  },
  {
    slug: "categorical-color-perception",
    year: 2024,
    title:
      "Revisiting Categorical Color Perception in Scatterplots: Sequential, Diverging, and Categorical Palettes",
    authors:
      "Chin Tseng, Arran Zeyu Wang, Ghulam Jilani Quadri, and Danielle Albers Szafir.",
    venue:
      "In Proceedings of EG/VGTC European Conference on Visualization (EuroVis) 2024, Odense, Denmark.",
    image: {
      src: "/publications/publication_8.png",
      alt: "Categorical color perception",
    },
    highlight: "Best Short Paper Award (Top 1% submissions)",
    links: [
      {
        label: "DOI",
        href: "https://diglib.eg.org/items/1f3ab945-36dc-4e43-ac70-5d152cef3dc0",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2404.03787" },
      { label: "EuroVis News", href: "https://event.sdu.dk/eurovis/awards" },
    ],
    detail: {
      hero: {
        src: "/publications/publication_8.png",
        alt: "Categorical color perception teaser",
      },
      pdf: "https://arxiv.org/pdf/2404.03787",
      abstract: `Existing guidelines for categorical color selection are heuristic, often grounded in intuition rather than empirical studies of readers' abilities. While design conventions recommend palettes maximize hue differences, more recent exploratory findings indicate other factors, such as lightness, may play a role in effective categorical palette design. We conducted a crowdsourced experiment on mean value judgments in multi-class scatterplots using five color palette families—single-hue sequential, multihue sequential, perceptually-uniform multi-hue sequential, diverging, and multi-hue categorical—that differ in how they manipulate hue and lightness. Participants estimated relative mean positions in scatterplots containing 2 to 10 categories using 20 colormaps. Our results confirm heuristic guidance that hue-based categorical palettes are most effective. However, they also provide additional evidence that scalable categorical encoding relies on more than hue variance.`,
      bibtex: `@inproceedings{10.2312:evs.20241073,
booktitle = {EuroVis 2024 - Short Papers},
editor = {Tominski, Christian and Waldner, Manuela and Wang, Bei},
title = {{Revisiting Categorical Color Perception in Scatterplots: Sequential, Diverging, and Categorical Palettes}},
author = {Tseng, Chin and Wang, Arran Zeyu and Quadri, Ghulam Jilani and Szafir, Danielle Albers},
year = {2024},
publisher = {The Eurographics Association},
ISBN = {978-3-03868-251-6},
DOI = {10.2312/evs.20241073}
}`,
    },
  },

  {
    slug: "clams",
    year: 2024,
    title:
      "CLAMS: Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering",
    authors:
      "Hyeon Jeon*, Ghulam Jilani Quadri*, Hyunwook Lee, Paul Rosen, Danielle Albers Szafir, and Jinwook Seo",
    venue:
      "IEEE Transactions on Visualization & Computer Graphics (Proc. IEEE VIS 2023), 2024.",
    image: { src: "/projects/project_3.png", alt: "CLAMS" },
    links: [
      {
        label: "DOI",
        href: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2308.00284" },
      {
        label: "UNC-News",
        href: "https://cs.unc.edu/news-article/visualab-earns-2-best-paper-honorable-mention-awards-at-ieee-vis/",
      },
      {
        label: "Demo",
        href: "http://clusterambiguity.dev.s3-website.ap-northeast-2.amazonaws.com/",
      },
    ],
    detail: {
      hero: { src: "/projects/project_3.png", alt: "CLAMS Overview" },
      pdf: "https://arxiv.org/pdf/2308.00284",
      abstract: `Visual clustering is a common perceptual task in scatterplots that supports diverse analytics tasks (e.g., cluster identification). However, even with the same scatterplot, the ways of perceiving clusters (i.e., conducting visual clustering) can differ due to the differences among individuals. Although such perceptual variability casts doubt on the reliability of data analysis based on visual clustering, we lack a systematic way to efficiently assess this variability. In this research, we study perceptual variability in conducting visual clustering, which we call "Cluster Ambiguity". To this end, we introduce "CLAMS", a data-driven visual quality measure for automatically predicting cluster ambiguity in monochrome scatterplots. We first conduct a qualitative study to identify key factors that affect the visual separation of clusters (e.g., proximity or size difference between clusters). Based on the study findings, we deploy a regression module that estimates the human-judged separability of two clusters. Then, CLAMS predicts cluster ambiguity by analyzing the aggregated results of all pairwise separability between clusters that are generated by the module. CLAMS outperforms widely-used clustering techniques in predicting ground truth cluster ambiguity. Meanwhile, CLAMS exhibits performance on par with human annotators. We conclude our work by presenting two applications for optimizing and benchmarking data mining techniques using CLAMS.`,
      bibtex: `@ARTICLE{10308641,
  author={Jeon, Hyeon and Quadri, Ghulam Jilani and Lee, Hyunwook and Rosen, Paul and Szafir, Danielle Albers and Seo, Jinwook},
  journal={IEEE Transactions on Visualization and Computer Graphics},
  title={CLAMS: A Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering},
  year={2024},
  volume={30},
  number={1},
  pages={770-780},
  keywords={Visualization;Task analysis;Reliability;Benchmark testing;Data analysis;Complexity theory;Clustering algorithms;Cluster;scatterplot;perception;cluster analysis;cluster ambiguity;visual quality measure},
  doi={10.1109/TVCG.2023.3327201}
}`,
    },
    highlight: "Best Paper Honorable Mention (IEEE VIS 2023)",
  },
];
