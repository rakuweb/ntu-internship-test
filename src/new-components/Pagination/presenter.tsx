import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Pagecircle } from './Pagecircle';

export type PresenterProps = {
  currentPage: number;
  totalData: number;
  itemsPerPage: number;
  handlePageChange: (newPage: number) => void;
};

export function Presenter({
  currentPage,
  totalData,
  itemsPerPage,
  handlePageChange,
}: PresenterProps) {
  const totalPages = Math.ceil(totalData / itemsPerPage);

  return (
    <div
      className={flex({
        w: `fit-content`,
        h: `${37 / 19.2}vw`,
        letterSpacing: `0`,
        mt: `${40 / 19.2}vw`,
        pb: `${40 / 19.2}vw`,
        mx: `auto`,
        alignItems: `center`,
        fontSize: {
          base: `${11 / 3.75}vw`,
          md: `${12 / 7.68}vw`,
          lg: `${18 / 19.2}vw`,
        },
        fontFamily: `'Noto Sans JP', sans-serif`,
      })}
    >
      <div
        className={css({
          color: currentPage === 1 ? 'gray' : 'inherit',
          cursor: currentPage === 1 ? 'default' : 'pointer',
          pointerEvents: currentPage === 1 ? 'none' : 'auto',
          mr: `1vw`,
          fontWeight: `bold`,
        })}
        onClick={() => {
          if (currentPage !== 1) {
            handlePageChange(currentPage - 1);
            window.scroll({ top: 0 });
          }
        }}
      >
        戻る
      </div>
      {currentPage > 2 && <div>{`…`}</div>}
      {Array.from({ length: 4 }, (_, i) => currentPage - 2 + i).map(
        (pageNumber) =>
          pageNumber > 0 &&
          pageNumber <= totalPages && (
            <Pagecircle
              key={pageNumber}
              pagenumber={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
                window.scroll({ top: 0 });
              }}
              className={css({
                border:
                  pageNumber === currentPage ? `1px solid #41A4FD` : undefined,
              })}
            />
          )
      )}
      {currentPage < totalPages - 1 && <div>{`…`}</div>}
      <div
        className={css({
          color: currentPage == totalPages ? 'gray' : 'inherit',
          cursor: currentPage == totalPages ? 'default' : 'pointer',
          pointerEvents: currentPage === totalPages ? 'none' : 'auto',
          ml: `1vw`,
          fontWeight: `bold`,
        })}
        onClick={() => {
          handlePageChange(currentPage + 1);
          window.scroll({ top: 0 });
        }}
      >
        次へ
      </div>
    </div>
  );
}
