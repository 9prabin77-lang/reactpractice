// Task 4 — Module: Utility functions
export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}