import "./App.css";
import { CushonHeader } from "./components/cushon-header/CushonHeader";
import { UserDashboard } from "./components/user-dashboard/UserDashboard";

export function App() {
  return (
    <>
      <CushonHeader />
      <UserDashboard />
    </>
  );
}
