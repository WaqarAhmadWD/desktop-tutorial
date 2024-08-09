import { ref } from "vue";
import { defineStore } from "pinia";

export const useGeneralStoreStore = defineStore("generalStore", () => {
  const toggleNotif = ref(false);
  const toggleMenuMobile = ref(false);
  const toggleNotifFun = () => {
    toggleNotif.value = !toggleNotif.value;
  };
  const toggleNotifFunClose = () => {
    toggleNotif.value = false;
  };
  const toggleMenuMobileFun = () => {
    toggleMenuMobile.value = !toggleMenuMobile.value;
  };
  return {
    toggleNotif,
    toggleMenuMobile,
    toggleNotifFun,
    toggleNotifFunClose,
    toggleMenuMobileFun,
  };
});
