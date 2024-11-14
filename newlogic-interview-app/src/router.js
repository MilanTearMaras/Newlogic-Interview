import { createMemoryHistory, createRouter } from 'vue-router'

import OrdersView from './views/OrdersView.vue'
import InvoiceView from './views/InvoicesView.vue'
import AccountView from './views/AccountSettingsView.vue'

const routes = [
    { path: '/', component: OrdersView, name: 'OrdersView' },
    { path: '/invoices', component: InvoiceView, name: 'InvoiceView' },
    { path: '/settings', component: AccountView, name: 'AccountSettingsView' },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    linkActiveClass: 'active',
})

export default router