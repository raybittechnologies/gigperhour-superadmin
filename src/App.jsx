import { RouterProvider } from "react-router-dom";
import browserRoutes from "./utils/Routes";

function App() {
  return <RouterProvider router={browserRoutes}></RouterProvider>;
}

export default App;
