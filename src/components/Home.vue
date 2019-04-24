<template>
  <el-container>
    <el-header>
      <div class="logo-box">
        <img src="../assets/img/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout()">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isshow ? '65px' : '200px'">
        <div
          class="toggle_bar"
          @click="isshow = !isshow"
          :style="{ width: isshow ? '65px' : '200px' }"
        >
          |||
        </div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse-transition="false"
          :collapse="isshow"
        >
          <el-submenu
            v-for="(item, k) in menuList"
            :key="item.id"
            :index="item.path"
            :style="{ width: isshow ? '65px' : '200px' }"
          >
            <template slot="title">
              <i :class="'iconfont icon-' + iconList[k]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              v-for="item2 in item.children"
              :key="item2.id"
              :index="item.id + '-' + item2.id"
            >
              <i class="el-icon-menu"></i>
              <span>{{ item2.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    this.getMenuList()
  },
  methods: {
    logout() {
      this.$confirm('退出？', '退出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.sessionStorage.removeItem('token')
        this.$router.push('/login')
      })
    },
    async getMenuList() {
      const { data: dt } = await this.$http.get('/menus')
      console.log(dt)
      if (dt.meta.status !== 200) {
        return this.$message.error(dt.meta.msg)
      }
      this.menuList = dt.data
    }
  },
  data() {
    return {
      iconList: ['users', 'tijikongjian', 'shangpin', 'danju', 'baobiao'],
      menuList: [],
      isshow: false
    }
  }
}
</script>

<style lang="less">
.el-container {
  height: 100%;
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #373d41;
    padding: 0;
    padding-right: 20px;
    .logo-box {
      font-size: 22px;
      color: #fff;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
}
.el-aside {
  background-color: #333744;
  .toggle_bar {
    width: 200px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background-color: #4a5064;
    letter-spacing: 0.1em;
    cursor: pointer;
    user-select: none;
  }
}
.el-main {
  background: #eaedf1;
}
</style>
