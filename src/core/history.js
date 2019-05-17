import { createBrowserHistory as createHistory } from "history";
import current from './current';

const history = createHistory();

// Listen for changes to the current location.
history.listen((location, action) => {
    current(location);
});

export default history;