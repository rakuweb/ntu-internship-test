// import layer
import { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  textDecoration,
} from '@chakra-ui/react';
import { Image } from 'components/images/Image';

import { selectCompany, useCompanyStore } from 'features/company';
import {
  useTargetOfferStore,
  selectTarget,
  selectBreadCrumbItem,
} from 'features/offers';
import { useLiff } from 'contexts/LineAuthContextInternship';

import { useAccountStore, selectSetPrevPath } from 'features/account';
import { OfferEntity } from 'types/gql/graphql';
import { InternalLink } from '~/components/links/InternalLink';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const company = useCompanyStore(selectCompany);
  const { liff } = useLiff();
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const { jobTitle, companyName } = useTargetOfferStore(selectBreadCrumbItem);

  const list = [
    { title: `職種`, main: `接客/販売` },
    { title: `募集人数`, main: `3名` },
    { title: `対象`, main: `大学1年生~修士2年生` },
    { title: `雇用形態`, main: `アルバイト` },
    { title: `給与`, main: `時給1,000円~時給1,900円` },
    { title: `勤務時間`, main: `[1]11:00~15:00、[2]16:00~20:00` },
    {
      title: `勤務時間`,
      main: `・最低労働時間 1時間/1日~OK
・最低勤務日数 特になし/1週間
・最低勤務期間 1ヶ月~`,
    },
    { title: `勤務場所`, main: `新潟県新潟市中央区1-1 PLAKA3` },
    { title: `面接場所`, main: `新潟県` },
    { title: `歓迎`, main: [`未経験者OK`, `服装自由`] },
    {
      title: `選考方法`,
      main: `(1)応募
(2)。。。。。。。
(3)`,
    },
    { title: `会社名`, main: `株式会社ラクウェブ` },
    { title: `会社詳細`, main: `https://rakuweb.jp/` },
    { title: `求人番号`, main: `10001` },
  ];

  return (
    <Box
      w={{ base: ``, md: `100%` }}
      fontFamily={`'Noto Sans JP', sans-serif`}
      {...props}
    >
      <Flex
        mb={{ base: ``, md: `${40 / 19.2}vw` }}
        borderBottom={{ base: ``, md: `${4 / 19.2}vw solid #41A4FD` }}
      >
        <Image
          ml={{ base: ``, md: `${23 / 19.2}vw` }}
          mr={{ base: ``, md: `${13 / 19.2}vw` }}
          mb={{ base: ``, md: `${2 / 7.68}vw`, lg: `${19 / 19.2}vw` }}
          w={{ base: ``, md: `${15 / 7.68}vw`, lg: `${32 / 19.2}vw` }}
          h={{ base: ``, md: `${22 / 7.68}vw`, lg: `${32 / 19.2}vw` }}
          image={{
            width: 32,
            height: 42,
            src: `/svg/file-invoice-solid.svg`,
            alt: `書類のアイコン`,
          }}
        />
        <Box
          mt={{ base: ``, md: `${3 / 19.2}vw` }}
          fontSize={{ base: ``, md: `${16 / 7.68}vw`, lg: `${36 / 19.2}vw` }}
          fontWeight={`bold`}
        >
          募集求人
        </Box>
      </Flex>
      {list.map((list, index) => (
        <div key={list.title}>
          <Flex
            borderBottom={{
              base: ``,
              md: `${2 / 19.2}vw solid rgba(65,164,253,0.25)`,
            }}
            fontSize={{ base: ``, md: `${13 / 7.68}vw`, lg: `${22 / 19.2}vw` }}
            fontWeight={`bold`}
            lineHeight={`1.4em`}
          >
            <Flex>
              <Box
                bg={`#F9FCFE`}
                pt={{ base: ``, md: `${24 / 19.2}vw` }}
                pb={{ base: ``, md: `${27 / 19.2}vw` }}
                pl={{ base: ``, md: `${40 / 19.2}vw` }}
                w={{ base: ``, md: `${320 / 19.2}vw` }}
              >
                {list.title}
              </Box>

              {Array.isArray(list.main) ? (
                <Flex pl={{ base: ``, md: `${35 / 19.2}vw` }}>
                  {list.main.map((sublist) => (
                    <InternalLink
                      href={`/`}
                      display={index === 9 ? `flex` : `none`}
                      key={sublist}
                    >
                      <Flex
                        alignItems={`center`}
                        fontSize={{
                          base: ``,
                          md: `${11 / 7.68}vw`,
                          lg: `${18 / 19.2}vw`,
                        }}
                        mt={{
                          base: ``,
                          md: `${8 / 7.68}vw`,
                          lg: `${18 / 19.2}vw`,
                        }}
                        mr={{ base: ``, md: `${16 / 19.2}vw` }}
                        px={{ base: ``, md: `${22 / 19.2}vw` }}
                        h={{
                          base: ``,
                          md: `${20 / 7.68}vw`,
                          lg: `${41 / 19.2}vw`,
                        }}
                        border={{ base: ``, md: `${3 / 19.2}vw solid #38404D` }}
                        borderRadius={{ base: ``, md: `${26 / 19.2}vw` }}
                        lineHeight={`1em`}
                      >
                        {sublist}
                      </Flex>
                    </InternalLink>
                  ))}
                </Flex>
              ) : (
                <div>
                  <Box
                    display={index === 12 ? `none` : `block`}
                    fontSize={{
                      base: ``,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: ``, md: `${24 / 19.2}vw` }}
                    pb={{ base: ``, md: `${27 / 19.2}vw` }}
                    pl={{ base: ``, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {list.main}
                  </Box>
                  <InternalLink
                    href={list.main}
                    display={index === 12 ? `block` : `none`}
                    fontSize={{
                      base: ``,
                      md: `${12 / 7.68}vw`,
                      lg: `${21 / 19.2}vw`,
                    }}
                    pt={{ base: ``, md: `${24 / 19.2}vw` }}
                    pb={{ base: ``, md: `${27 / 19.2}vw` }}
                    pl={{ base: ``, md: `${35 / 19.2}vw` }}
                    whiteSpace={`pre-wrap`}
                  >
                    {list.main}
                  </InternalLink>
                </div>
              )}
            </Flex>
          </Flex>
        </div>
      ))}
    </Box>
  );
};
