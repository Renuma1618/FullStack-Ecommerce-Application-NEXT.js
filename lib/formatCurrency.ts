// utils/formatCurrency.ts
export function formatCurrency(
  amount: number,
  currencyCode: string = "GBP",
  locale: string = "en-GB"
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode.toUpperCase(),
    }).format(amount);
  } catch (error) {
    console.error("Invalid currency code:", currencyCode, error);
    // Fallback formatting
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  }
}
