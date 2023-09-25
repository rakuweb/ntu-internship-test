import { create } from 'zustand';

import { ContactFormSlice } from './types';
import { createContactFormSlice } from './slice';

export const useContactFormStore = create<ContactFormSlice>((...a) => ({
  ...createContactFormSlice(...a),
}));
