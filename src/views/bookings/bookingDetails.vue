<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">Bookings Details</h4>
        <ol
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
        >
          <li class="text-sm">
            <a
              class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
            >
              Bookings
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
            Bookings List
          </li>
        </ol>
      </div>
      <div class="grid gap-6">
        <div class="xl:col-span-9">
          <div class="space-y-6">
            <div class="grid grid-cols-1">
              <div class="rounded-lg border border-default-200">
                <div class="overflow-hidden p-6">
                  <div
                    class="flex flex-wrap items-center gap-4 sm:justify-between lg:flex-nowrap"
                  >
                    <h2 class="text-xl font-semibold text-default-800">
                      Bookings Details
                    </h2>
                    <div class="flex flex-wrap items-center justify-end gap-2">
                      <div class="hs-dropdown relative inline-flex">
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 outline-none focus:border-orange-500 block w-full p-2.5"
                        >
                          <option value="assending">Ascending</option>
                          <option value="descending">Descending</option>
                        </select>
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
                          </ul>
                        </div>
                      </div>
                      <div class="hs-dropdown relative inline-flex">
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        >
                          <option value="descending">All</option>
                          <option value="descending">Paid</option>
                          <option value="descending">Cancelled</option>
                          <option value="descending">Refunded</option>
                        </select>
                        <div
                          class="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
                        >
                          <ul class="flex flex-col gap-1">
                            <li>
                              <span
                                class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 bg-default-100 text-default-700"
                                >All</span
                              >
                            </li>
                            <li>
                              <span
                                class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 text-default-600"
                                >Paid</span
                              >
                            </li>
                            <li>
                              <span
                                class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 text-default-600"
                                >Cancelled</span
                              >
                            </li>
                            <li>
                              <span
                                class="flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700 text-default-600"
                                >Refunded</span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative overflow-x-auto">
                  <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden">
                      <table class="w-full divide-y divide-default-200">
                        <thead class="bg-default-100">
                          <tr class="text-start">
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Booking ID
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Customer Name
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Contact
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Date
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Time
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Booking
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Specific Requests
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Status
                            </th>
                            <th
                              class="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-default-200">
                          <tr
                            v-for="(singleBooking, index) in Booking"
                            :key="index"
                          >
                            <td
                              class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                            >
                              <a href="/yum_b/admin/orders/c0e4f7">{{
                                singleBooking.bookingId
                              }}</a>
                            </td>
                            <td
                              class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                            >
                              <div class="flex items-center gap-4">
                                <div class="grow">
                                  <p class="mb-1 text-sm text-default-500">
                                    {{ singleBooking.name }}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td
                              class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                            >
                              {{ singleBooking.contact }}
                            </td>
                            <td
                              class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                            >
                              {{ singleBooking.time }}
                            </td>
                            <td
                              class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                            >
                              {{ singleBooking.date }}
                            </td>
                            <td
                              class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                            >
                              {{ singleBooking.booking }}
                            </td>
                            <td
                              class="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                            >
                              {{ singleBooking.specialRequest }}
                            </td>
                            <td class="px-6 py-4">
                              <span
                                class="rounded-md px-3 py-1 text-xs font-medium bg-pink-500/10 text-pink-500"
                                >{{ singleBooking.status }}</span
                              >
                            </td>
                            <td class="px-6 py-4">
                              <div class="flex gap-3">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="cursor-pointer transition-colors hover:text-red-500"
                                  height="20"
                                  width="20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
                                  ></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="cursor-pointer transition-colors hover:text-red-500"
                                  height="20"
                                  width="20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M3 6h18"></path>
                                  <path
                                    d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                  ></path>
                                  <path
                                    d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                  ></path>
                                  <line x1="10" x2="10" y1="11" y2="17"></line>
                                  <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
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
const { fetchBooking, deleteBooking } = restStore;
const { Booking, loading } = storeToRefs(restStore);
const loadingState = ref(null);
onMounted(async () => {
  await fetchBooking();
  console.log(Booking.value);
});
const deleteData = async (id, index) => {
  loadingState.value = index;
  await deleteBooking(id);
  await fetchBooking();
};
</script>

<style lang="scss" scoped></style>
