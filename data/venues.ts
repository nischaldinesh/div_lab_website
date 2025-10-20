export const DISPLAY_TZ = "America/Chicago";

export type VenueLite = {
  key: string;
  name: string;
  url: string;
  meta?: string;
};

export type VenueGroup = {
  category: string;
  venues: VenueLite[];
};

export const VENUE_GROUPS: VenueGroup[] = [
  // =========================
  // VIS
  // =========================
  {
    category: "VIS",
    venues: [
      { key: "ieee-vis", name: "IEEE VIS", url: "https://ieeevis.org/" },
      { key: "eurovis", name: "EuroVis", url: "https://www.eurovis.org/" },
      {
        key: "pacificvis",
        name: "PacificVis",
        url: "https://pacificvis.github.io/",
      },
      {
        key: "tvcg",
        name: "TVCG Journal",
        url: "https://www.computer.org/csdl/journal/tg",
      },
      {
        key: "cgf",
        name: "CGF Journal",
        url: "https://onlinelibrary.wiley.com/journal/14678659",
      },
      { key: "chi-vis", name: "ACM CHI", url: "https://chi.acm.org/" },
    ],
  },

  // =========================
  // HCI
  // =========================
  {
    category: "HCI",
    venues: [
      { key: "chi-hci", name: "ACM CHI", url: "https://chi.acm.org/" },
      { key: "tsc", name: "ACM TSC Journal", url: "https://tsc.acm.org/" },
      {
        key: "tochi",
        name: "ACM TOCHI Journal",
        url: "https://tochi.acm.org/",
      },
      { key: "cscw", name: "ACM CSCW", url: "https://cscw.acm.org/" },
      { key: "uist", name: "ACM UIST", url: "https://uist.acm.org/" },
      { key: "iui", name: "ACM IUI", url: "https://iui.acm.org/" },
      { key: "dis", name: "ACM DIS", url: "https://dis.acm.org/" },
    ],
  },

  // =========================
  // Accessibility
  // =========================
  {
    category: "Accessibility",
    venues: [
      { key: "chi-access", name: "ACM CHI", url: "https://chi.acm.org/" },
      {
        key: "assets",
        name: "ACM ASSETS",
        url: "https://sigaccess.org/assets21/",
      },
    ],
  },

  // =========================
  // NLP
  // =========================
  {
    category: "NLP",
    venues: [
      {
        key: "acl",
        name: "ACL (Association for Computational Linguistics)",
        url: "https://aclweb.org/",
      },
      {
        key: "eacl",
        name: "EACL (European Chapter of the ACL)",
        url: "https://eacl.org/",
      },
      {
        key: "aacl-ijcnlp",
        name: "AACL/IJCNLP (Asia-Pacific Chapter / IJCNLP)",
        url: "https://aaclweb.org/",
      },
      {
        key: "emnlp",
        name: "EMNLP (Empirical Methods in NLP)",
        url: "https://www.emnlp.org/",
      },
      {
        key: "coling",
        name: "COLING (International Conference on Computational Linguistics)",
        url: "https://coling.org/",
      },
      {
        key: "conll",
        name: "CoNLL (Conference on Computational Natural Language Learning)",
        url: "https://www.conll.org/",
      },
      {
        key: "lrec",
        name: "LREC (Language Resources and Evaluation Conference)",
        url: "https://lrec-conf.org/",
      },
    ],
  },

  // =========================
  // AI / ML
  // =========================
  {
    category: "AI / ML",
    venues: [
      {
        key: "neurips",
        name: "NeurIPS (Neural Information Processing Systems)",
        url: "https://neurips.cc/",
      },
      {
        key: "icml",
        name: "ICML (International Conference on Machine Learning)",
        url: "https://icml.cc/",
      },
      {
        key: "iclr",
        name: "ICLR (International Conference on Learning Representations)",
        url: "https://iclr.cc/",
      },
      {
        key: "aaai",
        name: "AAAI (Association for the Advancement of Artificial Intelligence)",
        url: "https://aaai.org/conference/",
      },
    ],
  },
];

