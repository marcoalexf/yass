<template>
  <nav>
      <ul class="nav-item-list">
          <li class="nav-item app-logo">
            <img
            width="50px"
            height="50px"
            src="https://image.freepik.com/free-vector/wild-animal-badges-set-great-outdoors-activity-insignias-retro-illustration-animal-badges-typographic-camping-style-wild-animal-logos-with-letterpress-effect-explorer-quotes_32991-518.jpg" />
          </li>
          <li class="nav-item">
            Link 1
          </li>
          <li class="nav-item">
            Link 2
          </li>
          <li class="nav-item">
            Link 3
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.nav-item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  flex-grow: 1;
  border: .5px solid #ccc;
  border-radius: 4px;
  margin: .5rem;
}

.app-logo {
  border: none;
  display: flex;
  align-items: flex-start;
}

ul {
  list-style: none;
}
</style>
