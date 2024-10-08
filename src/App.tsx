import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./components/providers/app-providers";
import "./App.css";
import { CounterTwo } from "./components/counter-two/counter-two";
import { Application } from "./components/Application";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        <MuiMode />
        {/* <CounterTwo count={0} handleIncrement={() => {}} handleDecrement={() => {}} /> */}
      </div>
    </AppProviders>
  );
}

export default App;
