const db = require("./models");
const app = express();

app.get("/api/all", (req, res) => {
  db.Media.find({})
    .then(dbMedia => {
      res.json(dbMedia);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/submit", ( { body }, res) => {
  db.Media.create(body)
    .then(dbMedia => {
      res.json(dbMedia);
    })
    .catch(err => {
      res.json(err);
    });
});