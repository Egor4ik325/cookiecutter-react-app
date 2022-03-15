import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import routes from "./routes";
import { AuthProvider, useAuth } from "./hooks/AuthProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import AppLoading from "./components/AppLoading";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppError from "./pages/AppError";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function AuthenticatedRequired({ children }) {
  const auth = useAuth();

  if (auth.user === null) {
    return <Navigate to={routes.login} replace />;
  }

  return children;
}

function NotAuthenticatedRequired({ children }) {
  const auth = useAuth();

  if (auth.user !== null) {
    return <Navigate to={routes.home} replace />;
  }

  return children;
}

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <AppLoading>
                    <Layout />
                  </AppLoading>
                </ErrorBoundary>
              }
            >
              <Route index element={<Home />} />
              <Route path="error" element={<AppError />} />
              <Route path="404" element={<NotFound />} />
              <Route
                path="login"
                element={
                  <NotAuthenticatedRequired>
                    <Login />
                  </NotAuthenticatedRequired>
                }
              />
              <Route
                path="register"
                element={
                  <NotAuthenticatedRequired>
                    <Register />
                  </NotAuthenticatedRequired>
                }
              />
              <Route
                path="profile"
                element={
                  <AuthenticatedRequired>
                    <Profile />
                  </AuthenticatedRequired>
                }
              />
            </Route>
          </Routes>
        </HashRouter>
      </AuthProvider>
    </>
  );
}
