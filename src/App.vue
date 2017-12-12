<template>
  <div id="app">
     <Topbar class="topbar"/> 
  <div id="main" class="clearfix">
    <Sidebar class="sidebar fl"/>
    <Editor class="editor fl"/>
  </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

export default {
  components: {
    Topbar,Sidebar,Editor
  }
}
</script>

<style>
html,body,#app{height:100%; overflow:hidden;}
#app{
  background:#eaebec;
}
#main{
  margin:15px auto;
  max-width:1440px;
 height:87%;
  
}
#main .sidebar{
 min-width:35%;
 border-radius:4px;
 background:#fff;
 box-shadow:0 1px 8px 0 rgba(0, 0, 0, 0.25);
}
</style>
