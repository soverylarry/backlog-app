import axios from "axios";
import envemu from "./envemu";

export default {
  getFullMediaList: function(query) {
    const results = axios.get(envemu.apiurl + "/api");
    return results;
  },

  addMediaToList: function(query) {
    return axios.post(envemu.apiurl + "/api/submit", { params: query })
  }
};