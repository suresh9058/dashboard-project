import { apiClient } from "./apiClient";

const PATHS = {
  cards: "/v2/list",
};

export const getCardDetails = async () => apiClient.get(`${PATHS.cards}`);
// export const getCardDetails = async () => {
//   const response = await apiClient.get(`${PATHS.cards}`);
//   return response;
// };
