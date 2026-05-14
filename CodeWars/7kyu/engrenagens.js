// You are given a list of cogs in a gear train

// Each element represents the number of teeth of that cog

// e.g. [100, 75] means

// 1st cog has 100 teeth
// 2nd cog has 75 teeth
// If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?

// (use negative numbers for anti-clockwise rotation)

// const cogRpm = (cogs) => {
//   console.log((cogs.length % 2 == 0 ? -1 : 1) * cogs[0] / cogs[cogs.length-1]);
// }

// cogRpm([39, 26])

const cogRpm = (cogs, n) => {
  const initial = ((n % 2 === 0 ? 1 : -1) * cogs[n]) / cogs[0];
  const final = (((cogs.length - 1 - n) % 2 == 0 ? 1 : -1) * cogs[n]) / cogs[cogs.length - 1];
  console.log([initial, final]);
};

cogRpm([34, 82, 38, 16, 44, 68, 22, 53, 20, 58, 89, 14, 64, 82], 13);
