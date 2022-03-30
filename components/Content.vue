<template>
  <v-card class="content elevation-0">
    <v-card-text>
      <Search
        v-model="search"
        v-on:searching="searchByQuery"
        :count="filteredElements.length"
      />

      <v-layout row v-if="!loaded">
        <Loader />
      </v-layout>

      <v-list class="content__list mt-4 mb-0 pb-0" v-else>
        <v-virtual-scroll
          v-if="filteredElements.length"
          height="500"
          item-height="156"
          :items="filteredElements"
        >
          <template v-slot:default="{ item }">
            <div :key="item.email" class="mb-8">
              <User :user="item" v-on:user:click="toggleSelected" />
            </div>
          </template>
        </v-virtual-scroll>
        <div v-else>
          <NoResult :description="computedNoResultDescription" />
        </div>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
import Search from "/components/Search";
import User from "/components/User";
import Loader from "/components/Loader";
import NoResult from "/components/NoResult";

import axios from "axios";

export default {
  name: "Content",
  components: {
    Search,
    User,
    NoResult,
    Loader,
  },
  data() {
    return {
      users: [],
      usersCleanData: [],
      loaded: false,
      search: "",
    };
  },
  mounted() {
    this.getUsers();
    if (this.$route.params.searchQuery) {
      this.search = this.$route.params.searchQuery;
    }
  },
  methods: {
    async getUsers() {
      try {
        const result = await axios.get(
          "https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json"
        );
        this.loaded = true;
        this.users = result.data;
        this.users[1].avatar = "";
        this.users.forEach((user) => {
          user.selected = false;
        });

        this.usersCleanData = Object.assign([], this.users);
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    highlight(query, string) {
      if (!query) {
        return string;
      }

      return string.replace(new RegExp(query, "gi"), (match) => {
        return `<span class="highlightText">${match}</span>`;
      });
    },

    searchByQuery($event) {
      this.search = $event;
    },

    toggleSelected(user) {
      let itemIndex = this.filteredElements.indexOf(user);
      user.selected = !user.selected;
      this.filteredElements.splice(itemIndex, 1, user);
    },
  },

  computed: {
    computedNoResultDescription() {
      return `Sorry :( <br /> Your search <b>${this.search}</b> did not match any user info. <br />Please try again!`;
    },

    filteredElements() {
      if (this.search) {
        this.users = JSON.parse(JSON.stringify(this.usersCleanData));

        return this.users.reduce((acc, curr) => {
          const inSensitiveSearch = this.search.toLowerCase();
          const subStrContain =
            curr.name.toLowerCase().includes(inSensitiveSearch) > 0 ||
            curr.email.toLowerCase().includes(inSensitiveSearch) > 0 ||
            curr.title.toLowerCase().includes(inSensitiveSearch) > 0 ||
            curr.city.toLowerCase().includes(inSensitiveSearch) > 0 ||
            curr.address.toLowerCase().includes(inSensitiveSearch) > 0
              ? curr
              : "";

          if (subStrContain) {
            curr.name = this.highlight(this.search, curr.name);
            curr.email = this.highlight(this.search, curr.email);
            curr.title = this.highlight(this.search, curr.title);
            curr.city = this.highlight(this.search, curr.city);
            curr.address = this.highlight(this.search, curr.address);
            acc.push({
              ...curr,
            });
          }

          return acc;
        }, []);
      } else return this.usersCleanData;
    },
  },
};
</script>
<style lang="scss" scopped>
.content {
  margin-top: 82px;
  width: 580px; //564px;
  height: 642px;
  background: #ffffff;
  border-radius: 0;
}

.highlightText {
  background: yellow;
}

.v-virtual-scroll {
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    cursor: pointer !important;
  }
  &::-webkit-scrollbar-track {
    border-right: 1px solid #d6d6d6;
    margin-right: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4d4d4d;
    height: 40px;
    border-radius: 2px;
  }
}
</style>