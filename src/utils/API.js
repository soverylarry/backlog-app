import axios from "axios";
import envemu from "./envemu";

export default {
  getFullMediaList: function(query) {
    const results = axios.get(envemu.apiurl + "/api");
    return results;
  },

  addMediaToList: function(query) {
    return axios.post(envemu.apiurl + "/api/submit", { params: query })
  },

  updateMedia: function(id, query) {
    console.log("QUERY IS: " + query);
    return axios.put(envemu.apiurl + "/api/submit/" + id, { params: query })
  },

  deleteMedia: function(id) {
    return axios.delete(envemu.apiurl + "/api/submit/" + id)
  }
};