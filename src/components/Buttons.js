import { Button } from '../primitives/Button'
import { Icon } from '../assets/icons/index';

Button.primary = ({ buttonText }) => {
  return (
    <Button type='primary'>
      {buttonText}
    </Button>
  );
};

export default Button
