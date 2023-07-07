import { useState } from "react";
import Alert from "./Component/Alert";
import Button from "./Component/Button";
import Resume from "./Component/Resume";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Resume />
    </div>
  );

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Aert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
