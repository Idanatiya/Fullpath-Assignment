import { TheSidebar } from "./layout/TheSidebar/TheSidebar";
import { TheNavbar } from "./layout/TheNavbar/TheNavbar";
import { OverviewPage } from "./pages/OverviewPage/OverviewPage";

function App() {
  return (
    <div className="root-container">
      <TheNavbar />
      <TheSidebar />
      <OverviewPage />
    </div>
  );
}

export default App;
