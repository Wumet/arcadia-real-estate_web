export async function getUserPayments() {
  try {
    const module = await import("../data/payments");
    return module.default;

  } catch (error) {
    console.error(error);
    return [];
  }
}