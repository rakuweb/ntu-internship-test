/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { css } from 'styled-system/css';
import { Pagecircle } from './Pagecircle';

export type PresenterProps = {
  currentPage: number;
  totalData: number;
  itemsPerPage: number;
  handlePageChange: (newPage: number) => void;
};

export const Presenter: FC<PresenterProps> = ({
  currentPage,
  totalData,
  itemsPerPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalData / itemsPerPage);
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: {
          base: `${11 / 3.75}vw`,
          md: `${12 / 7.68}vw`,
          lg: `${18 / 19.2}vw`,
        },
      })}
      style={{ width: 'fit-content', marginTop: '2rem' }}
    >
      <div
        onClick={() => {
          if (currentPage !== 1) {
            handlePageChange(currentPage - 1);
            window.scroll({ top: 0, behavior: 'smooth' });
          }
        }}
        style={{
          color: currentPage === 1 ? 'gray' : 'black',
          cursor: currentPage === 1 ? 'default' : 'pointer',
          marginRight: '1vw',
          fontWeight: 'bold',
        }}
      >
        戻る
      </div>

      {currentPage > 2 && <div>…</div>}

      {Array.from({ length: 4 }, (_, i) => currentPage - 2 + i).map(
        (pageNumber) =>
          pageNumber > 0 &&
          pageNumber <= totalPages && (
            <Pagecircle
              key={pageNumber}
              pagenumber={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
                window.scroll({ top: 0, behavior: 'smooth' });
              }}
              border={
                pageNumber === currentPage ? '1px solid #41A4FD' : undefined
              }
            />
          )
      )}

      {currentPage < totalPages - 1 && <div>…</div>}

      <div
        onClick={() => {
          if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
            window.scroll({ top: 0, behavior: 'smooth' });
          }
        }}
        style={{
          color: currentPage === totalPages ? 'gray' : 'black',
          cursor: currentPage === totalPages ? 'default' : 'pointer',
          marginLeft: '1vw',
          fontWeight: 'bold',
        }}
      >
        次へ
      </div>
    </div>
  );
};
