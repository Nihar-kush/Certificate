import "./App.css";
import Certificate from "./components/Certificate";
const short = require("short-uuid");
function App() {
  const data = {
    title: "CERTIFICATE OF ACCEPTANCE",
    id: short.generate(),
    name: "Nihar Kushwaha",
    issueDate: "November, 2020",
    expiryDate: "March 15, 2021",
  };
  return (
    <div className="App">
      <Certificate data={data} />
    </div>
  );
}

export default App;
