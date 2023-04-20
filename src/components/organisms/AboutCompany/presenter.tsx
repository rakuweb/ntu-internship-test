// import layer
import { FC } from 'react';
import { Box, Flex, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { Image } from 'atoms/Image';
import { Image as NImage } from 'components/images/Image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { OfferButton } from 'components/OfferButton';
import { Labeltext } from '~/features/offers/OfferCard/Labeltext';
// import { Labeltext2 } from './Labeltext2';

import { selectCompany, useCompanyStore } from 'features/company';
import {
  useTargetOfferStore,
  selectTarget,
  selectOfferList,
  useOffersStore,
} from 'features/offers';
import { useLiff } from 'contexts/LineAuthContextInternship';

// import { styles } from './styles';
import { useAccountStore, selectSetPrevPath } from 'features/account';
import { OfferEntity } from 'types/gql/graphql';
import 'zenn-content-css';
import { OfferList } from '~/features/offers/OfferList';
import { OfferCard } from '~/features/offers/OfferCard';
import { OfferCardDead } from '~/features/offers/OfferCardDead';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const offer = useTargetOfferStore(selectTarget);
  const offers = useOffersStore(selectOfferList);
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
  const filteredOffers = offers.filter(
    (offer) => offer.createdByid === company?.createdByid
  );

  const currentDate = new Date();
  const endDate = new Date(offer.deadline);
  const isEnd = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  return (
    <div css={styles}>
      <Box
        backgroundColor={'#f5f5f5'}
        fontFamily={'"Noto Sans JP", sans-serif'}
      >
        <Box w={{ base: '95%', lg: '1000px' }} m={'auto '} pb={''} pt={'50px'}>
          <Box
            display={'flex'}
            flexFlow={{ base: 'column-reverse', lg: 'row' }}
            // w={'1000px'}
            m={'auto'}
            alignItems={'center'}
            borderRadius={'20px'}
            boxShadow={'0px 4px 8px rgba(0, 0, 0, 0.1)'}
            bgColor={'#fff'}
            p={{ base: '20px', lg: '40px' }}
          >
            <Box w={{ base: '100%', lg: '40%' }} lineHeight={'1.6'}>
              <Heading
                as={'h2'}
                fontSize={{ base: '16px', lg: '20px' }}
                fontFamily={'"Noto Sans JP", sans-serif'}
                p={'20px 0 10px'}
              >
                {company?.companyName}
              </Heading>
              <Box
                as="table"
                textAlign={'left'}
                fontSize={{ base: '14px', lg: '16px' }}
              >
                <Box as="tr">
                  <Box as="th" p={'5px'}>
                    創業年度
                  </Box>
                  <Box as="td" p={'5px'}>
                    {company?.founding}
                  </Box>
                </Box>
                <Box as="tr">
                  <Box as="th" p={'5px'}>
                    採用職種
                  </Box>
                  <Box as="td" p={'5px'}>
                    {company?.jobtype}
                  </Box>
                </Box>
                <Box as="tr">
                  <Box as="th" p={'5px'}>
                    雇用形態
                  </Box>
                  <Box as="td" p={'5px'}>
                    {company?.employment}
                  </Box>
                </Box>
                <Box as="tr">
                  <Box as="th" p={'5px'} whiteSpace={'nowrap'}>
                    従業員数
                  </Box>
                  <Box as="td" p={'5px'}>
                    {company?.scale}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box w={{ base: '100%', lg: '60%' }}>
              <NImage image={{ ...company?.image }} />
            </Box>
          </Box>
          <Heading
            as={'h3'}
            fontSize={{ base: '18px', lg: '25px' }}
            m={'40px auto 25px'}
            fontFamily={'"Noto Sans JP", sans-serif'}
          >
            事業概要
          </Heading>
          <Box
            borderRadius={'20px'}
            boxShadow={'0px 4px 8px rgba(0, 0, 0, 0.1)'}
            bgColor={'#fff'}
            p={{ base: '20px', lg: '40px' }}
            m={'auto'}
            lineHeight={'1.6'}
            fontSize={{ base: '14px', lg: '16px' }}
          >
            {company?.outline}
          </Box>

          <Heading
            as={'h3'}
            fontSize={{ base: '18px', lg: '25px' }}
            m={'40px auto 25px'}
            fontFamily={'"Noto Sans JP", sans-serif'}
          >
            会社の雰囲気
          </Heading>
          <Box
            borderRadius={'20px'}
            boxShadow={'0px 4px 8px rgba(0, 0, 0, 0.1)'}
            bgColor={'#fff'}
            p={{ base: '20px', lg: '40px' }}
            m={'auto'}
            lineHeight={'1.6'}
            fontSize={{ base: '14px', lg: '16px' }}
          >
            <Text>{company?.atmosphere}</Text>
            <Box display={'flex'} justifyContent={'space-between'} pt={'20px'}>
              <Box w={'48%'} border={'1px solid #333'}>
                <NImage image={{ ...company?.atmosphereimage1 }} />
              </Box>
              <Box w={'48%'} border={'1px solid #333'}>
                <NImage image={{ ...company?.atmosphereimage2 }} />
              </Box>
            </Box>
          </Box>
          <Heading
            as={'h3'}
            fontSize={{ base: '18px', lg: '25px' }}
            m={'40px auto 25px'}
            fontFamily={'"Noto Sans JP", sans-serif'}
          >
            学生の皆様へ一言
          </Heading>
          <Box
            borderRadius={'20px'}
            boxShadow={'0px 4px 8px rgba(0, 0, 0, 0.1)'}
            bgColor={'#fff'}
            p={{ base: '20px', lg: '40px' }}
            m={'auto'}
            lineHeight={'1.6'}
            fontSize={{ base: '14px', lg: '16px' }}
          >
            <Text>{company?.tostudents}</Text>
          </Box>
        </Box>
        <Heading
          as={'h3'}
          fontSize={{ base: '18px', lg: '25px' }}
          m={{ base: '50px auto 25px', lg: '100px auto 25px' }}
          fontFamily={'"Noto Sans JP", sans-serif'}
          w={{ base: '95%', lg: '1168px;' }}
        >
          この企業の他の求人を見てみる
        </Heading>
        <Box
          display={'flex'}
          justifyContent={{ base: 'center', lg: 'space-between' }}
          flexFlow={{ base: 'column', lg: 'row' }}
          w={{ base: '95%', lg: '1168px;' }}
          m={'auto'}
          pb={{ lg: '100px' }}
        >
          <Grid
            templateColumns={{
              base: `repeat(1,1fr)`,
              md: `repeat(2,1fr)`,
              lg: `repeat(3,1fr)`,
            }}
            rowGap={{ lg: `38px` }}
            columnGap={{ lg: `32px` }}
            m={{ base: 'auto' }}
          >
            {filteredOffers.slice(0, 3).map((offer) => (
              <>
                {isEnd <= 0 ? (
                  <OfferCardDead {...offer} />
                ) : (
                  <OfferCard startDate={''} key={offer.id} {...offer} />
                )}
              </>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
// styles
const styles = css``;
