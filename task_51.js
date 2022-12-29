const globalCow = "global cow";
const showCow = () => {
  const localCow = "local cow";
  return globalCow;
};
const clonedCow = globalCow;
const mixedCow = globalCow + localCow;
