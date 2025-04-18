/**
 * Formats a numeric amount as a currency string with the specified decimal count.
 *
 * @param {number} amount - The numeric amount to format as currency.
 * @param {number} [decimalCount=2] - The number of decimal places to display. Default is 2.
 * @returns {string} A formatted currency string representing the given amount.
 * @example
 * // Input:
 * const amount1 = 123456.789;
 * const amount2 = 987.654;
 * const formatted1 = formatCurrency(amount1); // Output: "$123,456.79" (assuming en-US locale)
 * const formatted2 = formatCurrency(amount2, 3); // Output: "$987.654" (assuming en-US locale)
 */
const formatCurrency = (amount: number, decimalCount = 2) => {
  // If the amount is undefined, return '0.00'
  if (typeof amount === 'undefined') {
    return '0.00';
  }

  // Create a formatter using Intl.NumberFormat to format the amount as a currency string
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimalCount
  });

  // Format the amount as a currency string and return it
  return formatter.format(amount);
};

export default formatCurrency;
