<template>
  <v-col cols="12" sm="8" md="6">
    <v-card class="content elevation-0">
      <v-card-text>
        <Search v-on:searching="searchByQuery" />
        <v-list class="content__list mt-4">
          <v-virtual-scroll :items="users" height="408" item-height="156">
            <template v-slot:default="{ item }">
              <div :key="item.email" class="mb-8">
                <User :user="item" />
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
        this.users = result.data;

        return result.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    searchByQuery($event) {
      console.log($event);
    },
  },
};
</script>
<style lang="scss" scopped>
.content {
  margin-top: 82px;
  width: 564px;
  height: 642px;
  background: #ffffff;
  border-radius: 0;
}

.v-virtual-scroll {
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    border-right: 1px solid #d6d6d6;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4d4d4d;
    height: 40px;
    border-radius: 2px;
  }
}
</style>