/**
 * Content values carry review tags like:
 *   "14 [CONFLICT: Lybrate says 15]"
 *   "[TODO: not published anywhere public]"
 *
 * Rendering those raw is fine in body copy, but it wrecks layout anywhere
 * the value is set large or sits inside a button. This splits the real
 * value from its tag so each can be placed appropriately.
 */
export function splitTag(raw: string): { value: string; note: string | null } {
  const match = raw.match(/^([^[]*)\[(.+)\]\s*$/s);
  if (!match) return { value: raw.trim(), note: null };
  return {
    value: match[1].trim(),
    note: match[2].trim(),
  };
}

/** True when the value is nothing but a review tag — no real content yet. */
export function isUnknown(raw: string): boolean {
  const { value } = splitTag(raw);
  return value === '';
}
