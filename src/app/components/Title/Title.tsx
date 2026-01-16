interface Props {
  content: string;
  isFirstSection?: boolean;
}

function Title({ content, isFirstSection = false }: Props) {
  return (
    <h3 className="xxs:py-7 text-bold text-center mb-8 lg:mb-10 lg:text-left 2xl:mb-14 font-medium uppercase text-4xl xxs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
      {!isFirstSection ? <span className="border-b-4 border-current pb-1 inline-block">{content}</span> : content}
    </h3>
  );
}

export default Title;
