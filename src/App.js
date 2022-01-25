import "./App.css";
import "bulma/css/bulma.min.css";
import { Form, Button, Icon, Box } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          backgroundColor="dark"
          textAlign="left"
          textColor="white"
          style={{ width: 450, height: 340 }}
        >
          <Form.Field>
            <label className="App-label">Email</label>
            <Form.Control>
              <Form.Input
                placeholder="contact.frann@gmail.com"
                name="email"
                type="email"
              />
              <Icon align="left">
                <FontAwesomeIcon icon={faSignInAlt} color="black" />
              </Icon>
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <label className="App-label">Password</label>
            <Form.Control>
              <Form.Input
                placeholder="*********"
                name="password"
                type="password"
              />
              <Icon align="left">
                <FontAwesomeIcon icon={faUnlockAlt} color="black" />
              </Icon>
            </Form.Control>
          </Form.Field>
          <div className="rememberMe">
            <label className="App-label">
              <input className="App-input" name="isGoing" type="checkbox" />
              Remember me
            </label>
          </div>
          <Button.Group>
            <Button fullwidth color="link">
              Login
            </Button>
            <a className="forgotPassword">Forgot your password?</a>
          </Button.Group>
        </Box>
      </header>
    </div>
  );
}

export default App;
