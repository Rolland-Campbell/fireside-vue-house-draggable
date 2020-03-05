<template>
  <div class="home container-fluid p-5">
    <div class="row rowTop">
      <livingRoom />
      <kitchen />
    </div>
  </div>
</template>


<script>
import LivingRoom from "../components/LivingRoom";
import Kitchen from "../components/Kitchen";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    LivingRoom,
    Kitchen
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