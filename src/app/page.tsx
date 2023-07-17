import Link from "next/link";
import { ContainerSection } from "./components/container-section";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Project } from "./components/project";

const ABOUT_TITLE = "About";
const ABOUT_CONTENT = `Hi, I'm James. I work as a full-stack developer.`;

const PROJECTS_TITLE = "Recent Projects";

const THE_AFTER_PROJECT = {
  href: `https://theafterproject.com.au/`,
  title: `The After Project`,
  body: `Landing page for an online personal trainer.`,
};

const ZECAR = {
  href: `https://zecar.com/`,
  title: `zecar`,
  body: `A data-driven one stop shop website for all things electric cars which has a blogging system.`,
};

export default function Home() {
  return (
    <>
      <ContainerSection title={ABOUT_TITLE}>
        <p>{ABOUT_CONTENT}</p>
      </ContainerSection>
      <ContainerSection title={PROJECTS_TITLE}>
        <Project {...THE_AFTER_PROJECT} />
        <Project {...ZECAR} />
      </ContainerSection>
    </>
  );
}

{
  /* <Link
          href="/projects"
          className="mt-8 flex items-center justify-center"
        >
          <span className="mr-2">All Projects</span> <AiOutlineArrowRight />
        </Link> */
}
