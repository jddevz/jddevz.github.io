import { ContainerSection } from "./components/container-section";

const PAGE_CONTENT = [
  {
    title: "About",
    content: `Hi, I'm James and I like building websites.`,
  },
  {
    title: "Projects",
    content: `asfdsafda`,
  },
];

export default function Home() {
  return (
    <>
      {PAGE_CONTENT.map(({ title, content }) => (
        <ContainerSection title={title} key={title}>
          <p>{content}</p>
        </ContainerSection>
      ))}
    </>
  );
}
