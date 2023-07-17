interface Props {
  href: string;
  title: string;
  body: string;
}

export const Project = ({ href, title, body }: Props) => {
  return (
    <div className="my-6">
      <h3 className="text-lg text-blue-400">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {title}
        </a>
      </h3>
      <p>{body}</p>
    </div>
  );
};
