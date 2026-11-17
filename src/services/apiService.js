import api from "../interceptors/axiosConfig";

const apiService = {
  login: (data) => api.post("/Auth/login", data),
  register: (data) => api.post("/Auth/register", data),
  submitEnquiry: (data) => api.post("/enquiry", data),
  //getEnquiries: () => api.get("/enquiry"),
  getSolarPlants: () => api.get("/solar-plants"),

  getEnquiries: (requirement = "", status = "") => {
    const params = {};
    if (requirement) params.requirement = requirement;
    if (status) params.status = status;

    return api.get("/enquiry", { params });
  },

  getEnquiryById: (id) => {
    return api.get(`/enquiry/${id}`);
  },
};

export default apiService;
