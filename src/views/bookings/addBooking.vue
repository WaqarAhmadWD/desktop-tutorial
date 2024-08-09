<template>
  <div class="w-full lg:ps-64 px-16">
 <div class="page-content space-y-6 p-6">
    <div class="flex w-full items-center justify-between">
       <h4 class="text-xl font-medium">Add Booking</h4>
       <ol aria-label="Breadcrumb" class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex">
          <li class="text-sm">
             <a class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500" href="/yum_b/admin/restaurants">
               Booking
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                   <path d="m9 18 6-6-6-6"></path>
                </svg>
             </a>
          </li>
          <li aria-current="page" class="truncate text-sm font-medium text-primary hover:text-primary-500">Add Booking</li>
       </ol>
    </div>
    <div class="grid gap-6 xl:grid-cols-1">
 <div>
       <div class="rounded-lg border border-default-200 p-6">
          <form id="tabPersonalDetail" role="tabpanel">
             <div class="mb-6 grid gap-6 lg:grid-cols-2">
                <div class="relative max-w-full">
                   <label class="mb-2 block text-sm font-medium text-default-900" for="booking">Booking ID</label>
                   <div class="relative max-w-full"><input type="text" placeholder="Enter Your Booking ID" name="booking" id="booking" class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full" value=""></div>
                </div>
                <div class="relative max-w-full">
                   <label class="mb-2 block text-sm font-medium text-default-900" for="Customer">Customer Name</label>
                   <div class="relative max-w-full"><input type="text" placeholder="Enter Your Customer Name" name="Customer" id="Customer" class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full" value=""></div>
                </div>
                <div class="relative max-w-full">
                   <label class="mb-2 block text-sm font-medium text-default-900" for="contactNO">Contact Number</label>
                   <div class="relative max-w-full"><input type="text" placeholder="Enter Your Contact Number" name="contactNO" id="contactNO" class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full" value=""></div>
                </div>
                <div class="relative max-w-full">
                   <label class="mb-2 block text-sm font-medium text-default-900" for="date">Date
                  </label>
                   <div class="relative max-w-full"><input type="date" placeholder="Enter Your Date" name="date" id="date" class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full" value=""></div>
                </div>
                <div class="relative max-w-full">
                   <label class="mb-2 block text-sm font-medium text-default-900" for="time">Time
                  </label>
                   <div class="relative max-w-full"><input type="time" placeholder="Enter Your Time" name="time" id="time" class="form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full" value=""></div>
                </div>
                <div class="mb-6 grid gap-6 lg:grid-cols-2">
                   <div>
                  <label for="table" class="mb-2 block text-sm font-medium">Table</label>
                         <select id="table" class="text-gray-900 text-sm rounded-lg block w-full p-2.5">
                           <option selected disabled>Table Name</option>
                             <option value="YUMYUM">YUMYUM</option>
                             <option>Food Zone</option>
                             <option>ABC Rest</option>
                         </select>
               </div>
               <div>
                  <label for="status" class="mb-2 block text-sm font-medium">Status</label>
                         <select id="status" class="text-gray-900 text-sm rounded-lg block w-full p-2.5">
      
                             <option selected disabled>Status</option>
                             <option>Confirmed</option>
                             <option>Cancelled</option>
                             <option>Completed</option>
                         </select>
               </div>
                </div>
             </div>
             <div class="mb-6 grid gap-6 lg:grid-cols-3">
                  <div class="lg:col-span-3 relative w-full">
                   <label class="mb-2 block text-sm font-medium text-default-900" for="request">Request</label>
                   <div class="relative w-full"><textarea placeholder="Enter Request" name="request" id="request" rows="5" class="rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full"></textarea></div>
                </div>
             </div>
             <div class="flex flex-wrap justify-end gap-4">
                <button type="reset" class="flex items-center justify-center gap-2 rounded-lg bg-red-500/10 px-6 py-2.5 text-center text-sm font-semibold text-red-500 shadow-sm transition-colors duration-200 hover:bg-red-500 hover:text-white">
                   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path>
                      <path d="M22 21H7"></path>
                      <path d="m5 11 9 9"></path>
                   </svg>
                   Clear
                </button>
                <button type="submit" class="flex items-center justify-center gap-2 rounded-lg bg-[#f58220] px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#f97316]">
                   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                      <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      <polyline points="7 3 7 8 15 8"></polyline>
                   </svg>
                   Save
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
import { BsUpload } from '@kalimahapps/vue-icons';




</script>

<style scoped>
</style>