<template>
  <Header />
  <Notification class="z-100" v-if="toggleNotif" />
  <Sidebar @click="langHandleEvent" />
  <RouterView @click="langHandleEvent" />
</template>

<script setup>
import Notification from "@/components/notificaitonToggle.vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "./header.vue";
import Sidebar from "./sidebar.vue";
import { useGeneralStoreStore } from "@/stores/generalStore";
import { useRestaurantAdminStore } from "@/stores/restaurantAdmin";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useGeneralStoreStore();
const { toggleNotif } = storeToRefs(store);
const { toggleNotifFunClose, toggleCloseLang } = store;

const langHandleEvent = async() => {
  await toggleCloseLang()
  await toggleNotifFunClose()
}

</script>

<style lang="scss" scoped></style>
