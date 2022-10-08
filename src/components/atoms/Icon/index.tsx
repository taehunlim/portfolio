import React from 'react';
import styledComponent, { IconStyleProps } from './style';

const { StyledIcon } = styledComponent;

interface IconProps extends IconStyleProps {
   icon: string;
}

function Icon({ icon, ...props }: IconProps) {
   function getSrc(name: string) {
      const path = `./icons/${name}.svg`;
      const modules = import.meta.globEager('./icons/*.svg', { as: 'raw' });

      return modules[path];
   }

   const svg = getSrc(icon);
   return <StyledIcon {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default Icon;
