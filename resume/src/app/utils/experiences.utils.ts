export interface Experience {
  title: string;
  summary: string;
  content: string;
}

const makeExperience = (
  title: string,
  summary: string,
  content: string
): Experience => {
  return {
    title,
    summary,
    content,
  } as Experience;
};

export const makeSimsoftExperience = (): Experience =>
  makeExperience(
    'SIMSOFT INDUSTRY, Toulouse',
    '2018 - en cours : Développeur logiciels .Net en Alternance',
    'Dans le cadre de mon cursus de formation post-bac, j\'ai intégré l\'équipe de SIMSOFT INDUSTRY pour un premier contrat pour préparer la Licence Professionnelle DQL. Je découvre ainsi la vie dans une petite entreprise en pleine croissance dans le secteur du développement logiciel. Je participe aussi au développement des logiciels multimodaux et se basant sur la plateforme .Net.Après obtention de ce nouveau diplôme, l\'expérience de l\'alternance se reconduit au travers de la préparation du Matère Expert information et système d\'information, développement logiciel, mobile, IoT et mobile chez Ynov campus de Toulouse. J\'évolue ainsi au sein des différents projets et produits qui animent l\'activité de SIMSOFT, ce qui me permet d’accéder à une expérience polyvalent, gratifiante et unique.'
  );

export const makeThalesExperience = (): Experience =>
  makeExperience(
    'THALES LAS FRANCE site d\'Ymare, Rouen',
    'Eté 2018 : Auxiliaire d\'aide à la sérialisation',
    'Rattaché au centre magasinier électronique du site d\'Ymare près de Rouen, j\'ai été amené à renforcer l\'équipe pour la période d\'été 2018. La mission principale a été de sérialiser les différents articles entreposés au sein du magasin afin de préparer l\'arrivée d\'un nouvel ERP au sein du groupe.'
  );

export const makeAirbusExperience = (): Experience =>
  makeExperience(
    'Airbus Usine de Saint-Elois, Toulouse',
    'Avril à Juin 2018 : Stage de développement d\'indicateurs de production',
    'Pour ce stage, on m\'a confié la mission de développer un jeu d\'indicateurs permettant l\'automatisation des journaux restituant les résultats issus de la chaîne d\'assemblage des mâts d\'avions. Ces indicateurs sont multiples comme par exemple le temps moyen passé les différents ateliers ou encore le rendement des matériaux commandés par rapport à ceux qui sont consommés. C\'est par le traitement des informations issues d\'une base de données qu\'une restitution graphique sera possible.'
  );

export const makeYnovStudy = (): Experience =>
  makeExperience(
    'Toulouse Ynov Campus : Mastère Expert des systèmes d\'information',
    '2019 - 2021',
    'Je réalise mon alternance au travers de cette Licence Professionnelle. La mention Développement et Qualité des Logiciels, axe sa formation autour des méthodes et des outils au profit de la qualité du code (TDD, CI, ...). Elle insère ces pratiques dans la production d\'un projet tutoré mené sous un cadre SCRUM. Elle aspire aussi à l\'insertion professionnelle, au sein d\'une entreprise d\'accueil tout au long de l\'année.'
  );

export const makeLPStudy = (): Experience =>
  makeExperience(
    'IUT Paul Sabatier - Toulouse : LP DQL',
    '2018 - 2019',
    'Je réalise mon alternance au travers de cette Licence Professionnelle. La mention Développement et Qualité des Logiciels, axe sa formation autour des méthodes et des outils au profit de la qualité du code (TDD, CI, ...). Elle insère ces pratiques dans la production d\'un projet tutoré mené sous un cadre SCRUM. Elle aspire aussi à l\'insertion professionnelle, au sein d\'une entreprise d\'accueil tout au long de l\'année.'
  );

export const makeDUTStudy = (): Experience =>
  makeExperience(
    'IUT de Caen : DUT Informatique',
    '2016 - 2018',
    'Le DUT Informatique est une formation généraliste en informatique visant à concevoir, inventer ou perfectionner des logiciels destinés à des entreprises, correspondant à leurs besoins. Elle englobe un large éventail des domaines de l\'informatique et des technologies numériques. De plus, elle s\'étend aussi sur les enseignements de la culture scientifique, sociale et humaine.'
  );

export const makeSembatStudy = (): Experience =>
  makeExperience(
    'Lycée Marcel Sembat : Baccalauréat STI2D ',
    '2014 - 2016 Mention très bien (18.1)',
    'Baccalauréat technologique des sciences et technologies de l\'industrie et du développement durable (STI2D), spécialité systèmes d\'information et du numérique (SIN).Le bac technologique STI2D s\'adresse à ceux qui s\'intéressent à l\'ingénierie industrielle, à l\'innovation technologique et à la préservation de l\'environnement.  En spécialité systèmes d\'information et numérique, les élèves apprennent à trouver des solutions pour assurer le traitement, le transport et la gestion de l\'information.'
  );
