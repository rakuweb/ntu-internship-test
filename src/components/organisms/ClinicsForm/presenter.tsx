// import layer
import { VFC } from 'react';
import { css } from '@emotion/react';
import { mq } from '~/constants/styles';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: VFC<PresenterProps> = () => {
  return (
    <div css={styles}>
      <section className="form">
        <div className="form__container">
          <p className="form__container__title">
            口コミ投稿フォームになります。
          </p>
          <p className="form__container__description">
            口コミ内容を下記フォームに入力の上、送信ボタンをクリックしてご相談ください。
          </p>
          <p className="form__container__description">
            ※本投稿にて診療行為にあたる書き込みを行うことはできませんのでご注意ください。
            <br />
            ※ご投稿いただいた情報は変更・削除を行えません。
            <br />
            ※個人の特定できる情報の書き込みはしないようお願いいたします。
            <br />
            ※上記の他、事務局が著しく問題がある投稿と判断した場合、非掲載とする場合もございます。
            <br />
            また、投稿いただいた情報の履歴は予防歯科.com退会後も掲載されますので、ご了承の上、書き込みをお願いいたします。
            <br />※<span className="red"> * </span>は必須項目です。
          </p>
          <p className="form__container__title">入力フォーム</p>
          <hr className="form__container__border" />
          <div className="form__container__item">
            <p className="form__container__item__left">投稿者名</p>
            <div className="form__container__item__right">
              <p>山田 太郎</p>
              <p className="form__container__item__right__small-text">
                ※投稿者名は、マイページから変更できます。
              </p>
            </div>
          </div>

          <hr className="form__container__border" />

          <div className="form__container__item">
            <p className="form__container__item__left">
              評価<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <p>施設 :4.0いいね！</p>
              <p>対応 :4.0いいね！</p>
              <p>治療 :4.0いいね！</p>
              <p>抗菌 :4.0いいね！</p>
            </div>
          </div>

          <hr className="form__container__border" />

          <div className="form__container__item">
            <p className="form__container__item__left">
              良かった点<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <div className="form__container__item__right__tagbox">
                <p className="form__container__item__right__tagbox__name">
                  施設 :
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  清潔感
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  内装・設備
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  駐車場
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  タグ
                </p>
              </div>

              <div className="form__container__item__right__tagbox">
                <p className="form__container__item__right__tagbox__name">
                  対応 :
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  人柄・気づかい
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  タグ
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  タグ
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  タグ
                </p>
              </div>

              <div className="form__container__item__right__tagbox">
                <p className="form__container__item__right__tagbox__name">
                  治療 :
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  説明
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  丁寧さ
                </p>
                <p className="form__container__item__right__tagbox__tag active">
                  痛みへの配慮
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  治療後の経過
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  タグ
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  タグ
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  タグ
                </p>
              </div>
            </div>
          </div>

          <hr className="form__container__border" />

          <div className="form__container__item">
            <p className="form__container__item__left">
              治療内容<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <div className="form__container__item__right__tagbox">
                <p className="form__container__item__right__tagbox__tag active">
                  虫歯
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  タグ
                </p>
                <p className="form__container__item__right__tagbox__tag">
                  タグ
                </p>
              </div>
            </div>
          </div>

          <hr className="form__container__border" />

          <div className="form__container__item">
            <p className="form__container__item__left">
              本文<span className="red"> * </span>
            </p>
            <div className="form__container__item__right">
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="内容を入力してください"
                className="form__container__item__right__textarea"
              ></textarea>
              <p>※入力文字数 : 0（1～500文字で入力してください）</p>
            </div>
          </div>

          <div className="form__container__privacy">
            <input
              type="checkbox"
              id="check"
              name="checkbox"
              className="form__container__privacy__checkbox"
            />
            <label htmlFor="check" className="form__container__privacy__text">
              <a href="#" className="form__container__privacy__text__link">
                プライバシーポリシー
              </a>
              に同意します。 <span className="red">*</span>
            </label>
          </div>

          <div className="form__container__button">
            <a href="#" className="form__container__button__cancel">
              口コミ一覧へ戻る
            </a>
            <a href="#" className="form__container__button__submit inactive">
              送信する
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
// styles
const styles = css`
  .form {
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    margin: 0 0 24px 0;
    font-family: var(--font-family-yugothic-medium);
  }

  .form__container {
    width: calc(100% - 32px);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    line-height: 1.7;
    color: #003968;
  }

  .form__container__title {
    font-size: 20px;
    margin: 40px 0 0 0;
  }

  .form__container__description {
    font-size: 16px;
    margin: 8px 0 0 0;
  }

  .red {
    color: #E9495C;
  }

  .form__container__border {
    border-top: 1px solid #003968;
    width: 100%;
    margin: 24px 0;  
  }

  .form__container__item {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .form__container__item__left {
    width: 100%;
    margin: 0 0 8px 0;
  }

  .form__container__item__right {
    width: 100%;
  }

  .form__container__item__right__small-text {
    font-size: 12px;
  }

  //

  .form__container__item__right__tagbox {
    align-items: flex-start;
    display: flex;
    align-items: center;
    margin: 0 0 16px 0;
    flex-wrap: wrap;
  }

  .form__container__item__right__tagbox__name {
    font-size: 16px;
    width: 100%;
  }

  .form__container__item__right__tagbox__tag {
    padding: 4px 8px;
    margin: 8px 8px 0 0;
    color: #666666;
    border: 1px solid #666666;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .form__container__item__right__tagbox__tag.active {
    background-color: #2194E5;
    color: #fff;
    border: 1px solid #2194E5;
  }

  .form__container__item__right__tagbox__tag:hover {
    opacity: 0.8;
  }

  .form__container__item__right__textarea {
    padding: 16px;
    width: 100%;
    resize: none;
    border: 1px solid #003968;
  }

  .form__container__privacy {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 0;
  }

  .form__container__privacy__text {
    font-size: 16px;
    margin: 0 0 0 4px;
  }

  .form__container__privacy__text__link {
    text-decoration: underline;
    color: #003968;
  }

  .form__container__privacy__checkbox {
    -webkit-appearance: checkbox;
    cursor: pointer;
  }

  .form__container__button {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 24px 0;
  }

  .form__container__button__cancel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    margin: 0 8px;
    color: #666666;
    border: 1px solid #666666;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 240px;
  }

  .form__container__button__submit {
    background-color: #2194E5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    margin: 0 8px;
    color: #fff;
    border: 1px solid #2194E5;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 240px;
  } 

  .form__container__button__submit.inactive {
    opacity: 0.4;
    cursor: auto;
  }

  ${mq[2]} {
    .form__container {
      width: 1024px;
    }

    .form__container__item {
      flex-direction: row;
      justify-content: space-between;
    }

    .form__container__item__left {
      width: 160px;
    }

    .form__container__item__left {
      margin: 0;
    }

    .form__container__item__right__tagbox {
      flex-wrap: nowrap;
    }

    .form__container__item__right__tagbox {
      margin: 0 0 8px 0;
    }
  
    .form__container__item__right__tagbox__name {
      width: auto;
    }

    .form__container__item__right__tagbox__tag {
      margin: 0 8px 0 0;
  }
`;
