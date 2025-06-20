import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestricterRoute from "../RestricterRoute";
import PrivateRoute from "../PrivateRoute";


const HomePage = lazy(() => import("../../pages/HomePage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const Layout = lazy(() => import("../Layout/Layout"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);  

  return isRefreshing ? (<strong>Refreshing</strong>)
    : (
      <div className={css.container}>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={<RestricterRoute component={<RegistrationPage />} />}
              />
              <Route
                path="/login"
                element={<RestricterRoute component={<LoginPage />} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
  );
}
