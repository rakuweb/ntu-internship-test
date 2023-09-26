import { create } from 'zustand';

import { createContactFormSlice } from './slice';
import { ContactFormSlice } from './types';

export const useContactFormStore = create<ContactFormSlice>((...a) => ({
  ...createContactFormSlice(...a),
}));
