/**
 * Slices the text to the specified character limit.
 *
 * This function takes a text and checks if its length exceeds the specified `limit`. If the
 * text length is greater than the limit, it slices the text to the specified limit and adds
 * ellipsis ('...') to indicate truncation. If the text length is equal to or less than the
 * limit, it returns the original text as it is.
 *
 * @param {string} text - The text to be sliced.
 * @param {number} limit - The character limit to which the text will be sliced.
 * @returns {string} The sliced text with ellipsis if applicable, or the original text if it's within the limit.
 *
 * @example
 * const longText = "This is a very long text that needs to be sliced.";
 * const slicedText = sliceText(longText, 20);
 * // Output: "This is a very long..."
 *
 * const shortText = "Short text.";
 * const slicedShortText = sliceText(shortText, 20);
 * // Output: "Short text."
 */
const sliceText = (text: string, limit: number) => {
  if (text.length > limit) {
    return `${text.slice(0, limit)}...`;
  }
  return text;
};

export default sliceText;
