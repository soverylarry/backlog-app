import axios from "axios";

export default {
  getFullMediaList: function(query) {
    return axios.get("/api");
  },

  addMediaToList: function(query) {
    return axios.post("/api/submit", { params: query })
  }
};