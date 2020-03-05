<template>
  <div class="item" draggable="true" v-on:dragstart.capture="moving" v-on:dragend="dropped">
    <img :src="itemData.url" alt="oops" />
  </div>
</template>


<script>
export default {
  name: "item",
  props: ["itemData", "roomId"],
  data() {
    return {
      isMoving: true
    };
  },
  computed: {},
  methods: {
    moving(event) {
      let from = "truck";
      if (this.roomId) {
        from = this.roomId;
      }
      event.dataTransfer.setData("data", JSON.stringify(this.itemData));
      event.dataTransfer.setData("from", from);
      console.log("moving");
    },
    dropped() {
      console.log("the item has dropped");
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 5vh;
  width: 4vw;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}
</style>