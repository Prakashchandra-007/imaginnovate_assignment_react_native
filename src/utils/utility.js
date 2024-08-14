export function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Execute the function with the latest arguments
    }, delay);
  };
}
