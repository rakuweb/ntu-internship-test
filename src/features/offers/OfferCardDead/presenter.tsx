// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Image, Flex } from '@chakra-ui/react';

import { InternalLink } from '~/components/links/InternalLink';
import { OfferCard } from '../types';
import { mq } from '~/constants/styles';
import { routes } from 'constants/routes';
import { Labeltext } from './Labeltext';
import { Image as NImage } from 'components/images/Image';

// type layer
export type DataProps = OfferCard;
export type PresenterProps = DataProps;
// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const {
    id,
    companyName,
    categories,
    place,
    hourlyWage,
    isNew,
    title,
    image,
    deadline,
  } = props;
  const href = `${routes.offers}/${id}`;

  return (
    <Box
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
        <div className="dead-area">
          <div className="dead-box">募集終了</div>
        </div>
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
              <Flex flexWrap={`wrap`} height={{ base: `40px`, lg: `48px` }}>
                {categories.map((category) => (
                  <Labeltext
                    key={category.id}
                    labeltext={category.name}
                  ></Labeltext>
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
          <div className="pay">
            <Image
              className="icon"
              width={24}
              height={24}
              src={`/svg/money.svg`}
              // src={`/images/offers/hukuroIkon.png`}
            />
            <div className="placetext">{hourlyWage}</div>
          </div>
        </div>
      </div>
    </Box>
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
    height: 376px;
    width: 300px;
    padding: 0rem;
    margin-bottom:32px;
    ${mq[2]} {
        margin-bottom:0px;
    }
    ${mq[3]} {
        height: 435px;
        width: 368px;
      }
  }

  .dead-area{
    position:relative;
z-index:10;

  }

  .dead-box{
    position:absolute;
    height: 166px;
    width:300px;
    left:50%;
    display:flex;
    transform: translate(-50%);
    justify-content: center;
    align-items: center;
    font-family:'yugothic', 'Zen Kaku Gothic New','Hiragino Sans';
    font-weight:bold;
    font-size:14px;
    color:red;
    letter-spacing: 5px;
    background-color:rgba(0,0,0,0.6);
    border-radius: 10px 10px 0 0;
    overflow:hidden;
    ${mq[3]} {
      height: 210px;
      width:368px;
      }
  }

  .photo {
    width: 100%;
    height: 176px;
    /*height: 150px;*/
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    overflow:hidden;
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
    font-family:'yugothic', 'Zen Kaku Gothic New','Hiragino Sans';
    color:#000000;
    ${mq[3]} {
      justify-content: space-between;
      margin: 20px auto;
      width: 332px;
    }
  }

  .campanytext {
    font-size: 14px;
    font-weight: bold;
    line-height:1.3em;
    ${mq[3]} {
      font-size: 14px;
    }
  }

  .text-2 {
    letter-spacing: 0;
    white-space: pre-wrap;
    font-size: 18px;
    font-weight: bold;
    color:#000000;
    line-height:1.3em;
    margin-bottom:8px;
    height:47px;
    overflow:hidden;
    ${mq[3]} {
      white-space: pre-wrap;
      font-weight: bold;
    }
  }


  .icon{
    width:1rem;
    height:1rem;
    margin-right:4px;
    ${mq[3]} {
      width:20px;
    height:20px;
    }
  }


  .termstext {
    display:flex;
    align-items: center;
    font-weight: bold;
    margin-bottom:8px;
    white-space: nowrap;
    ${mq[3]} {
      // border-bottom: 1px solid #9d9d9e;
    
    }
  }

  .pay {
    display:flex;
    align-items: center;
    font-weight: bold;
    white-space: nowrap;
    ${mq[3]} {
    }
  }

  .paytext{
    font-size: 11px;
    font-weight: bold;
    white-space: pre-wrap;
    ${mq[3]} {
      font-size: 20px;
      white-space: pre-wrap;
    }
  }


  .placetext{
    font-size: 12px;
    font-weight: 500;
    white-space: pre-wrap;
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
}

`;
