export type AccountSlice = {
  username: string;
  email: string;
  prevPath: string;

  setAccount: (props: { username: string; email: string }) => void;
  signout: () => void;
  setPrevPath: (props: string) => void;
};
