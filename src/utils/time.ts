export const sectoMin = (sec: number) => {
  return sec * 60;
};

export const formateToSec = (sec: number) => {
  const _min = Math.floor(sec / 60);
  const _sec = sec % 60;

  return `${_min} min and ${_sec} sec`;
};
