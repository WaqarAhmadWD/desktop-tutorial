<template>
<div class="w-full lg:ps-64">
   <div class="page-content space-y-6 p-6">
      <div class="flex w-full items-center justify-between">
         <h4 class="text-xl font-medium">{{singleRestLocal.name}}</h4>
         <ol aria-label="Breadcrumb" class="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex">
            <li class="text-sm">
               <a class="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500">
                  Restaurants
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                     <path d="m9 18 6-6-6-6"></path>
                  </svg>
               </a>
            </li>
            <li aria-current="page" class="truncate text-sm font-medium text-primary hover:text-primary-500">{{singleRestLocal.name}}</li>
         </ol>
      </div>
      <div class="mb-6 rounded-lg border border-default-200 p-6">
         <img src="@/assets/img/bg-restaurant.png" class="hidden w-full md:flex" alt="background">
         <div class="flex items-center gap-3 md:-mt-14 md:items-end">
            <img src="@/assets/img/restaurant-logo.png" class="h-28 w-28 rounded-full bg-default-50" alt="restaurant">
            <div class="-mb-5">
               <h1 class="mb-1 text-base font-bold text-default-800">{{singleRestLocal.name}}</h1>
               <p class="text-sm font-normal text-default-600">Since 2013</p>
               <div class="">
                  <p class="text-sm text-default-600">{{ singleRestLocal.description }}</p>
               </div>
            </div>
         </div>
      </div>
      <!-- components -->
      <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
   <div class="xl:col-span-2">
      <div class="overflow-hidden rounded-lg border border-default-200">
         <div class="border-b border-b-default-200 p-6">
            <h4 class="mb-4 text-xl font-medium text-default-900">Menu</h4>
            <div class="flex flex-wrap items-center gap-4">
               <div class="max-w-sm">
                  <select id="filter" class="bg-gray-300 border border-gray-50  text-sm rounded-lg focus:ring-gray-50 focus:border-gray-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                     <option selected>Best Seller</option>
                     <option value="Best Seller">Best Seller</option>
                     <option value="High to Low">High to Low</option>
                     <option value="Low to High">Low to High</option>
                  </select>
               </div>
               <div class="ms-auto">
                  <a class="inline-flex rounded-md bg-[#f58220] px-6 py-2.5 text-sm text-white hover:bg-[#f97316] " href="/yum_b/admin/add-dish">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="me-2 inline-flex align-middle" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                     </svg>
                     Add Menu
                  </a>
               </div>
            </div>
         </div>
         <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
               <div class="divide-y divide-default-200 rounded-lg">
                  <div class="overflow-hidden">
                     <table class="min-w-full divide-y divide-default-200">
                        <thead class="bg-default-100/75">
                           <tr>
                              <th scope="col" class="whitespace-nowrap px-6 py-3 text-start text-base font-medium text-default-500">Dish</th>
                              <th scope="col" class="whitespace-nowrap px-6 py-3 text-start text-base font-medium text-default-500">Category</th>
                              <th scope="col" class="whitespace-nowrap px-6 py-3 text-start text-base font-medium text-default-500">Price</th>
                              <th scope="col" class="whitespace-nowrap px-6 py-3 text-start text-base font-medium text-default-500">Actions</th>
                           </tr>
                        </thead>
                        <tbody class="divide-y divide-default-200">
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Italian Pizza">
                                    <h5 class="text-base font-medium text-default-700">Italian Pizza</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Pizza</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 79</td>
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Veg Burger">
                                    <h5 class="text-base font-medium text-default-700">Veg Burger</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Burger</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 488</td>
                              
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Spaghetti">
                                    <h5 class="text-base font-medium text-default-700">Spaghetti</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Noodles</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 23</td>
                             
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Red Velvet Cake">
                                    <h5 class="text-base font-medium text-default-700">Red Velvet Cake</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Dessert</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 350</td>
                           
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Mix Salad">
                                    <h5 class="text-base font-medium text-default-700">Mix Salad</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Appetizers</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 645.2</td>
                            
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Espresso Coffee">
                                    <h5 class="text-base font-medium text-default-700">Espresso Coffee</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Coffee</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 419.45</td>
                             
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Steamed Dumplings">
                                    <h5 class="text-base font-medium text-default-700">Steamed Dumplings</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Appetizers</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 58.5</td>
                             
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Gujarati Thali">
                                    <h5 class="text-base font-medium text-default-700">Gujarati Thali</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Appetizers</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 58.5</td>
                            
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Chickenpea Hummus">
                                    <h5 class="text-base font-medium text-default-700">Chickenpea Hummus</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Appetizers</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 58.5</td>
                             
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                       <line x1="10" x2="10" y1="11" y2="17"></line>
                                       <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="whitespace-nowrap px-6 py-4">
                                 <div class="flex items-start gap-3">
                                    <img src="" width="48" height="48" class="h-12 w-12 rounded-full" alt="Butter Cookies">
                                    <h5 class="text-base font-medium text-default-700">Butter Cookies</h5>
                                 </div>
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800"> Dessert</td>
                              <td class="whitespace-nowrap px-6 py-4 text-base text-default-800">$ 665</td>
                            
                              <td class="px-6 py-4">
                                 <div class="flex gap-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                       <path d="m15 5 4 4"></path>
                                    </svg>
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M3 6h18"></path>
                                       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
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
   <div class="xl:col-span-1">
      <div class="mb-6 rounded-lg border border-default-200">
         <div class="border-b border-b-default-300 p-6">
            <h4 class="text-xl font-medium text-default-900">Seller Personal Detail</h4>
         </div>
         <div class="px-6 py-5">
            <table cellpadding="10">
               <tbody>
                  <tr>
                     <td class="text-start text-base font-medium">Email:</td>
                     <td class="text-start">{{ singleRestLocal.email }}</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Contact No:</td>
                     <td class="text-start">{{ singleRestLocal.contactNumber }}</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Address:</td>
                     <td class="text-start">{{ singleRestLocal.address }}</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Monday</td>
                     <td class="text-start">start to end</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Tuesday</td>
                     <td class="text-start">start to end</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Wednesday</td>
                     <td class="text-start">start to end</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Thursday</td>
                     <td class="text-start">start to end</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Friday</td>
                     <td class="text-start">start to end</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Saturday</td>
                     <td class="text-start">start to end</td>
                  </tr>
                  <tr>
                     <td class="text-start text-base font-medium">Sunday</td>
                     <td class="text-start">start to end</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>
<!-- components end -->
   </div>
</div>
</template>
  
<script setup>
import { ref,onMounted,defineProps } from 'vue';
import { useSuperAdminStore } from '@/stores/superAdmin';
import { storeToRefs } from "pinia";

const singleRestLocal = ref({name:"", address: "", contactNumber: "", email: "", description: "", operatingHours: ""})
const superAdminStore = useSuperAdminStore();
const {fetchSingleRest} = superAdminStore;
const {singleRest} = storeToRefs(superAdminStore);
const props = defineProps({
  id:String,
})
onMounted( async() => {
  await fetchSingleRest(props.id);
  singleRestLocal.value= await singleRest.value.data;
})

</script>
  
  <style scoped>
  </style>
  