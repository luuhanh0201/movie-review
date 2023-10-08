// import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routers";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";
import "animate.css";
function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type LayoutType = any

  return (
    <Router>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            let Layout: LayoutType = DefaultLayout;
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })
        }
      </Routes>
    </Router>
  )
}

export default App
