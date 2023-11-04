export type FormProgress = {
  progress: number;
};

export type FormProgressSlice = {
  progress: number;
  proceedProgress: () => void;
  backProgress: () => void;
};
