type ImageAspectRatios = "ratio45" | "ratio23" | "ratio169";

type ImageAspectRatiosConfig = Record<
  ImageAspectRatios,
  { width: number; height: number }
>;

export const imageAspectRatios: ImageAspectRatiosConfig = {
  ratio45: { width: 4, height: 5 },
  ratio23: { width: 2, height: 3 },
  ratio169: { width: 16, height: 9 },
};

export const sectionTitles = {
  front: "Front",
  news: "News",
  comment: "Comment",
  world: "World",
  business: "Business",
  sport: "Sport",
  times2: "Times2",
  register: "Register",
  puzzles: "Puzzles",
  law: "Law",
  scotland: "Scotland",
  ireland: "Ireland",
} as const;

export type SectionTitles = typeof sectionTitles[keyof typeof sectionTitles];
