<template>
  <div class="movingTruck col-10 offset-1 mb-4">
    <p class="mb-2">Moving Truck</p>
    <p class="truckItems">
      <items v-for="item in items" :key="item.id" :itemData="item" />
    </p>
  </div>
</template>


<script>
import Items from "../components/Item";
export default {
  name: "movingTruck",
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  methods: {},
  components: {
    Items
  }
};
</script>


<style scoped>
.movingTruck {
  height: 20vh;
  border: 2px;
  border-color: black;
  border-style: solid;
  background-color: white;
}

.truckItems {
  display: flex;
  justify-content: space-evenly;
}
</style>