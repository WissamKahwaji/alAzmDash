import { Outlet } from "react-router-dom";
import Layout from "./layouts";

function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
