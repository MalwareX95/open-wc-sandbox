import {Router} from '@vaadin/router'
export const homePage = 'home-page'

const router = new Router(document.getElementById('outlet'))

router.setRoutes([
    {
        path: '/', 
        component: homePage,
        action: () => {
            import('./home')
        }
    }
])