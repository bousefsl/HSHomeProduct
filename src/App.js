import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//Layout
import RootLayout from "./layouts/RootLayout";
//Pages
import Home from "./pages/Home";
import PlumbingDrainageHouseOwner from "./pages/PlumbingDrainageHouseOwner";

//Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <Home /> }></Route>
      <Route path="plumbing-drainage" element={ <PlumbingDrainageHouseOwner /> }></Route>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
