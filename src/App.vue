<template lang="html">
  <div class="main">
    <nav-bar></nav-bar>
    <cq-section title="按钮 (Button)">
      <cq-button>中文</cq-button>
      <cq-button class="cq-raised" href="http://www.baidu.com">中文</cq-button>
      <cq-button class="cq-primary">中文</cq-button>
      <cq-button class="cq-primary cq-raised">中文</cq-button>
      <cq-button class="cq-accent cq-raised">中文</cq-button>
      <cq-button class="cq-warn cq-raised">中文</cq-button>
      <br/><br/>

      <cq-button-group class="cq-primary">
        <cq-button class="cq-toggle">中文</cq-button>
        <cq-button class="cq-toggle">EN</cq-button>
        <cq-button class="cq-toggle">其他</cq-button>
      </cq-button-group>
      <cq-button-group class="cq-accent" single>
        <cq-button>中文</cq-button>
        <cq-button disabled>EN</cq-button>
        <cq-button class="cq-toggle">其他</cq-button>
      </cq-button-group>
      <cq-button class="cq-icon-button"> + </cq-button>
      <cq-button class="cq-icon-button cq-raised"> + </cq-button>
      <cq-button class="cq-icon-button cq-primary cq-raised"> + </cq-button>
      <cq-button class="cq-icon-button cq-accent cq-raised"> + </cq-button>
      <cq-button class="cq-icon-button cq-warn cq-raised"> + </cq-button>
    </cq-section>

    <cq-section title="图标 (fontIcon)">
      <cq-icon class="cq-error">home</cq-icon>
      <cq-icon cd-theme="green">email</cq-icon>
      <cq-icon class="cq-primary" cq-iconset="fa fa-home"></cq-icon>
      <cq-icon class="cq-primary" cq-iconset="fa fa-bars"></cq-icon>
      <cq-icon class="cq-primary" cq-iconset="fa fa-users"></cq-icon>
    </cq-section>

    <cq-section title="输入框 (Input)">
      <cq-input-container>
        <label>账号</label>
        <cq-input></cq-input>
      </cq-input-container>
      <cq-input-container cq-has-password>
        <label>密码</label>
        <cq-input type="password"></cq-input>
      </cq-input-container>
      <cq-input-container>
        <cq-icon>phone</cq-icon>
        <label>电话</label>
        <cq-input></cq-input>
      </cq-input-container>
      <cq-input-container>
        <cq-icon>email</cq-icon>
        <label>邮箱</label>
        <cq-input required></cq-input>
      </cq-input-container>
      <cq-input-container class="cq-input-invalid">
        <cq-icon>home</cq-icon>
        <label>公司</label>
        <cq-input required></cq-input>
        <span class="cq-error">公司信息是必须的</span>
      </cq-input-container>
      <cq-input-container>
        <cq-icon>person</cq-icon>
        <label>身份证</label>
        <cq-input maxlength="18"></cq-input>
      </cq-input-container>
    </cq-section>

    <cq-section title="开关 (Switch)">
      <cq-switch v-model="switchValue">default</cq-switch>
      <cq-switch class="cq-primary" v-model="switchValue">primary</cq-switch>
      <cq-switch class="cq-warn" v-model="switchValue">warn</cq-switch>
      <cq-switch disabled>disabled</cq-switch>
    </cq-section>

    <cq-section title="提示框 (Tooltip)">
      <cq-button-group class="cq-primary">
        <cq-button class="cq-toggle">
          左
          <cq-tooltip cq-direction="left">我是提示框</cq-tooltip>
        </cq-button>
        <cq-button class="cq-toggle">
          上
          <cq-tooltip cq-direction="top">我是提示框</cq-tooltip>
        </cq-button>
        <cq-button class="cq-toggle">
          下
          <cq-tooltip cq-direction="bottom">我是提示框</cq-tooltip>
        </cq-button>
        <cq-button class="cq-toggle">
          右
          <cq-tooltip cq-direction="right">我是提示框</cq-tooltip>
        </cq-button>
      </cq-button-group>
    </cq-section>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      switchValue: true
    }
  }
}
</script>

<style lang="scss">
$bg-color: #ebf0f0;
body, html {
  background: $bg-color;
}
.main {
  padding: 52px 0;
  background: $bg-color;
  transform: translate3d(0, 0, 0);
}
.content {
  padding: 0;
}
</style>
