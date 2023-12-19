import React from 'react';

interface Props {
  content: string;
}

function BulletListItem({ content }: Props) {
  return (
    <li className="p-2 s:py-3 s:px-4">
      <span className="flex items-center gap-3 text-xs xxs:text-sm xs:gap-4 lg:text-xl">
        <span className="bg-black h-1 w-1 sm:h-2 sm:w-2 rounded-full"></span>
        {content}
      </span>
    </li>
  );
}

export default BulletListItem;
