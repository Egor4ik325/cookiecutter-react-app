const API_BASE_URL = "http://localhost:8000/api/";

const urls = {
  // Authentication, registration, account management
  login: () => `auth/login/`,
  register: () => `auth/register/`,
  user: () => `auth/user/`,
};

export function reverse(urlName, args) {
  const url = urls[urlName](args);
  return API_BASE_URL + url;
}
