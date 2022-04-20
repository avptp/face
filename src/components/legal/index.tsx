import Navigation from "../navigation";

type Props = {
  then?: CallableFunction;
  children?: JSX.Element | JSX.Element[];
};

export default function Legal(props: Props) {
  return (
    <>
      <Navigation />
      <section className="legal">
        {props.then ? props.then() : props.children}
      </section>
    </>
  );
}
