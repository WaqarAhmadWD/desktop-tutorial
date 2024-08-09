<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">{{ $t("table_list") }}</h4>

        <ol
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
        >
          <li class="text-sm">
            <a
              class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              >{{ $t("tables") }}<svg
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
          {{ $t("table_list") }}
          </li>
        </ol>
      </div>
      <div class="grid grid-cols-1">
        <div class="rounded-lg border border-default-200">
          <div class="overflow-hidden px-6 py-4">
            <div
              class="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap"
            >
              <h2 class="text-xl font-semibold text-default-800">{{ $t("table_list") }}</h2>
              <div class="flex flex-wrap items-center gap-4">
                <RouterLink
                  class="inline-flex rounded-md bg-primary px-6 py-2.5 text-sm bg-orange-500 text-white hover:bg-primary-500"
                  to="/add-table"
                  ><svg
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
                    <path d="M12 5v14"></path></svg
                  >{{ $t("add table") }}</RouterLink
                >
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
                        Qr Code
                      </th>
                      <th
                        class="whitespace-nowrap px-0 py-3 text-start text-sm font-medium text-default-800"
                      >
                      {{ $t("table_number") }}
                      </th>

                      <th
                        class="whitespace-nowrap px-0 py-3 text-start text-sm font-medium text-default-800"
                      >
                      {{ $t("capacity") }}
                      </th>
                      <!-- <th class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800">Created By
                    </th> -->
                      <th
                        class="whitespace-nowrap px-9 py-3 text-start text-sm font-medium text-default-800"
                      >
                        Status
                      </th>
                      <th
                        class="whitespace-nowrap px-9 py-3 text-start text-sm font-medium text-default-800"
                      >
                      {{ $t("actions") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-default-200">
                    <tr v-for="(data, index) in table" :key="index">
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                      >
                        <a
                          class="flex items-center gap-3"
                          href="/yum_b/admin/dishes/1008"
                        >
                          <div class="h-12 w-12 shrink">
                            <img
                              :src="data.qrCode"
                              height="48"
                              width="48"
                              alt="Italian Pizza"
                              class="h-full max-w-full"
                            />
                          </div>
                          <p
                            class="text-base text-default-500 transition-all hover:text-primary"
                          ></p>
                        </a>
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        {{ data.tableNumber }}
                      </td>
                      <td
                        class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                      >
                        {{ data.capacity }}
                      </td>

                      <td class="px-6 py-4">
                        <span
                          class="rounded-md px-3 py-1 text-xs font-medium"
                          :class="{
                            'bg-green-500/10 text-green-500':
                              data.status == 'available',
                            'bg-yellow-500/10 text-yellow-500':
                              data.status == 'reserved',
                            'bg-red-500/10 text-red-500':
                              data.status == 'occupied',
                          }"
                          >{{ data.status }}</span
                        >
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex gap-3">
                          <RouterLink
                            v-if="data?._id"
                            :to="{
                              name: 'editTable',
                              params: { id: data._id },
                            }"
                          >
                            <svg
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
                          <svg
                            @click="deleteData(data._id, index)"
                            v-if="!loading || index != indexState"
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
                          <div
                            role="status"
                            v-if="loading && index == indexState"
                          >
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
import { onMounted, ref } from "vue";
const { fetchTable, deleteTable } = restStore;
const { table, loading } = storeToRefs(restStore);
const loadingState = ref(null);
onMounted(async () => {
  await fetchTable();
  console.log(table.value);
});
const deleteData = async (id, index) => {
  loadingState.value = index;
  await deleteTable(id);
  await fetchTable();
};
</script>

<style lang="scss" scoped></style>
