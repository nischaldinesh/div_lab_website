export type Social = {
  type: "web" | "scholar" | "linkedin" | "mail";
  href: string;
};

export type Person = {
  name: string;
  role: string;
  subtitle?: string;
  img: string;
  socials?: Social[];
  focus?: string[];
};

export type Collaborator = {
  name: string;
  org: string;
  img: string;
  href: string;
};

// -------------------- DIRECTOR --------------------

export const DIRECTOR: Person = {
  name: "Ghulam Jilani Quadri",
  role: "Lab Director & Faculty",
  subtitle: "Assistant Professor, OU",
  img: "/lab_crew/faculty.jpg",
  socials: [
    { type: "web", href: "http://jiquadcs.com/index.html" },
    {
      type: "scholar",
      href: "https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ",
    },
    { type: "mail", href: "mailto:quadri@ou.edu" },
  ],
  focus: ["InfoVis", "HCI", "Perception"],
};

// -------------------- STUDENTS --------------------

export const STUDENTS: Person[] = [
  {
    name: "Ghulam Jilani Quadri",
    role: "Lab Director & Faculty",
    subtitle: "Assistant Professor, OU",
    img: "/lab_crew/faculty.jpg",
    socials: [
      { type: "web", href: "http://jiquadcs.com/index.html" },
      {
        type: "scholar",
        href: "https://scholar.google.com/citations?hl=en&tzom=300&user=jw9QYJcAAAAJ",
      },
      { type: "mail", href: "mailto:quadri@ou.edu" },
    ],
    focus: ["InfoVis", "HCI", "Perception"],
  },
  {
    name: "Tapendra Pandey",
    role: "Ph.D. Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/Student_1.jpg",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/ptapendra/" },
      { type: "web", href: "https://ptapendra.github.io/" },
      { type: "mail", href: "mailto:pandey@ou.edu" },
    ],
    focus: [
      "Visualization Comprehension",
      "Perception & Cognition Science",
      "Human Centered AI",
    ],
  },
  {
    name: "Debra Hogue",
    role: "Ph.D. Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/Hogue_headshot.png",
    socials: [
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/debra-hogue-14653026/",
      },
      { type: "mail", href: "mailto:dhogue@ou.edu" },
    ],
    focus: ["Human AI Collaboration", "Visualizations", "Computer Vision"],
  },

  {
    name: "Braden Roper",
    role: "Ph.D. Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/braden.png",
    socials: [
      { type: "web", href: "http://bradenroper.com/#about" },
      { type: "mail", href: "mailto:bradenroper@ou.edu" },
    ],
    focus: [
      "Animated Visualization Techniques",
      "Dimensionality Reduction",
      "Education",
      "HCI",
    ],
  },
  {
    name: "Shane Elliott",
    role: "Ph.D. Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/Shane_Elliott.jpg",
    socials: [
      { type: "mail", href: "mailto:David.S.Elliott-1@ou.edu" },
      { type: "linkedin", href: "https://www.linkedin.com/in/dse418/" },
    ],
    focus: ["Human AI Collaboration", "Visual Analytics", "Computer Vision"],
  },

  {
    name: "Nam Huynh",
    role: "Ph.D. Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/student_4.jpeg",
    socials: [
      { type: "web", href: "http://www.namhuynh1308.github.io/" },
      { type: "mail", href: "mailto:nam@ou.edu" },
    ],
    focus: ["LLM", "HCI", "Visualization"],
  },
  {
    name: "Nischal Dinesh",
    role: "MS Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/ndg.png",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/thenischald/" },
      { type: "web", href: "https://nischaldinesh.com/" },
      { type: "mail", href: "mailto:nischal.dinesh-1@ou.edu" },
    ],
    focus: ["AI/ML in Visualization", "Design Framework"],
  },
  {
    name: "Dhanushwi Arava",
    role: "MS Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/arava.png",
    socials: [
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/dhanushwi-arava/",
      },
      { type: "mail", href: "mailto:arava.dhanushwi-1@ou.edu" },
    ],
    focus: ["AI/ML in Visualization", "HCI"],
  },
  {
    name: "Jasmine T. Lim",
    role: "BS/MS Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/student_3.jpg",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/jasminelim0" },
      { type: "mail", href: "mailto:jasmine.t.lim@ou.edu" },
    ],
    focus: ["InfoVis", "Perception", "HCI"],
  },
  {
    name: "Matthew Tran",
    role: "BS/MS Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/matthew.jpg",
    socials: [
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/matthew-h-tran/",
      },
      { type: "mail", href: "mailto:matthew.h.tran-1@ou.edu" },
    ],
    focus: ["InfoVis", "Perception and Cognition Science", "HCI"],
  },
  {
    name: "Cale Bible",
    role: "BS Student",
    subtitle: "Computer Science, OU",
    img: "/lab_crew/Cale_headshot.jpg",
    socials: [{ type: "mail", href: "mailto:cbible@ou.edu" }],
    focus: ["Visualization", "HCI", "Intelligence Systems"],
  },
];

// -------------------- ALUMNI --------------------

export const ALUMNI: Person[] = [
  {
    name: "Oluwademilade O. Jooda",
    role: "BS/MS Graduate",
    subtitle: "Computer Science, OU — Now @ Goldman Sachs",
    img: "/lab_crew/student_2.png",
    socials: [
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/demilade-jooda-bb4113288/",
      },
      { type: "mail", href: "mailto:oluwademilade.o.jooda-1@ou.edu" },
    ],
    focus: ["Software Engineering", "Data Visualization (student projects)"],
  },
];

// -------------------- COLLABORATORS --------------------

export const COLLABORATORS: Collaborator[] = [
  {
    name: "VisuaLab",
    org: "University of North Carolina Chapel Hill",
    img: "/lab_crew/Visualab.png",
    href: "https://unc-visualab.org/",
  },
  {
    name: "Scientific Computing and Imaging Institute",
    org: "University of Utah",
    img: "/lab_crew/sci.png",
    href: "https://www.sci.utah.edu/",
  },
  {
    name: "SNU HCI Lab",
    org: "Seoul National University",
    img: "/lab_crew/hcil.png",
    href: "http://hcil.snu.ac.kr/",
  },
  {
    name: "Human-AI Interaction and Visualization Lab",
    org: "Pohang University of Science and Technology",
    img: "/lab_crew/unist.png",
    href: "https://sites.google.com/view/haiv/",
  },
  {
    name: "Sejong University",
    org: "Sejong University",
    img: "/lab_crew/sejong.png",
    href: "http://sejong.ac.kr/",
  },
  {
    name: "Data Institute for Societal Challenges (DISC)",
    org: "University of Oklahoma",
    img: "/lab_crew/disc.png",
    href: "https://www.ou.edu/disc",
  },
];
