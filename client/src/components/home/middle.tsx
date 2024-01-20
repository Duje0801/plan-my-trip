import Title from "./title";
import Form from "./form";

export default function Middle(): JSX.Element {
  return (
    <div className="hero-content text-center flex flex-col gap-4 text-neutral-content w-fit">
      <Title />
      <Form />{" "}
    </div>
  );
}
