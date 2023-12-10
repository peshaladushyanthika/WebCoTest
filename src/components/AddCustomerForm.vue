<!-- src/components/AddCustomerForm.vue -->
<template>
  <form @submit.prevent="submitForm" class="container-sm p-5" style="max-width: 500px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; margin: 100px auto;">
    <div style="text-align:center;padding-bottom:20px;">
    <h1>Add New Customer</h1>
    </div>
    <div class="form-group" style="max-width: 500px; margin: 0 auto;padding-bottom:20px;">
      <label for="name">Name</label>
      <input type="text" class="form-control" v-model="customer.name" required>
    </div>

   <div class="form-group" style="max-width: 500px; margin: 0 auto;padding-bottom:20px;">
      <label for="dob">Date of Birth</label>
      <input type="date" class="form-control" v-model="customer.dob" required>
    </div>

    <div class="form-group" style="max-width: 500px; margin: 0 auto;padding-bottom:20px;">
      <label for="phone">Phone</label>
      <input type="tel" class="form-control" v-model="customer.phone" pattern="[0-9]{10}" required>
    </div>

    <div v-for="(address, index) in customer.addresses" :key="index" class="form-group" style="max-width: 500px; margin: 0 auto;padding-bottom:20px;">
      <label>Address</label>
      <input type="text" class="form-control" v-model="customer.addresses[index]" required>
    </div>
    <div style="margin-bottom:20px;text-align:right;">
    <button @click="deleteAddress(index)" class="btn btn-outline-success">DELETE</button>
    </div>

    <div v-if="showAddressInput" class="form-group" style="max-width: 500px; margin: 0 auto;padding-bottom:20px;">
      <label>Address:</label>
      <input type="text" class="form-control" v-model="newAddress" required>
      <button @click="addAddress" class="btn btn-outline-success" style="margin-top:20px;">ADD</button>
    </div>
<div style="max-width: 500px; margin: 0 auto;padding-bottom:20px;">
    <button @click="toggleAddressInput" class="btn btn-outline-success">ADD</button>
    <button type="submit" class="btn btn-outline-success" style="margin-left:20px;">SUBMIT</button>
    </div>
  </form>
</template>

<script>
//import { ref } from 'vue';

export default {
  data() {
    return {
      customer: {
        name: '',
        dob: '',
        phone: '',
        addresses: [''], // at least one address initially
      },
      showAddressInput: false, // flag to control visibility of additional address input
      newAddress: '', // store value of the additional address input
      customers: [],
    };
  },
  methods: {
    addAddress() {
      this.customer.addresses.push(this.newAddress);
      this.newAddress = ''; // clear the value after adding
      this.showAddressInput = false; // hide the input field
    },
    deleteAddress(index) {
      this.customer.addresses.splice(index, 1);
    },
    submitForm() {
      // Validate data and submit
      this.$emit('submit', this.customer);
      this.$router.push('/');
    },
    toggleAddressInput() {
      this.showAddressInput = !this.showAddressInput;
    },
  },
};
</script>

<style scoped>
/* Add your custom styling here */
</style>
