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
import { Image } from 'atoms/Image';
import { Image as NImage } from 'components/images/Image';
import { useRouter } from 'next/router';

import { OfferButton } from 'components/OfferButton';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
import { Labeltext2 } from './Labeltext2';

import { selectCompany, useCompanyStore } from 'features/company';
import {
  useTargetOfferStore,
  selectTarget,
  selectBreadCrumbItem,
} from 'features/offers';
import { useLiff } from 'contexts/LineAuthContextInternship';

import { styles } from './styles';
import { useAccountStore, selectSetPrevPath } from 'features/account';
import { OfferEntity } from 'types/gql/graphql';
import 'zenn-content-css';
import { InternalLink } from '~/components/links/InternalLink';
import { Span } from '../Span';
import { routes } from 'constants/routes';
import { BreadcrumbOfferId } from '../organisms/BreadcrumbOfferId';
// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const company = useCompanyStore(selectCompany);
  const { liff } = useLiff();
  const setPrevPath = useAccountStore(selectSetPrevPath);
  const { jobTitle, companyName } = useTargetOfferStore(selectBreadCrumbItem);
  const pageTitles = [companyName, jobTitle];
  const signin = () => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      offer?.formUrl && setPrevPath(decodeURI(offer.formUrl));
      window.localStorage.setItem('prevUrl', offer?.formUrl);
      liff.login(); //{ redirectUri: redirectUri });
    } else {
      window.location.href = offer.formUrl;
    }
  };
  const currentDate = new Date();
  const startDate = new Date(offer.createdAt);
  const endDate = new Date(offer.deadline);
  const isNew =
    (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const isEnd = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  const href = `${routes.companies}/${company.id}`;

  console.log(offer.createdAt);

  return (
    <div css={styles}>
      <BreadcrumbOfferId titles={pageTitles} />
      <Box w={'100%'} backgroundColor={'#f5f5f5'}>
        <Box
          className="body"
          w={'100%'}
          maxWidth={'1200px'}
          display="flex"
          flexWrap={'wrap'}
          justifyContent={'center'}
          m={'auto'}
          alignItems={'flex-start'}
        >
          <Box className="main" w={'760px'}>
            <section className="consultation-card-list">
              <div className="consultation-card-list__card">
                <Flex alignItems={'center'} mb={'12px'} flexWrap={'wrap'}>
                  <p className="companyName">{offer.companyName}</p>

                  {isEnd <= 10 && isEnd > 0 ? (
                    <Box fontSize={'14px'} ml={'auto'} color={'red'}>
                      締切あと{isEnd}日
                    </Box>
                  ) : isNew <= 7 && isEnd > 0 ? (
                    <Box
                      fontSize={'12px'}
                      ml={'auto'}
                      color={'white'}
                      bgColor={'red'}
                      p={'2px 5px'}
                    >
                      NEW
                    </Box>
                  ) : isEnd <= 0 ? (
                    <Box fontSize={'14px'} ml={'auto'} color={'gray'}>
                      募集終了
                    </Box>
                  ) : null}
                </Flex>
                <h1 className="jobtitle">{offer?.title}</h1>
                <Flex flexWrap={`wrap`} mb={{ lg: `20px` }}>
                  {offer.categories.map((category) => (
                    <Labeltext
                      key={category.id}
                      id={category.id}
                      labeltext={category.name}
                    ></Labeltext>
                  ))}
                  {offer.points.map((point) => (
                    <Labeltext2
                      key={point.id}
                      id={point.id}
                      labeltext={point.name}
                    />
                  ))}
                </Flex>
                <h3 className="termstext">
                  <Image
                    className="icon"
                    width={24}
                    height={24}
                    src={`/svg/map-marker.svg`}
                  />
                  <div className="placetext">{offer.place}</div>
                </h3>
                <h3 className="termstext">
                  <Image
                    className="icon"
                    width={24}
                    height={24}
                    src={`/svg/money.svg`}
                  />
                  <div className="placetext">{offer.hourlyWage}</div>
                </h3>
                <NImage image={{ ...offer.image }} className="bigImg" />
                {/*
                <Image {...offer.image} className="bigImg" />
                */}
                <Box w={{ base: `100%`, lg: `fit-content` }} mx={`auto`}>
                  <OfferButton
                    disabled={isEnd <= 0}
                    onClick={() => {
                      if (isEnd > 0) {
                        signin();
                      }
                    }}
                  />
                </Box>
              </div>
            </section>
            <Box
              w={`100%`}
              bg={`#f5f5f5`}
              pt={`40px`}
              fontFamily={`'Noto Sans JP', sans-serif`}
            >
              <Box
                as={`h2`}
                w={{ base: `100%`, lg: `760px` }}
                m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
                px={{ base: ` 16px`, lg: `0` }}
                fontSize={{ base: `18px`, lg: `25px` }}
                fontWeight={`700`}
                mb={{ base: `24px` }}
              >
                アルバイト概要
              </Box>
              <div className="subsection">
                <Box
                  className={`znc yugothic-medium`}
                  dangerouslySetInnerHTML={{ __html: offer.jobDescription }}
                  as={`article`}
                  sx={{
                    '& > hr': {
                      borderTop: `1px solid #257fbf`,
                    },
                    '& > h2': {
                      marginTop: { base: '16px', lg: '16px' },
                      marginBottom: { base: '11px', lg: `16px` },
                      width: '100%',
                      fontSize: { base: '18px', lg: '20px' },
                      color: '#000000',
                      fontWeight: 'bold',
                      lineHeight: '1.3em',
                      borderBottom: `initial`,
                    },
                    '& > h3': {
                      fontSize: { base: '13px', lg: `18px` },
                      marginTop: { base: '15px', lg: `0` },
                      marginBottom: { lg: `20px` },
                      color: '#000000',
                    },
                    '& > p': {
                      fontSize: {
                        base: `14px`,
                        lg: `14px`,
                      },
                      color: '#000000',
                      fontWeight: 400,
                      lineHeight: { base: `1.5em`, lg: `1.5em` },
                      margin: { base: `15px 0`, lg: 0 },
                    },
                    '& > p > a': {
                      fontSize: { base: `11px`, lg: `14px` },
                      fontWeight: 400,
                      lineHeight: `1.2em`,
                      textDecorationLine: 'underline',
                      color: `#003968`,
                      display: `inline`,
                      width: `fit-content`,
                      textAlign: `right`,
                      ':hover': {
                        filter: `opacity(50%)`,
                        transition: `all .3s`,
                      },
                    },
                    '& > p > img:not(.emoji)': {
                      marginY: { lg: `30px` },
                      w: { base: `100%` },
                    },
                  }}
                />
              </div>
            </Box>
            {/* アルバイト概要 */}
            <Box
              w={`100%`}
              bg={`#f5f5f5`}
              pt={`40px`}
              fontFamily={`'Noto Sans JP', sans-serif`}
            >
              {offer.aboutCompany && (
                <>
                  <Box
                    as={`h2`}
                    w={{ base: `100%`, lg: `760px` }}
                    m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
                    px={{ base: ` 16px`, lg: `0` }}
                    fontSize={{ base: `18px`, lg: `25px` }}
                    fontWeight={`700`}
                    mb={{ base: `24px` }}
                  >
                    この会社について
                  </Box>
                  <div className="subsection">
                    <Box
                      className={`znc yugothic-medium`}
                      dangerouslySetInnerHTML={{ __html: offer.aboutCompany }}
                      as={`article`}
                      sx={{
                        '& > hr': {
                          borderTop: `1px solid #257fbf`,
                        },
                        '& > h2': {
                          marginTop: { base: '16px', lg: '16px' },
                          marginBottom: { base: '11px', lg: `16px` },
                          width: '100%',
                          fontSize: { base: '18px', lg: '20px' },
                          color: '#000000',
                          fontWeight: 'bold',
                          lineHeight: '1.3em',
                          borderBottom: `initial`,
                        },
                        '& > h3': {
                          fontSize: { base: '13px', lg: `18px` },
                          marginTop: { base: '15px', lg: `0` },
                          marginBottom: { lg: `20px` },
                          color: '#000000',
                        },
                        '& > p': {
                          fontSize: {
                            base: `14px`,
                            lg: `14px`,
                          },
                          color: '#000000',
                          fontWeight: 400,
                          lineHeight: { base: `1.5em`, lg: `1.5em` },
                          margin: { base: `15px 0`, lg: 0 },
                        },
                        '& > p > a': {
                          fontSize: { base: `11px`, lg: `14px` },
                          fontWeight: 400,
                          lineHeight: `1.2em`,
                          textDecorationLine: 'underline',
                          color: `#003968`,
                          display: `inline`,
                          width: `fit-content`,
                          textAlign: `right`,
                          ':hover': {
                            filter: `opacity(50%)`,
                            transition: `all .3s`,
                          },
                        },
                        '& > p > img:not(.emoji)': {
                          marginY: { lg: `30px` },
                          w: { base: `100%` },
                        },
                      }}
                    />
                    <Box
                      display={'flex'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      pt={'0.5rem'}
                    >
                      {[
                        offer.simage1,
                        offer.simage2,
                        offer.simage3,
                        offer.simage4,
                      ]
                        .filter(Boolean)
                        .map((image, index) => (
                          <NImage
                            key={`image-${index}`}
                            image={{ ...image }}
                            w={'49%'}
                            pt={'0.5rem'}
                          />
                        ))}
                    </Box>
                  </div>
                </>
              )}
            </Box>
            {/* 企業概要 */}
            <Box
              w={`100%`}
              bg={`#f5f5f5`}
              pt={`40px`}
              fontFamily={`'Noto Sans JP', sans-serif`}
            >
              <Box
                as={`h2`}
                w={{ base: `100%`, lg: `760px` }}
                m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
                px={{ base: ` 16px`, lg: `0` }}
                fontSize={{ base: `18px`, lg: `25px` }}
                fontWeight={`700`}
              >
                任せたいこと
              </Box>
              <div className="subsection">
                <Box
                  whiteSpace={`pre-wrap`}
                  fontSize={`14px`}
                  lineHeight={`21px`}
                >
                  {offer.aboutJob}
                </Box>
              </div>
            </Box>
            <Box
              w={`100%`}
              bg={`#f5f5f5`}
              pt={`40px`}
              fontFamily={`'Noto Sans JP', sans-serif`}
            >
              {offer?.points.length !== 0 && (
                <>
                  <Box
                    as={`h2`}
                    w={{ base: `100%`, lg: `760px` }}
                    m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
                    px={{ base: ` 16px`, lg: `0` }}
                    fontSize={{ base: `18px`, lg: `25px` }}
                    fontWeight={`700`}
                    mb={{ base: `24px` }}
                  >
                    この業務で身につくスキル
                  </Box>
                  <div className="subsection">
                    <Box
                      whiteSpace={`pre-wrap`}
                      fontSize={`14px`}
                      lineHeight={`21px`}
                    >
                      <Flex flexWrap={`wrap`}>
                        {offer.points.map((point) => (
                          <Labeltext2
                            key={point.id}
                            id={point.id}
                            labeltext={point.name}
                          />
                        ))}
                      </Flex>
                    </Box>
                  </div>
                </>
              )}
              <Box mt={`78px`}>
                <Box w={{ base: `100%`, lg: `fit-content` }} mx={`auto`}>
                  <OfferButton
                    disabled={isEnd <= 0}
                    onClick={() => {
                      if (isEnd > 0) {
                        signin();
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              w={`100%`}
              bg={`#f5f5f5`}
              pt={`40px`}
              fontFamily={`'Noto Sans JP', sans-serif`}
            >
              <Box
                as={`h2`}
                w={{ base: `100%`, lg: `760px` }}
                m={{ base: `0 0 24px 0`, lg: `0 auto 24px auto` }}
                px={{ base: ` 16px`, lg: `0` }}
                fontSize={{ base: `18px`, lg: `25px` }}
                fontWeight={`700`}
                mb={{ base: `24px` }}
              >
                募集要項
              </Box>
              <div className="subsection">
                <Box
                  whiteSpace={`pre-wrap`}
                  fontSize={`14px`}
                  lineHeight={`21px`}
                >
                  <div className="termsContainer">
                    <p className="termsTitle">給与</p>
                    <p className="termsMain">{offer.hourlyWage}</p>
                  </div>
                  <div className="termsContainer2">
                    <p className="termsTitle">対象学年</p>
                    <p className="termsMain">{offer.target}</p>
                  </div>
                  <div className="termsContainer2">
                    <p className="termsTitle">募集人数</p>
                    <p className="termsMain">{offer.people}</p>
                  </div>
                  <div className="termsContainer2">
                    <p className="termsTitle">応募資格</p>
                    <p className="termsMain">{offer.qualification}</p>
                  </div>
                  <div className="termsContainer2">
                    <p className="termsTitle">業務内容</p>
                    <p className="termsMain">{offer.aboutJob}</p>
                  </div>
                  <div className="termsContainer2">
                    <p className="termsTitle">勤務条件</p>
                    <p className="termsMain">{offer.recruitmentTerms}</p>
                  </div>
                  <div className="termsContaineroccupation">
                    <p className="termsTitleoccupation">雇用形態</p>
                    <Flex flexWrap={`wrap`} w={{ lg: `${875 / 19.2}vw` }}>
                      {offer?.categories.map((category) => (
                        <Labeltext
                          key={category.id}
                          id={category.id}
                          labeltext={category.name}
                        />
                      ))}
                    </Flex>
                  </div>

                  <div className="termsContainer3">
                    <p className="termsTitle">勤務地</p>
                    <p className="termsMain">{offer.place}</p>
                  </div>
                </Box>
              </div>
              <Box mt={`78px`}>
                <Box w={{ base: `100%`, lg: `fit-content` }} mx={`auto`}>
                  <OfferButton
                    disabled={isEnd <= 0}
                    onClick={() => {
                      if (isEnd > 0) {
                        signin();
                      }
                    }}
                  />
                </Box>
              </Box>
              <Box
                w={`100%`}
                bg={`#f5f5f5`}
                pt={
                  company?.logo?.src && company?.mission && company?.companyName
                    ? `40px`
                    : `78px`
                }
                fontFamily={`'Noto Sans JP', sans-serif`}
              >
                <InternalLink href={href}>
                  {company?.logo?.src &&
                    company?.mission &&
                    company?.companyName && (
                      <Box pb={`40px`}>
                        <div className="subsection">
                          <Flex direction={`column`} alignItems={`center`}>
                            <Box width={{ base: `84px` }}>
                              <Image
                                mb={`8px`}
                                {...company.logo}
                                htmlWidth={company.logo.width}
                                htmlHeight={company.logo.height}
                              />
                            </Box>
                            <Box
                              fontSize={{ base: `24px` }}
                              fontWeight={`700`}
                              mb={`8px`}
                            >
                              {company.companyName}
                            </Box>
                            <Box
                              fontSize={{ base: `12px` }}
                              lineHeight={`18px`}
                            >
                              {company.mission}
                            </Box>
                          </Flex>
                          <Text
                            fontSize={'10px'}
                            p={'10px 0'}
                            textAlign={'right'}
                            textDecoration={'underline'}
                          >
                            この企業の情報を見る {`>`}
                          </Text>
                        </div>
                      </Box>
                    )}
                </InternalLink>
              </Box>
            </Box>
          </Box>
          {/* main */}

          {/* sub */}
          <Box
            minHeight={'300px'}
            w={{ base: ' calc(100% - 32px)', xl: '300px' }}
            maxWidth={'760px'}
            m={{ base: '0 0 50px', lg: '40px 40px 100px' }}
            p={'40px 20px'}
            borderRadius={'20px'}
            boxShadow={'0px 4px 8px rgba(0, 0, 0, 0.1)'}
            bgColor={'#fff'}
            position={{ base: 'static', xl: 'sticky' }}
            top={'20px'}
          >
            <Heading
              as={'h2'}
              fontSize={{ base: '16px', lg: '20px' }}
              pb={'15px'}
            >
              {company.companyName}
            </Heading>
            <Box
              as="table"
              lineHeight={'2'}
              fontSize={{ base: '14px', lg: '16px' }}
              fontFamily={`'Noto Sans JP', sans-serif`}
            >
              {offer.categories.length > 0 && (
                <Box as="tr">
                  <Box as="th" w={'2em'}>
                    <i className="fas fa-briefcase"></i>
                  </Box>
                  <Box as="td">
                    {offer?.categories.map((category, idx) => (
                      <Span key={category.name}>
                        {idx > 0 ? '/' : ''}
                        {category.name}
                      </Span>
                    ))}
                  </Box>
                </Box>
              )}
              {company.industryCategories.length > 0 && (
                <Box as="tr">
                  <Box as="th" w={'2em'}>
                    <i className="fas fa-building"></i>
                  </Box>
                  <Box as="td">
                    {company?.industryCategories.map((category, idx) => (
                      <Span key={category.name}>
                        {idx > 0 ? '/' : ''}
                        {category.name}
                      </Span>
                    ))}
                  </Box>
                </Box>
              )}
              <Box as="tr">
                <Box as="th" w={'2em'}>
                  <i className="fas fa-map-marker-alt"></i>
                </Box>
                <Box as="td">{company?.address}</Box>
              </Box>
            </Box>
            <Box
              border={'1px solid #ccc'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              mt={'20px'}
              w={{ lg: `${260 / 16}rem` }}
              sx={{ iframe: { w: `100%` } }}
              height={'150px'}
              // h={`auto`}
              dangerouslySetInnerHTML={{ __html: company?.mapUrl ?? '' }}
            />
            <Box display={'flex'} justifyContent={'center'} pt={'20px'}>
              <InternalLink
                href={href}
                fontSize={'14px'}
                textDecoration={'underline'}
                _hover={{ textDecoration: 'underline', opacity: '0.6' }}
              >
                この企業の情報を見る
              </InternalLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
