// import layer
import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Image } from '@chakra-ui/react';

import { InternalLink } from '~/components/links/InternalLink';
import { OfferCard } from '../types';
import { mq } from '~/constants/styles';
import { routes } from 'constants/routes';

// type layer
export type DataProps = OfferCard;
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const {
    id,
    companyName,
    occupation,
    place,
    hourlyWage,
    isNew,
    title,
    image,
  } = props;
  const href = `${routes.offers}/${id}`;
  return (
    <InternalLink href={href}>
      <Box
        _hover={{ boxShadow: `2xl` }}
        transitionProperty={`box-shadow`}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        css={styles}
      >
        <div className="x001">
          {isNew && (
            <div className="NEW-area">
              <div className="NEW-box">NEW</div>
            </div>
          )}
          <Image
            className="photo"
            // cmsで使う用途
            // src={image}
            src={`/images/offers/clip-1@1x.png`}
          />
          <div className="text">
            <div className="text-2">{title}</div>
            <div className="campanytext">{companyName}</div>

            <div className="termstext">
              <Image className="icon" src={`/images/offers/zinbutuIcon.png`} />
              職種
              <div className="description">{occupation}</div>
            </div>
            <div className="termstext">
              <Image
                className="icon"
                width={29}
                height={29}
                src={`/images/offers/mokutekitiIcon.png`}
              />
              場所
              <div className="description">{place}</div>
            </div>
            <div className="paytext">
              <Image
                className="icon"
                width={29}
                height={29}
                src={`/images/offers/hukuroIkon.png`}
              />
              時給
              <div className="description">{hourlyWage}</div>
            </div>
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
    height: 380px;
    width: 300px;
    padding: 0rem;
    ${mq[3]} {
        height: 430px;
        width: 320px;
      }
  }

  .NEW-area{
    position:relative;

  }

  .NEW-box{
    position:absolute;
    top:0;
    left:0;
    display:flex;
    justify-content: center;
    align-items: center;
    width:52px;
    height:29px;
    font-family: 'yugothic';
    font-weight:bold;
    font-size:14px;
    color:#ffffff;
    background-color:#D6322C;
    border-radius: 10px 0px 0 0;
    ${mq[3]} {
      width:62px;
      height:34px;
      font-size:20px;
      }
  }

  .photo {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    ${mq[3]} {
    height: 180px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 28px;
    width: 240px;
    font-family: 'yugothic';
    color:#1E406B;
    ${mq[3]} {
      justify-content: space-between;
      margin: 0 auto;
      width: 282px;
      font-family: 'yugothic';
      color:#1E406B;
    }
  }

  .text-2 {
    letter-spacing: 0;
    line-height: 14px;
    white-space: pre-wrap;
    font-size: 14px;
    height:28px;
    margin: 18px 0;
    font-weight: bold;
    color:#1E406B;
    ${mq[3]} {
      line-height: 20px;
      white-space: pre-wrap;
      font-size: 16.5px;
      margin: 12px 0;
      font-weight: bold;
      color:#1E406B;
      height:40px;
    }
  }

  .campanytext {
    text-align: end;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #9d9d9e;
    padding-bottom: 7px;
    ${mq[3]} {
      font-size: 16px;
      padding-bottom: 8px;
    }
  }

  .icon{
    width:20px;
    height:20px;
    margin-right:17px;
    ${mq[3]} {
      width:24px;
    height:24px;
      margin-right:20px;
    }
  }
  .termstext {
    display:flex;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #9d9d9e;
    padding: 10px 0;
    white-space: nowrap;
    ${mq[3]} {
      font-size: 16px;
      border-bottom: 1px solid #9d9d9e;
      padding: 12px 0;
    }
  }

  .paytext {
    display:flex;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    padding: 10px 0;
    white-space: nowrap;
    ${mq[3]} {
      font-size: 16px;
      padding: 12px 0;
    }
  }

  .description {
    font-size: 11px;
    font-weight: 500;
    margin-left: 17px;
    white-space: pre-wrap;
    ${mq[3]} {
      font-size: 13px;
      margin-left: 20px;
      white-space: pre-wrap;
    }
  }
}

`;
