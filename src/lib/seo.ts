import { env } from '$env/dynamic/public';

const fallbackSiteUrl = 'https://ckoilastrat.fr';
const siteUrl = (env.PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, '');
const defaultImagePath = '/social-preview.png';
const legacyBasePath = '/ckls';

export interface SocialMeta {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
}

interface PageDataMeta {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

const defaultMeta: SocialMeta = {
  title: 'C koi la strat ?! - Guides FFXIV francophones clairs',
  description:
    'Guides et outils francophones pour les contenus de grande envergure de Final Fantasy XIV par le Conclave d\'Exploration.',
  image: defaultImagePath,
  imageAlt: 'Logo de C koi la strat ?!',
  imageWidth: '1200',
  imageHeight: '630'
};

const routeMeta: Record<string, Partial<SocialMeta>> = {
  '/': defaultMeta,
  '/car/cod': {
    title: 'La Tour de Ténèbres (Chaotique) - C koi la strat ?!',
    description:
      'Positions, responsabilités et visuels pour La Tour de Ténèbres (Chaotique) dans Final Fantasy XIV.',
    image: '/social-preview-car-cod.png',
    imageAlt: 'Vue générale de la stratégie de La Tour de Ténèbres'
  },
  '/car/cod/en': {
    title: 'The Cloud of Darkness (Chaotic) - C koi la strat ?!',
    description:
      'Positions, responsibilities, and visuals for The Cloud of Darkness (Chaotic) in Final Fantasy XIV.',
    image: '/social-preview-car-cod-en.png',
    imageAlt: 'Overview of The Cloud of Darkness strategy'
  },
  '/changelog': {
    title: 'Changelog - C koi la strat ?!',
    description: 'Historique des mises à jour de C koi la strat ?!'
  }
};

function normalizePath(pathname: string, basePath: string) {
  const pathWithoutBase = getPathWithoutBase(pathname, basePath);
  const normalized = pathWithoutBase.replace(/\/$/, '') || '/';

  return normalized;
}

function getPathWithoutBase(pathname: string, basePath: string) {
  if (basePath && pathname.startsWith(basePath)) {
    return pathname.slice(basePath.length) || '/';
  }

  if (pathname === legacyBasePath || pathname.startsWith(`${legacyBasePath}/`)) {
    return pathname.slice(legacyBasePath.length) || '/';
  }

  return pathname;
}

export function getSocialMeta(pathname: string, basePath = '', pageData: PageDataMeta = {}) {
  const path = normalizePath(pathname, basePath);
  const canonicalPath = getPathWithoutBase(pathname, basePath);
  const meta = {
    ...defaultMeta,
    ...getRouteMeta(path),
    ...pageData
  };

  return {
    ...meta,
    url: absoluteUrl(canonicalPath),
    image: absoluteUrl(meta.image)
  };
}

function getRouteMeta(path: string) {
  if (routeMeta[path]) {
    return routeMeta[path];
  }

  if (path === '/car/cod' || path.startsWith('/car/cod/')) {
    return routeMeta['/car/cod'];
  }

  return undefined;
}

function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return new URL(path.replace(/^\//, ''), `${siteUrl}/`).href;
}
