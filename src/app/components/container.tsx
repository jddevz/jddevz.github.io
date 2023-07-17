export const Container = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="container mx-auto max-w-3xl px-4 flex flex-col flex-grow">
      {children}
    </div>
  );
};
