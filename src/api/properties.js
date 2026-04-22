// api/properties.js

export async function getProperties() {
  const { default: properties } = await import("../data/properties");
  return properties;
}

// Featured (homepage)
export async function getFeaturedProperties() {
  const properties = await getProperties();
  return properties.filter((p) => p.featured);
}

// Recommended (dashboard)
export async function getRecommendedProperties() {
  const properties = await getProperties();
  return properties.filter((p) => p.recommended);
}

// Get single property (details page)
export async function getPropertyById(id) {
  const properties = await getProperties();
  return properties.find((p) => p.id === Number(id));
}