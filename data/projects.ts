export type Project = {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  papers: { title: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Quantifying and Modeling Perceptual Variability",
    description: `How do we perceive complex visual information? Is this perception consistent across individuals? What factors shape these differences, and can we quantify them? To address the limitations of human visual perception in data visualization, computational metrics and models offer a path forward. By objectively measuring variability in interpretation (e.g., through cluster separability or other perceptual characteristics), researchers can systematically optimize visualizations for reliability and efficiency. This involves three steps: (1) defining perceptual quality metrics, (2) building computational proxies that mimic human perception, and (3) validating these models against empirical observations. The result is a framework that turns subjective visual experiences into measurable insights, improving the rigor of data visualization design.`,
    images: [{ src: "/projects/project_3.png", alt: "Perceptual Variability" }],
    papers: [
      {
        title:
          "Jeon et. al, CLAMS: Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering, IEEE VIS 2024.",
        href: "https://arxiv.org/pdf/2308.00284",
      },
    ],
  },
  {
    title: "High Level Visual Comprehension",
    description: `High-level Visual comprehension describes the overall knowledge a viewer intuitively gains about the data without explicit cueing or guidance. Our work investigates the high-level patterns people naturally see when encountering a visualization without a guiding task. People's interpretations vary with both the features of the visualization itself and people's backgrounds, specifically their visual literacy, familiarity with graphs and data, and educational and professional backgrounds. Does comprehension reflect the salient statistics and patterns that emerge organically from a particular combination of data and design?`,
    images: [
      { src: "/projects/Poster.png", alt: "Visual Comprehension Project" },
    ],
    papers: [
      {
        title:
          "Quadri and Szafir, Eliciting High-Level Visual Comprehension: A Qualitative Study, IEEE VIS 2022.",
        href: "https://virtual.ieeevis.org/year/2022/poster_v-vis-posters-1034.html",
      },
      {
        title:
          "Quadri et. al, Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension, ACM CHI 2024.",
        href: "https://doi.org/10.1145/3613904.3642813",
      },
      {
        title:
          "Naeinian et. al, Exploring the Hierarchical Nature of Visual Comprehension Through the Lens of Individual Background, IEEE VIS 2024.",
        href: "https://content-staging.ieeevis.org/year/2024/poster_v-vis-posters-1071.html",
      },
    ],
  },

  {
    title: "Design Optimization & Interactive Data Exploration",
    description: `Our research focuses on optimizing visualization design to enhance user performance on specific analytical tasks, particularly for clustering and pattern identification across various visualization types. We develop frameworks for creating visualizations that are optimized for both tasks and design constraints, moving beyond one-size-fits-all approaches. Our work includes automatic optimization algorithms that determine ideal visualization configurations for identifying patterns in multivariate datasets, spanning from scatterplots to network diagrams, heatmaps, and other complex visual representations. These frameworks help balance competing design goals while providing interactive exploration capabilities that adapt to different analytical needs. By systematically approaching design optimization across the visualization spectrum, we enable more effective data communication and improve user performance in complex analytical scenarios.`,
    images: [
      { src: "/projects/project_2_a.png", alt: "Vis Design Optimization" },
    ],
    papers: [
      {
        title:
          "Quadri, Constructing Frameworks for Task-Optimized Visualizations, University of South Florida Dissertation 2021.",
        href: "https://www.proquest.com/docview/2600333411?pq-origsite=gscholar&fromopenview=true&sourcetype=Dissertations%20&%20Theses",
      },
      {
        title:
          "Quadri, Toward Constructing Frameworks for Task- and Design-Optimized Visualizations, IEEE Computer Graphics and Applications (CG&A) 2024.",
        href: "https://ieeexplore.ieee.org/document/10736168",
      },
      {
        title:
          "Quadri et. al, Automatic Scatterplot Design Optimization for Clustering Identification, IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023.",
        href: "https://arxiv.org/pdf/2207.03355",
      },
    ],
  },

  //   {
  //     title: "Survey and Review",
  //     description: `Most visualization designs and tools are built on decades-old studies and follow-ups but with limited scope. Further, we have progressed the visualization research significantly; however, we still need systematic review work to understand the progress of past studies through a taxonomy and solve the designers' and practitioners' design space problems using a framework. The curated understanding of progress guides us in advancing visualization as a research field. Systematic review provides a window into current knowledge and open research questions. Visualization research areas need to include the taxonomy of the conducted studies and their findings. How can we review findings and contextualize the results into taxonomies to understand the research developments and use them as guidance to improve visualization as a technique for data communication applications? How can we investigate parallel problems such that results should be formed into a practical design space framework that solves the challenges in that space?`,
  //     images: [
  //       { src: "/projects/survey.png", alt: "Survey and Review" },
  //       { src: "/projects/survey_2.png", alt: "Survey and Review 2" },
  //     ],
  //     papers: [
  //       {
  //         title:
  //           "Quadri and Rosen, A Survey of Perception-Based Visualization Studies by Task, IEEE Transactions on Visualization & Computer Graphics, 2021.",
  //         href: "https://ieeexplore.ieee.org/document/9492011",
  //       },
  //       {
  //         title:
  //           "Rahman et. al, A Qualitative Analysis of Common Practices in Annotations: A Taxonomy and Design Space, IEEE TVCG 2024.",
  //         href: "https://ieeexplore.ieee.org/abstract/document/10670067",
  //       },
  //       {
  //         title:
  //           "Lin et. al, Striking the Right Balance: Systematic Assessment of Evaluation Method Distribution Across Contribution Types, IEEE VIS 2024.",
  //         href: "https://arxiv.org/pdf/2408.16080",
  //       },
  //     ],
  //   },
];
