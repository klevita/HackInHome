<template>
    <div class="mn">
        <v-form class="group" v-model="valid" ref="form" lazy-validation>
            <v-text-field v-model="lastname" :rules="fioRules" label="Фамилия" required>
            </v-text-field>
            <v-text-field v-model="firstname" :rules="fioRules" label="Имя" required>
            </v-text-field>
            <v-text-field v-model="fathername" :rules="fioRules" label="Отчество" required>
            </v-text-field>
            <v-text-field v-model="group" :rules="groupRules" label="Группа" required>
            </v-text-field>
            <v-btn :disabled="!valid" color="success" v-on:click="validate1">войти</v-btn>
        </v-form>
    </div>
</template>

<script>
import AuthApiService from "@/services/authApiService"
import store from '@/store'
//ИДБ-20-01
export default {
    name: 'enter-view',
    data: () => ({
        valid: true,
        lastname: '',
        firstname: '',
        fathername: '',
        group: '',
        fioRules: [
            v => !!v || "Поле обязательно",
        ],
        groupRules: [
            v => !!v || "Поле обязательно",
            v => v && (!(/\d/.test(v.slice(0, 3)))) || "Неверное имя группы",
            v => v && (/^\d+$/.test(v.slice(4, 6))) || "Неверное имя группы",
            v => v && (/^\d+$/.test(v.slice(7, 9))) || "Неверное имя группы",
            v => v && v[3] === '-' || "Неверное имя группы",
            v => v && v[6] === '-' || "Неверное имя группы",
            v => v && v.length === 9 || "Неверное имя группы",

        ],
    }),
    components: {

    },
    methods: {
        async validate1() {
            const name = this.lastname + ' ' + this.firstname + ' ' + this.fathername;
            if (this.$refs.form.validate()) {
                let user = undefined;
                try{
                    user = await AuthApiService.getUser(name, this.group)
                }catch(err){
                    alert("Студент не найден")
                    this.valid= false
                }
                if(user !== undefined){
                    store.commit('setUser',{user:user.data,name:name,group:this.group})
                    this.$router.push({name:'home'})
                }
            }   

        },
    },
}
</script>
<style scoped lang="scss">
.mn {
    margin: calc(100vh / 2 - 180px) 5px 5px 5px;
    border-radius: 3%;
    background-color: white;
}

.group {
    padding: 10px;
    display: flex;
    flex-direction: column;
}
</style>
