export default (windowWidth: number, orientation: string) => {
  if (orientation === "landscape") {
    if (windowWidth >= 1366) return 1140;
    if (windowWidth >= 1194) return 1024;
    if (windowWidth >= 1080) return 1000;
    return 944;
  } else {
    if (windowWidth >= 1024) return 920;
    if (windowWidth >= 810) return 730;
    return 688;
  }
};
