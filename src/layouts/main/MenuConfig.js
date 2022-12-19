// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};



const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Targets',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
  {
    title: 'Accomplishments',
    path: '#',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
  
    children: [
      {
        subheader: 'Division Accomplishment',
        items: [
          { title: 'Programs', path: '#' },
          { title: 'Contact us', path: '#' },
        ],
      },
    ],
  },

 

  {
    title: 'GAD',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
  {
    title: 'Gallery',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
];

export default menuConfig;
