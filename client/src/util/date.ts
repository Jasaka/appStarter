export const isDate = (value: unknown): value is string =>
    typeof value === 'string' ? new Date(value).toString() !== 'Invalid Date' && !Number.isNaN(Date.parse(value)) : false;
