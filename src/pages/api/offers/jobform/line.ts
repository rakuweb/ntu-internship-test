import fetch from 'node-fetch';

import { LINE_MESSAGING_ACCESS_TOKEN } from 'constants/env';
import { LINE_MESSAGING_API_PUSH_URL } from '~/constants/routes';

import type { NextApiRequest, NextApiResponse } from 'next';
import { parseAuthorization } from '~/lib';
import { parseDate } from '~/lib/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const url = LINE_MESSAGING_API_PUSH_URL;

  switch (method) {
    case 'POST': {
      try {
        const { lineid, ...data } = req.body;
        const list = [
          { title: `氏名`, content: `${data.name}` },
          { title: `ふりがな`, content: `${data.furigana}` },
          { title: `性別`, content: `${data.gender}` },
          { title: `生年月日`, content: `${parseDate(data.birthday)}` },
          { title: `学年`, content: `${data.grade}` },
          { title: `電話番号`, content: `${data.phone}` },
          {
            title: `メールアドレス`,
            content: `${data.email}`,
          },
          {
            title: `応募理由`,
            content: `${data.reason}`,
          },
          {
            title: `面接希望日1`,
            content: `${data?.hopeday1 ? parseDate(data.hopeday1) : '未入力'}`,
          },
          {
            title: `面接希望日2`,
            content: `${data?.hopeday2 ? parseDate(data.hopeday2) : '未入力'}`,
          },
          {
            title: `面接希望日3`,
            content: `${data?.hopeday3 ? parseDate(data.hopeday3) : '未入力'}`,
          },
        ];

        const body = {
          to: lineid,
          // to: `Ufb211660bd898efefbfd690e75ae227c`,
          // to: 'U9fb70816e41a16058f487996e2e19701',
          messages: [
            {
              type: 'flex',
              altText: 'This is a Flex Message',
              contents: {
                type: 'bubble',
                hero: {
                  type: 'image',
                  url: data.offer_image,
                  // url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
                  size: 'full',
                  aspectRatio: '20:13',
                  aspectMode: 'cover',
                  action: {
                    type: 'message',
                    label: 'エントリーを完了する',
                    text: 'エントリーが完了しました！',
                  },
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  spacing: 'md',
                  action: {
                    type: 'message',
                    text: 'エントリーが完了しました！',
                  },
                  contents: [
                    {
                      type: 'text',
                      text: data.offer_title,
                      // text: '求人タイトル',
                      size: 'xl',
                      weight: 'bold',
                      wrap: true,
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      spacing: 'sm',
                      contents: list.map((item) => ({
                        type: 'box',
                        layout: 'baseline',
                        spacing: 'sm',
                        contents: [
                          {
                            type: 'text',
                            text: item.title,
                            size: 'sm',
                            weight: 'bold',
                            margin: 'sm',
                            wrap: true,
                            flex: 4,
                          },
                          {
                            type: 'text',
                            text: item.content,
                            size: 'sm',
                            align: 'end',
                            color: '#000000',
                            wrap: true,
                            flex: 6,
                          },
                        ],
                      })),
                    },
                    {
                      type: 'text',
                      wrap: true,
                      color: '#ff0000',
                      size: 'sm',
                      weight: 'bold',
                      text: `エントリーはまだ完了していません！！！
下記ボタンをクリックしてエントリーを完了してください。`,
                    },
                  ],
                },
                footer: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'button',
                      style: 'primary',
                      color: '#44a7fd',
                      margin: 'xxl',
                      action: {
                        type: 'message',
                        label: 'エントリーを完了する',
                        text: 'エントリーが完了しました！',
                      },
                    },
                  ],
                },
              },
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
        // console.log(result);

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
