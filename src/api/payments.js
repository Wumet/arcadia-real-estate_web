export async function getUserPayments() {
  try {
    const getUserPayments = await import("../data/payments");
    return getUserPayments.default;

  } catch (error) {
    console.error(error);
    return [];
  }
}