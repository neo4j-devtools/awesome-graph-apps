import AppListIndex from "./modules/AppList/AppListIndex";
import ConnectionIndex from "./modules/Connection/ConnectionIndex";
import Header from "./modules/Header/Header";

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-y-12 mt-16">
      <Header />
      <ConnectionIndex />
      <AppListIndex />
    </div>
  );
}

export default App;
