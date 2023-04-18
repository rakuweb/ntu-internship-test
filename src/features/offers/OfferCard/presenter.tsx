// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Image, Flex } from '@chakra-ui/react';

import { InternalLink } from '~/components/links/InternalLink';
import { OfferCard } from '../types';
import { mq } from '~/constants/styles';
import { routes } from 'constants/routes';
import { Labeltext } from './Labeltext';
import { Labeltext2 } from '~/components/OfferDetail/Labeltext2';
import { Image as NImage } from 'components/images/Image';

// type layer
export type DataProps = OfferCard;
export interface PresenterProps extends DataProps {
  deadline: number;
  startDate: string;
}

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const {
    id,
    companyName,
    categories,
    place,
    hourlyWage,
    startDate,
    title,
    image,
    points,
    deadline,
    createdByid,
  } = props;
  const href = `${routes.offers}/${id}`;
  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const isNew =
    (currentDate.getTime() - startDateObj.getTime()) / (1000 * 3600 * 24);

  return (
    <InternalLink
      // _hover={{ cursor: `pointer`, color: `` }}
      href={href}
    >
      <Box display={'none'}>{createdByid}</Box>
      <Box
        _hover={{ boxShadow: `2xl` }}
        transitionProperty={`box-shadow`}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        css={styles}
      >
        <div className="x001">
          {/* {isNew && (
            <div className="NEW-area">
              <div className="NEW-box">NEW</div>
            </div>
          )} */}
          {image?.src && (
            <NImage
              className="photo"
              // cmsで使う用途
              // src={image}
              // src={`/images/offers/cover.png`}
              image={{ ...image }}
            />
          )}
          <div className="text">
            <div className="campanytext">{companyName}</div>
            <h2 className="text-2">{title}</h2>
            {categories.length !== 0 && (
              <div className="termstext">
                <Flex
                  flexWrap={`wrap`}
                  height={{ base: `48px`, lg: `48px` }}
                  overflow={`hidden`}
                >
                  {categories.map((category) => (
                    <Labeltext key={category.id} labeltext={category.name} />
                  ))}
                  {points.map((point) => (
                    <Labeltext2 key={point.id} labeltext={point.name} />
                  ))}
                </Flex>
              </div>
            )}
            <div className="termstext">
              <Image
                className="icon"
                width={24}
                height={24}
                src={`/svg/map-marker.svg`}
              />
              <div className="placetext">{place}</div>
            </div>
            <Box className="pay">
              <Image
                className="icon"
                width={24}
                height={24}
                src={`/svg/money.svg`}
                // src={`/images/offers/hukuroIkon.png`}
              />
              <div className="paytext">{hourlyWage}</div>
              {deadline <= 10 ? (
                <Box fontSize={'14px'} ml={'auto'} color={'red'}>
                  締切あと{deadline}日
                </Box>
              ) : isNew <= 7 ? (
                <Box
                  fontSize={'12px'}
                  ml={'auto'}
                  color={'white'}
                  bgColor={'red'}
                  p={'2px 5px'}
                  // borderRadius={'3px'}
                >
                  NEW
                </Box>
              ) : null}
            </Box>
          </div>
        </div>
      </Box>
    </InternalLink>
  );
};

// styles
const styles = css`
  //モバイルサイズ
  .x001 {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: -3.06e-16px 5px 10px #00417026;
    display: flex;
    flex-direction: column;
    height: 398px;
    width: 300px;
    padding: 0rem;
    margin-bottom: 32px;
    ${mq[2]} {
      margin-bottom: 0px;
      height: 400px;
    }
    ${mq[3]} {
      height: 440px;
      width: 368px;
    }
  }

  .NEW-area {
    position: relative;
    z-index: 10;
  }

  .NEW-box {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 29px;
    font-family: 'yugothic', 'Zen Kaku Gothic New', 'Hiragino Sans';
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
    background-color: #d6322c;
    ${mq[3]} {
      width: 62px;
      height: 34px;
      font-size: 20px;
    }
  }

  .photo {
    width: 100%;
    height: 176px;
    /*height: 150px;*/
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    ${mq[3]} {
      height: 215px;
      /*height: 180px;*/
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 12px;
    width: 276px;
    font-family: yugothic, 'Zen Kaku Gothic New', 'ヒラギノ角ゴ Pro W3',
      'Hiragino Kaku Gothic Pro', 'Hiragino Sans';
    color: #000000;
    ${mq[3]} {
      justify-content: space-between;
      margin: 20px auto;
      width: 332px;
    }
  }

  .campanytext {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.3em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${mq[3]} {
      font-size: 14px;
    }
  }

  .text-2 {
    letter-spacing: 0;
    white-space: pre-wrap;
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    line-height: 1.3em;
    margin-bottom: 8px;
    height: 47px;
    overflow: hidden;
    ${mq[3]} {
      white-space: pre-wrap;
    }
  }

  .icon {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
    ${mq[3]} {
      width: 20px;
      height: 20px;
    }
  }

  .termstext {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
    white-space: nowrap;
    ${mq[3]} {
      // border-bottom: 1px solid #9d9d9e;
      margin-top: 0px;
    }
  }

  .pay {
    display: flex;
    align-items: center;
    font-weight: bold;
    white-space: nowrap;
    font-family: 'yugothic', 'Zen Kaku Gothic New', 'Hiragino Sans';
    ${mq[3]} {
    }
  }

  .paytext {
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${mq[3]} {
      font-size: 12px;
      white-space: nowrap;
    }
  }

  .placetext {
    font-size: 12px;
    font-weight: 500;
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    ${mq[3]} {
      font-size: 12px;
      white-space: pre-wrap;
    }
  }

  .description {
    font-size: 11px;
    font-weight: 500;
    white-space: pre-wrap;
    ${mq[3]} {
      font-size: 13px;
      white-space: pre-wrap;
    }
  }
`;
