import ContentLeft from "./components/Content/ContentLeft";
import ContentRIght from "./components/Content/ContentRight";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-row w-full min-h-screen bg-white">
      <Sidebar />
      <ContentLeft />
      <ContentRIght />
    </div>
  );
}

export default App;
