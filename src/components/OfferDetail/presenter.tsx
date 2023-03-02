// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'atoms/Image';
import { Image as NImage } from 'components/images/Image';
import { useRouter } from 'next/router';

import { OfferButton } from 'components/OfferButton';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
import { Labeltext2 } from './Labeltext2';

import { selectCompany, useCompanyStore } from 'features/company';
import { useTargetOfferStore, selectTarget } from 'features/offers';
import { useLiff } from 'contexts/LineAuthContextInternship';

import { styles } from './styles';
import { InternalLink } from '../links/InternalLink';
import { routes } from 'constants/routes';
import { useAccountStore, selectSetPrevPath } from 'features/account';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const company = useCompanyStore(selectCompany);
  const { liff } = useLiff();
  const setPrevPath = useAccountStore(selectSetPrevPath);

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

  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <p className="companyName">{offer.companyName}</p>
          <p className="jobtitle">{offer?.title}</p>

          <Flex flexWrap={`wrap`} mb={{ lg: `20px` }}>
            {offer.categories.map((category) => (
              <Labeltext
                key={category.id}
                labeltext={category.name}
              ></Labeltext>
            ))}
            {offer.points.map((point) => (
              <Labeltext2 key={point.id} labeltext={point.name} />
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
            <OfferButton onClick={() => signin()} />
          </Box>
        </div>
      </section>

      <Box
        w={`100vw`}
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
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            {offer.description}
          </Box>
        </div>
      </Box>

      <Box
        w={`100vw`}
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
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            {offer.aboutJob}
          </Box>
        </div>
      </Box>

      <Box
        w={`100vw`}
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
                    <Labeltext2 key={point.id} labeltext={point.name} />
                  ))}
                </Flex>
              </Box>
            </div>
          </>
        )}
        <Box mt={`78px`}>
          <Box w={{ base: `100%`, lg: `fit-content` }} mx={`auto`}>
            <OfferButton onClick={() => signin()} />
          </Box>
        </Box>
      </Box>

      <Box
        w={`100vw`}
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
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            <div className="termsContainer">
              <p className="termsTitle">給与</p>
              <p className="termsMain">{offer.hourlyWage}</p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">対象学年</p>
              <p className="termsMain">{offer.target}</p>
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
              <p className="termsTitleoccupation">職種</p>
              <Flex>
                {offer?.categories.map((category) => (
                  <Labeltext key={category.id} labeltext={category.name} />
                ))}
              </Flex>
            </div>
            {/*
            <div className="termsContainer2">
              <p className="termsTitle">職種</p>
              <p className="termsMain">{offer.jobType}</p>
            </div>
            */}
            <div className="termsContainer3">
              <p className="termsTitle">勤務地</p>
              <p className="termsMain">{offer.place}</p>
            </div>
          </Box>
        </div>
        <Box mt={`78px`}>
          <Box w={{ base: `100%`, lg: `fit-content` }} mx={`auto`}>
            <OfferButton onClick={() => signin()} />
          </Box>
        </Box>
        <Box
          w={`100vw`}
          bg={`#f5f5f5`}
          pt={`40px`}
          fontFamily={`'Noto Sans JP', sans-serif`}
        >
          <Box pb={`40px`}>
            <div className="subsection">
              <Flex direction={`column`} alignItems={`center`}>
                <Box width={{ base: `84px` }}>
                  <Image
                    mb={`8px`}
                    {...company.logo}
                    htmlWidth={company.logo.width}
                    htmlHeight={company.logo.height}
                  // width={84}
                  // height={84}
                  // src={`/images/offers/trunkicon.jpeg`}
                  />
                </Box>
                <Box fontSize={{ base: `24px` }} fontWeight={`700`} mb={`8px`}>
                  {company.companyName}
                </Box>
                <Box fontSize={{ base: `12px` }} lineHeight={`18px`}>
                  {company.mission}
                </Box>
              </Flex>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
