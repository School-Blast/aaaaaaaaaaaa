<template>
  <div id="app">
    <Haders></Haders>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Haders from './components/Haders'
import Footers from './components/Route/Footers'
export default {
    name:"app",
    components:{Haders,Footers}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
