<template>
  <nav>
    <div class="nav-wrapper teal">
      <transition name="fade" mode="out-in">
        <i
          class="material-icons menu hide-on-large-only"
          v-if="!show"
          @click="$emit('click')"
          key="menu"
        >menu</i>
        <i
          class="material-icons clear hide-on-large-only"
          v-else
          @click="$emit('click')"
          key="clear"
        >clear</i>
      </transition>
      <div class="pl-5 navbar-left">
        <ul class="black-text hide-on-med-and-down">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
          >
            <a href="#" class="waves-effect waves-teal pointer">{{link.title}}</a>
          </router-link>
        </ul>
      </div>

      <ul class="right">
        <li>
          <a class="dropdown-trigger black-text" href="#" data-target="dropdown">
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <a href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text">
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
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' }
    ],
    show: false
  })
}
</script>
