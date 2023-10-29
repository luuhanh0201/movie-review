// import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routers";
import "animate.css";
import { ConfigProvider } from 'antd';
import viVN from 'antd/es/locale/vi_VN';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="">
      <ConfigProvider locale={viVN}>
        <Router>
          <AppRoutes />
        </Router>
      </ConfigProvider>
    </div>
  )
}

export default App
