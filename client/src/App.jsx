import TextEditor from './TextEditor';
import { v4 as uuid } from 'uuid';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={`/document/${uuid()}`} />
      </Route>

      <Route path="/document/:id" exact>
        <TextEditor />
      </Route>
    </Switch>
  );
}

export default App;
