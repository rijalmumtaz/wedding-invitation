import axios from "axios";
import { GIVE_WISH } from "../types";
import { RiPlaystationLine } from "react-icons/ri";

export const giveWish = (payload) => () => {
  return axios.post(`/wishes-page`, payload, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
