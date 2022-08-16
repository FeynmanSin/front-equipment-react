import IndexPage from '../pages/IndexPage';
import SynPage from '../pages/SynPage';
import HomePage from '../pages/HomePage';
import IndexChildrenRouters from '../pages/IndexPage/routers/router';

const routes = [
  {
    path: '/',
    component: HomePage,

  },
  {
    path: 'IndexPage',
    component: IndexPage,
    // children: IndexChildrenRouters,
  },
  {
    path: 'SynPage',
    component: SynPage
  }
]

export default routes;