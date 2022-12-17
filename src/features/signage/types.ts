import { UploadFileEntity } from 'types/gql/graphql';

export type Video = {
  id: string;
  url: string;
};

export type SignageSliceData = {
  videos: Video[];
};

export type SignageSlice = {
  setVideos: (entities: UploadFileEntity[]) => void;
} & SignageSliceData;
