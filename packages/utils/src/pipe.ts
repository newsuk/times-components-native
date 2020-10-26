export const pipe = (...fns: { (data: any): void }[]) => (args: any) =>
  fns.reduce((arg, f) => f(arg), args);
