<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">Users List</h4>
        <ol
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
        >
          <li class="text-sm">
            <a
              class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              href="/yum_b/admin/customers"
              >Users<svg
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
            class="truncate text-sm font-medium text-primary hover:text-orange-500"
          >
            Users List
          </li>
        </ol>
      </div>
      <div class="rounded-lg border border-default-200">
        <div class="border-b border-b-default-200 px-6 py-4">
          <div class="flex flex-wrap items-center justify-between gap-6">
            <h2 class="text-xl font-medium text-default-900">Users</h2>
            <RouterLink to="/add-user">
              <button
                class="inline-flex rounded-md bg-orange-400 px-6 py-2.5 text-sm text-white hover:bg-orange-500"
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
                  <path d="M12 5v14"></path></svg
                >Add a new user
              </button>
            </RouterLink>
          </div>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="relative max-w-full">
              <div class="relative max-w-full">
                <input
                  placeholder="Search..."
                  name="search"
                  id="search"
                  class="form-input rounded-lg border border-orange focus:outline-orange-400 px-4 py-2.5 dark:bg-default-50 ps-10 w-full max-w-sm"
                  value=""
                />
                <span class="absolute start-3 top-1/2 -translate-y-1/2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <div class="relative">
                <input
                  placeholder="01/05/2003"
                  name="filterByDateRange"
                  class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 ps-10 max-w-[180px] flatpickr-input"
                  type="text"
                  readonly="readonly"
                  ref="datePickerInput"
                />
                <span class="absolute start-3 top-1/2 -translate-y-1/2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                  </svg>
                </span>
              </div>

              <div
                class="max-w-sm mx-auto hs-dropdown-toggle flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-default-700 transition-all xl:px-6 outline-none"
              >
                <select
                  id="selecting"
                  class="bg-[#F1F5F9] outlined-none border-none text-black text-sm rounded block w-full px-5 py-3"
                >
                  <option selected>Sort: Ascending</option>
                  <option value="US">Decending</option>
                </select>
              </div>

              <div class="hs-dropdown relative inline-flex">
                <div
                  class="max-w-sm mx-auto hs-dropdown-toggle flex items-center rounded-md px-4 py-3 text-sm font-medium text-default-700 transition-all xl:px-6 outline-none"
                >
                  <select
                    id="selecting"
                    class="bg-[#F1F5F9] outlined-none border-none text-black text-sm rounded block w-full px-5 py-3"
                  >
                    <option selected>Status: All</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Block</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative overflow-x-auto border-t border-default-200">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-default-200">
                <thead class="bg-default-100">
                  <tr>
                    <th
                      scope="col"
                      class="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                    >
                      Profile
                    </th>
                    <th
                      scope="col"
                      class="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      class="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      class="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      class="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      class="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  <tr v-for="user in users" :key="users._id">
                    <td class="whitespace-nowrap px-6">
                      <img
                        class="mx-auto w-10 h-10 rounded-full"
                        src="https://imagehues.com/unsplash_images/img309.jpg"
                        alt="profile"
                      />
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-base text-default-800"
                    >
                      {{ user.fullName }}
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-base text-default-800"
                    >
                      Keja
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-base text-default-800"
                    >
                      1078832848
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 text-base text-default-800"
                    >
                      {{ user.email }}
                    </td>
                    <!-- |&nbsp;<span class="text-xs">19:54</span> -->
                    <td class="whitespace-nowrap px-6 py-4">
                      <span
                        class="rounded-md px-3 py-1 text-xs font-medium"
                        :class="{
                          'bg-green-500/10 text-green-500':
                            user.role == 'Super Admin',
                          'bg-yellow-500/10 text-yellow-500':
                            user.role == 'Restaurant Admin',
                        }"
                        >{{ user.role }}</span
                      >
                    </td>
                    <td class="px-6 py-4">
                      <div class="">
                        <div class="flex gap-3">
                          <RouterLink
                            v-if="user._id"
                            :to="{
                              name: 'editUser',
                              params: { id: user._id },
                            }"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="cursor-pointer transition-colors text-blue-400 hover:text-blue-500"
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
                            v-if="user._id"
                            :to="{
                              name: 'userDetails',
                              params: { id: user._id },
                            }"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="cursor-pointer transition-colors text-[#f6821d] hover:text-[#ff5a1f]"
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
                            @click="deleteUserData(user._id)"
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="cursor-pointer transition-colors text-red-700 hover:text-red-900"
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
</template>

<script setup>
import { onMounted, ref } from "vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useSuperAdminStore } from "@/stores/superAdmin";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const superAdminStore = useSuperAdminStore();
const { fetchUsers, deleteUser } = superAdminStore;
const { users } = storeToRefs(superAdminStore);

const datePickerInput = ref(null);

onMounted(() => {
  fetchUsers();
  if (datePickerInput.value) {
    flatpickr(datePickerInput.value, {
      dateFormat: "d/m/Y",
    });
  }
});

const deleteUserData = async (id) => {
  await deleteUser(id);
  await fetchUsers();
};
</script>

<style lang="scss" scoped></style>
