// import layer
import { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { InternalLink } from '~/components/links/InternalLink';

import { mq } from '~/constants/styles';

// type layer
export type DataProps = {
  link: string;
  aboutJobs: string;
  companyName: string;
  occupation: string;
  place: string;
  hourlyWage: string;
  isNew?: boolean;
};
export type PresenterProps = DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const { link, aboutJobs, companyName, occupation, place, hourlyWage } = props;
  return (
    <InternalLink href={link}>
      <Box
        _hover={{ boxShadow: `2xl` }}
        transitionProperty={`box-shadow`}
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        css={styles}
      >
        <div className="x001">
          <div className="NEW-area">
            <Image className="photo" src={`/dev/img/clip-1@1x.png`} alt={``} />
            <div className="NEW-box">NEW</div>
          </div>

          <div className="text">
            <div className="text-2">{aboutJobs}</div>
            <div className="campanytext">{companyName}</div>

            <div className="termstext">
              <Image
                className="icon"
                src={`/dev/img/人物アイコン.png`}
                alt={``}
              />
              職種
              <div className="description">{occupation}</div>
            </div>
            <div className="termstext">
              <Image
                className="icon"
                width={29}
                height={29}
                src={`/dev/img/目的地アイコン2.png`}
                alt={``}
              />
              場所
              <div className="description">{place}</div>
            </div>
            <div className="paytext">
              <Image
                className="icon"
                width={29}
                height={29}
                src={`/dev/img/シンプルな円袋のアイコン.png`}
                alt={``}
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
    height: 410px;
    width: 300px;
    padding: 0rem;
    ${mq[3]} {
        height: 492px;
        width: 360px;
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
      margin: 0 33px;
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
    margin: 28px 0;
    font-weight: bold;
    color:#1E406B;
    ${mq[3]} {
      line-height: 20px;
      white-space: pre-wrap;
      font-size: 16.5px;
      margin: 33px 0;
      font-weight: bold;
      color:#1E406B;
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
