// MOVE THIS BACK INTO THE TEMPLATE FILE AS ITS SPECIFIC TO IT
export default (crops) => {
  console.log(crops);
  if (!crops) {
    return null;
  }
  const { crop169, crop32, crop1251, crop11, crop45, crop23 } = crops;
  return crop169 || crop32 || crop1251 || crop11 || crop45 || crop23;
};
