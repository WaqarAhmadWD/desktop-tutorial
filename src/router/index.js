import { createRouter, createWebHistory } from "vue-router";
import singlemenu from "@/views/menus/MenusDetails.vue";
import editMenus from "@/views/menus/editMenus.vue";
import userList from "@/views/User/userList.vue";
import editUser from "@/views/User/userEdit.vue";
import addRestaurant from "@/views/restaurant/addRestaurant.vue";
import restaurantList from "@/views/restaurant/restaurantList.vue";
import viewRestaurant from "@/views/restaurant/viewRestaurant.vue";
import editRestaurant from "@/views/restaurant/editRestaurant.vue";
import notification from "@/views/notifications.vue";
import addTable from "@/views/table/addTable.vue";
import tableList from "@/views/table/tableList.vue";
import BookingsList from "@/views/bookings/bookingsList.vue";
import AddBooking from "@/views/bookings/addBooking.vue";
import BookingDetails from "@/views/bookings/bookingDetails.vue";
import EditBooking from "@/views/bookings/editBooking.vue";
import EditTable from "@/views/table/editTable.vue";
import Order_details from "@/views/order/order_details.vue";
import Dashboard from "@/views/dashboard.vue";
import MenusDetails from "@/views/menus/MenusDetails.vue";
import AddMenus from "@/views/menus/addMenus.vue";
import Order_list from "@/views/order/order_list.vue";
import AddUser from "@/views/User/AddUser.vue";
import UserDetails from "@/views/User/userDetails.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //dashboard
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    //order
    {
      path: "/order-list",
      name: "order list",
      component: Order_list,
    },
    {
      path: "/order-details",
      name: "order details",
      component: Order_details,
    },
    //menu
    {
      path: "/menu-list",
      name: "menuList",
      component: singlemenu,
    },
    {
      path: "/single-menu/:id",
      name: "singleMenu",
      component: MenusDetails,
      props: true,
    },
    {
      path: "/menu-add",
      name: "add menu",
      component: AddMenus,
    },
    {
      path: "/menu-edit/:id",
      name: "editMenu",
      component: editMenus,
      props: true,
    },
    // user
    {
      path: "/user-list",
      name: "user list",
      component: userList,
    },
    {
      path: "/add-user",
      name: "add user",
      component: AddUser,
    },
    {
      path: "/edit-user/:id",
      name: "editUser",
      component: editUser,
      props: true,
    },
    {
      path: "/user-details/:id",
      name: "userDetails",
      component: UserDetails,
      props: true,
    },
    //restaurant
    {
      path: "/restaurant-list",
      name: "restaurant list",
      component: restaurantList,
    },
    {
      path: "/restaurant-details/:id",
      name: "restaurantDetails",
      component: viewRestaurant,
      props: true,
    },
    {
      path: "/restaurant-add",
      name: "restaurant add",
      component: addRestaurant,
    },
    {
      path: "/restaurant-edit/:id",
      name: "restaurantEdit",
      component: editRestaurant,
      props: true,
    },
    {
      path: "/notification",
      name: "notification",
      component: notification,
    },
    //table
    {
      path: "/add-table",
      name: "add table",
      component: addTable,
    },
    {
      path: "/edit-table/:id",
      name: "editTable",
      component: EditTable,
      props: true,
    },
    {
      path: "/list-table",
      name: "list table",
      component: tableList,
    },
    // bookings
    {
      path: "/bookings-list",
      name: "Bookings",
      component: BookingsList,
    },
    {
      path: "/add-booking",
      name: "Add Bookings",
      component: AddBooking,
    },
    {
      path: "/booking-detail",
      name: "Booking Details",
      component: BookingDetails,
    },
    {
      path: "/edit-booking",
      name: "Edit Booking",
      component: EditBooking,
    },
  ],
});
export default router;