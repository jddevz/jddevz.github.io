import { Divider } from "./divider";

const content = `Hi, I'm James and I like building websites.`;

export const About = () => {
  return (
    <>
      <div className="pt-8 pb-6 text-2xl text-white">
        <h1 className="my-8 font-semibold">About</h1>
        <p className="text-base">{content}</p>
      </div>
      <Divider />
    </>
  );
};
