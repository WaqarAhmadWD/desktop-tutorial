<template>
  <div class="w-full lg:ps-64">
    <div class="w-full bg-gray-50 h-screen overflow-y-auto p-8 z-[200]">
      <div class="flex items-center justify-between z-100">
        <p
          class="focus:outline-none text-2xl font-semibold leading-6 text-gray-800"
        >
          Notifications
        </p>
        <div class="flex">
          <button
            class="flex mr-2 w-full justify-center rounded-lg bg-orange-200 px-20 py-3 text-center text-sm font-medium text-orange-500 hs-tab-active:bg-orange-500 focus:text-white focus:bg-orange-500 sm:w-auto active"
          >
            Order Notifications
          </button>
          <button
            class="flex mr-2 w-full justify-center rounded-lg bg-orange-200 px-20 py-3 text-center text-sm font-medium text-orange-500 hs-tab-active:bg-orange-500 focus:text-white focus:bg-orange-500 sm:w-auto active"
          >
            Announcement
          </button>
        </div>
      </div>
      <div data-simplebar="init" class=" p-4 simplebar-scrollable-y">
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
      <div class="flex items-center justiyf-between">
        <hr class="w-full" />
        <p
          class="focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-16 text-gray-500"
        >
          <RouterLink @click="toggleNotifFun" to="/notification">
            More Notifications
          </RouterLink>
        </p>
        <hr class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
