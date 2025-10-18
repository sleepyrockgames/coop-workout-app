<style>
main {
  text-align: center;
  padding: auto;
  margin: auto;
  width: 50%;
  border: 3px solid blue;
  padding: 10px;
}
#text-fields {
  margin: auto;
  padding: 5px auto;
  width: 50%;
  /*border: 3px solid blue;*/
}
h2 {
  text-align: center;
}
row {
  padding: 5px 0px;
}
</style>
<script setup>
import { ref } from "vue";
let count = ref(0);

function increment() {
  count++;
  print("AH");
}
</script>

<template>
  <main>
    <div>
      <p v-on:click="increment">The count is {{ count }}</p>

      <row>
        <button onclick="count++;">Increment</button>
      </row>
    </div>
  </main>
</template>
