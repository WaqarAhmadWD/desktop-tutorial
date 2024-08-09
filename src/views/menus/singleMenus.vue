<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">Fast Foods</h4>
        <ol
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
        >
          <li class="text-sm">
            <a
              class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              href="/yum_b/admin/dishes"
              >Dishes<svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6"></path></svg
            ></a>
          </li>
          <li
            aria-current="page"
            class="truncate text-sm font-medium text-primary hover:text-primary-500"
          >
            {{ singleMenuLocal.name }}
          </li>
        </ol>
      </div>
      <div class="grid gap-6 lg:grid-cols-2">
        <div class="rounded-lg border border-default-200 p-6">
          <div class="grid grid-cols-1">
            <div>
              <div
                class="swiper swiper-initialized swiper-horizontal cart-swiper swiper-backface-hidden"
              >
                <div
                  class="swiper-wrapper"
                  style="transform: translate3d(0px, 0px, 0px)"
                >
                  <div
                    class="swiper-slide swiper-slide-active"
                    data-swiper-slide-index="0"
                  >
                    <img
                      width="500"
                      height="430"
                      alt="food-image"
                      :src="singleMenuLocal.imageUrl"
                      class="mx-auto h-full max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg border border-default-200 p-6">
          <div>
            <div
              class="mb-1 flex flex-wrap items-end justify-between font-medium text-default-800"
            >
              <h4 class="text-4xl">{{ singleMenuLocal.name }}</h4>
              <h3 class="text-3xl">${{ singleMenuLocal.price }}</h3>
            </div>
            <h5 class="mb-4 text-lg font-medium text-default-600">
              Category: {{ singleMenuLocal.category }}
            </h5>

            <p class="mb-4 text-sm text-default-500">
              {{ singleMenuLocal.description }}
            </p>
            <div class="mb-5 flex gap-2">
              <div
                class="flex items-center rounded-full border border-default-200 px-3 py-1.5"
              >
                <span class="text-xs">{{
                  singleMenuLocal.availability ? "available" : "unavailable"
                }}</span>
              </div>
            </div>
            <div class="mb-8 flex items-center gap-3">
              <h4 class="text-sm text-default-700">Size :</h4>
              <div>
                <input
                  type="radio"
                  name="size-options"
                  id="S0"
                  class="peer hidden"
                  value="S"
                  checked=""
                /><label
                  for="S0"
                  class="flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-full bg-orange-400 text-center text-sm peer-checked:bg-primary peer-checked:text-white"
                  >S</label
                >
              </div>
              <div>
                <input
                  type="radio"
                  name="size-options"
                  id="M1"
                  class="peer hidden"
                  value="M"
                  checked=""
                /><label
                  for="M1"
                  class="flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-full bg-orange-400 text-center text-sm peer-checked:bg-primary peer-checked:text-white"
                  >M</label
                >
              </div>
              <div>
                <input
                  type="radio"
                  name="size-options"
                  id="L2"
                  class="peer hidden"
                  value="L"
                  checked=""
                /><label
                  for="L2"
                  class="flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-full bg-orange-400 text-center text-sm peer-checked:bg-primary peer-checked:text-white"
                  >L</label
                >
              </div>
            </div>
            <div class="mb-6 flex flex-col">
              <h4 class="mb-4 text-lg font-medium text-default-700">
                Nutrition Facts
                <span class="text-sm text-default-400">(per serving)</span>
              </h4>
              <div class="rounded-lg border border-default-200 p-3 mb-4">
                <div class="grid grid-cols-4 justify-center">
                  <div class="text-center">
                    <h4 class="mb-1 text-base font-medium text-default-700">
                      {{ singleMenuLocal.nutritionalInfo.calories }}
                    </h4>
                    <h4 class="text-base text-default-700">Calories</h4>
                  </div>
                  <div class="text-center">
                    <h4 class="mb-1 text-base font-medium text-default-700">
                      {{ singleMenuLocal.nutritionalInfo.fat }} mg
                    </h4>
                    <h4 class="text-base text-default-700">Fat</h4>
                  </div>
                  <div class="text-center">
                    <h4 class="mb-1 text-base font-medium text-default-700">
                      {{ singleMenuLocal.nutritionalInfo.carbs }} mg
                    </h4>
                    <h4 class="text-base text-default-700">Carbs</h4>
                  </div>
                  <div class="text-center">
                    <h4 class="mb-1 text-base font-medium text-default-700">
                      {{ singleMenuLocal.nutritionalInfo.protein }} mg
                    </h4>
                    <h4 class="text-base text-default-700">Protein</h4>
                  </div>
                </div>
              </div>
              <RouterLink
                to="/menu-list"
                class="self-end inline-flex rounded-md bg-primary px-6 py-2.5 text-sm bg-orange-500 text-white hover:bg-primary-500"
                >Menu List
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
const props = defineProps({
  id: String, // Declare the 'id' prop
});
const singleMenuLocal = ref({
  name: "",
  description: "",
  price: 0,
  nutritionalInfo: {
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  },
  imageUrl: "",
  availability: false,
  category: "",
});
import { useRestaurantAdminStore } from "@/stores/restaurantAdmin";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
const restStore = useRestaurantAdminStore();
const { fetchSingleMenu } = restStore;
const { singleMenu, loading } = storeToRefs(restStore);
const options = ["available", "reserved", "occupied"];
onMounted(async () => {
  await fetchSingleMenu(props.id);
  singleMenuLocal.value = await singleMenu.value;
  console.log(singleMenuLocal.value);
});
</script>

<style lang="scss" scoped></style>
