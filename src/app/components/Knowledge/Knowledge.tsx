'use client';

import BulletListItem from '../BulletListItem/BulletListItem';
import Title from '../Title/Title';
import skills from '@/app/mocks/skills';
import { useTranslations } from 'next-intl';

function Knowledge() {
  const t = useTranslations('sections');
  const tKnowledge = useTranslations('knowledge');
  const languagesList = skills.filter(item => item.category === 'language');
  const notLanguagesList = skills.filter(item => item.category !== 'language');

  return (
    <div className="h-full flex flex-col">
      <Title content={t('knowledge')} />
      <div className="grid grid-flow-row lg:grid-cols-6 lg:gap-5">
        <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
          <div className="space-y-4">
            <h4 className="text-lg xxs:text-xl font-bold uppercase tracking-wide">{tKnowledge('languages')}</h4>
            <div>
              <ul className="grid grid-cols-2 lg:grid-cols-1">
                {languagesList.map((item, index) => (
                  <li key={index} className="p-2 s:py-3 s:px-4">
                    <span className="flex items-center gap-2 text-xs xxs:text-sm xs:gap-4 lg:text-xl">
                      <span className="text-black">|</span>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row-span-4 s:row-span-6 lg:col-span-4">
          <div className="space-y-4">
            <h4 className="text-lg xxs:text-xl font-bold uppercase tracking-wide">{tKnowledge('frameworks')}</h4>
            <div>
              <ul className="grid grid-cols-3 screen-h-sm:grid-cols-2 md:!grid-cols-3">
                {notLanguagesList.map((item, index) => (
                  <li key={index} className="p-2 s:py-3 s:px-4">
                    <span className="flex items-center gap-2 text-xs xxs:text-sm xs:gap-4 lg:text-xl">
                      <span className="text-black">|</span>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
