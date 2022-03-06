// biblioteca usadas
const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

// definições de arquivos
const routes = require("./routes");
const port = 3001 | process.env.PORT;
const configSwagger = require("./config/documentation/swagger-definition")
const specs = swaggerJsdoc(configSwagger)

// Definições de usabilidade de biblioteca 
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/app-docs", swaggerUi.serve, swaggerUi.setup(specs))


// Inicialização do sistema
app.listen(port, () => console.log(`App online in port ${port}`));
