import axios from 'axios';

import { API_URL } from 'constants/env';
import { apiRoutes } from 'constants/routes';

export type SininProps = {
  identifier: string;
  password: string;
};

export const signin = async (props: SininProps) => {
  const { identifier, password } = props;
  const url = `${API_URL}${apiRoutes.signin}`;

  try {
    const res = await axios.post(url, {
      identifier: identifier,
      password: password,
    });

    return res;
  } catch (err) {
    console.error(err.response);
  }
};
