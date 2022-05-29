<template>
  <div class="mn">
    <div class="func">
      <div style="align-self:center;margin-bottom: 10px;"><h1>Функции</h1></div>
      <div class="funcG">
        <div class="funcEl" v-on:click="$router.push({ name: 'myGroup' })">
          <div class="square">
            <v-img :src="require('@/assets/group.png')" max-width="25px" max-height="23px"/>
          </div>
          <div>Моя группа</div>
        </div>
        <div class="funcEl" v-on:click="$router.push({ name: '404' })">
          <div class="square">
            <v-img :src="require('@/assets/audit.jpg')" max-width="25px" max-height="23px"/>
          </div>
          <div>найти</div><div> аудиторию</div>
        </div>
        <div class="funcEl" v-on:click="$router.push({ name: '404' })">
          <div class="square">
            <v-img :src="require('@/assets/journal.png')" max-width="25px" max-height="23px"/>
          </div>
          <div>модульный</div><div> журнал</div>
        </div>
        <div class="funcEl" v-on:click="$router.push({ name: 'check' })">
          <div class="square">
            <v-img :src="require('@/assets/check.png')" max-width="25px" max-height="23px"/>
          </div>
          <div>чек-лист</div><div> первокурсника</div>
        </div>
      </div>
      <div class="funcG">
        <div class="funcEl" v-on:click="$router.push({ name: 'myTeachers' })">
          <div class="square">
            <v-img :src="require('@/assets/prepod.jpg')" max-width="25px" max-height="23px"/>
          </div>
          <div>преподаватели</div>
        </div>
        <div class="funcEl" v-on:click="$router.push({ name: '404' })">
          <div class="square">
            <v-img :src="require('@/assets/file.png')" max-width="25px" max-height="23px"/>
          </div>
          <div>заказать</div><div> справку</div>
        </div>
        <div class="funcEl" v-on:click="$router.push({ name: '404' })">
          <div class="square">
            <v-img :src="require('@/assets/state.png')" max-width="25px" max-height="23px"/>
          </div>
          <div>статьи</div>
        </div>
        <div class="funcEl" v-on:click="$router.push({ name: '404' })">
          <div class="square">
            <v-img :src="require('@/assets/fork.png')" max-width="25px" max-height="23px"/>
          </div>
          <div>структура</div><div> университета</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home-view',

  components: {

  },
}
</script>
<style scoped lang="scss">
.mn {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.square{
  width:60px;
  height:60px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.func {
  width:100%;
  font-size: 9px;
  display: flex;
  flex-direction: column;
}

.funcEl {
  width:90px;
  height:100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.funcG {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
