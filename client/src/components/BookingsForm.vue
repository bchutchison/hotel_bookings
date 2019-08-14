<template lang="html">
  <form class="form" @submit="handleSubmit" id="bookings-form">
    <div class="wrapper">
      <label for="name">Name</label>
      <input v-model="name" id="name" type="text" required>
    </div>
    <div class="wrapper">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="text" required>
    </div>
    <div class="wrapper">
      <label for="checked-in">Checked In</label>
      <input v-model="checkedIn" type="checkbox" name="checked-in">
    </div>
    <input type="submit" value="Add Booking">
  </form>
</template>

<script>
import BookingService from '../services/BookingService.js';
import { eventBus } from '@/main.js';

export default {
  name: 'bookings-form',
  data() {
    return {
      name: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      const payload = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };
      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}
</script>

<style lang="css" scoped>

form {
    font-family: helvetica;
    line-height: 15px;
    position: sticky;
    top: 0px;
    background-color: white;
}

input[type=text] {
  width: 30%;
  padding: 10px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  display: block;
}

input[type=submit] {
  width: 20%;
  background-color: green;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
}

input[type=submit]:hover {
  background-color: #45a049;
}

</style>
