---
to: <%= abs_path %>/container.tsx
unless_exists: true
---

// import layer
import { VFC } from 'react';

import { Presenter, PresenterProps } from './presenter';

// type layer
export type ContainerProps = PresenterProps;

// container
export const Container: VFC<ContainerProps> = ({ ...props }) => {
  return <Presenter {...props} />;
};

