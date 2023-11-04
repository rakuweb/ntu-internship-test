import { UploadFileEntity } from 'types/gql/graphql';
import { SignageSliceData, Video } from './types';

export const parseToVideos = (
  entities: UploadFileEntity[]
): SignageSliceData => {
  const videos = entities.map((entity) => {
    const uploadFile = entity?.attributes;
    const result: Video = {
      id: entity.id,
      url: uploadFile?.url,
    };
    return result;
  });
  const result = { videos };
  return result;
};
