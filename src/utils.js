import { FRUITS } from "./data";

export const getSuggestions = async (keyword) => {
  // since we're making an API call so there should be some delay so we can
  // wrap it in a promise

  const result = FRUITS.filter(
    (i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );

  return new Promise((res) => {
    setTimeout(() => res(result), 1000);
  });
};

export const debounce = (fn, delay = 500) => {
  let timerCtx;
  return function () {
    const self = this;
    const args = arguments;
    clearTimeout(timerCtx);
    timerCtx = setTimeout(() => fn.apply(self, args), delay);
  };
};
