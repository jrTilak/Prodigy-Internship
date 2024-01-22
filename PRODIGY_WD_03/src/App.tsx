import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/landing-page";
import RootLayout from "./components/layouts/root-layout";

interface RouteType {
  path: string;
  Layout?: any;
  Component: any;
}

const routes: RouteType[] = [
  {
    path: "/",
    Component: LandingPage,
  },
];

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Layout, Component }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={
              Layout ? (
                <RootLayout>
                  <Layout>
                    <Component />
                  </Layout>
                </RootLayout>
              ) : (
                <RootLayout>
                  <Component />
                </RootLayout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
