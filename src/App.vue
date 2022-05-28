<template>
  <v-app>
    <v-main class="mn">

      <router-view />
      <div class="bar">
        <div class="menuEl">
          <v-img class="sImg" :src="require('./assets/Home.png')" max-width="22px" max-height="22px" />
          <div class="menuTxt">Главная</div>
        </div>
        <div class="menuEl">
          <v-img class="sImg" :src="require('./assets/Calendar.png')" max-width="21px" max-height="21px" />
          <div class="menuTxt">Расписание</div>
        </div>
        <div class="menuEl">
          <v-img class="sImg" :src="require('./assets/search.png')" max-width="20px" max-height="20px" />
          <div class="menuTxt">Поиск</div>
        </div>
        <div class="menuEl">
          <v-img class="sImg" :src="require('./assets/account.png')" max-width="20px" max-height="20px" />
          <div class="menuTxt">Аккаунт</div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped lang="scss">
@font-face {
  font-family: 'Gotham';
  src: url(assets/gotham/gotham_light.otf)
}

.bar {
  background-color: white;
  justify-content: space-around;
  top: calc(100vh - 70px);
  height: 70px;
  width: 100vw;
  display: flex;
  position: fixed;
}
.menuTxt{
  color:#4A96FE;
  font-weight: 700;
  line-height:9.6px;
  font-size: 8px;
}
.menuEl {
  height:24px;
  width:24px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.mn {
  font-family: 'Gotham';
  background-color: #F5F5F5;
}
</style>
