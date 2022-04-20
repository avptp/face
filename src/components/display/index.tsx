type Props = {
  if: boolean;
  then?: CallableFunction;
  children?: JSX.Element | JSX.Element[];
};

export default function Display(props: Props) {
  if (!props.if) {
    return null;
  }

  return <>{props.then ? props.then() : props.children}</>;
}
