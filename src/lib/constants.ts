export const SALT_ROUNDS = 12;

export const SLUG_OPTIONS = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: false,
  locale: "vi",
  trim: true,
};

export const ARTIST_ROLES = {
  MAIN_ARTIST: "Main Artist",
  FEATURED_ARTIST: "Featured Artist",
};

export const CREDIT_ROLES = {
  COMPOSER: "Composer",
  LYRICIST: "Lyricist",
  PRODUCER: "Producer",
  ENGINEER: "Engineer",
};

export const RELEASE_TYPES = {
  ALBUM: "Album",
  EP: "Ep",
  SINGLE: "Single",
};

export const FALLBACK_IMAGE = process.env.NEXT_PUBLIC_FALLBACK_IMAGE;

export const DEFAULT_PARAMS = {
  page: "1",
  limit: "10",
};
