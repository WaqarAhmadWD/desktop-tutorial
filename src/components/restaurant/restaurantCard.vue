<template>
    <div class="mb-6 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
         <div v-for="restaurant in restaurants" :key="restaurant._id" class="relative rounded-lg border border-default-200 p-6">
            <div class="px-6 py-4 absolute right-0">
               <div class="flex gap-3">
                  <RouterLink
                  v-if="restaurant._id"
                  :to="{
                     name:'restaurantEdit',
                     params:{id:restaurant._id}
                  }"
                  >
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors text-blue-400 hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                     <path d="m15 5 4 4"></path>
                  </svg>
               </RouterLink>
                  <svg @click="deleteRestData(restaurant._id)" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors text-red-700 hover:text-red-900" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3 6h18"></path>
                     <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                     <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                     <line x1="10" x2="10" y1="11" y2="17"></line>
                     <line x1="14" x2="14" y1="11" y2="17"></line>
                  </svg>
               </div>
            </div>
            <img :src="restaurant.logo" width="56" height="56" class="mx-auto mb-4 h-14 w-14 rounded-full" alt="restaurant">
            <h4 class="text-center text-base font-medium uppercase text-default-900">{{restaurant.name}}</h4>
            <h4 class="mb-10 text-center text-base font-medium text-[#475569]">{{restaurant.description}}</h4>
            <div class="mb-8 flex justify-around">
               <div class="text-center">
                  <h4 class="mb-2.5 text-lg font-medium text-[#F58220]">34</h4>
                  <h5 class="text-sm text-default-800">Total Product</h5>
               </div>
               <div class="border-s border-default-200"></div>
               <div class="text-center">
                  <h4 class="mb-2.5 text-lg font-medium text-[#F58220]">425</h4>
                  <h5 class="text-sm text-default-800">Total Sales</h5>
               </div>
            </div>
            <div class="mb-6 space-y-5">
               <div class="flex gap-3">
                  <div class="flex-shrink">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-default-800" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                     </svg>
                  </div>
                  <p class="d text-sm text-default-700">{{restaurant.address}}</p>
               </div>
               <div class="flex gap-3">
                  <div class="flex-shrink">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-default-800" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                     </svg>
                  </div>
                  <p class="d text-sm text-default-700">{{restaurant.email}}</p>
               </div>
               <div class="flex gap-3">
                  <div class="flex-shrink">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-default-800" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                     </svg>
                  </div>
                  <p class="d text-sm text-default-700">{{restaurant.contactNumber}}</p>
               </div>
            </div>
            <div class="text-center">
               <RouterLink 
               v-if="restaurant._id"
                  :to="{
                     name:'restaurantDetails',
                     params:{id:restaurant._id}
                  }"
               >
               <button class="inline-flex rounded-lg bg-[#f48221] text-white px-8 py-2.5 font-medium transition-all hover:bg-[#F97316]">View Details</button>
               </RouterLink>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap justify-center gap-x-10 gap-y-6 pt-6 md:flex-nowrap md:justify-end">
         <nav>
            <ul class="inline-flex items-center space-x-2 rounded-md text-sm">
               <li><span class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-primary bg-[#f58220] text-white">1</span></li>
               <li><span class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f1f5f9] text-default-800 transition-all duration-500 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white">2</span></li>
               <li><span class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f1f5f9] text-default-800 transition-all duration-500 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white">...</span></li>
               <li><span class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f1f5f9] text-default-800 transition-all duration-500 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white">9</span></li>
               <li><span class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f1f5f9] text-default-800 transition-all duration-500 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white">10</span></li>
            </ul>
         </nav>
         <nav>
            <ul class="inline-flex items-center space-x-2 rounded-md text-sm">
               <li>
                  <span class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f1f5f9] text-default-800 transition-all duration-500 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m15 18-6-6 6-6"></path>
                     </svg>
                  </span>
               </li>
               <li>
                  <span class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f1f5f9] text-default-800 transition-all duration-500 hover:border-[#f58220] hover:bg-[#f58220] hover:text-white">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9 18 6-6-6-6"></path>
                     </svg>
                  </span>
               </li>
            </ul>
         </nav>
      </div>
</template>

<script setup>
import { useSuperAdminStore } from "@/stores/superAdmin";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const superAdminStore = useSuperAdminStore();
const { fetchRest, deleteRest} = superAdminStore;
const {restaurants} = storeToRefs(superAdminStore);
onMounted(() => {
  fetchRest();
})

const deleteRestData = async(id) => {
   await deleteRest(id);
   await fetchRest();
}


</script>

<style lang="scss" scoped>

</style>