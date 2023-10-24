import {lazy, Suspense } from 'react';
import Loading from 'components/Loading';

/*
import Home from './pages/home/home';
import Energy from './pages/energy/energy';

import Pve from './pages/pve/pve';

import Battle from './pages/battle/battle';

import Card from './pages/legend/legend';
import BuyCard from './pages/buyCard/index';
import RiseStar from './pages/riseStar/riseStar';

import Profile from './pages/profile/profile';
import ProfileEdit from './pages/profileEdit/profileEdit';
import Settings from './pages/settings/settings';
*/
const NotFountPage = lazy(() => import('./pages/404/index'));
const Report = lazy(() => import('./pages/report/report'));


const Home = lazy(() => import('./pages/home/home'));
const Energy = lazy(() => import('./pages/energy/energy'));

const Pve = lazy(() => import('./pages/pve/pve'));

const Battle = lazy(() => import('./pages/battle/battle'));

const Card = lazy(() => import('./pages/legend/legend'));
const BuyCard = lazy(() => import('./pages/buyCard/index'));
const RiseStar = lazy(() => import('./pages/riseStar/riseStar')); 

const Profile = lazy(() => import('./pages/profile/profile'));
const About = lazy(() => import('./pages/about/about'));

const ProfileEdit = lazy(() => import('./pages/profileEdit/profileEdit'));
const Settings = lazy(() => import('./pages/settings/settings'));
const TaskList = lazy(() => import('./pages/taskList/taskList'));
const Share = lazy(() => import('./pages/share/index'));


const routes = [
  {
    path: '/', //未登录
    element: <Home />,
  },
  {
    path: '/home', //未登录
    element: <Home />,
  },
  {
    path: '/home/energy', 
    element: <Energy />,
  },
  {
    path: '/pve', //未登录
    element: <Pve />,
  },
  {
    path: '/battle', //未登录
    element: <Battle />,
  },
  {
    path: '/card', //未登录
    element: <Card />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/profile/edit',
    element: <ProfileEdit />,
  },
  {
    path: '/profile/settings',
    element: <Settings />,
  },
  {
    path: '/profile/settings/report',
    element: <Report />,
  },
  {
    path: '/card/buycard',
    element: <BuyCard />,
  },
  {
    path: '/card/risestar',
    element: <RiseStar />,
  },
  {
    path: '/tasks',
    element: <TaskList />,
  },
  {
    path: '/share',
    element: <Share />,
  },
  {
    path: '/*',
    element: <NotFountPage />,
  },
];

const reactRoutes = routes.map((item) => {
  if (item.element) {
    return {
      path: item.path,
      element: <Suspense fallback={<Loading />}>{item.element}</Suspense>,
    };
  } else {
    return item;
  }
});

export default reactRoutes;
