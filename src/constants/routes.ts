// site routes
export const routes = {
  home: '/',
  index: '/',
  register: '/register',
  registerComplete: '/register/complete',
  offers: '/offers',
  companies: '/companies',
  privacyPolicy: '/privacy-policy',
  terms: '/terms',
  thanks: '/thanks',
  registered: '/register/registered',
  authenticated: '/register/authenticated',
  confirm: '/register/confirm',
  signin: '/signin',
  signinFailed: '/signin/failed',
  updateComplete: '/account/grade/complete',
  advertisements: '/advertisements',
  accountGrade: '/account/grade',
  accountCard: '/account/card',
  signinCafeonly: '/signin/cafeonly',
  signinMembercard: '/signin/membercard',
  accountGraduation: '/account/graduation',

  apiRegister: '/api/register',
  apiAccount: '/api/account',
  apiUpdateGrade: '/api/update/grade',
  apitVisitCount: '/api/visit/count',
};

export const HP_URL = `https://nottheuniversity.com`;
export const TWITTER_URL = `https://twitter.com/nottheuniv`;
export const INSTAGRAM_URL = `https://www.instagram.com/nottheuniversity`;

export const apiRoutes = {
  register: `/auth/local/register`,
  signin: `/auth/local`,
  signage: `/signage`,
  students: `/students`,
};

export type NavItem = { name: string; link: string; isExternal?: boolean };

export const navItems: NavItem[] = [
  { name: 'HOME', link: routes.home },
  // { name: `新着情報`, link: routes.home },
  // { name: `お問い合わせ`, link: routes.home },
  { name: `利用規約`, link: routes.terms },
  { name: `プライバシーポリシー`, link: routes.privacyPolicy },
  { name: `公式Instagram`, link: INSTAGRAM_URL, isExternal: true },
  { name: `公式Twitter`, link: TWITTER_URL, isExternal: true },
];
