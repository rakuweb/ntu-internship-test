// import layer
import { FC } from 'react';
import { Steps } from 'antd';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

// to instance
const { Step } = Steps;

// type layer
export type PresenterProps = { current: number };

// component
export const Presenter: FC<PresenterProps> = ({ current }) => {
  const items = [
    {
      title: `予約`,
    },
    {
      title: `確認`,
    },
    {
      title: `完了`,
    },
  ];
  return (
    <Box css={styles}>
      <Steps
        type={`navigation`}
        current={current}
        size={`small`}
        direction={`horizontal`}
        responsive={false}
        items={items}
      />
    </Box>
  );
};

// styles
const styles = css`
  .ant-steps-item-icon,
  .ant-steps-item-content {
    vertical-align: middle;
  }
  .ant-steps-small .ant-steps-item-title {
    white-space: pre-wrap;
    line-height: 1em;
  }
`;
