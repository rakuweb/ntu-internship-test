import { FC } from 'react';
import NextLink from 'next/link';

export type PresenterProps = {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties; // 追加のスタイルプロパティを受け入れる
};

export const Presenter: FC<PresenterProps> = ({ children, href, style }) => {
  const baseStyle = {
    transition: 'all .3s',
    textDecoration: 'none',
  };

  const hoverStyle = {
    cursor: 'pointer',
    opacity: 0.5,
  };

  return (
    <NextLink href={href} passHref>
      <div
        style={{ ...baseStyle, ...style }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {children}
      </div>
    </NextLink>
  );
};
