import TestPage from '../modules/TestPage/index';
import TestPage2 from '../modules/TestPage2/index';

const routes = [
  {
    path: 'test',
    label: 'nav1',
    component: TestPage,
  },
  {
    path: 'test2',
    label: 'nav2',
    component: TestPage2,
  },
]

export default routes;