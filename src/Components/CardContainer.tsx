// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Article } from './semantics/index';

const CardContainer = ({ id, name, description, link, sourceSVG: SVGComponent }: Data) => (
  <>
    <Article
      aria-label={`Card ${name}`}
      attributes={{
        id: `Card ${id}`,
      }}
      className="rounded-[6px] shadow-md flex flex-col relative box-content w-[90%] h-[200px] bg-blue-400"
    >
      <a href={link} target={`_blank`} rel={`noopener noreferrer`} className="h-[100%] flex flex-col">
        {SVGComponent && React.createElement(SVGComponent as React.ComponentType<React.SVGProps<SVGSVGElement>>)}
        <div className="flex flex-col py-[12px] px-[16px] grow card-body bg-yellow-400">
          <h2 className="text-[17px] leading-[24px] font-[600] line-clamp-3 card-title">{name}</h2>
          <p className="text-[14px] line-clamp-3 leading-[20px] hover:text-indigo-700 transition-all ease-in-out duration-300">
            {description}
          </p>
        </div>
      </a>
    </Article>
  </>
);
export default CardContainer;
