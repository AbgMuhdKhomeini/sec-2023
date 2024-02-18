import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalculateBmi from "./pages/calculateBmi";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CalculateBmi />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
