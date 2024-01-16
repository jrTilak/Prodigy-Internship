import { Routes, Route } from "react-router-dom";
import StopwatchPage from "./components/pages/stopwatch-page";

interface RouteType {
  path: string;
  Layout?: any;
  Component: any;
}

const routes: RouteType[] = [
  {
    path: "/",
    Component: StopwatchPage,
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
                <Layout>
                  <Component />
                </Layout>
              ) : (
                <Component />
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
