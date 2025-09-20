
const routes = [
  {
    path: '/',
    name: 'homePage',
    meta: { middleware: 'AuthAdmin' },
    component: () =>
    import("../../views/home/index.vue"),
  },
]

export default routes;
