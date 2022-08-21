<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem('20220821');
    if (readkey == false || readkey == null) {
      localStorage.setItem('20220821', 'true');
      this.$notification.open({
        message: "Recode博客更新通知",
        description: "Hello，本站是一个新站点！欢迎大家访问！教程正在努力码字补齐中，敬请期待！",
        icon: <a-icon type="exclamation-circle" style="color: #1890ff" />,
        duration: 0,
        placement: "bottomRight",
        // btn: h => {
        //   return h(
        //     "a-button",
        //     {
        //       props: {
        //         type: "primary",
        //         size: "small"
        //       },
        //       on: {
        //         click: () => window.location.href="/guide/changelog.html"
        //       }
        //     },
        //     "查看更新"
        //   );
        // },
        key: "20220821"
      });
    }
  }
};

</script>
