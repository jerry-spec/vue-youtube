<template>
  <div class="app-main-layout">
    <!-- navbar -->
    <Navbar @click="show = !show" />
    <!-- navbar end  -->
    <!-- sidebar  -->
    <Sidebar v-model="show" />
    <!-- sidebar end -->
    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
  name: 'main-layout',
  data: () => ({
    show: false
  }),
  components: {
    Navbar,
    Sidebar
  }
}
</script>
