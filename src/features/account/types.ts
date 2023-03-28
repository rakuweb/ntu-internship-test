export type AccountSlice = {
  username: string;
  email: string;
  prevPath: string;
  grade: string;
  studentId: string;

  setAccount: (props: {
    username: string;
    email: string;
    grade: string;
    studentId: string;
  }) => void;
  signout: () => void;
  setPrevPath: (props: string) => void;
};
