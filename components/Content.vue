<template>
  <v-col cols="12" sm="8" md="6">
    <v-card class="content elevation-0 mb-0 pb-0">
      <v-card-text class="pb-0">
        <Search v-on:searching="searchByQuery" />
        <v-layout row v-if="!loaded">
          <v-layout row class="mt-10 align-center">
            <v-col cols="12" class="text-center">
              <v-progress-circular
                indeterminate
                color="accent"
                size="80"
                width="6"
              ></v-progress-circular>
            </v-col>
          </v-layout>
        </v-layout>

        <v-list class="content__list mt-4 mb-0 pb-0" v-else>
          <v-virtual-scroll :items="users" height="524" item-height="156">
            <template v-slot:default="{ item }">
              <div :key="item.email" class="mb-8">
                <User :user="item" v-on:user:click="toggleSelected" />
              </div>
            </template>
          </v-virtual-scroll>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import Search from "/components/Search";
import User from "/components/User";

import axios from "axios";

export default {
  name: "Content",
  components: {
    Search,
    User,
  },
  data() {
    return {
      users: [],
      loaded: false,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const result = await axios.get(
          "https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json"
        );
        console.log(result.data);
        this.loaded = true;
        this.users = result.data;
        this.users.forEach((user) => {
          user.selected = false;
        });

        return result.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    searchByQuery($event) {
      console.log($event);
    },

    toggleSelected(user) {
      console.log("selected user", user);
      let itemIndex = this.users.indexOf(user);
      user.selected = !user.selected;
      this.users.splice(itemIndex, 1, user);
      this.users = JSON.parse(JSON.stringify(this.users));
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