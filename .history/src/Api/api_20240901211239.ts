import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getRides = async () => {
  return apiClient.get("/rides");
};

export const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
