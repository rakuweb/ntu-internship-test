// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'atoms/Image';

import { OfferButton } from 'components/OfferButton';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
import { Labeltext2 } from './Labeltext2';

import { selectCompany, useCompanyStore } from 'features/company';
import { useTargetOfferStore, selectTarget } from 'features/offers';

import { styles } from './styles';
import colors from '../../lib/theme/foundations/colors';
import { InternalLink } from '../links/InternalLink';
import { routes } from 'constants/routes';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = useTargetOfferStore(selectTarget);
  const company = useCompanyStore(selectCompany);

  return (
    <div css={styles}>
      <section className="consultation-card-list">
        <div className="consultation-card-list__card">
          <p className="companyName">{list.companyName}</p>
          <p className="jobtitle">{list?.title}</p>

          <Flex flexWrap={`wrap`} mb={{ lg: `20px` }}>
            {list.categories.map((category) => (
              <Labeltext
                key={category.id}
                labeltext={category.name}
              ></Labeltext>
            ))}
            {/*
            <Labeltext labeltext={labeltext[1]}></Labeltext>
          */}
          </Flex>

          <h3 className="termstext">
            <Image
              className="icon"
              width={24}
              height={24}
              src={`/svg/map-marker.svg`}
            />
            <div className="placetext">{list.place}</div>
          </h3>
          <h3 className="termstext">
            <Image
              className="icon"
              width={24}
              height={24}
              src={`/svg/money.svg`}
            />
            <div className="placetext">{list.hourlyWage}</div>
          </h3>

          <Image {...list.image} className="bigImg" />
          <InternalLink href={routes.signin}>
            <OfferButton />
          </InternalLink>
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
          インターンシップ概要
        </Box>
        <div className="subsection">
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            {list.description}
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
          長期インターンシップで任せたいこと
        </Box>
        <div className="subsection">
          <Box whiteSpace={`pre-wrap`} fontSize={`14px`} lineHeight={`21px`}>
            {list.aboutJob}
          </Box>
        </div>
      </Box>

      <Box
        w={`100vw`}
        bg={`#f5f5f5`}
        pt={`40px`}
        fontFamily={`'Noto Sans JP', sans-serif`}
      >
        {list?.gainedSkills.length !== 0 && (
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
                  {list.gainedSkills.map((text) => (
                    <Labeltext2 key={text} labeltext={text} />
                  ))}
                </Flex>
              </Box>
            </div>
          </>
        )}
        <Box mt={`78px`}>
          <InternalLink href={routes.signin}>
            <OfferButton />
          </InternalLink>
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
              <p className="termsMain">{list.hourlyWage}</p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">対象学年</p>
              <p className="termsMain">{list.target}</p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">応募資格</p>
              <p className="termsMain">{list.qualification}</p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">業務内容</p>
              <p className="termsMain">{list.aboutJob}</p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">勤務条件</p>
              <p className="termsMain">{list.recruitmentTerms}</p>
            </div>
            <div className="termsContainer2">
              <p className="termsTitle">職種</p>
              <p className="termsMain">{list.jobType}</p>
            </div>
            <div className="termsContainer3">
              <p className="termsTitle">勤務地</p>
              <p className="termsMain">{list.place}</p>
            </div>
          </Box>
        </div>
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
