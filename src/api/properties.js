import properties from "../data/properties";

// Get ALL properties
export const getProperties = async () => {
  return properties;
};

// Featured (homepage)
export const getFeaturedProperties = async () => {
  return properties.filter((p) => p.featured);
};

// Recommended (dashboard)
export const getRecommendedProperties = async () => {
  return properties.filter((p) => p.recommended);
};

// Get single property (details page)
export const getPropertyById = async (id) => {
  return properties.find((p) => p.id === Number(id));
};