<template>
<div class=" duration mt-2 min-w-[20rem] rounded-lg border border-gray-200 bg-white shadow-md  z-[200]" style="position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-180px, 66px, 0px);" data-popper-placement="bottom-end">
   <div class="flex items-center justify-between px-4 py-2">
      <h6 class="text-sm font-medium"> Notification</h6>
      <a class="text-default-500"><small>Clear All</small></a>
   </div>
   <div data-simplebar="init" class="overflow-scroll h-80 border-y border-dashed border-gray-200 p-4 simplebar-scrollable-y">
      <div class="simplebar-wrapper " style="margin: -16px;">
         <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
         </div>
         <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
               <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                  <div class="simplebar-content" style="padding: 16px;">
                     <h5 class="mb-2 text-xs text-default-700">Today</h5>
                     <a class="mb-4 flex items-center">
                        <img src="@/assets/img/restaurant-logo.png" alt="avatar" class="h-10 w-10 rounded-full">
                        <div class="ms-2 flex-grow truncate">
                           <div class="flex items-center justify-between">
                              <h5 class="text-sm font-medium text-default-800">Datacorp</h5>
                              <small class="inline-flex text-xs text-default-500">1 minute ago</small>
                           </div>
                           <small class="text-default-400">Caleb Flakelar commented on Admin</small>
                        </div>
                     </a>
                     <a class="mb-4 flex items-center" >
                        <div class="flex-shrink-0"><img src="@/assets/img/restaurant-logo.png" alt="avatar" height="40" width="40" class="h-10 w-10 rounded-full"></div>
                        <div class="ms-2 flex-grow truncate">
                           <div class="flex items-center justify-between">
                              <h5 class="text-sm font-medium text-default-800">Admin</h5>
                              <small class="inline-flex text-xs text-default-500">1 hour ago</small>
                           </div>
                           <small class="text-default-400">New user registered</small>
                        </div>
                     </a>
                     <h5 class="mb-2 text-xs text-default-700">Yesterday</h5>
                     <a class="mb-4 flex items-center" >
                        <img src="@/assets/img/restaurant-logo.png" alt="avatar" class="h-10 w-10 rounded-full">
                        <div class="ms-2 flex-grow truncate">
                           <div class="flex items-center justify-between">
                              <h5 class="text-sm font-medium text-default-800">Cristina Pride</h5>
                              <small class="inline-flex text-xs text-default-500">2 hours ago</small>
                           </div>
                           <small class="text-default-400">Hi, How are you? What about our next meeting</small>
                        </div>
                     </a>
                     <a class="mb-4 flex items-center" >
                        <div class="flex-shrink-0"><img src="@/assets/img/restaurant-logo.png" alt="avatar" height="40" width="40" class="h-10 w-10 rounded-full"></div>
                        <div class="ms-2 flex-grow truncate">
                           <div class="flex items-center justify-between">
                              <h5 class="text-sm font-medium text-default-800">Datacorp</h5>
                              <small class="inline-flex text-xs text-default-500">1 day ago</small>
                           </div>
                           <small class="text-default-400">Caleb Flakelar commented on Admin</small>
                        </div>
                     </a>
                     <h5 class="mb-2 text-xs text-default-700">8/7/2024</h5>
                     <a class="mb-4 flex items-center" >
                        <img src="@/assets/img/restaurant-logo.png" alt="avatar" class="h-10 w-10 rounded-full">
                        <div class="ms-2 flex-grow truncate">
                           <div class="flex items-center justify-between">
                              <h5 class="text-sm font-medium text-default-800">Karen Robinson</h5>
                              <small class="inline-flex text-xs text-default-500">1 day ago</small>
                           </div>
                           <small class="text-default-400">Wow ! this admin looks good and awesome design</small>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <RouterLink 
   to="/notification"
   class="custom block px-4 py-2 text-center text-sm font-medium text-primary"
   >View All
  </RouterLink>
</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useGeneralStoreStore } from "@/stores/generalStore";
const store = useGeneralStoreStore();
const { toggleNotifFun } = store;
</script>

<style  scoped>
.custom {
  background-color: white !important;
}
</style>
