import axios from "configs/axios";

export const giveWish = (payload) => () => {
  return axios.post(`/invitation-page`, payload, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
