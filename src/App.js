import { Button } from './primitives/Button';
import './styles/global.css';
import { Icon } from './assets/icons/index';

function App() {
  return (
    <div className="app">

        <Button sort="primary">
          Primary Button 
        </Button>

        <Button sort="secondary">
          Secondary Button
        </Button>

        <Icon name="arrow_right" color='red' width="16" height="16"/>
        <Icon name="arrow_up" width="16" height="16"/>
        <Icon name="arrow_left" width="16" height="16"/>
        <Icon name="arrow_down" width="16" height="16"/>
    </div>
  );
}

export default App;
