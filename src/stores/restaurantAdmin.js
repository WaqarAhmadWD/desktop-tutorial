import { ref } from "vue";
import { defineStore } from "pinia";
import restaruantAdminInstance from "@/server/restaurantAdminInstance.js";
import Swal from "sweetalert2";
import restaurantAdminInstance from "@/server/restaurantAdminInstance.js";
import { useRouter } from "vue-router";
export const useRestaurantAdminStore = defineStore("restaurantAdmin", () => {
  const router = useRouter();
  // states
  const booking = ref(null);
  const menu = ref(null);
  const table = ref(null);
  const order = ref(null);
  const singleBooking = ref(null);
  const singleMenu = ref(null);
  const singleTable = ref(null);
  const singleOrder = ref(null);
  const errors = ref({});
  const loading = ref(false);
  // fetch methods
  const fetchBooking = async () => {
    loading.value = true;
    try {
      const response = await restaruantAdminInstance.get("bookings-get");
      const data = response.data;
      if (data.success) {
        booking.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "Couldn't fetch data",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      errors.value = error;
      loading.value = false;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
      });
    }
    loading.value = false;
  };
  const fetchMenu = async () => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.get("menuget");
      const data = res.data;
      if (data.success) {
        menu.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't fetch data",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };
  const fetchTable = async () => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.get("table-get");
      const data = res.data;
      if (data.success) {
        table.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't fetch data",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };
  const fetchOrder = async () => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.get("getorder");
      const data = res.data;
      if (data.success) {
        order.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't fetch data",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };
  // single fetch methods
  const fetchSingleBooking = async (id) => {
    loading.value = true;
    try {
      const response = await restaruantAdminInstance.get("bookings/" + id);
      const data = response.data;
      if (data.success) {
        singleBooking.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "Couldn't fetch data",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      errors.value = error;
      loading.value = false;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
      });
    }
    loading.value = false;
  };
  const fetchSingleMenu = async (id) => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.get("menugets/" + id);
      const data = res.data;
      if (data.success) {
        singleMenu.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't fetch data",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };
  const fetchSingleTable = async (id) => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.get("table/" + id);
      const data = res.data;
      if (data.success) {
        singleTable.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't fetch data",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };
  const fetchSingleOrder = async (id) => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.get("orderget/" + id);
      const data = res.data;
      if (data.success) {
        singleOrder.value = await data.data;
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't fetch data",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };
  // edit methods
  const editBooking = async (payload) => {
    try {
      loading.value = true;
      const { customerName, customerContact, date, time, specialRequests } =
        payload;
      loading.value = true;
      console.log(payload._id);
      const res = await restaruantAdminInstance.put(
        "api/bookings/" + payload._id,
        {
          customerName,
          customerContact,
          date,
          time,
          specialRequests,
        }
      );
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "data edited successfully",
          // text: "You clicked the!",
          padding: "2em",
        });
        loading.value = false;
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't edited",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      errors.value = error;
      loading.value = false;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
      });
    }
  };
  const editMenu = async (payload) => {
    loading.value = true;
    try {
      const {
        name,
        description,
        price,
        nutritionalInfo,
        imageUrl,
        availability,
        category,
      } = payload;
      const { calories, carbs, fat, protein } = nutritionalInfo;
      const res = await restaruantAdminInstance.put("update/" + payload._id, {
        name,
        description,
        price,
        nutritionalInfo: { calories, carbs, fat, protein },
        imageUrl,
        availability,
        category,
      });
      console.log(res);
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "data edited successfully",
          // text: "You clicked the!",
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Table list",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/menu-list");
          }
        });
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't edited",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
      });
    }
  };
  const editTable = async (payload) => {
    try {
      loading.value = true;
      const { _id, tableNumber, capacity, status } = payload;
      const res = await restaruantAdminInstance.put(
        "http://127.0.0.1:4000/api/table/" + payload._id,
        {
          tableNumber,
          capacity,
          status,
        }
      );
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "data edited successfully",
          // text: "You clicked the!",
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Table list",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/list-table");
          }
        });
      } else {
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't edited",
          text: data.data,
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Table list",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/list-table");
          }
        });
        router.push("/list-table");
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Table list",
        closeOnConfirm: false,
      }).then((result) => {
        if (result.value) {
          router.push("/list-table");
        }
      });

      router.push("/");
    }
  };
  // delete
  const deleteBooking = async (id) => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.delete(
        "http://127.0.0.1:4000/api/bookings/" + id
      );
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "data deleted successfully",
          // text: "You clicked the!",
          padding: "2em",
        });
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't delete",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      errors.value = data.data;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
      });
    }
  };
  const deleteMenu = async (id) => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.delete("delete/" + id);
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "data deleted successfully",
          // text: "You clicked the!",
          padding: "2em",
        });
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't delete",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
      });
    }
  };
  const deleteTable = async (id) => {
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.delete(
        "http://127.0.0.1:4000/api/table/" + id
      );
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "data deleted successfully",
          // text: "You clicked the!",
          padding: "2em",
        });
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't delete",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = data.data;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: error,
        padding: "2em",
      });
    }
  };
  // create
  const createBooking = async (payload) => {
    loading.value = true;
    try {
      loading.value = true;
      const res = await restaruantAdminInstance.post(
        "http://127.0.0.1:4000/api/bookings",
        { ...payload }
      );
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Good job!",
          padding: "2em",
        });
      } else {
        loading.value = false;
        errors.value = data.data;
        Swal.fire({
          icon: "error",
          title: "couldn't added",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal Server Error",
        text: error,
        padding: "2em",
      });
    }
  };
  const createMenu = async (payload) => {
    const {
      name,
      description,
      price,
      nutritionalInfo,
      imageUrl,
      availability,
      category,
    } = payload;
    const { calories, carbs, fat, protein } = nutritionalInfo;
    console.log({
      name,
      description,
      price,
      nutritionalInfo: { calories, carbs, fat, protein },
      imageUrl,
      availability,
      category,
    });
    loading.value = true;
    try {
      const res = await restaurantAdminInstance.post("menu", {
        name,
        description,
        price,
        nutritionalInfo: { calories, carbs, fat, protein },
        imageUrl,
        availability,
        category,
      });
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Good job!",
          padding: "2em",
        });
      } else {
        loading.value = false;
        Swal.fire({
          icon: "error",
          title: "couldn't added",
          text: data.data,
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal Server Error",
        text: error,
        padding: "2em",
      });
    }
  };
  const createTable = async (payload) => {
    loading.value = true;
    try {
      const res = await restaruantAdminInstance.post(
        "http://127.0.0.1:4000/api/table",
        { ...payload }
      );
      const data = res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Good job!",
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "View New Data",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/list-table");
          }
        });
      } else {
        loading.value = false;
        Swal.fire({
          icon: "error",
          title: "couldn't added",
          text: data,
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      errors.value = error;
      Swal.fire({
        icon: "error",
        title: "Internal Server Error",
        text: error,
        padding: "2em",
      });
    }
  };
  return {
    loading,
    errors,
    fetchBooking,
    fetchMenu,
    fetchTable,
    fetchOrder,
    fetchSingleBooking,
    fetchSingleMenu,
    fetchSingleTable,
    fetchSingleOrder,
    editBooking,
    editMenu,
    editTable,
    deleteBooking,
    deleteMenu,
    deleteTable,
    createBooking,
    createMenu,
    createTable,
    booking,
    menu,
    table,
    order,
    singleBooking,
    singleTable,
    singleOrder,
    singleMenu,
  };
});
