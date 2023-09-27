import Main from './layouts/pages'
import ThreeHome from './layouts/pages/manual'
import Line from './layouts/pages/line'


export const getMenuRoutes = () =>[
  {name: '메인', key: 'HOM', route: '/home', component: <Main/>},
  {name: '시작', key: 'MAN.STR', route: '/start', component: <ThreeHome/>},
  {name: '라인', key: 'MAN.LIN', route: '/line', component: <Line/>}
]