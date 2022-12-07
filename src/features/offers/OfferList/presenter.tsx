// import layer
import { FC } from 'react';

import { OfferCard } from 'features/offers/OfferCard';
import { selectOfferList } from 'features/offers/selectors';
import { useOffersStore } from 'features/offers/hooks';
import { styles } from './styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = useOffersStore(selectOfferList);

  return (
    <div css={styles}>
      <div className="search">
        <div className="search__container">
          {/*<OfferSidebar />*/}
          <section className="recruit-card-area">
            {list.map((card) => (
              <div key={card.title} className="recruit-card-container">
                <OfferCard {...card} />
                <div className="test">
                  <OfferCard {...card} />
                </div>
                <OfferCard {...card} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
