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
};
