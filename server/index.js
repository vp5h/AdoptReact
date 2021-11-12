import express from "express";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import fs from "fs";
import App from "../src/App";
const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const part = html.split("not rendered");

const app = express();
app.use("/dist", express.static("dist"));
app.use((req, res) => {
  res.write(part[0]);
  const staticContext = {};
  const reactMarkUp = (
    <StaticRouter url={req.url} context={staticContext}>
      <App />
    </StaticRouter>
  );

  const stream = renderToNodeStream(reactMarkUp);
  stream.pipe(res, { end: false });
  stream.on("end", () => {
    res.status(staticContext || 200);
    res.write(part[1]);
    res.end();
  });
});

console.log(`Listening on http://localhost:${PORT}`);
app.listen(PORT);
