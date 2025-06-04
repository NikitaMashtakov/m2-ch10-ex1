function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      return func.apply(this, arguments);
    }, ms);
  };
}

export default debounce;
