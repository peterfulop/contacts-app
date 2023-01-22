import { IconType, icons } from '../icons/index';

export const Icon = (props: {
  icon: IconType;
  width?: string | number;
  height?: string | number;
  color?: string;
  img?: React.HTMLAttributes<HTMLImageElement>;
}) => {
  return (
    <img
      src={icons[props.icon]}
      {...props.img}
      width={props.width}
      height={props.width}
      color={props.color}
    />
  );
};
