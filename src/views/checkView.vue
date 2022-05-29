<template>
    <div class="mn5">
        <div>
            <h2>Чек-лист первокурсника</h2>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Прикрепиться к библиотеке</h4>
                    <a>Маршрут</a>
                </div>
            </div>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Оформить "Карту Москвича"<br>
                        для льготного проезда</h4>
                    <a>mos.ru/mskcard</a>
                </div>
            </div>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Получить Стипендиальную карту</h4>
                    <span>староста сообщит подробности</span>
                </div>
            </div>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Зарегистрироваться в программе<br>
                        "РЖД Бонус", чтобы экономить<br>
                        до 30% на билетах на поезд</h4>
                </div>
            </div>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Получить справку №4 на 6м этаже<br>
                        во втором отделе для отсрочки в<br>
                        военкомате</h4>
                </div>
            </div>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Посетить точку кипения</h4>
                </div>
            </div>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Посетить клуб</h4>
                </div>
            </div>
            <div class="item">
                <v-checkbox></v-checkbox>
                <div class="txt3">
                    <h4>Посетить профком</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//ИДБ-20-01
export default {
    name: 'enter-view',
    data: () => ({

    }),
    components: {

    },
    methods: {

    },
}
</script>
<style scoped lang="scss">
.mn5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.txt3 {}

.item {
    display: flex;
    align-items: center;
}
</style>
