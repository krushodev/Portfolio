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
      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-5 h-full">
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="space-y-2 lg:space-y-4">
              <h4 className="text-lg xxs:text-xl font-bold uppercase tracking-wide">{tKnowledge('languages')}</h4>
              <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-1 gap-1 lg:gap-2">
                {languagesList.map((item, index) => (
                  <li key={index} className="p-1 lg:p-2 lg:py-3 lg:px-4">
                    <span className="flex items-center gap-1 lg:gap-2 text-xs xxs:text-sm lg:text-xl">
                      <span className="text-black">|</span>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4 xl:col-span-4">
            <div className="space-y-2 lg:space-y-4">
              <h4 className="text-lg xxs:text-xl font-bold uppercase tracking-wide">{tKnowledge('frameworks')}</h4>
              <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-1 lg:gap-2">
                {notLanguagesList.map((item, index) => (
                  <li key={index} className="p-1 lg:p-2 lg:py-3 lg:px-4">
                    <span className="flex items-center gap-1 lg:gap-2 text-xs xxs:text-sm lg:text-xl">
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
