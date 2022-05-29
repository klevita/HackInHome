<template>
    <div class="card">
        <h3>{{ userFullName }}</h3>
        <div>{{ userDepartmentInstitute }}</div>
        <span v-show="isOpen">
            <div>{{ userDegreeWithPosition }}</div>
            <div>{{ userPhone }}</div>
            <div>{{ userEmail }}</div>
        </span>
        <div class="bot2">
            <div v-on:click="isOpen = !isOpen">
                <a v-show="isOpen">скрыть</a>
                <a v-show="!isOpen">показать больше</a>
            </div>
            <div v-if="$store.state.User.groupHeadId === $store.state.User.id"  style="display:flex;flex-direction: column;">
                <a v-if="InGroup" v-on:click="removeGroup()">
                    исключить из группы
                </a>
                <a v-if="!InGroup" v-on:click="addGroup()">
                    добавить в группу
                </a>
            </div>
        </div>

        <!-- <div>{{outerProfile}}</div> -->
    </div>
</template>

<script>
import authApiService from '@/services/authApiService.js'
export default {
    data: () => ({
        isActive: false,
        isOpen: false
    }),
    name: "UserCardComponent",
    props: {
        InGroup:{
            type: Boolean,
            required: false,
            default:false
        },
        filterName: {
            type: String,
            required: false
        },
        userData: {
            type: Object,
            required: true
        },
    },
    computed: {
        user() {
            return this.userData.employee;
        },
        userFullName() {
            return this.userData.employee.fullName;
        },
        userDepartmentInstitute() {
            return this.departmentInstitute().replace('<span>', '').replace('</span>', '');
        },
        userDegreeWithPosition() {
            return this.degreeWithPosition();
        },
        userPhone() {
            let Num = this.userData.employee.phone;
            let Phone = '';
            if (!Num) {
                return null
            }
            for (var i = 0; i < Num.length; i++) {
                if (Num[i] == '+' || (Num[i] >= '0' && Num[i] <= '9')) {
                    Phone += Num[i]
                }
            }
            if (Phone[0] === '8') {
                Phone = "+7" + Phone.slice(1)
            }
            if (Phone[0] === '7') {
                Phone = "+" + Phone
            }
            if (Phone.length === 10) {
                Phone = "+7" + Phone
            }
            if (Phone.length < 12) {
                if (Phone.length === 3) {
                    return Phone + " (внутренний)"
                } else {
                    return null
                }
            }
            if (Phone.length > 12) {
                return null
            }

            Phone = [Phone.slice(0, Phone.length - 10), " (", Phone.slice(Phone.length - 10)].join('')
            Phone = [Phone.slice(0, Phone.length - 7), ") ", Phone.slice(Phone.length - 7)].join('')
            Phone = [Phone.slice(0, Phone.length - 4), "-", Phone.slice(Phone.length - 4)].join('')
            Phone = [Phone.slice(0, Phone.length - 2), "-", Phone.slice(Phone.length - 2)].join('')

            return Phone
        },
        userEmail() {
            return this.userData.employee.email
        },
        initials() {
            const [lastName, firstName] = this.user.fullName?.split(" ") || ['', '', ''];
            return lastName[0] + firstName[0];
        },
        outerProfile() {
            return this.user.authorUrlProfile
        },
    },
    methods: {
        async removeGroup(){
            await authApiService.removeTeacherFromGroup(this.$store.state.User.groupId,this.userData.employee.id)
            alert("Преподаватель исключён")
        },
        async addGroup(){
            await authApiService.addTeacherToGroup(this.$store.state.User.groupId,this.userData.employee.id)
            alert("Преподаватель добавлен")
        },
        degreeWithPosition() {
            return [
                this.userData.academicDegree?.shortName,
                this.userData.academicDegree2?.shortName,
                this.userData.academicTitle?.name,
                this.userData.academicTitle2?.name,
                this.userData.position?.name,
                this.userData.position2?.name
            ].filter((a) => !!a).join(", ")
        },
        departmentInstitute() {
            return [this.userData.department?.urlProfile ? `<span>${this.userData.department?.name}</span>` : null, this.userData.university?.name]
                .filter(Boolean)
                .join(", ");
        },
    },
};
</script>

<style scoped lang="scss">
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
}

.bot2 {
    display: flex;
    justify-content: space-between;
}
</style>
