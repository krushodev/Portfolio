import Title from '../Title/Title';
import skills from '@/app/mocks/skills';

function Knowledge() {
  return (
    <div className="h-full flex flex-col">
      <Title content="My Skills" />
      <div className="grid grid-flow-row lg:grid-cols-6 lg:gap-5">
        <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
          <h5 className="text-base uppercase py-3 xs:py-6 xxs:text-lg xxs:py-5 xs:text-2xl md:text-3xl md:py-10 lg:text-4xl xl:text-5xl">Languages</h5>
          <div>
            <ul className="grid grid-cols-2 lg:grid-cols-1">
              {skills.map(
                (item, index) =>
                  item.category === 'language' && (
                    <li key={index} className="p-2 s:py-3 s:px-4">
                      <span className="flex items-center gap-3 text-xs xxs:text-sm xs:gap-4 lg:text-xl">
                        <span className="bg-black h-2 w-2 rounded-full"></span>
                        {item.name}
                      </span>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div className="row-span-4 s:row-span-6 lg:col-span-4">
          <h5 className="text-base uppercase py-3 xs:py-6 xxs:text-lg xxs:py-5 xs:text-2xl md:text-3xl md:py-10 lg:text-4xl xl:text-5xl">Frameworks / Libraries / Others</h5>
          <div>
            <ul className="grid grid-cols-3 screen-h-sm:grid-cols-2 md:!grid-cols-3">
              {skills.map(
                (item, index) =>
                  item.category !== 'language' && (
                    <li key={index} className="p-2 s:py-3 s:px-4">
                      <span className="flex items-center gap-3 text-xs xxs:text-sm xs:gap-4 lg:text-xl">
                        <span className="bg-black h-2 w-2 rounded-full"></span>
                        {item.name}
                      </span>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
