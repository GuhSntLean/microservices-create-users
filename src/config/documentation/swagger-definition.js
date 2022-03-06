const configSwagger = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GuhSntLean Documentation",
      version: "0.0.1",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "SuhSntLean",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:3001/",
      },
    ],
  },
  apis: ["./routes/index.js"],
};

module.exports = configSwagger;
