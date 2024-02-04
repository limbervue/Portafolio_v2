<script setup>
    
    defineEmits(['toggle-aside','close-equis']);

    const props = defineProps({
        menuToggle: Boolean, 
        menuEquis: Boolean
    })

</script>

<template>
     <header>
        <nav class="nav-main">
                <div class="content-header">
                    
                    <h1 class="nav-main__title">Limbert Molina Intriago </h1>

                </div>
            
                <ul class="nav-main__items ">
                
                    <li class="nav-main__items__item nav-main__items__menu-category"  @click="$emit('toggle-aside')"> 

                        <div  v-if="menuToggle">
                            <img class="aside-menu-toggle" src="/images/menu_white.png">    
                        </div>

                        <div v-if="menuEquis">
                            <img class="aside-menu-toggle" src="/images/equis.png">    
                        </div>
                    </li>
                                           
                </ul>
                
            </nav>
    </header>

</template>


<style lang="scss" scoped>

    h1{
        color: white;
        font-size: 2em;
        line-height: 1.1;
    }
    
    a:hover{
        text-decoration: none;
    }
    nav, .nav-main{
        z-index: 8;
        position: fixed;
        width:100%;
        background-color: #172d38;
        border-bottom: 4px solid rgb(115, 205, 198);
        padding-bottom: 20px;

        &__title{
            text-align: center;
            margin-top: 30px;
            margin-bottom: 20px;
            color: white;
            text-shadow: 1px 1px 2px black;
        }
        &__items{
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            flex-direction: row;
            list-style-type: none;
            gap: 12px;
            flex-wrap: wrap;
            text-decoration: none;
            
            &__item{
                padding: 10px;
                border-radius: 0.4rem;
                transition: all 0.5s;
                color: white;
                font-size: 18px;
                text-shadow: 1px 1px 2px black;
               
                &:hover{
                    cursor: pointer;
                    background-color: rgb(27, 144, 142);
                }
            }
            &__menu-category{
                position: absolute;
                left: 15px;
                top: 70px;
            }
        }
        
    }

    .aside-menu-toggle{
        width:25px;
        color: white;
                
    }

    @media (max-width: 412px) {
        .aside-menu-toggle{
                
                width:20px;
                color: white;
            }
    }
    
</style>