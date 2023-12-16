interface Props {
  children: React.ReactNode;
}

function Main({ children }: Props) {
  return <div>{children}</div>;
}

export default Main;
