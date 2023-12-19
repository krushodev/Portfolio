import BulletListItem from '../BulletListItem/BulletListItem';
import Title from '../Title/Title';
import skills from '@/app/mocks/skills';

function Knowledge() {
  const languagesList = skills.filter(item => item.category === 'language');
  const notLanguagesList = skills.filter(item => item.category !== 'language');

  const titleStyle = 'text-base uppercase py-3 xs:py-6 xxs:text-lg xxs:py-5 xs:text-2xl md:text-3xl md:py-10 lg:text-4xl xl:text-5xl';

  return (
    <div className="h-full flex flex-col">
      <Title content="My Skills" />
      <div className="grid grid-flow-row lg:grid-cols-6 lg:gap-5">
        <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
          <h5 className={titleStyle}>Languages</h5>
          <div>
            <ul className="grid grid-cols-2 lg:grid-cols-1">
              {languagesList.map((item, index) => (
                <BulletListItem key={index} content={item.name} />
              ))}
            </ul>
          </div>
        </div>
        <div className="row-span-4 s:row-span-6 lg:col-span-4">
          <h5 className={titleStyle}>Frameworks / Libraries / Others</h5>
          <div>
            <ul className="grid grid-cols-3 screen-h-sm:grid-cols-2 md:!grid-cols-3">
              {notLanguagesList.map((item, index) => (
                <BulletListItem key={index} content={item.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
