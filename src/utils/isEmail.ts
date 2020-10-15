export const isEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9_.]+@[a-zA-Z0-9-.]+\.[a-z]{2,4}$/.test(email);
}