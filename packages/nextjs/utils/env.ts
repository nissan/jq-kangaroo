export const getAccessCode = (): string => {
  const accessCode = process.env.NEXT_PUBLIC_ACCESS_CODE;
  if (!accessCode) {
    console.error("Access code environment variable is not set!");
    return "";
  }
  return accessCode;
};
