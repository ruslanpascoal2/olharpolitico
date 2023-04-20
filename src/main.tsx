import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/routes/router";
import { Navbar } from "./shared/components/navbar";
import GlobalStyles from "./styles/GlobalStyles";
import PageContainer from "./shared/components/page-layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Navbar />
    <PageContainer>
      <RouterProvider router={router} />
    </PageContainer>
  </React.StrictMode>
);
