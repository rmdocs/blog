<template></template>
<script>
export default {
  name: "mention-sucess",
  mounted() {
      this.$notification.open({
        message: "如果你看到此消息，就表明本站静态资源已经加载成功！",
        icon: <a-icon type="check-circle" style="color: #7fc836" />,
        placement: "bottomLeft",
        onClose: close,
        duration: 3,
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
      });
  }
};

</script>
