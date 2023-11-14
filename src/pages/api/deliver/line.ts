import fetch from 'node-fetch';

import { LINE_MESSAGING_ACCESS_TOKEN, ORIGIN_URL } from 'constants/env';
import { lineAPIRoutes, routes } from '~/constants/routes';

import { parseAuthorization } from '~/lib';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const url = lineAPIRoutes.messagePush;

  switch (method) {
    case 'POST': {
      try {
        const { lineid, ...data } = req.body;
        const list: {
          title: string;
          hourly_wage: string;
          place_short: string;
          hours_short: string;
          id: string;
          image: string;
          occupation: string;
        }[] = data.list;
        //   [
        //   { title: `氏名`, content: `${data.name}` },
        //   { title: `ふりがな`, content: `${data.furigana}` },
        //   { title: `性別`, content: `${data.gender}` },
        //   { title: `生年月日`, content: `${parseDate(data.birthday)}` },
        //   { title: `電話番号`, content: `${data.phone}` },
        //   { title: `学年`, content: `${data.grade}` },
        //   { title: `メールアドレス`, content: `${data.email}` },
        //   { title: `応募理由`, content: `${data.reason}` },
        // ];

        const body = {
          to: lineid,
          // to: `Ufb211660bd898efefbfd690e75ae227c`,
          // to: 'U9fb70816e41a16058f487996e2e19701',
          messages: [
            {
              type: 'flex',
              altText: 'This is a Flex Message',
              contents: {
                type: 'carousel',
                contents: list.map((item) => ({
                  type: 'bubble',
                  hero: {
                    type: 'image',
                    url: item.image,
                    // url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
                    size: 'full',
                    aspectRatio: '20:13',
                    aspectMode: 'cover',
                    action: {
                      type: 'uri',
                      label: '詳細を確認',
                      uri: `${ORIGIN_URL}${routes.offerID(item.id)}`,
                    },
                  },
                  body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'md',
                    action: {
                      type: 'uri',
                      label: '詳細を確認',
                      uri: `${ORIGIN_URL}${routes.offerID(item.id)}`,
                    },
                    contents: [
                      {
                        type: 'text',
                        text: item.title,
                        size: 'xl',
                        weight: 'bold',
                      },
                      {
                        type: 'box',
                        layout: 'vertical',
                        spacing: 'sm',
                        contents: [
                          {
                            type: 'box',
                            layout: 'baseline',
                            contents: [
                              {
                                type: 'text',
                                text: '時給',
                                weight: 'bold',
                                margin: 'sm',
                                flex: 0,
                              },
                              {
                                type: 'text',
                                text: item.hourly_wage,
                                size: 'sm',
                                align: 'end',
                                color: '#000000',
                              },
                            ],
                          },
                          {
                            type: 'box',
                            layout: 'baseline',
                            contents: [
                              {
                                type: 'text',
                                text: '職種',
                                weight: 'bold',
                                margin: 'sm',
                                flex: 0,
                              },
                              {
                                type: 'text',
                                text: item.occupation,
                                size: 'sm',
                                align: 'end',
                                color: '#000000',
                              },
                            ],
                          },
                          {
                            type: 'box',
                            layout: 'baseline',
                            contents: [
                              {
                                type: 'text',
                                text: '場所',
                                weight: 'bold',
                                margin: 'sm',
                                flex: 0,
                              },
                              {
                                type: 'text',
                                text: item.place_short,
                                size: 'sm',
                                align: 'end',
                                color: '#000000',
                              },
                            ],
                          },
                          {
                            type: 'box',
                            layout: 'baseline',
                            contents: [
                              {
                                type: 'text',
                                text: '時間',
                                weight: 'bold',
                                margin: 'sm',
                                flex: 0,
                              },
                              {
                                type: 'text',
                                text: item.hours_short,
                                size: 'sm',
                                align: 'end',
                                color: '#000000',
                              },
                            ],
                          },
                        ],
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
                          type: 'uri',
                          label: '詳細を確認',
                          uri: `${ORIGIN_URL}${routes.offerID(item.id)}`,
                        },
                      },
                    ],
                  },
                })),
              },
            },

            {
              type: 'bubble',
              body: {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                  {
                    type: 'button',
                    flex: 1,
                    gravity: 'center',
                    action: {
                      type: 'uri',
                      label: 'もっと見る',
                      uri: 'https://forjob.nottheuniversity.com',
                    },
                  },
                ],
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
