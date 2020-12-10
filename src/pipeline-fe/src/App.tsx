import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  const RouteGuard = (history: any) => {
    // if (settingsStore.token !== "") return;
    // if (history.location.pathname === Routes.FOREX_COMPONENTS) return;
    // if (history.location.pathname.includes(Routes.SIGNUP)) return;
    // if (history.location.pathname === Routes.FORGOT_PASSWORD) return;
    // if (history.location.pathname.includes("reset-password")) return;
    // history.push(Routes.LOGIN);
  };

  return (
    <div className="App">
      NAVBAR
      <div className="app__body">BODY</div>
      FOOTER
    </div>
  );
}

export default App;
