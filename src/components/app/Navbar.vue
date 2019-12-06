<template>
  <nav class="navbar teal">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <div class="hide-on-large-only">
          <div class="nav-icon" @click="$emit('click', show = !show )" :class="{open:show}">
            <div></div>
          </div>
        </div>
        <ul class="hide-on-med-and-down">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
          >
            <a href="#" class="waves-effect waves-teal pointer black-text">{{link.title}}</a>
          </router-link>
        </ul>
      </div>

      <ul class="right">
        <li>
          <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    show: false,
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' }
    ]
  }),
  mounted () {
    window.M.Dropdown.init(this.$refs.dropdown, {
      coverTrigger: false
    })
  },
  methods: {
    logout () {
      this.$router.push('/login?message=logout')
    }
  }
}
</script>
