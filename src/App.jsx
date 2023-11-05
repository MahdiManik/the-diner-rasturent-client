import { Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <>
      <div className="font-lora">
        <MainLayout>
          <Outlet></Outlet>
        </MainLayout>
      </div>
    </>
  );
}

export default App;
