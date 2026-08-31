/**
 * Site-wide review flags.
 *
 * IS_DRAFT   Marks the page noindex/nofollow and shows the draft banner.
 *            The page names a real doctor and lists credentials sourced from
 *            public directories rather than confirmed with her, so it must
 *            not be indexed or mistaken for her official site.
 *
 * SHOW_TAGS  Paints the yellow highlight under every unconfirmed value.
 *            Turn OFF to see the design clean for a pitch; turn ON to review
 *            what still needs confirming. The bracket tags stay in the
 *            content either way — this only controls the highlight.
 */
export const IS_DRAFT = true;
export const SHOW_TAGS = true;
