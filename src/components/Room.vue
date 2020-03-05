<template>
  <div
    class="Rooms col-6"
    droppable="true"
    v-on:drop.capture="addItem"
    ondragover="event.preventDefault()"
  >
    {{roomData.name}}
    <div class="roomItems">
      <items v-for="item in roomData.items" :itemData="item" :key="item.id" :roomId="roomData.id" />
    </div>
  </div>
</template>


<script>
import Items from "../components/Item";
export default {
  name: "rooms",
  props: ["roomData"],
  data() {
    return {};
  },
  methods: {
    addItem(event) {
      //get the item off of the event storage
      let item = JSON.parse(event.dataTransfer.getData("data"));
      //get the starting location off of the event storage
      let from = event.dataTransfer.getData("from");
      //add the item to the room's items
      this.roomData.items.push(item);
      // if it came from the truck remove from truck
      if (from == "truck") {
        this.$store.commit("removeFromTruck", item.id);
        //otherwise remove it from its previous room
      } else {
        this.$store.commit("removeFromRoom", {
          roomId: from,
          itemId: item.id
        });
      }
    }
  },
  components: {
    Items
  }
};
</script>


<style scoped>
.Rooms {
  height: 30vh;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}

.roomItems {
  display: flex;
  justify-content: space-evenly;
}
</style>