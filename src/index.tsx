import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NewspaperHome } from "./screens/NewspaperHome";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <NewspaperHome />
  </StrictMode>,
);
