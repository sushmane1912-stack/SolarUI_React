const interceptor = (api) => {
  api.interceptors.request.use(
    (config) => {
      // Example: attach token
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        // handle unauthorized
        window.location.href = "/login";
      }
      return Promise.reject(error);
    },
  );
};

export default interceptor;
