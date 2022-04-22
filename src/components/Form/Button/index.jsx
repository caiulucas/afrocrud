import './styles.scss';

import { ReactComponent as ArrowRightIcon } from '../../../assets/arrow-right-icon.svg';
import { ReactComponent as PlusIcon } from '../../../assets/plus-icon.svg';

const icons = {
  arrowRight: <ArrowRightIcon />,
  plus: <PlusIcon />
}

export function Button({ title, icon }) {
  return (
    <button className="button">{title}{icons[icon]}</button>
  );
}