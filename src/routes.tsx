import { Suspense } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import LoadingPage from "./pages/loading-page/LoadingPage";
import App from "./App";
import ContactUs from "./pages/contact-us/ContactUs";
import SignInPage from "./pages/signin";
import UnAuthorized from "./pages/unAuthorized";
import PropertiesPage from "./pages/properties";
import AboutUsPage from "./pages/about-us";
import AddPropertyPage from "./pages/properties/AddPropertyPage";
import EditPropertyPage from "./pages/properties/EditPropertyPage";

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={localStorage.getItem("token") ? <App /> : <UnAuthorized />}
        >
          <Route index element={<Navigate to="/properties" />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="add-property" element={<AddPropertyPage />} />
          <Route path="properties/:id" element={<EditPropertyPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default Routes;
