// /lib/slug.js
export function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const serviceSlug = (service) => slugify(service);

// second path segment format: "<service-slug>-agency-<city-slug>"
export const pageSlug = (service, city) =>
  `${serviceSlug(service)}-agency-${slugify(city)}`;

export const hrefFor = (service, city) =>
  `/${serviceSlug(service)}/${pageSlug(service, city)}`;
