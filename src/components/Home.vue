<script setup>
    import Header from './Header.vue';
    import AsideProfile from './AsideProfile.vue';
    import AsideSkills from './AsideSkills.vue'
    import AsideMenu from './AsideMenu.vue'
    import Exp from './Exp.vue';
    import HeaderMovil from './HeaderMovil.vue';
    import { useRoute } from 'vue-router';
    import { onMounted, ref, onUpdated } from 'vue';
    import router from '../router';
    const route = useRoute();

    const width = ref(window.innerWidth);    
    const max700 = ref(window.innerWidth > 700);
    const min700 = ref(window.innerWidth <= 700);

    let isAsideOpen = ref(false);
    let menuToggle = ref(true);
    let menuEquis = ref(false);
        
    onMounted(() => {
    window.addEventListener('resize', handleResize);
    });
    
    onUpdated(()=>{
        
        if(window.innerWidth > 700){
        inner.value = true
        }else{
            inner.value = false
        }    
        
    });
    const inner = ref(false)
    
    const handleResize = () => {
        width.value = window.innerWidth;

        if (width.value > 1200 && route.path === "/perfil") {
            
            router.push('/');
        }

        max700.value = window.innerWidth > 700;
        min700.value = window.innerWidth <= 700;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize); 
    });
    function handleToggleAside() {
     
      menuToggle.value = !menuToggle.value;
      menuEquis.value = !menuEquis.value;
      
    }
</script>

<template>

    <div class="header">
        <Header v-if="max700"/>
    </div>

    <div class="headerMovil">
        <HeaderMovil v-if="min700" @toggle-aside="isAsideOpen = !isAsideOpen, handleToggleAside()" :menu-toggle="menuToggle" :menu-equis="menuEquis" />
    </div>
    

    <AsideMenu v-if="min700" @close-aside="isAsideOpen = false, handleToggleAside()" :show-aside-menu="isAsideOpen" :menu-toggle="menuToggle" :menu-equis="menuEquis" />

    <div class="content-main" >

        <div class=" content-main__asideProfile col-md-3">
            <AsideProfile/>
        </div>

        <div class="content-main__contentInfo">

            <div v-if="$route.name === 'root'" class="content-main__contentInfo__experience  content-main__contentInfo__about " > 
                <Exp/>  
            </div>

            <div class="content-main__contentInfo__description  content-main__contentInfo__about"> 
                <router-view></router-view>
            </div>

        </div>
        
        <div class="content-main__asideSkill col-md-2">
            <AsideSkills/>
        </div>
        
    </div>
        
        
</template>

<style lang="scss">
    
    .content-main{
        display: flex;
        flex-wrap: wrap;
        position: fixed;
        width: 100%;
        
        &__contentInfo{
            width: 58.33%;

            &__about{
                display: flex;
                flex-wrap: wrap;
                text-align: justify;
                color: #eee;
                margin: 0 auto;
                padding: 70px;
                margin-top: 96px; 
                height: 850px;  
            }

            &__description{
                width: 1000px;
                margin:  0 auto;
                padding-right: 20px;
                padding-left: 20px;
                padding-top: 60px;
                overflow: auto;
                position: relative;
                top: 90px;
            }

            &__experience{
                height: 800px;
        
            }
        }   
    }

    @media (max-width: 1874px) {
        .content-main{
            
            &__contentInfo{
                height: 100vh;
            }
        }
    }

    @media (max-width: 1750px) {

        .content-main{

            &__asideSkill{
                display: none;
            }
            &__contentInfo{
                width: 72%;
            }
            
        }
    }


    @media (max-width: 1274px) {
        .content-main{
            &__asideProfile{
                display: none;
            }
            &__contentInfo{
                width: 100%;
                
                &__description{
                    width: 100%;
                }
               
            }

        }        
    }
    @media (max-width: 412px) {
        .content-main{
            position: relative;
            &__contentInfo{
                
                
                &__experience{
                   height: 600px;
                }
               
            }

        }
    }

</style>