/* eslint no-irregular-whitespace: "off" */
import fetch from 'node-fetch';

import { LINE_MESSAGING_ACCESS_TOKEN } from 'constants/env';
import { lineAPIRoutes } from '~/constants/routes';

import { parseAuthorization } from '~/lib';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const url = lineAPIRoutes.multicast;

  switch (method) {
    case 'POST': {
      try {
        const { lineid, ..._data } = req.body;

        const body = {
          to: [
            ...lineid,
            // `Ufb211660bd898efefbfd690e75ae227c`, // kuma
            // 'U9fb70816e41a16058f487996e2e19701', // sato
          ],
          messages: [
            {
              type: 'text',
              text: `⭐️会員情報更新のお願い⭐️

こんにちは！
NOT THE UNIVERSITYです！

新年度のサービス向上のため、
ご登録されている情報の更新と
新規項目のご登録をお願いします🙇
💫学年
💫学科
💫出身地
⬇️リンクをクリックして登録⬇️
https://membership.nottheuniversity.com/signin
（所要時間　約1分）


限定情報やイベント案内、
新規サービスのお知らせなど
あなたにぴったりの情報を
カスタマイズしてお届け😃✨


さらに！
更新してくれた方には
CAFEのお得なキャンペーンを
お知らせいたします！
会員情報の更新が終わったら、
公式LINEのトークに「更新完了」
と送ってね💬

わからないことがあったら
公式LINEで質問してください💁‍♀️`,
            },
          ],
        };

        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json',
            Authorization: parseAuthorization(LINE_MESSAGING_ACCESS_TOKEN),
          },
        });
        const result = await response.json();

        if (result?.error?.status === 403) {
          res.status(403).end();
          return;
        } else if (result?.error?.status === 500) {
          res.status(500).end();
          return;
        } else if (result?.data === null) {
          res.status(result?.error?.status ?? 403).end();
          return;
        }

        res.status(200).json({ message: 'POST' });
      } catch (err) {
        console.error(err);
        res.status(403).end();
      }
      break;
    }
  }
};

export default handler;
