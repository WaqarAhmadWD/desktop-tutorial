<template>
  <div class="w-full lg:ps-64">
    <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
        <h4 class="text-xl font-medium">{{ $t("add user") }}</h4>
        <ol aria-label="Breadcrumb" class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex">
          <li class="text-sm">
            <a class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              href="/yum_b/admin/customers">{{ $t("users") }}<svg stroke="currentColor" fill="none" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m9 18 6-6-6-6"></path>
              </svg></a>
          </li>
          <li aria-current="page" class="truncate text-sm font-medium text-[#f58220]">
            {{ $t("add user") }}
          </li>
        </ol>
      </div>
      <div class="grid gap-6 xl:grid-cols-2">
        <div>
          <div class="rounded-lg border border-default-200 p-6">
            <h4 class="mb-4 text-base font-medium text-default-800">{{ $t("upload_logo_image") }}</h4>
            <div class="mb-4 flex h-96 flex-col items-center justify-center rounded-lg border border-default-200 p-6">
                <div class="py-20 bg-white px-2">
                    <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                        <div class="md:flex">
                            <div class="w-full p-3">
                                <div class="relative h-48 rounded-lg border-dashed border-2 border-[#f6821d] bg-[#fef1e8] flex justify-center items-center">
                                  <div class="absolute" v-if="data.logo">
                                  <img :src="data.logo" alt="Selected Image" />
                                  </div>
                                <div class="absolute">
                                    
                                    <div v-if="!data.logo" class="flex flex-col items-center">
                                        <BsUpload class="text-xl  text-[#f6821d]" />
                                    <span class="block text-gray-500 font-normal">{{ $t("upload_logo_image") }}</span>
                                    </div>
                                </div>

                                <input v-on:change="data.logo" type="file" @change="handleFileUpload" accept="image/*" class="h-full w-full opacity-0" name="">
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
              <div class="mb-6 grid gap-6 lg:grid-cols-2">
                <div class="relative max-w-full">
                  <label class="mb-2 block text-sm font-medium text-default-900" for="fname">{{ $t("first_name") }}</label>
                  <div class="relative max-w-full"><input type="text" :placeholder="$t('first_name')"
                      name="fname" id="fname"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      value=""
                      v-model="data.fullName"
                      ></div>
                </div>
                <div class="relative max-w-full">
                  <label class="mb-2 block text-sm font-medium text-default-900" for="lname">{{ $t("last_name") }}</label>
                  <div class="relative max-w-full"><input type="text" :placeholder="$t('last_name')" name="lname"
                      id="lname"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      value=""
                      ></div>
                </div>
                <div class="relative max-w-full">
                  <label class="mb-2 block text-sm font-medium text-default-900" for="email">{{ $t("email") }}</label>
                  <div class="relative max-w-full"><input type="email" :placeholder="$t('enter_your_email')" name="email"
                      id="email"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      value=""
                      v-model="data.email"
                      ></div>
                </div>
                <div class="relative max-w-full">
                  <label class="mb-2 block text-sm font-medium text-default-900" for="contactNO">{{ $t("contact_number") }}</label>
                  <div class="relative max-w-full"><input type="text" :placeholder="$t('enter_your_contact')"
                      name="contactNO" id="contactNO"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      value=""
                      ></div>
                </div>
              </div>
              <div class="mb-6 grid gap-6 lg:grid-cols-1">
                <div class="relative w-full">
                  <label class="mb-2 block text-sm font-medium text-default-900" for="address">{{ $t("address") }}</label>
                  <div class="relative max-w-full"><input type="text" :placeholder="$t('enter_your_address')" name="address"
                      id="address"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      value=""></div>
                </div>
              </div>
              <div class="mb-6 grid gap-6 lg:grid-cols-2">
                <div class="relative max-w-full">
                  <label class="mb-2 block text-sm font-medium text-default-900" for="password">{{ $t("password") }}</label>
                  <div class="relative max-w-full"><input type="password"  :placeholder="$t('enter_your_password')" name="Password"
                      id="password"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      value=""
                      v-model="data.password"
                      ></div>
                </div>
                <div class="relative max-w-full">
                  <label class="mb-2 block text-sm font-medium text-default-900" for="rpassword">{{ $t("repeat_password") }}</label>
                  <div class="relative max-w-full"><input type="password" :placeholder="$t('repeat_your_password')" name="Password"
                      id="rpassword"
                      class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"
                      value=""></div>
                </div>
              </div>
              <div class="mb-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <label for="role" class="mb-2 block text-sm font-medium text-default-900">{{ $t("role") }}</label>
                  <select id="role" v-model="data.role" class="text-gray-900 text-sm rounded-lg block w-full p-2.5">

                    <option selected disabled >{{ $t("select_role") }}</option>
                    <option >Super Admin</option>
                    <option >{{ $t("restaurant_admin") }}</option>
                  </select>
                </div>
                <div
                v-if="data.role==$t('restaurant_admin')"
                >
                  <label for="countries" class="mb-2 block text-sm font-medium text-default-900">{{ $t("associated_restaurant") }}</label>
                  <select  id="countries" class="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  v-model="data.associatedRestaurant"
                  >
                    <option selected disabled>{{ $t("select_associated_restaurant") }}</option>
                    <option v-for="(rest,index) in restaurantsLocal" :key="index" :value="rest._id">{{ rest.name }}</option>
                  </select>
                </div>  
              </div>
              <div class="flex flex-wrap justify-end gap-4">
                <button @click="submitUser"
                  class="flex items-center justify-center gap-2 rounded-lg bg-[#f58220] px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#f97316]">
  
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
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg>
                  {{ $t("save") }}
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSuperAdminStore } from "@/stores/superAdmin";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
const superAdminStore = useSuperAdminStore();
const { createUser, fetchRest } = superAdminStore;
const {restaurants,loading}= storeToRefs(superAdminStore);
const restaurantsLocal = ref(null)
onMounted(async() => {
  await fetchRest();
  restaurantsLocal.value=await restaurants.value;
})


const submitUser = () =>{
  createUser(data.value);
}
const data = ref({
  // logo: "",
  fullName: "",
  address: "",
  contactNumber: "",
  email: "",
  password: "",
  role:"",
  associatedRestaurant:"",
});

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          data.value.logo = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file.');
      }
    };

</script>

<style lang="scss" scoped></style>
