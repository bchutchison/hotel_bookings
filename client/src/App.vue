<template lang="html">
  <div id="app">
    <div class="title">
      <h1>Hotel Bookings</h1>
    </div>
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

.title {
  position: sticky;
  top: 0px;
  background-color: white;
  padding-bottom: 5px;
  z-index: 10;
}

</style>
