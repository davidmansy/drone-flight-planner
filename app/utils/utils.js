export const getUniqueId = () => {
  return Math.random().toString(36).substr(-8);
};
