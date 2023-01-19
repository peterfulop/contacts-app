import { IconType, icons } from '../icons/index';

export const Icon = (props: {
  icon: IconType;
  style?: { width: string; height: string; color: string };
}) => {
  return <img src={icons[props.icon]} style={props.style} />;
};
