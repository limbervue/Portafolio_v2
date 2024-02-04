<script setup>
import { useRouter } from 'vue-router';

const route = useRouter();

const emits =  defineEmits(["close-aside"]) 

const props =  defineProps({
    showAsideMenu: Boolean,
    menuToggle: Boolean,
    menuEquis: Boolean
})
function handleNavigation(routeName){

    emits('close-aside',{
        menuToggle:true,
        menuEquis:false
    });
    route.push({path: routeName});
}

</script>
    

<template>
    <aside class="aside-menu" :class="{'--show': showAsideMenu}">
        <ul class="aside-menu__items">
            
                <li @click="handleNavigation('/')" class="aside-menu__items__item">Home</li>

                <a href="https://wa.me/c/593961203563" target="_blank">
                    <li class="aside-menu__items__item">whatsapp</li>
                </a>
                    
                <a href="https://github.com/limbervue?tab=repositories" target="blank">
                    <li class="aside-menu__items__item">Github</li>
                </a> 
        </ul>
    </aside>
</template>


<style lang="scss" scoped>
.aside-menu{

    position: fixed;
    top: -186px;
    height: 208px;
    background-color: #172d38;
    width: 170px;
    transition: all 0.3s;
    padding-top: 10px;
    z-index: 7;
    border-radius: 10px;
    border: 1px solid rgb(115, 205, 198);

    &__items{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        margin-left: -30px;
        
        &__item{
            color: antiquewhite;
            padding: 16px 0;
            transition: all 0.3s;
            padding-left: 30px;
            
            &:hover{
                cursor: pointer;
                background-color: rgb(51, 81, 91);
                color: whitesmoke;
                padding-top: -10px;
            }
        }
    }
    &.--show{
        top: 119px;
    }
}
</style>