<template>
  <div class="container">

    <section class="filter-section">
      <h2>Filter</h2>
      <b-field>
        <b-slider v-model="priceRange" :min="0" :max="500" :step="0.5" ticks>
        </b-slider>
      </b-field>
    </section>

    <section class="shifts-section">
      <div class="is-flex">
        <h2>Shifts</h2>
        <b-button type="is-primary" @click="isSidebarOpen = true">ADD SHIFT</b-button>
      </div>
      <shifts-view :priceRange="priceRange"/>
    </section>

    <create-shift-popup v-model="isSidebarOpen"/>

  </div>
</template>

<script>
import CreateShiftPopup from "~/components/CreateShiftPopup";
import ShiftsView from "~/components/ShiftsView";

export default {
  data() {
    return {
      priceRange: [0, 500],
      isSidebarOpen: false
    };
  },
  components: {
    CreateShiftPopup,
    ShiftsView
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px; /* or whatever width you prefer */
  height: 100%;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
}
</style>
