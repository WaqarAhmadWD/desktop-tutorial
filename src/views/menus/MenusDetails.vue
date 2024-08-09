<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">{{ $t("menus_list")}}</h4>
        <ol
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
        >
          <li class="text-sm">
            <a
              class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              href="/yum_b/admin/dishes"
            >
            {{ $t("menus")}}
              <svg
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </li>
          <li
            aria-current="page"
            class="truncate text-sm font-medium text-primary hover:text-primary-500"
          >
          {{ $t("menus_list")}}
          </li>
        </ol>
      </div>
      <div class="grid grid-cols-1">
        <div class="rounded-lg border border-default-200">
          <div class="overflow-hidden px-6 py-4">
            <div
              class="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap"
            >
              <h2 class="text-xl font-semibold text-default-800">
                {{ $t("menus_list")}}
              </h2>
              <div class="flex flex-wrap items-center gap-4">
                <div class="hs-dropdown relative inline-flex">
                  <button
                    type="button"
                    class="hs-dropdown-toggle flex items-center gap-2 rounded-md bg-default-100 px-4 py-3 text-sm font-medium text-default-700 transition-all xl:px-5"
                  >
                    Sort : Ascending
                    <svg
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
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div
                    class="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                  >
                    <ul class="flex flex-col gap-1">
                      <li>
                        <span
                          class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 bg-default-100 text-default-700"
                          >Ascending</span
                        >
                      </li>
                      <li>
                        <span
                          class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 text-default-600"
                          >Descending</span
                        >
                      </li>
                      <li>
                        <span
                          class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 text-default-600"
                          >Trending</span
                        >
                      </li>
                      <li>
                        <span
                          class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 text-default-600"
                          >Recent</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <RouterLink
                  class="inline-flex rounded-md bg-primary px-6 py-2.5 text-sm bg-orange-500 text-white hover:bg-primary-500"
                  to="/menu-add"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="me-2 inline-flex align-middle"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  {{ $t("add_menu")}}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="relative overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-default-200">
                  <thead class="bg-default-100">
                    <tr class="text-start">
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                      {{ $t("menu_name")}}
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                      {{ $t("category")}}
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                      {{ $t("price")}}
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                        Status
                      </th>
                      <th
                        class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                      >
                      {{ $t("actions")}}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-default-200">
                    <tr v-for="singleMenu in menu" :key="singleMenu._id">
                      <td
                        class="whitespace-nowrap flex items-center px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <div class="h-12 w-12 shrink mr-4">
                          <img
                            :src="singleMenu.imageUrl"
                            height="48"
                            width="48"
                            alt="Italian Pizza"
                            class="h-full max-w-full"
                          />
                        </div>
                        <p
                          class="text-base text-default-500 transition-all hover:text-primary"
                        >
                          {{ singleMenu.name }}
                        </p>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        {{ singleMenu.category }}
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        {{ singleMenu.price }}
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium"
                          :class="{
                            'bg-green-500/10 text-green-500':
                              singleMenu.availability,
                            'bg-red-500/10 text-red-500':
                              !singleMenu.availability,
                          }"
                          >{{
                            singleMenu.availability
                              ? "available"
                              : "not available"
                          }}</span
                        >
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex gap-3">
                          <RouterLink
                            v-if="singleMenu?._id"
                            :to="{
                              name: 'editMenu',
                              params: { id: singleMenu._id },
                            }"
                          >
                            <svg
                              @click=""
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="cursor-pointer transition-colors hover:text-blue-700 text-blue-400"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                              ></path>
                              <path d="m15 5 4 4"></path>
                            </svg>
                          </RouterLink>
                          <RouterLink
                            v-if="singleMenu?._id"
                            :to="{
                              name: 'singleMenu',
                              params: { id: singleMenu._id },
                            }"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="cursor-pointer transition-colors hover:text-[#bd7b3c] text-[#f6821d]"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                              ></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </RouterLink>
                          <svg
                            v-if="!loading"
                            @click="deleteData(singleMenu._id)"
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="cursor-pointer transition-colors hover:text-red-500 text-red-700"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 6h18"></path>
                            <path
                              d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                            ></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                          <div role="status" v-if="loading">
                            <svg
                              aria-hidden="true"
                              class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRestaurantAdminStore } from "@/stores/restaurantAdmin";
import { RouterLink } from "vue-router";
const restStore = useRestaurantAdminStore();
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { fetchMenu, deleteMenu } = restStore;
const { menu, loading } = storeToRefs(restStore);
onMounted(async () => {
  await fetchMenu();
  console.log(menu.value);
});
const deleteData = async (id) => {
  await deleteMenu(id);
  await fetchMenu();
};
</script>
<style lang="scss" scoped></style>
