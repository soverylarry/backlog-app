import axios from "axios";

export default {
  getFullMediaList: function(query) {
    return axios.get("/api/all");
  },

  addMediaToList: function(query) {
    return axios.post("/api/submit", { params: query })
  }
};