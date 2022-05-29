<template>

    <div class="mn4">
        <h2>Мои преподаватели</h2>
        <teacherCard v-for="teacher in mt" :InGroup="true" :key="(teacher.employee.id + 'f')" :user-data="teacher" />
        <h2>Все преподаватели</h2>
        <teacherCard v-for="teacher in t" :InGroup="false" :key="teacher.employee.id" :user-data="teacher" />
        <div style="height:100px"></div>
    </div>
    
</template>

<script>
import teacherApiService from '@/services/teacherApiService.js'
import authApiService from '@/services/authApiService.js'
import teacherCard from "@/components/TeacherCardComponent.vue"
export default {
    name: 'enter-view',
    data: () => ({
        s:'',
        t: [],
        mt: []
    }),
    async mounted() {
        let teachers = await teacherApiService.getAll();
        this.t = teachers;
        let user = await authApiService.getUserById(this.$store.state.User.id)
        let teacherIds = user.data.teachers.filter(function (item, pos) {
            return user.data.teachers.indexOf(item) == pos;
        })
        this.t.forEach(el => {
            teacherIds.forEach(el2 => {
                if (el.employee.id == el2){
                    this.mt.push(el);
                }
            })
        });
        this.raw_t = this.t;
    },
    components: {
        teacherCard
    },
    methods: {
        search(){
            if(this.s !== ''){
                this.t = this.raw_t.filter((tc)=>{
                    if(tc.employee.fullName.indexOf(this.s)!==-1){
                        return true
                    }
                    return false
                }) 
            }
        }
    },
}
</script>
<style scoped lang="scss">
.mn4 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>
