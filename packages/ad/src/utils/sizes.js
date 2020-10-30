const billboard = [970, 250];
const leaderboard = [728, 90];
const mobileStandard = [300, 50];
const wideLeaderboard = [970, 90];

const sizes = {
  header: [
    {
      orientation: ["landscape", "portrait"],
      height: 0,
      sizes: [],
      width: 0,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 100,
      sizes: [[320, 50], [320, 48], mobileStandard],
      width: 300,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 90,
      sizes: [leaderboard],
      width: 768,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 250,
      sizes: [billboard, wideLeaderboard, leaderboard],
      width: 1024,
    },
  ],
  intervention: [
    {
      orientation: ["landscape", "portrait"],
      height: 0,
      sizes: [],
      width: 0,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 100,
      sizes: [[300, 250], [320, 50], [320, 48], mobileStandard],
      width: 300,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 90,
      sizes: [leaderboard],
      width: 768,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 250,
      sizes: [billboard, wideLeaderboard, leaderboard],
      width: 1024,
    },
  ],
  mpu: [
    {
      orientation: ["landscape", "portrait"],
      height: 0,
      sizes: [],
      width: 0,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 250,
      sizes: [
        [300, 250],
        [300, 600],
      ],
      width: 300,
    },
  ],
  native: [
    {
      orientation: ["landscape", "portrait"],
      height: 250,
      sizes: [[300, 250]],
      width: 300,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 90,
      sizes: [leaderboard],
      width: 728,
    },
    {
      orientation: ["landscape", "portrait"],
      height: 250,
      sizes: [billboard],
      width: 970,
    },
  ],
  nativeB: [
    {
      orientation: ["landscape", "portrait"],
      height: 250,
      sizes: [[300, 250]],
      width: 300,
    },
  ],
  nativeC: [
    {
      orientation: ["landscape", "portrait"],
      height: 600,
      sizes: [[300, 600]],
      width: 300,
    },
  ],
  sectionB: [
    {
      orientation: ["landscape", "portrait"],
      height: 90,
      sizes: [leaderboard],
      width: 728,
    },
  ],
  sectionC: [
    {
      orientation: ["portrait"],
      height: 90,
      sizes: [leaderboard],
      width: 728,
    },
    {
      orientation: ["landscape"],
      height: 250,
      sizes: [billboard],
      width: 970,
    },
  ],
  pixel: [
    {
      orientation: ["landscape", "portrait"],
      height: 0,
      sizes: [[1, 1]],
      width: 0,
    },
  ],
};

export default sizes;
