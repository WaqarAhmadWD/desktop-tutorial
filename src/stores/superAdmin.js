import { ref } from "vue";
import { defineStore } from "pinia";
import superAdminInstance from "@/server/superAdminInstance";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

export const useSuperAdminStore = defineStore("superAdmin", () => {
  const router = useRouter();
  const restaurants = ref(null);
  const users = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const singleRest = ref(null);
  const singleUser = ref(null);

  const setError = (err) => {
    error.value = err;
  };

  //  Fetch Restaurants

  const fetchRest = async () => {
    loading.value = true;
    try {
      const res = await superAdminInstance.get("restaurant-get");
      const data = res.data;
      if (data.success) {
        loading.value = false;
        restaurants.value = data.data;
      } else {
        loading.value = false;
        error.value = data;
        Swal.fire({
          icon: "error",
          title: "Couldn't fetch data",
          text: data,
          padding: "2em",
        });
      }
    } catch (err) {
      loading.value = false;
      error.value = err;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: err,
        padding: "2em",
      });
    }
  };

  // Create Restaurant
  const createRest = async (payload) => {
    loading.value = true;
    try {
      const res = await superAdminInstance.post("restaurants", { ...payload });
      const data = res.data;
      console.log(data);
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Good job!",
          // text: 'You clicked the!',
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Table list",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/restaurant-list");
          }
        });
      } else {
        loading.value = false;
        setError(data);
        Swal.fire({
          icon: "error",
          title: "Couldn't add",
          text: data,
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Internal Server Error",
        text: error,
        padding: "2em",
      });
    }
  };

  // Edit Restaurant

  const editRest = async (payload) => {
    loading.value = true;
    try {
      const {
        name,
        address,
        contactNumber,
        email,
        description,
        operatingHours,
      } = payload;
      const res = await superAdminInstance.put("restaurants/" + payload._id, {
        name,
        address,
        contactNumber,
        email,
        description,
        operatingHours,
      });
      const data = await res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Data edited successfully",
          // text: 'You clicked the!',
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Restaurant list",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/restaurant-list");
          }
        });
      } else {
        loading.value = false;
        setError(data.data);
        Swal.fire({
          icon: "error",
          title: "Couldn't edit",
          // text: 'You clicked the!',
          padding: "2em",
        });
      }
    } catch (error) {
      setError(error);
      loading.value = false;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        // text: 'You clicked the!',
        padding: "2em",
      });
    }
  };

  // Fetch Single Restaurant
  const fetchSingleRest = async (id) => {
    loading.value = true;
    try {
      const res = await superAdminInstance.get("restaurants-get/" + id);
      const data = res.data;
      if (data.success) {
        loading.value = false;
        singleRest.value = data;
      } else {
        loading.value = false;
        error.value = data;
        Swal.fire({
          icon: "error",
          title: "Couldn't fetch data",
          text: data,
          padding: "2em",
        });
      }
    } catch (err) {
      loading.value = false;
      error.value = err;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: err,
        padding: "2em",
      });
    }
  };

  // Delete Restaurant

  const deleteRest = async (id) => {
    loading.value = true;
    try {
      const res = await superAdminInstance.delete("restaurants/" + id);
      const data = await res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Data deleted successfully",
          text: "You clicked the!",
          padding: "2em",
        });
      } else {
        loading.value = false;
        setError(data.data);
        Swal.fire({
          icon: "error",
          title: "Couldn't delete",
          text: "You clicked the!",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: "You clicked the!",
        padding: "2em",
      });
    }
  };

  // Fetch Users
  const fetchUsers = async () => {
    loading.value = true;
    try {
      const res = await superAdminInstance.get("user-get");
      const data = await res.data;
      if (data.success) {
        loading.value = false;
        users.value = data.data;
      } else {
        loading.value = false;
        setError(data.data);
        Swal.fire({
          icon: "error",
          title: "Couldn't fetch data",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };

  // Create Users

  const createUser = async (payload) => {
    loading.value = true;
    try {
      const res = await superAdminInstance.post("users", { ...payload });
      const data = await res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Good job!",
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Table list",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/user-list");
          }
        });
      } else {
        loading.value = false;
        Swal.fire({
          icon: "error",
          title: "Couldn't add",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Internal Server Error",
        padding: "2em",
      });
    }
  };

  // Edit User
  const editUser = async (payload) => {
    loading.value = true;
    try {
      const { fullName, email, role, associatedRestaurant } = payload;
      console.log({
        fullName,
        email,
        role,
        associatedRestaurant,
      });
      const res = await superAdminInstance.put(`users/${payload._id}`, {
        fullName,
        email,
        role,
        associatedRestaurant,
      });
      const data = await res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Data edited successfully",
          padding: "2em",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "user list",
          closeOnConfirm: false,
        }).then((result) => {
          if (result.value) {
            router.push("/user-list");
          }
        });
      } else {
        loading.value = false;
        setError(data.data);
        Swal.fire({
          icon: "error",
          title: "Couldn't edit",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        padding: "2em",
      });
    }
  };

  // Fetch Single Restaurant
  const fetchSingleUser = async (id) => {
    loading.value = true;
    try {
      const res = await superAdminInstance.get("users-get/" + id);
      const data = res.data;
      if (data.success) {
        loading.value = false;
        singleUser.value = data;
      } else {
        loading.value = false;
        error.value = data;
        Swal.fire({
          icon: "error",
          title: "Couldn't fetch data",
          text: data,
          padding: "2em",
        });
      }
    } catch (err) {
      loading.value = false;
      error.value = err;
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: err,
        padding: "2em",
      });
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    loading.value = true;
    try {
      const res = await superAdminInstance.delete("users/" + id);
      const data = await res.data;
      if (data.success) {
        loading.value = false;
        Swal.fire({
          icon: "success",
          title: "Data deleted successfully",
          text: "You clicked the!",
          padding: "2em",
        });
      } else {
        loading.value = false;
        setError(data.data);
        Swal.fire({
          icon: "error",
          title: "Couldn't delete",
          text: "You clicked the!",
          padding: "2em",
        });
      }
    } catch (error) {
      loading.value = false;
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Internal server error",
        text: "You clicked the!",
        padding: "2em",
      });
    }
  };

  return {
    loading,
    fetchRest,
    restaurants,
    fetchSingleRest,
    singleRest,
    createRest,
    editRest,
    deleteRest,
    fetchUsers,
    users,
    createUser,
    editUser,
    fetchSingleUser,
    singleUser,
    deleteUser,
  };
});
