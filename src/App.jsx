import { AppMain } from "./router/AppMain";
import { store } from "./redux/store/store";
import { ContextProvider } from "./context/context";
import { Provider } from "react-redux";
import "./assets/css/index.css";

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <AppMain />
      </ContextProvider>
    </Provider>
  );
}

export default App;
