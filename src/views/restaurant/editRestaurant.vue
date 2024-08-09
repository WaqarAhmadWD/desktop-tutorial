<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">{{ $t("edit_restaurant") }}</h4>
        <ol
          aria-label="Breadcrumb"
          class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
        >
          <li class="text-sm">
            <a
              class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              href="/yum_b/admin/restaurants"
            >
              Restaurants
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
          {{ $t("edit_restaurant") }}
          </li>
        </ol>
      </div>
      <div class="grid gap-6 xl:grid-cols-2">
        <div>
          <div class="rounded-lg border border-default-200 p-6">
            <h4 class="mb-4 text-base font-medium text-default-800">
              {{ $t("upload_logo_image") }}
            </h4>
            <div
              class="mb-4 flex h-96 flex-col items-center justify-center rounded-lg border border-default-200 p-6"
            >
              <div class="py-20 bg-white px-2">
                <div
                  class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl"
                >
                  <div class="md:flex">
                    <div class="w-full p-3">
                      <div
                        class="relative h-48 rounded-lg border-dashed border-2 border-[#f6821d] bg-[#fef1e8] flex justify-center items-center"
                      >
                        <div class="absolute">
                          <div class="flex flex-col items-center">
                            <BsUpload class="text-xl text-[#f6821d]" />
                            <span class="block text-gray-500 font-normal"
                              >{{ $t("upload_logo_image") }}</span
                            >
                          </div>
                        </div>

                        <input
                          type="file"
                          class="h-full w-full opacity-0"
                          name=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="mb-4 text-base font-medium text-default-800">
              {{ $t("upload_cover_image") }}
            </h4>
            <div class="">
              <div
                class="flex h-40 flex-col items-center justify-center rounded-lg border border-default-200"
              >
                <div class="bg-white h-28 w-64 p-0">
                  <div
                    class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl"
                  >
                    <div class="md:flex">
                      <div class="w-full py-3">
                        <div
                          class="relative h-24 rounded-lg border-dashed border-2 border-[#f6821d] bg-[#fef1e8] flex justify-center items-center"
                        >
                          <div class="absolute">
                            <div class="flex flex-col items-center">
                              <BsUpload class="text-xl text-[#f6821d]" />
                              <span class="block text-gray-500 font-normal"
                                >{{ $t("upload_cover_image") }}</span
                              >
                            </div>
                          </div>

                          <input
                            type="file"
                            class="h-full w-full opacity-0"
                            name=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="rounded-lg border border-default-200 p-6">
            <form id="tabPersonalDetail" role="tabpanel">
              <div class="mb-6 grid gap-6 lg:grid-cols-2">
                <div class="relative max-w-full">
                  <label
                    class="mb-2 block text-sm font-medium text-default-900"
                    for="Rname"
                    >Restaurant Name</label
                  >
                  <div class="relative max-w-full">
                    <input
                      type="text"
                      :placeholder="$t('enter_your_restaurant_name')"
                      name="Rname"
                      id="Rname"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      v-model="singleRestLocal.name"
                    />
                  </div>
                </div>
                <div class="relative max-w-full">
                  <label
                    class="mb-2 block text-sm font-medium text-default-900"
                    for="address"
                    >{{ $t("address") }}</label
                  >
                  <div class="relative max-w-full">
                    <input
                      type="text"
                      :placeholder="$t('enter_your_address')"
                      name="address"
                      id="address"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      v-model="singleRestLocal.address"
                    />
                  </div>
                </div>
                <div class="relative max-w-full">
                  <label
                    class="mb-2 block text-sm font-medium text-default-900"
                    for="contactNO"
                    >{{ $t("contact_number") }}</label
                  >
                  <div class="relative max-w-full">
                    <input
                      type="text"
                      :placeholder="$t('enter_your_contact')"
                      name="contactNO"
                      id="contactNO"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      v-model="singleRestLocal.contactNumber"
                    />
                  </div>
                </div>
                <div class="relative max-w-full">
                  <label
                    class="mb-2 block text-sm font-medium text-default-900"
                    for="email"
                    >{{ $t("email") }}</label
                  >
                  <div class="relative max-w-full">
                    <input
                      type="email"
                      :placeholder="$t('enter_your_email')"
                      name="email"
                      id="email"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      v-model="singleRestLocal.email"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-6 grid gap-6 lg:grid-cols-3">
                <div>
                  <label
                    for="city"
                    class="mb-2 block text-sm font-medium text-default-900"
                    >{{ $t("city") }}</label
                  >
                  <select
                    id="countries"
                    class="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>Chicago</option>
                    <option>Houston</option>
                  </select>
                </div>
                <div>
                  <label
                    for="countries"
                    class="mb-2 block text-sm font-medium text-default-900"
                    >{{ $t("country_region") }}</label
                  >
                  <select
                    id="countries"
                    class="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div>
                  <label
                    for="billing-zip-code1"
                    class="mb-2 block text-sm font-medium text-default-900"
                    >{{ $t("zip_postal_code") }}</label
                  >
                  <div class="max-w-sm mx-auto">
                    <label for="zipCode"></label>
                    <input
                      class="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      type="number"
                      id="zipCode"
                      :placeholder="$t('add_zip_code')"
                    />
                  </div>
                </div>
                <div class="w-full grid grid-cols-1">
                  <div class="mb-6">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center min-w-[4rem]">
                        <input
                          checked
                          id="monday"
                          name="days"
                          type="checkbox"
                          value="monday"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="monday"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >{{ $t("mon") }}</label
                        >
                      </div>
                      <div class="w-full max-w-[7rem]">
                        <label for="start-time-monday" class="sr-only"
                          >Start time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="start-time-monday"
                            name="start-time-monday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-[7rem] ml-4">
                        <label for="end-time-monday" class="sr-only"
                          >End time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="end-time-monday"
                            name="end-time-monday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center min-w-[4rem]">
                        <input
                          id="tuesday"
                          name="days"
                          type="checkbox"
                          value="tuesday"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="tuesday"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >{{ $t("tue") }}</label
                        >
                      </div>
                      <div class="w-full max-w-[7rem]">
                        <label for="start-time-tuesday" class="sr-only"
                          >Start time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="start-time-tuesday"
                            name="start-time-tuesday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-[7rem] ml-4">
                        <label for="end-time-tuesday" class="sr-only"
                          >End time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="end-time-tuesday"
                            name="end-time-tuesday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center min-w-[4rem]">
                        <input
                          checked
                          id="wednesday"
                          name="days"
                          type="checkbox"
                          value="wednesday"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="wednesday"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >{{ $t("wed") }}</label
                        >
                      </div>
                      <div class="w-full max-w-[7rem]">
                        <label for="start-time-wednesday" class="sr-only"
                          >Start time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="start-time-wednesday"
                            name="start-time-wednesday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-[7rem] ml-4">
                        <label for="end-time-wednesday" class="sr-only"
                          >End time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="end-time-wednesday"
                            name="end-time-wednesday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center min-w-[4rem]">
                        <input
                          id="thursday"
                          name="days"
                          type="checkbox"
                          value="thursday"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="thursday"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >{{ $t("thu") }}</label
                        >
                      </div>
                      <div class="w-full max-w-[7rem]">
                        <label for="start-time-thursday" class="sr-only"
                          >Start time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="start-time-thursday"
                            name="start-time-thursday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-[7rem] ml-4">
                        <label for="end-time-thursday" class="sr-only"
                          >End time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="end-time-thursday"
                            name="end-time-thursday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center min-w-[4rem]">
                        <input
                          id="friday"
                          name="days"
                          type="checkbox"
                          value="friday"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="friday"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >{{ $t("fri") }}</label
                        >
                      </div>
                      <div class="w-full max-w-[7rem]">
                        <label for="start-time-friday" class="sr-only"
                          >Start time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="start-time-friday"
                            name="start-time-friday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-[7rem] ml-4">
                        <label for="end-time-friday" class="sr-only"
                          >End time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="end-time-friday"
                            name="end-time-friday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center min-w-[4rem]">
                        <input
                          id="saturday"
                          name="days"
                          type="checkbox"
                          value="Saturday"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="saturday"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >{{ $t("sat") }}</label
                        >
                      </div>
                      <div class="w-full max-w-[7rem]">
                        <label for="start-time-friday" class="sr-only"
                          >Start time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="start-time-friday"
                            name="start-time-friday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-[7rem] ml-4">
                        <label for="end-time-friday" class="sr-only"
                          >End time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="end-time-friday"
                            name="end-time-friday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center min-w-[4rem]">
                        <input
                          id="sunday"
                          name="days"
                          type="checkbox"
                          value="Sunday"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="sunday"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >{{ $t("sun") }}</label
                        >
                      </div>
                      <div class="w-full max-w-[7rem]">
                        <label for="start-time-friday" class="sr-only"
                          >Start time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="start-time-friday"
                            name="start-time-friday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-full max-w-[7rem] ml-4">
                        <label for="end-time-friday" class="sr-only"
                          >End time:</label
                        >
                        <div class="relative">
                          <div
                            class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="time"
                            id="end-time-friday"
                            name="end-time-friday"
                            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            min="09:00"
                            max="18:00"
                            value="00:00"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:col-span-3 relative w-full">
                  <label
                    class="mb-2 block text-sm font-medium text-default-900"
                    for="operatingHours"
                    >{{ $t("operating_hours") }}</label
                  >
                  <div class="relative w-full">
                    <textarea
                      v-model="singleRestLocal.operatingHours"
                      :placeholder="$t('enter_operating_hours')"
                      name="operatingHours"
                      rows="2"
                      class="rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                    ></textarea>
                  </div>
                </div>
                <div class="lg:col-span-3 relative w-full">
                  <label
                    class="mb-2 block text-sm font-medium text-default-900"
                    for="description"
                    >{{ $t("description") }}</label
                  >
                  <div class="relative w-full">
                    <textarea
                      :placeholder="$t('enter_description')"
                      name="description"
                      rows="5"
                      class="rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      v-model="singleRestLocal.description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap justify-end gap-4">
                <button
                  @click="submit"
                  type="submit"
                  class="flex items-center justify-center gap-2 rounded-lg bg-[#f58220] px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#f97316]"
                >
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
                  {{ $t("save") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BsUpload } from "@kalimahapps/vue-icons";
import { ref, onMounted, defineProps } from "vue";
import { useSuperAdminStore } from "@/stores/superAdmin";
import { storeToRefs } from "pinia";

const superAdminStore = useSuperAdminStore();
const { fetchSingleRest, editRest } = superAdminStore;
const { singleRest, loading } = storeToRefs(superAdminStore);
const singleRestLocal = ref({
  name: "",
  address: "",
  contactNumber: "",
  email: "",
  description: "",
  operatingHours: "",
});
const props = defineProps({
  id: String,
});
onMounted(async () => {
  await fetchSingleRest(props.id);
  singleRestLocal.value = await singleRest.value.data;
});
const submit = () => {
  editRest(singleRestLocal.value);
  console.log(singleRestLocal.value);
};
</script>

<style scoped></style>
