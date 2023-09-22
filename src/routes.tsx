import Main from './layouts/pages'
import ThreeHome from './layouts/pages/manual'


export const getMenuRoutes = () =>[
  {name: '메인', key: 'HOM', route: '/home', component: <Main/>},
  {name: '메인', key: 'MAN.STR', route: '/start', component: <ThreeHome/>}
]