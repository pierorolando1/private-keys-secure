import { HtmlProps } from 'next/dist/shared/lib/utils';
import React  from 'react';

export const PageScaffold = ({ children, center }:{children:React.ReactNode, center:boolean}) => {
  return (
    <section className={`bg-gray-900 min-h-screen ${ center && 'flex flex-col justify-center items-center' }`}>
        {
            children
        }
    </section>
  )
};
