const express = require("express"),
  initModels = require("./models/initmodels.js"),
  db = require("./utils/database.js"),
  app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");
const config = require("../config").api;
const cors = require("cors");
//routes
const usersRoutes = require("./users/users.routes.js");
const authRoute = require("./auth/auth.routes.js");
const projectsRoutes = require("./projects/projects.routes.js");
const tasksRoutes = require("./tasks/tasks.routes.js");

app.use(express.json());
app.use(cors());

db.authenticate()
  .then(() => {
    console.log("successful authenticate");
  })
  .catch((er) => console.log(er));

db.sync()
  .then(() => {
    console.log("successful sync");
  })
  .catch((er) => console.log(er));

initModels();
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server ok",
    data: {
      docs: `${config.host}/api/v1/docs`,
    },
  });
});

app.use("/api/v1", usersRoutes);
app.use("/api/v1", authRoute);
app.use("/api/v1", projectsRoutes);
app.use("/api/v1", tasksRoutes);

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("*", (req, res) => {
  responseHandlers.error({
    res,
    status: 404,
    message: `URL not found, please try with ${config.host}`,
  });
});

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
