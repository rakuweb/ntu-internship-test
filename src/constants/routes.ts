// site routes
export const routes = {
  home: '/',
  index: '/',
  register: '/register',
  registerComplete: '/register/complete',
  offers: '/offers',
  offerID: (id: string) => `/offers/${id}`,
  companies: '/companies',
  tag: '/offers/tag',
  point: '/offers/point',
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
  beginners: '/beginners',
  howToRegister: '/how-to-register',
  campaign: '/campaign',
  contact: '/contact',
  coworkingContact: '/contact/coworking',
  contactComplete: '/contact/complete',
  coworkingContactComplete: '/contact/coworking/complete',
  applicationComplete: '/application/complete',
  requestComplete: (id: string) => `/companies/${id}/request/complete`,
  offerCheckComplete: (id: string) => `/offers/preview/${id}/complete`,
  offersJobForm: (id: string) => `/offers/${id}/jobform`,
  offersJobFormComplete: (id: string) => `/offers/${id}/jobform/complete`,
  publicationCriteria: `/publication-criteria`,

  apiRegister: '/api/register',
  apiAccount: '/api/account',
  apiUpdateGrade: '/api/update/grade',
  apitVisitCount: '/api/visit/count',
  apiApplication: '/api/application',
  apiCompaniesRequest: '/api/companies/request',
  apiJobform: `/api/offers/jobform/send`,
  apiContact: `/api/contact`,
  apiCoworkingContact: `/api/contact/coworking`,
  apiAgent: `/api/agent`,
  apiOffersCheck: `/api/offers/check`,
  apiOffersJobformLine: `/api/offers/jobform/line`,
  apiIsUpdated: '/api/update/is-updated',
  apiSavePrevious: '/api/update/save-previous',
};

export const HP_URL = `https://forjob.nottheuniversity.com`;
export const TWITTER_URL = `https://twitter.com/nottheuniv`;
export const INSTAGRAM_URL = `https://www.instagram.com/nottheuniversity`;
export const RECAPTCHA_URL = `https://www.google.com/recaptcha/api/siteverify`;
export const FORJOB_LP_URL = `https://aboutforjob.nottheuniversity.com/`;
export const LINE_MESSAGING_API_PUSH_URL = `https://api.line.me/v2/bot/message/push`;

export const apiRoutes = {
  register: `/auth/local/register`,
  signin: `/auth/local`,
  signage: `/signage`,
  students: `/students`,
  jobform: `/offers/jobform/send`,
  companies: `/companies`,
  offer: `/offers`,
  offerId: (id: string) => `/offers/${id}`,
  agent: `/agents`,
  submissions: `/submissions`,
  contacts: `/contacts`,
  coworkingContacts: `/coworking-contacts`,
};

export type NavItem = { name: string; link: string; isExternal?: boolean };

export const navItems: NavItem[] = [
  { name: 'HOME', link: routes.home },
  // { name: `新着情報`, link: routes.home },
  // { name: `お問い合わせ`, link: routes.home },
  // { name: `求人一覧`, link: routes.tag },
  { name: `はじめての方へ`, link: routes.beginners },
  { name: `会員登録方法`, link: routes.howToRegister },
  // { name: `お祝い金キャンペーン！`, link: routes.campaign },
  { name: `利用規約`, link: routes.terms },
  { name: `プライバシーポリシー`, link: routes.privacyPolicy },
  { name: `公式Instagram`, link: INSTAGRAM_URL, isExternal: true },
  { name: `公式X`, link: TWITTER_URL, isExternal: true },
];

export const lineAPIRoutes = {
  messagePush: `https://api.line.me/v2/bot/message/push`,
  multicast: `https://api.line.me/v2/bot/message/multicast`,
  validateMulticast: `https://api.line.me/v2/bot/message/validate/multicast`,
};
