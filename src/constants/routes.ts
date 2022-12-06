// site routes
export const routes = {
  home: '/',
  index: '/',
  register: '/register',
  registerComplete: '/register/complete',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
  thanks: '/thanks',
  apiRegister: '/api/register',
};

export const apiRoutes = {
  register: `/auth/local/register`,
  signin: `/auth/local`,
}

export type NavItem = { name: string; link: string; isExternal?: boolean };

export const navItems: NavItem[] = [
  { name: 'HOME', link: routes.home },
  { name: `歯医者を探す`, link: routes.home },
  { name: `新着情報`, link: routes.home },
  { name: `歯の辞典`, link: routes.home },
  { name: `歯の悩み相談`, link: routes.home },
  { name: `歯の悩み相談箱`, link: routes.home },
  { name: `オンライン相談`, link: routes.home },
  { name: `歯医者さんインタビュー`, link: routes.home },
  { name: `お問い合わせ`, link: routes.home },
  { name: `プライバシーポリシー`, link: routes.privacyPolicy },
  { name: `利用規約`, link: routes.termsOfService },
  { name: `公式Instagram`, link: routes.home, isExternal: true },
  { name: `公式Twitter`, link: routes.home, isExternal: true },
];
