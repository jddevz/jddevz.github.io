import { Divider } from "./divider";

interface Props {
  children: JSX.Element;
  title: string;
}

export const ContainerSection = ({ children, title }: Props) => {
  return (
    <>
      <div className="pt-8 pb-6 text-2xl text-white">
        <h1 className="my-8 font-semibold">{title}</h1>
        <p className="text-base">{children}</p>
      </div>
      <Divider />
    </>
  );
};
