const { template } = require("babel-core");

<template>
  <div class="home">
    <button @click="testClick()">click</button>
  </div>
</template>

<script>
import store from "vuex";
import { getStore,setStore } from "@/util";
export default {
  name: "HelloWorld",
  data() {
    return {
      state: ""
    };
  },
  methods: {
    testClick() {
    }
  }
};
</script>
