<template>
    <div class="mn3">
        <h1>Моя группа</h1>
        <h4>{{$store.state.User.group}}</h4>
        <span v-for="user in users" :key="user.studentId">
            <userCard :role="user.role" :name="user.name"/>
        </span>
    </div>

</template>

<script>
//ИДБ-20-01
import userCard from "@/components/userCardComponent.vue"
import authApiService from "@/services/authApiService.js"
export default {
    name: 'enter-view',
    data: () => ({
        users: [],
    }),
    components: {
        userCard,
    },
    async mounted() {
        const resp = await authApiService.getUsersByGroupId(this.$store.state.User.groupId);
        console.log(resp.data)
        resp.data.forEach(usr=>{
            const rl = (usr)=>{
                if(usr.studentId===usr.group.groupHeadId){
                    return "Староста"
                }
                return "Студент"
            }
            this.users.push({name:usr.fullName,role:rl(usr)})
        })
    },
    methods: {
    },
}
</script>
<style scoped lang="scss">
.mn3 {
    display: flex;
    flex-direction: column;
    padding: 0 6px 0 6px;
    justify-content: center;
    width: 100vw;
}
</style>
