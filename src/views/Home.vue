<template>
  <div class="home container-fluid p-5">
    <div class="row">
      <movingTruck />
    </div>
    <div class="row rowTop">
      <rooms v-for="room in rooms" :roomData="room" :key="room._id" />
    </div>
  </div>
</template>


<script>
import MovingTruck from "../components/MovingTruck";
import Rooms from "../components/Room";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    }
  },
  methods: {},
  components: {
    Rooms,
    MovingTruck
  }
};
</script>


<style scoped>
.home {
  background-color: teal;
  min-height: 100vh;
  margin: auto;
}

.rowTop {
  display: flex;
}
</style>