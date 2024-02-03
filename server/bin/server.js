const app = require("../app");
const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.set("port", PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});