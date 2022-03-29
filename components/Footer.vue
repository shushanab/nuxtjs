<template>
  <v-footer :absolute="!fixed" app class="footer">
    <v-tooltip bottom v-for="icon of footerApps" :key="icon.title">
      <template v-slot:activator="{ on, attrs }">
        <img
          v-bind="attrs"
          v-on="on"
          class="ml-1 mr-6 footer__apps_icon"
          :alt="icon.title"
          :src="'/' + icon.title + '.svg'"
          @click="footerAppClick(icon.title)"
        />
      </template>
      <span>{{ icon.title }}</span>
    </v-tooltip>

    <v-spacer></v-spacer>

    <span class="footer__time"> {{ currentTime }}</span>

    <v-tooltip bottom v-for="icon of footerStatusBar" :key="icon.title">
      <template v-slot:activator="{ on, attrs }">
        <img
          v-bind="attrs"
          v-on="on"
          class="ml-6 title_bar__img"
          :alt="icon.title"
          :src="'/' + icon.title + '.svg'"
          @click="footerAppClick(icon.title)"
        />
      </template>
      <span>{{ icon.title }}</span>
    </v-tooltip>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      fixed: false,
      currentTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      footerApps: [
        {
          title: "chrome",
        },
        {
          title: "gmail",
        },
        {
          title: "search",
        },
        {
          title: "drive",
        },
        {
          title: "youtube",
        },
        {
          title: "apps",
        },
      ],
      footerStatusBar: [
        {
          title: "wifi",
        },
        { title: "battery" },
        { title: "avatar" },
      ],
    };
  },

  methods: {
    footerAppClick(selectedButton) {
      console.log(`TODO implement ${selectedButton.toUpperCase()} function`);
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: #262626;
  height: 64px;
}

.footer__apps_icon {
  cursor: pointer;
}

.footer__time {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: right;

  color: #ffffff;
}
</style>