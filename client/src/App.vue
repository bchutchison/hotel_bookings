<template lang="html">
  <div id="app">
    <h1>Hotel Bookings</h1>
    <bookings-form />
    <bookings-grid />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  }
}
</script>

<style lang="css" scoped>

#app {
    font-family: helvetica;
}

</style>
