const configSwagger = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Microservice Documentation",
      version: "0.0.1",
      description:
        "",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "GuhSntLean",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = configSwagger;
