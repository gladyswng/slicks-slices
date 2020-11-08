import { MdStore as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'storeSettings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name of the Store',
    },
    {
      name: 'slicemaster',
      title: 'SliceMasters Currently Slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }], // person comes from name
    },
    {
      name: 'hotSlices',
      title: 'Hot Slices available in the pizza',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
