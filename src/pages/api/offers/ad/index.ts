import fetch from 'node-fetch';

import { LINE_MESSAGING_ACCESS_TOKEN, MEDIA_ROOT_URL } from 'constants/env';
import { lineAPIRoutes } from '~/constants/routes';

import { parseAuthorization } from '~/lib';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const url = lineAPIRoutes.multicast;

  switch (method) {
    case 'POST': {
      try {
        const { lineid, offerid } = req.body;

        const promises = offerid.map(async (id) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_CMS_URL2}/api/offers/${id}?populate=image`,
            {
              headers: {
                'Content-type': 'application/json',
                Authorization: parseAuthorization(
                  process.env.WRITE_API_KEY_OFFER ?? ``
                ),
              },
            }
          );
          const result = await response.json();
          return result;
        });
        const results = await Promise.all(promises);
        // console.log(results[0]?.data?.attributes?.image);
        const list = results.map((result) => ({
          id: result?.data.id,
          title: result?.data?.attributes?.title,
          jobType: result?.data?.attributes?.occupation,
          place: result?.data?.attributes?.place_short,
          wage: `${result?.data?.attributes?.hourly_wage}円`,
          hours: result?.data?.attributes?.hours_short,
          image: `${MEDIA_ROOT_URL}${result?.data?.attributes?.image?.data?.attributes?.url}`,
        }));

        const body = {
          to: [
            ...lineid,
            // `Ufb211660bd898efefbfd690e75ae227c`, // kuma
            // 'U9fb70816e41a16058f487996e2e19701', // sato
          ],
          messages: [
            {
              type: 'text',
              text: `こんばんは！
NOT THE UNIVERSITYです ☕

新大学生限定の求人サイト「FORJOB」から
 💫 単発のアルバイト求人情報
 💫 通常のアルバイト求人情報
 💫 長期インターンの求人情報
を毎月１回お届けしていくよ🤩 ✨

「FORJOB」では新着求人が続々登場！
早速、以下のメッセージから気になる求人をチェックしてね🔎`,
            },
            {
              type: 'flex',
              altText: '新大生のためのFORJOBおすすめ求人広告',
              contents: {
                type: 'carousel',
                contents: [
                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      size: 'full',
                      aspectRatio: '4:3',
                      aspectMode: 'cover',
                      url: `https://management.nottheuniversity.com/uploads/2_911e729937.png`,
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      spacing: 'md',
                      contents: [
                        {
                          type: 'text',
                          text: '新大学生のための求人サイトFORJOB',
                          wrap: true,
                          weight: 'bold',
                          size: 'xl',
                        },
                        {
                          type: 'box',
                          layout: 'baseline',
                          contents: [
                            {
                              type: 'text',
                              text: '単発アルバイトから長期インターンまで他では体験できない求人などをお届けします。おすすめ求人は右をスワイプしてご確認ください。',
                              wrap: true,
                              size: 'sm',
                              flex: 0,
                            },
                          ],
                        },
                      ],
                    },
                    footer: {
                      type: 'box',
                      layout: 'vertical',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'button',
                          style: 'primary',
                          action: {
                            type: 'uri',
                            label: '求人を見る',
                            uri: 'https://forjob.nottheuniversity.com',
                          },
                          color: '#44a7fd',
                        },
                      ],
                    },
                  },

                  ...list.map((item) => ({
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: item.image,
                      size: 'full',
                      aspectRatio: '4:3',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      spacing: 'md',
                      contents: [
                        {
                          type: 'text',
                          text: item.title,
                          size: 'xl',
                          weight: 'bold',
                          wrap: true,
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: '職種',
                                  size: 'sm',
                                  weight: 'bold',
                                  margin: 'sm',
                                  wrap: true,
                                  flex: 2,
                                },
                                {
                                  type: 'text',
                                  text: item.jobType,
                                  size: 'sm',
                                  align: 'start',
                                  color: '#000000',
                                  wrap: true,
                                  flex: 8,
                                },
                              ],
                            },
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: '場所',
                                  size: 'sm',
                                  weight: 'bold',
                                  margin: 'sm',
                                  wrap: true,
                                  flex: 2,
                                },
                                {
                                  type: 'text',
                                  text: item.place,
                                  size: 'sm',
                                  align: 'start',
                                  color: '#000000',
                                  wrap: true,
                                  flex: 8,
                                },
                              ],
                            },
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: '給与',
                                  size: 'sm',
                                  weight: 'bold',
                                  margin: 'sm',
                                  wrap: true,
                                  flex: 2,
                                },
                                {
                                  type: 'text',
                                  text: item.wage,
                                  size: 'sm',
                                  align: 'start',
                                  color: '#000000',
                                  wrap: true,
                                  flex: 8,
                                },
                              ],
                            },
                            {
                              type: 'box',
                              layout: 'baseline',
                              spacing: 'sm',
                              contents: [
                                {
                                  type: 'text',
                                  text: '時間',
                                  size: 'sm',
                                  weight: 'bold',
                                  margin: 'sm',
                                  wrap: true,
                                  flex: 2,
                                },
                                {
                                  type: 'text',
                                  text: item.hours,
                                  size: 'sm',
                                  align: 'start',
                                  color: '#000000',
                                  wrap: true,
                                  flex: 8,
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
                            label: '詳細を見る',
                            uri: `https://forjob.nottheuniversity.com/offers/${item.id}`,
                          },
                        },
                      ],
                    },
                  })),

                  {
                    type: 'bubble',
                    hero: {
                      type: 'image',
                      url: 'https://management.nottheuniversity.com/uploads/3_075e91547f.png',
                      aspectRatio: '4:3',
                      size: 'full',
                      aspectMode: 'cover',
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'text',
                          text: '求人を検索する',
                          color: '#44a7fd',
                          size: 'lg',
                          weight: 'bold',
                          align: 'center',
                          gravity: 'center',
                        },
                      ],
                      action: {
                        type: 'uri',
                        label: '求人を検索する',
                        uri: 'https://forjob.nottheuniversity.com',
                      },
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center',
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
        console.log(result);

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
