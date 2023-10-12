import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import AppLayout from "./components/AppLayout";
import SearchContainer from "./components/SearchContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <>
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
