<template>
  <div id="sidebar">
     <ul class="sidebar-icon oh fl">
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab ===i}"  v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true">
              <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
     </ul>
     <ul class="panes fl">
        <!-- <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab ===i}">tab {{i+1}}</li> -->
        <li v-bind:class="{active: currentTab ===0}">
              <Editorform v-bind:profile="profile"></Editorform>
        </li>
        <li v-bind:class="{active: currentTab ===1}">
            <h2>工作经历</h2>
              <el-form class="sidebar-form">
                    <div class="excel" v-for="(work,index) in workHistory">            
                          <el-form-item  label="公司" >
                              <el-input v-model="work.company"></el-input>
                          </el-form-item>
                          <el-form-item  label="工作内容">
                              <el-input v-model="work.content"></el-input>
                           </el-form-item>     
                           <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>     
                    </div>
                    <el-button type="primary" v-on:click="addWorkHistory()">继续添加</el-button>
              </el-form>
        </li>
        <li v-bind:class="{active: currentTab ===2}">2</li>
        <li v-bind:class="{active: currentTab ===3}">3</li>
        <li v-bind:class="{active: currentTab ===4}">5</li>
        <li v-bind:class="{active: currentTab ===5}">6</li>
     </ul>
  </div>
</template>


<script>
import Editorform from "./Editorform";
export default {
  components: { Editorform },
  data() {
    return {
      currentTab: 0,
      icons: [
        "shenfenzhengzhengjian",
        "work",
        "book",
        "heart",
        "jiangbei1",
        "phone"
      ],
      labelPosition: "right",
      profile: {
        name: "",
        city: "",
        birth: ""
      },
      workHistory: [
        {
          company: "",
          content: ""
        }
      ]
    };
  },
  methods: {
    addWorkHistory() {
      this.workHistory.push({
        company: "",
        content: ""
      });
    },
    removeWorkHistory(index) {
      this.workHistory.splice(index, 1);
    }
  },
  created() {
    //  console.log(this.profile)
  }
};
</script>

<style>
.sidebar,
.sidebar-icon {
  height: 100%;
}
.sidebar-icon {
  border-radius: 4px 0 0 4px;
  width: 15%;
  background: #000;
}
.icon {
  fill: #fff;
  width: 24px;
  height: 24px;
}
.sidebar-icon li {
  height: 48px;
  text-align: center;
  margin: 16px 0;
}
.sidebar-icon li .icon {
  display: block;
  margin: 0 auto;
  padding-top: 12px;
}
.sidebar-icon .active {
  background: #fff;
}
.sidebar-icon .active .icon {
  fill: #000;
}
.panes {
  width: 85%;
  height: 100%;
  overflow: auto;
}
.panes li {
  display: none;
}
.panes li:nth-child(2) {
  overflow: auto;
  height: 100%;
}
.panes .active {
  display: block;
}
.sidebar-form {
  display: inline-block;
  width: 70%;
  margin-left: 20px;
}
.excel {
  position: relative;
}
.el-icon-circle-close {
  position: absolute;
  right: 0;
  top: 10px;
}
</style>