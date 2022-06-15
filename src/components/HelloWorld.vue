<template>
  <div id="camera">
    <div>
      <video ref="video" id="video" width="100%" height="100%" autoplay/>
    </div>
    <div>
        <input type="file" accept="image/*" capture="camera" />
    </div>
    <canvas ref="canvas" id="canvas" width="100%" height="100%"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
