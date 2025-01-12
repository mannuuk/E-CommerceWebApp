import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "../Components/Spinner";

const HomePage = lazy(() => import("../Pages/Home"));
const PageHeader = lazy(() => import("../Components/PageHeader"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-dvh flex justify-center items-center">
            <Spinner />
          </div>
        }
      >
        <PageHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
