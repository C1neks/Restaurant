import { createTestApp } from "./createTestApp.js";
const PORT = 4000;
(async () => {
  const app = await createTestApp();
  app.listen(PORT, () =>
    console.log(`Server Running on port: http://localhost:${PORT}`)
  );
})();
