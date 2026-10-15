/**
 * Format date to human-readable format
 */
export function formatDate(dateString: string | number | Date): string {
  try {
    const d = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(d);
  } catch {
    return String(dateString);
  }
}

/**
 * Format numbers with thousands separator
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}
