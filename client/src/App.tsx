import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Trip from "./pages/trip";
import { routes } from "./routes/routes";

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <Home />,
    },
    {
      path: routes.trip,
      element: <Trip />,
    },
    {
      path: `*`,
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
