import { getAccessCode } from "./env";

const ACCESS_KEY = "kb_access_code";

export const setAccessCode = (code: string) => {
  console.log("Setting access code cookie");
  // Set cookie with 7 days expiry and necessary attributes
  document.cookie = `${ACCESS_KEY}=${code};path=/;max-age=${60 * 60 * 24 * 7}`;
  console.log("Cookie set:", document.cookie);
};

export const getStoredAccessCode = (): string | null => {
  const cookies = document.cookie.split(";");
  const accessCookie = cookies.find(cookie => cookie.trim().startsWith(`${ACCESS_KEY}=`));
  const code = accessCookie ? accessCookie.split("=")[1] : null;
  console.log("Retrieved stored access code:", code);
  return code;
};

export const clearAccessCode = () => {
  console.log("Clearing access code cookie");
  document.cookie = `${ACCESS_KEY}=;path=/;max-age=0`;
};

export const isAuthenticated = (): boolean => {
  const storedCode = getStoredAccessCode();
  const expectedCode = getAccessCode();
  console.log("Checking authentication:", { storedCode, expectedCode });
  return storedCode === expectedCode;
};
