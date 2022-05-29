<template>
    <div class="mn2" v-on:click="$router.push({name:'404'})">
        <div><v-img :src="require('@/assets/account.png')" max-height="24px" max-width="24px"/></div>
        <div class="txt2">
            <strong>{{name}}</strong>
            {{role}}
        </div>
    </div>
</template>

<script>
//ИДБ-20-01
export default {
    name: 'enter-view',
    data: () => ({

    }),
    props: {
        role: {
            type: String,
            reqiered:false,
            default:'Студент'
        },
        name: {
            type: String,
            reqiered:true,
            default:'Студент'
        },
    },
}
</script>
<style scoped lang="scss">
.mn2 {
    display: flex;
    padding:7px;
    padding-left: 20px;
    align-items: center;
    width: calc(100% - 20px);
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;
}
.txt2{
    margin-left:10px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
}
</style>
