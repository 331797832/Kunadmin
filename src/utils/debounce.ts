// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce(fn: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
