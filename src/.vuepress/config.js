module.exports = {
  title: "راهنمای وب سرویس های شبکه پرداخت پِی",
  themeConfig: {
    logo: '/assets/img/logo.svg',
    sidebar: [
      {
        title: "gateway",
        path: "/docs/gateway/send",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: "send",
            path:"/docs/gateway/send",
          },
          {
            title: "redirect",
            path: "/docs/gateway/redirect",
          },
          {
            title: "table warning",
            path: "/docs/gateway/table-warning",
          },
          {
            title: "callback",
            path: "/docs/gateway/callback",
          },
          {
            title: "verify",
            path: "/docs/gateway/verify",
          },
          {
            title: "test",
            path: "/docs/gateway/test",
          },
          {
            title: "sample code",
            path: "/docs/gateway/sample-code",
          }
        ]
      },
      {
        title: "gateway-share",
        path: "/docs/gateway-share/send",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: "send",
            path:"/docs/gateway-share/send",
          },
          {
            title: "redirect",
            path: "/docs/gateway-share/redirect",
          },
          {
            title: "table warning",
            path: "/docs/gateway-share/table-warning",
          },
          {
            title: "callback",
            path: "/docs/gateway-share/callback",
          },
          {
            title: "verify",
            path: "/docs/gateway-share/verify",
          },
          {
            title: "test",
            path: "/docs/gateway-share/test",
          },
          {
            title: "sample code",
            path: "/docs/gateway-share/sample-code",
          }
        ]
      }
      ,
      {
        title: "cashout",
        path: "/docs/cashout/authenticate",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: "authenticate",
            path:"/docs/cashout/authenticate",
          },
          {
            title: "Cashout",
            path:"/docs/cashout/api-cashout",
          },
          {
            title: "transaction",
            path:"/docs/cashout/transaction",
          },
          {
            title: "wallet",
            path:"/docs/cashout/wallet",
          },
        ]
      }
    ]
  },
  plugins: [
    'vuepress-plugin-element-tabs'
  ]
};
