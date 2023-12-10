<!-- src/components/ExpandedView.vue -->
<template>
  <div style="width: 80%;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; margin: 100px auto;">
  <div style="padding:20px;">
  <h2>All Customers</h2>
  <h5>Active Members</h5>
  </div>
  <div style="padding:20px;">
    <table class="table">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Company</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.name }}</td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.phone_no }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.country }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
//import axios from '@/mock/mockApi';

export default {
  props: {
    customer: Object,
  },
};
</script>

<style scoped>
/* Add your custom styling here */
</style>
