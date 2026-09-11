/**
 * Widens the deeply-readonly literal types produced by `as const` into plain
 * strings and mutable arrays, while keeping the object shape intact.
 *
 * It is what lets a translation file be checked against the Russian original:
 * every key must exist and nest the same way, but the words are free to differ.
 */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : { -readonly [K in keyof T]: Widen<T[K]> };
