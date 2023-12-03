import Title from '../Title/Title';

function About() {
  return (
    <div className="h-full flex flex-col">
      <Title content="Who I am" />
      <div className="lg:w-4/6 2xl:w-3/6">
        <p className="text-lg xs:text-xl s:text-2xl lg:text-3xl lg:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed">
          I am a Software Developer based in Argentina, driven by a passion for crafting effective digital solutions. Eager to grow professionally, I am focused on writing clean code and staying
          updated on best practices. Actively seeking opportunities to collaborate within dynamic teams, I am enthusiastic about contributing my skills to projects that push the boundaries of web
          development.
        </p>
      </div>
    </div>
  );
}

export default About;
