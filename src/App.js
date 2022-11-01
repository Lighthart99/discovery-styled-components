import './styles/global.css';
import { Icon } from './assets/icons/index';
import { Button } from './primitives/Button';

function App() {
  return (
    <div className="app">
      
      {/* primary medium */}
      <div className="grid">
        <Button sort="primary" size="medium">
          Label
        </Button>

        <Button sort="primary" size="medium">
          <Icon name="arrow_left"/>
          Label
        </Button>

        <Button sort="primary" size="medium">
          Label
          <Icon name="arrow_right"/>
        </Button>

        <Button sort="primary" size="medium">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button sort="primary" size="medium">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>

        {/* Disabled states */}
        <Button disabled sort="primary" size="medium">
          Disabled
        </Button>

        <Button disabled sort="primary" size="medium">
          <Icon name="arrow_left"/>
          Disabled
        </Button>

        <Button disabled sort="primary" size="medium">
        Disabled
          <Icon name="arrow_right"/>
        </Button>

        <Button disabled sort="primary" size="medium">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button disabled sort="primary" size="medium">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>
      </div>
      <div className="grid">
        <Button sort="primary" outline="primary" size="medium">
          Label
        </Button>

        <Button sort="primary" outline="primary" size="medium">
          <Icon name="arrow_left"/>
          Label
        </Button>

        <Button sort="primary" outline="primary" size="medium">
          Label
          <Icon name="arrow_right"/>
        </Button>

        <Button sort="primary" outline="primary" size="medium">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button sort="primary" outline="primary" size="medium">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>

        {/* Disabled states */}
        <Button disabled sort="primary" outline="primary"  size="medium">
          Disabled
        </Button>

        <Button disabled sort="primary" outline="primary"  size="medium">
          <Icon name="arrow_left"/>
          Disabled
        </Button>

        <Button disabled sort="primary" outline="primary"  size="medium">
        Disabled
          <Icon name="arrow_right"/>
        </Button>

        <Button disabled sort="primary" outline="primary"  size="medium">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button disabled sort="primary" outline="primary"  size="medium">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>
      </div>

      <div className="grid">
        <Button sort="primary" depth="primary" size="medium" >
          Label
        </Button>

        <Button sort="primary" depth="primary" size="medium">
          <Icon name="arrow_left"/>
          Label
        </Button>

        <Button sort="primary" depth="primary" size="medium">
          Label
          <Icon name="arrow_right"/>
        </Button>

        <Button sort="primary" depth="primary" size="medium">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button sort="primary" depth="primary" size="medium">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>
      </div>

      {/* primary small */}
      <div className="grid">
        <Button sort="primary" size="small">
          Label
        </Button>

        <Button sort="primary" size="small">
          <Icon name="arrow_left"/>
          Label
        </Button>

        <Button sort="primary" size="small">
          Label
          <Icon name="arrow_right"/>
        </Button>

        <Button sort="primary" size="small">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button sort="primary" size="small">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>
      </div>
      <div className="grid">
        <Button sort="primary" outline="primary" size="small">
          Label
        </Button>

        <Button sort="primary" outline="primary" size="small">
          <Icon name="arrow_left"/>
          Label
        </Button>

        <Button sort="primary" outline="primary" size="small">
          Label
          <Icon name="arrow_right"/>
        </Button>

        <Button sort="primary" outline="primary" size="small">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button sort="primary" outline="primary" size="small">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>
      </div>

      <div className="grid">
        <Button sort="primary" depth="primary" size="small" >
          Label
        </Button>

        <Button sort="primary" depth="primary" size="small">
          <Icon name="arrow_left"/>
          Label
        </Button>

        <Button sort="primary" depth="primary" size="small">
          Label
          <Icon name="arrow_right"/>
        </Button>

        <Button sort="primary" depth="primary" size="small">
          <Icon className="icon-only" name="arrow_left"/>
        </Button>

        <Button sort="primary" depth="primary" size="small">
          <Icon className="icon-only" name="arrow_right"/>
        </Button>
      </div>

      {/* secondary medium */}
      <div className="grid">
        <Button sort="secondary" size="medium">
            Label
          </Button>

          <Button sort="secondary" size="medium">
            <Icon name="arrow_left"/>
            Label
          </Button>

          <Button sort="secondary" size="medium">
            Label
            <Icon name="arrow_right"/>
          </Button>

          <Button sort="secondary" size="medium">
            <Icon className="icon-only" name="arrow_left"/>
          </Button>

          <Button sort="secondary" size="medium">
            <Icon className="icon-only" name="arrow_right"/>
          </Button>
      </div>
      <div className="grid">
        <Button sort="secondary" outline="secondary" size="medium">
            Label
          </Button>

          <Button sort="secondary" outline="secondary" size="medium">
            <Icon name="arrow_left"/>
            Label
          </Button>

          <Button sort="secondary" outline="secondary" size="medium">
            Label
            <Icon name="arrow_right"/>
          </Button>

          <Button sort="secondary" outline="secondary" size="medium">
            <Icon className="icon-only" name="arrow_left"/>
          </Button>

          <Button sort="secondary" outline="secondary" size="medium">
            <Icon className="icon-only" name="arrow_right"/>
          </Button>
      </div>
      <div className="grid">
          <Button sort="secondary" depth="secondary" size="medium">
            Label
          </Button>

          <Button sort="secondary" depth="secondary" size="medium">
            <Icon name="arrow_left"/>
            Label
          </Button>

          <Button sort="secondary" depth="secondary" size="medium">
            Label
            <Icon name="arrow_right"/>
          </Button>

          <Button sort="secondary" depth="secondary" size="medium">
            <Icon className="icon-only" name="arrow_left"/>
          </Button>

          <Button sort="secondary" depth="secondary" size="medium">
            <Icon className="icon-only" name="arrow_right"/>
          </Button>
      </div>

      {/* secondary small */}
      <div className="grid">
        <Button sort="secondary" size="small">
            Label
          </Button>

          <Button sort="secondary" size="small">
            <Icon name="arrow_left"/>
            Label
          </Button>

          <Button sort="secondary" size="small">
            Label
            <Icon name="arrow_right"/>
          </Button>

          <Button sort="secondary" size="small">
            <Icon className="icon-only" name="arrow_left"/>
          </Button>

          <Button sort="secondary" size="small">
            <Icon className="icon-only" name="arrow_right"/>
          </Button>
      </div>
      <div className="grid">
        <Button sort="secondary" outline="secondary" size="small">
            Label
          </Button>

          <Button sort="secondary" outline="secondary" size="small">
            <Icon name="arrow_left"/>
            Label
          </Button>

          <Button sort="secondary" outline="secondary" size="small">
            Label
            <Icon name="arrow_right"/>
          </Button>

          <Button sort="secondary" outline="secondary" size="small">
            <Icon className="icon-only" name="arrow_left"/>
          </Button>

          <Button sort="secondary" outline="secondary" size="small">
            <Icon className="icon-only" name="arrow_right"/>
          </Button>
      </div>

      <div className="grid">
          <Button sort="secondary" depth="secondary" size="small">
            Label
          </Button>

          <Button sort="secondary" depth="secondary" size="small">
            <Icon name="arrow_left"/>
            Label
          </Button>

          <Button sort="secondary" depth="secondary" size="small">
            Label
            <Icon name="arrow_right"/>
          </Button>

          <Button sort="secondary" depth="secondary" size="small">
            <Icon className="icon-only" name="arrow_left"/>
          </Button>

          <Button sort="secondary" depth="secondary" size="small">
            <Icon className="icon-only" name="arrow_right"/>
          </Button>
      </div>
    </div>
  );
}

export default App;
