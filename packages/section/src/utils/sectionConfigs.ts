// These are the known daily section titles. However, editorial can add any titles through the methode cms and it will filter through to the app  (i.e. Rich List/Travel/etc)
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
