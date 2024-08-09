import axios from "axios";

const restaurantAdminInstance = axios.create({
  baseURL: "http://127.0.0.1:4000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default restaurantAdminInstance;
