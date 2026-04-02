import businessesData from "@/data/businesses.json";

export type Business = {
  id: string;
  name: string;
  category: string;
  rating: number;
  address: string;
  phone: string;
  website?: string;
  description: string;
  isFeatured: boolean;
};

const businesses = businessesData as Business[];

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function compareBusinesses(a: Business, b: Business) {
  if (a.isFeatured !== b.isFeatured) {
    return a.isFeatured ? -1 : 1;
  }

  if (a.rating !== b.rating) {
    return b.rating - a.rating;
  }

  return a.name.localeCompare(b.name);
}

export function getAllBusinesses() {
  return [...businesses].sort(compareBusinesses);
}

export function getFeaturedBusinesses(limit = 4) {
  return getAllBusinesses()
    .filter((business) => business.isFeatured)
    .slice(0, limit);
}

export function getBusinessById(id: string) {
  return businesses.find((business) => business.id === id);
}

// Keep the search rules in one place so the MVP can stay simple now and swap to a real API later.
export function filterBusinesses(keyword: string, location: string) {
  const normalizedKeyword = normalize(keyword);
  const normalizedLocation = normalize(location);

  return getAllBusinesses().filter((business) => {
    const matchesKeyword =
      normalizedKeyword.length === 0 ||
      normalize(business.name).includes(normalizedKeyword) ||
      normalize(business.category).includes(normalizedKeyword);

    const matchesLocation =
      normalizedLocation.length === 0 ||
      normalize(business.address).includes(normalizedLocation);

    return matchesKeyword && matchesLocation;
  });
}

export function readSearchValue(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}
