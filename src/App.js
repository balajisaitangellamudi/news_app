import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Layout/Router";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="bg-body-secondary"></div>
    </RouterProvider>
  );
}

export default App;
