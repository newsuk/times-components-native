// temporary until EB and TPA support a SupplementType which will allow front-end
// to know which sections are supplements
export const isSupplementSection = (sectionTitle?: string) => {
  const knownSupplementSections = [
    "Bricks & Mortar",
    "Style",
    "The Sunday Times Magazine",
    "The Times Magazine",
    "Magazine",
    "Saturday Review",
    "Times2",
    "Travel",
    "Home",
    "Weekend",
    "Culture",
  ];

  return sectionTitle && knownSupplementSections.includes(sectionTitle);
};
