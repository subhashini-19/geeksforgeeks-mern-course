import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthProvider>
  </BrowserRouter>
);
