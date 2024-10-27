export function generateOrderId() {
    const timestamp = Date.now(); // Current timestamp
    const randomStr = Math.random().toString(36).substr(2, 5).toUpperCase(); // Random 5-char string
    return `ORD-${timestamp}-${randomStr}`;
  }