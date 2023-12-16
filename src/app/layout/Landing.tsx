interface Props {
  children: React.ReactNode;
}

function Landing({ children }: Props) {
  return <main>{children}</main>;
}

export default Landing;