export const DEADLINES: Record<
  string,
  { abs?: string | null; final?: string | null }
> = {
  // VIS
  "ieee-vis": {
    abs: "2025-03-21T22:59:59-06:00",
    final: "2025-03-31T22:59:59-06:00",
  },
  eurovis: {
    abs: "2025-11-26T23:59:59-06:00",
    final: "2025-12-03T23:59:59-06:00",
  },
  pacificvis: {
    abs: "2025-08-01T22:59:59-06:00",
    final: "2025-11-01T22:59:59-06:00",
  },
  tvcg: {
    abs: "2025-09-01T22:59:59-06:00",
    final: "2025-09-07T22:59:59-06:00",
  },
  cgf: {
    abs: "2025-09-22T22:59:59-06:00",
    final: "2025-09-26T22:59:59-06:00",
  },
  "chi-vis": {
    abs: "2025-09-04T22:59:59-06:00",
    final: "2025-09-11T22:59:59-06:00",
  },

  // HCI
  "chi-hci": {
    abs: "2025-09-04T22:59:59-06:00",
    final: "2025-09-11T22:59:59-06:00",
  },
  tsc: {
    abs: "2025-09-04T22:59:59-06:00",
    final: "2025-09-11T22:59:59-06:00",
  },
  tochi: {
    abs: "2025-09-04T22:59:59-06:00",
    final: "2025-09-11T22:59:59-06:00",
  },
  cscw: {
    abs: "2025-09-04T22:59:59-06:00",
    final: "2025-09-11T22:59:59-06:00",
  },
  uist: {
    abs: "2025-04-02T22:59:59-06:00",
    final: "2025-04-09T22:59:59-06:00",
  },
  iui: {
    abs: "2025-09-04T22:59:59-06:00",
    final: "2025-09-11T22:59:59-06:00",
  },
  dis: {
    abs: "2025-01-13T22:59:59-06:00",
    final: "2025-01-20T22:59:59-06:00",
  },

  // Accessibility
  "chi-access": {
    abs: "2025-09-05T22:59:59-06:00",
    final: "2025-09-12T22:59:59-06:00",
  },
  assets: {
    abs: "2025-09-05T22:59:59-06:00",
    final: "2025-09-12T22:59:59-06:00",
  },

  // =========================
  // NLP (ARR + commitment where applicable)
  // =========================

  acl: {
    abs: "2026-01-05T23:59:59-06:00",
    final: "2026-03-14T23:59:59-06:00",
  },

  eacl: {
    abs: "2025-10-06T23:59:59-06:00",
    final: "2025-12-14T23:59:59-06:00",
  },

  "aacl-ijcnlp": { abs: null, final: null },

  emnlp: {
    abs: "2025-05-19T23:59:59-06:00",
    final: "2025-08-01T23:59:59-06:00",
  },

  coling: {
    abs: "2024-09-16T23:59:59-06:00",
    final: "2024-10-20T23:59:59-06:00",
  },

  conll: {
    abs: "2025-03-14T23:59:59-06:00",
    final: "2025-03-14T23:59:59-06:00",
  },

  lrec: {
    abs: null,
    final: "2025-10-24T23:59:59-06:00",
  },

  // =========================
  // AI / ML
  // =========================
  iclr: {
    abs: "2025-09-19T23:59:59-06:00",
    final: "2025-09-24T23:59:59-06:00",
  },

  icml: {
    abs: "2026-01-24T23:59:59-06:00",
    final: "2026-01-29T23:59:59-06:00",
  },

  neurips: {
    abs: "2025-05-11T23:59:59-06:00",
    final: "2025-05-15T23:59:59-06:00",
  },

  aaai: {
    abs: "2025-07-26T23:59:59-06:00",
    final: "2025-08-02T23:59:59-06:00",
  },
};
