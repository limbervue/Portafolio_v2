
<script setup>

</script>

<template>

        <div class="title">
            <h3> Experiencia - Proyecto </h3>
        </div>
    

        <div class="content-exp"> 

            
            <div class="content-exp__info">
                <router-link to="/experiencia/prestamo">
                    <p>
                        <b> Participación Vue3 </b> <br><br>
                        Desarrollo de componentes reactivos para el frontend. <br>
                        Junio - Agosto 2023
                    </p>
                </router-link>
                
            </div> 

            <div class="content-exp__info">
                <router-link to="/experiencia/retratos">
                    <p>
                        <b> Retratos </b> <br><br>
                        Proyecto personal de mi emprendimiento de retratos realistas. <br>
                        
                    </p>
                </router-link>
                   
            </div>  

        </div>    
    
</template>

<style lang="scss" scoped>
   
    p{
        font-size: 16px;
    }
    .title h3{
        display: flex;
    }
    .content-exp{
        display: flex;
        margin:  0 auto;
        padding-top: 60px;
        justify-content: center;
        width: 100%;
        position: relative;
        top: -130px;

        &__info{
            padding: 40px;
            height: 240px;
            background-color: #5c90ac68;
            transition: all 300ms;
            border-radius: 5%;
            text-align: left;
            width: 350px;
            margin: 15px;
            border: 1px solid rgb(115, 205, 198);

            a{
                text-decoration: none;
                color: #eee;
            }
            
            p:hover{
                cursor: pointer;
            }
        }
        &__info:hover{
            transform: scale(1.05);
        }
    }

    @media (max-width: 908px) {
        .content-exp{
            flex-direction: column;
            margin-top: 134px;

            &__info{
                width: 500px;
                margin: 0 auto;
                margin-bottom: 30px;
            }
        }

    }

    @media (max-width: 660px) {
        .content-exp{

            &__info{
                width: 100%;
            }
        }

    }

</style>