export interface line {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const researchLines: line[] = [
  {
    id: 1,
    title: 'Línea I. Estado del ecosistema antártico',
    description: 'Se entiende por diversidad biológica la variedad de las formas de la vida, incluyendo varios niveles de organización, como los genes, las especies, las poblaciones y las comunidades. En conjunto, la interacción de estas variables a distintos niveles influye en el funcionamiento de los ecosistemas y sustenta la biósfera del planeta.',
    imageUrl: '/assets/dspace/images/research-lines/state-antarctic-ecosystem.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Estado%20del%20ecosistema%20antártico,equals',
  },
  {
    id: 2,
    title: 'Línea II. Umbrales antárticos: Resiliencia y adaptación del ecosistema',
    description: 'El océano Austral y el continente antártico no son inmunes a los efectos de las actividades antropogénicas. El aumento de la temperatura atmosférica y de la superficie del mar, la pérdida de hielo, la acidificación de los océanos, los cambios en los regímenes de viento, la contaminación por plásticos y la creciente presencia humana son fenómenos observables cuyas tendencias se hacen más evidentes año tras año.',
    imageUrl: '/assets/dspace/images/research-lines/antarctic-thresholds.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Umbrales%20antárticos:%20Resiliencia%20y%20adaptación%20del%20ecosistema,equals',
  },
  {
    id: 3,
    title: 'Línea III. Cambio climático en la Antártica',
    description: 'La amenaza de una crisis climática global desafía urgentemente tanto la capacidad de la humanidad para comprender los aspectos clave de los recientes cambios ambientales como su capacidad para tomar medidas.',
    imageUrl: '/assets/dspace/images/research-lines/climate-change.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Cambio%20climatico%20en%20la%20Antártica,equals',
  },
  {
    id: 4,
    title: 'Línea IV. Astronomía y Ciencia de la Tierra',
    description: 'La Antártica y los océanos que la rodean han sido y siguen siendo elementos clave de la historia natural de nuestro planeta. Nos proporcionan importante información geológica de la Tierra y sobre la evolución tectónica y los cambios en el medioambiente antártico, así como de la biota que depende de él.',
    imageUrl: '/assets/dspace/images/research-lines/astronomy.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Astronomía%20y%20Ciencia%20de%20la%20Tierra,equals',
  },
  {
    id: 5,
    title: 'Línea V. Biotecnología',
    description: 'Esta área de investigación considera las características moleculares, metabólicas y fisiológicas de los organismos antárticos, en un esfuerzo por utilizar estos o sus derivados (biomoléculas) para la creación o modificación de productos, aplicaciones o procesos para usos específicos.',
    imageUrl: '/assets/dspace/images/research-lines/biotechnology.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Biotecnología,equals',
  },
  {
    id: 6,
    title: 'Línea VI. Huellas humanas en la Antártica',
    description: 'La Antártica alberga ecosistemas y formas de vida con adaptaciones únicas, resultado de un aislamiento extremo durante millones de años. A medida que se acentúa el cambio climático y se debilitan esas barreras físicas y biológicas, también preocupan las amenazas antropogénicas, como los xenobióticos, los compuestos orgánicos persistentes (COP), los macro y microplásticos y otros compuestos químicos nocivos introducidos a través del turismo, las operaciones logísticas y las actividades científicas. En consecuencia, todas estas actividades deben ser estrechamente vigiladas y reguladas bajo el paraguas del Sistema del Tratado Antártico y el Protocolo de Madrid.',
    imageUrl: '/assets/dspace/images/research-lines/human-footprints.jpg',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Huellas%20humanas%20en%20la%20Antártica,equals',
  },
  {
    id: 7,
    title: 'Línea VII. Ciencias Sociales y Humanidades',
    description: 'Las Ciencias Sociales y las Humanidades desempeñan actualmente un papel esencial para pensar el porvenir del país y el mundo en función de la Antártica. Lo singular del ambiente extremo también tiene una analogía en cómo la sociedad moderna ha resuelto los desafíos de la administración de un territorio de 14 millones de km2, bajo los principios del Tratado Antártico, es decir, destinar un gran continente a actividades de paz, a la ciencia y al respeto del medioambiente.',
    imageUrl: '/assets/dspace/images/research-lines/social-sciences.png',
    link: 'search?page=1&configuration=researchoutputs&query=&f.procien_lines=Ciencias%20Sociales%20y%20Humanidades,equals',
  },
];
