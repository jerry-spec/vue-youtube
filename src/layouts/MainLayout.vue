<template>
  <div class="app-main-layout">
    <!-- navbar -->
    <nav>
      <div class="nav-wrapper teal">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <div class="pl-5 navbar-left">
          <ul class="black-text hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">Javascript</a>
            </li>
            <li>
              <a href="mobile.html">Mobile</a>
            </li>
          </ul>
        </div>

        <ul class="right hide-on-small-and-down">
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
    <!-- navbar end  -->
    <!-- <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger black-text"
                href="#"
                data-target="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
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
    </nav>-->

    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="#" class="waves-effect waves-teal pointer">Счет</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">История</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Планирование</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Категории</a>
      </li>
    </ul>

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
