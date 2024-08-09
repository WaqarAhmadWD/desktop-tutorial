import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';

export const useGeneralStoreStore = defineStore('generalStore', () => {
  const { locale } = useI18n({ useScope: 'global' });

  const toggleNotif = ref(false);
  const toggleMenuMobile = ref(false);
  const langList = ref([
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' }
  ]);

  const langToggle = ref(false);

  const changeLang = (payload) => {
    locale.value = payload;
  };

  const toggleNotifFun = () => {
    toggleNotif.value = !toggleNotif.value;
  };

  const toggleNotifFunClose = () => {
    toggleNotif.value = false;
  };

  const toggleOpenLang = () => {
    langToggle.value = !langToggle.value;
  };

  const toggleCloseLang = () => {
    langToggle.value = false;
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
    langList,
    langToggle,
    toggleOpenLang,
    toggleCloseLang,
    changeLang
  };
});
