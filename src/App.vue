<template>
  <div id="app">
     <Topbar class="topbar"/> 
  <div id="main">
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
#main .sidebar{

}
</style>
