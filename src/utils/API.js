import axios from "axios";
import envemu from "./envemu";

export default {
  getFullMediaList: function(query) {
    const results = axios.get(envemu.apiurl + "/api");
    console.log(results);
    return results;
  },

  addMediaToList: function(query) {
    return axios.post("/api/submit", { params: query })
  }
};