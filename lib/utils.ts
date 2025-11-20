// Small helper to merge class names. Kept intentionally simple so there
// are no extra dependencies. It accepts strings and falsy values.
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default cn;
