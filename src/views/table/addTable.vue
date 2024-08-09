<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">{{ $t("add table") }}</h4>
        <ol aria-label="Breadcrumb" class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex">
          <li class="text-sm">
            <a class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              href="/yum_b/admin/customers">{{ $t("tables") }}<svg stroke="currentColor" fill="none" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m9 18 6-6-6-6"></path>
              </svg></a>
          </li>
          <li aria-current="page" class="truncate text-sm font-medium text-[#f58220]">
            {{ $t("add table") }}
          </li>
        </ol>
      </div>
    <div class="xl:col-span-2 m-4">
      <div class="rounded-lg border border-default-200 p-6">
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="space-y-6">
            <div class="relative max-w-full">
              <label
                class="mb-2 block text-sm font-medium text-default-900"
                for="productname"
                >{{ $t("table_number") }}</label
              >
              <div class="relative max-w-full">
                <input
                  type="text"
                  :placeholder="$t('enter_table_number')"
                  name="productname"
                  id="productname"
                  class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                  v-model="singleTableLocal.tableNumber"
                />
              </div>
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900"
                >{{ $t("table_status") }}</label
              >
              <div class="relative">
                <select
                  id="countries"
                  class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                  v-model="singleTableLocal.status"
                >
                  <option selected>{{ $t("available") }}</option>
                  <option>{{ $t("reserved") }}</option>
                  <option>{{ $t("occupied") }}</option>
                </select>
              </div>
            </div>
            <div class="grid gap-6 lg:grid-cols-2"></div>
            <div class="relative max-w-full">
              <label
                class="mb-2 block text-sm font-medium text-default-900"
                for="quantity"
                >{{ $t("table_capacity") }}</label
              >
              <div class="relative max-w-full">
                <input
                  type="number"
                  placeholder="Table Capacity"
                  name="capacity"
                  id="capacity"
                  class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                  v-model="singleTableLocal.capacity"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="flex flex-wrap items-center justify-end gap-4">
            <div class="flex flex-wrap items-center gap-4">
              <button
                class="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 bg-[#f58220] hover:text-white hover:bg-red-500"
                @click="submit"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                  ></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
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
                {{ $t("save") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const singleTableLocal = ref({
  tableNumber: "",
  status: "Available",
  capacity: 0,
});
import { useRestaurantAdminStore } from "@/stores/restaurantAdmin";
import { storeToRefs } from "pinia";
const restStore = useRestaurantAdminStore();
const { createTable } = restStore;
const { loading } = storeToRefs(restStore);
const submit = async () => {
  await createTable(singleTableLocal.value);
};
</script>
