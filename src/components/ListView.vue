<!-- src/components/Listview.vue -->
<template>
  <div class="customer-list-container">
  <div style="padding:20px;">
  <h3>All Customers</h3>
  <h5 class="active-members">Active Members</h5>
  </div>
  <div class="table-container">
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
          <td @click="expandRow(customer)">{{ customer.name }}</td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.phone_no }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.country }}</td>
          <td>
            <button @click="active" style="color: green; background-color: #95E0CE;border:1px solid green;" class="btn btn-outline-success">Active</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>

import axios from '@/mock/mockApi';

export default {
  data() {
    return {
      customers: [],
    };
  },
  mounted() {
    this.fetchCustomers();
  },
  methods: {
    async fetchCustomers() {
      try {
        const response = await axios.get('/customers');
        this.customers = response.data;
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    },
    expandRow(customer) {
    console.log(customer);
      this.$router.push({ name: 'expanded', params: { id: customer.id } });
    },
    active() {
      this.$emit('active');
    },
  },
};
</script>

<style scoped>
.customer-list-container {
  width: 80%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 100px auto;
  padding: 20px;
}

.active-members {
  color: #95E0CE;
}
.table-container {
  padding: 20px;
  overflow-x: auto;
}
/* Media Query for Mobile Responsiveness */
@media (max-width: 825px) {
  .customer-list-container {
    width: 100%;
    margin: 50px auto;
  }
}
@media (max-width: 650px) {
  .customer-list-container {
    width: 90%;
  }
  .table-container {
    width: 100%;
  }
  .table {
    font-size: 12px; /* Adjusted font size for small screens */
  }
}
</style>
