import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global";

export const getCars = async (params = {}, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars`, {
      params: {
        ...params,
        page,
        limit: 8,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching cars:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "Failed to fetch cars");
  }
};

export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/cars/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch car details"
    );
  }
};

export const getBrands = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/brands`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch brands");
  }
};
