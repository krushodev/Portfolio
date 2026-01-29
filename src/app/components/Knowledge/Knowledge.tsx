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
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:gap-5 h-full">
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-2">
            <div className="space-y-0 lg:space-y-2 h-full overflow-hidden">
              <h4 className="text-sm xxs:text-base font-bold uppercase tracking-wide">{tKnowledge('languages')}</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-0.5 lg:gap-0.5 h-full overflow-y-auto">
                {languagesList.map((item, index) => (
                  <li key={index} className="p-1 lg:p-1 lg:py-2 lg:px-2">
                    <span className="flex items-center gap-1 lg:gap-1 text-xs xxs:text-xs lg:text-sm">
                      <span className="text-black">|</span>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-4 xl:col-span-4">
            <div className="space-y-0 lg:space-y-2 h-full overflow-hidden">
              <h4 className="text-sm xxs:text-base font-bold uppercase tracking-wide">{tKnowledge('frameworks')}</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-0.5 lg:gap-0.5 h-full overflow-y-auto">
                {notLanguagesList.map((item, index) => (
                  <li key={index} className="p-1 lg:p-1 lg:py-2 lg:px-2">
                    <span className="flex items-center gap-1 lg:gap-1 text-xs xxs:text-xs lg:text-sm">
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
