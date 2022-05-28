<template>
    <div>
        <div class="img">
            <v-img class="sImg" :src="require('../assets/StankinLogo.png')" max-width="60px" max-height="34px" />
        </div>
        <div class="subBlock">
            <div style="margin-bottom:100px">
                <h1>Добро пожаловать!</h1>
            </div>
            <v-btn class="btn" color='primary' v-on:click="$router.push({ name: 'registr'})">Регистрация</v-btn>
            <v-btn class="btn" outlined color='primary' v-on:click="$router.push({ name: 'auth'})">вход</v-btn>

        </div>
    </div>
</template>

<script>

export default {
    name: 'enter-view',

    components: {

    },
    methods:{

    }
}
</script>
<style scoped lang="scss">
.sImg {
    margin-left: (35/360)*100%;    
}

.img {
    padding-top: (13/360)*100%;
    border-radius: 10px;
    width:100vw;
    height: 100vw;
    background-size: 100%;
    background-image: url('@/assets/happyPeople.png');
}

.subBlock {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: ((624-370)/640)*100vh;
    text-align: center;
    margin-top: 2px;
    border-radius: 10px;
    background-color: white;
}

.btn {
    margin-bottom:10px;
    width: 100%;
}
</style>
