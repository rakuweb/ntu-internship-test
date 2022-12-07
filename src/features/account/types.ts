export type AccountSlice = {
  username: string;
  email: string;

  setAccount: (props: { username: string; email: string }) => void;
};
