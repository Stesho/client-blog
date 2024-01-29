export const ERROR_MESSAGES = {
  required: (field: string) => `${field} is required field`,
  min: (field: string, len: number) =>
    `${field} must be at least ${len} characters`,
  max: (field: string, len: number) =>
    `${field} must be at most ${len} characters`,
  email: 'Invalid email',
} as const;
