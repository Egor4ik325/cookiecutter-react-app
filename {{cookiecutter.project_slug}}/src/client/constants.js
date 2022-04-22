const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const urls = {
  // Authentication, registration, account management
  login: apiBaseUrl + `auth/login/`,
  register: apiBaseUrl + `auth/register/`,
  user: apiBaseUrl + `auth/user/`,
};
