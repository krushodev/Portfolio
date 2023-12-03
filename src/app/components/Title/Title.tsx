interface Props {
  content: string;
}

function Title({ content }: Props) {
  return (
    <h3 className="bg-green-200 xxs:py-10 text-bold text-center mb-8 lg:mb-10 lg:text-left 2xl:mb-14 font-medium uppercase text-4xl xxs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl">
      {content}
    </h3>
  );
}

export default Title;
