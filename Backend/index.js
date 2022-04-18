import { createApp } from "./createApp.js";
const PORT = 4000;
(async () => {
  const app = await createApp();
  app.listen(PORT, () =>
    console.log(`Server Running on port: http://localhost:${PORT}`)
  );
})();
