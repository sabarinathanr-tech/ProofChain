export function required(value: unknown) { return value !== undefined && value !== null && String(value).trim().length > 0; }
