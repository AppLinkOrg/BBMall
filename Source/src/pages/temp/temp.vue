<template>
  <div>
    <div class="height-40"></div>
    <div class="padding">
      hello
    </div>
    <div class="height-50"></div>
  </div>
</template>
<script>
import { AppBase } from "../../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data){
    return data;
  }
}
var content = new Content();
var body = content.generateBodyJson();

export default body;
</script>