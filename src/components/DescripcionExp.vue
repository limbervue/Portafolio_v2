<script setup>
    import images from '../data/images';
    import { ref,onMounted } from 'vue';

    const prestamo = ref([]);
    const retratos = ref([]);

    prestamo.value = images.proyectos.prestamo
    retratos.value = images.proyectos.retratos

    const max1750 = ref(window.innerWidth > 1750);
    const min1750 = ref(window.innerWidth <= 1750);
    
    const handleResize = () => {
        max1750.value = window.innerWidth > 1750;
        min1750.value = window.innerWidth <= 1750;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize); 
    });

</script>

<template>

    <div v-if="$route.path === '/experiencia/prestamo'" class="content-description" >
        <h3>Participacion Vue3 - Prestamo</h3>
        <div class="image">
            <li v-for="img in prestamo" :key="img.id">
                <img :src="`/images/${img.imageName}`">
            </li>
        </div>

        <div v-if="min1750" class="tecnologias">

            <div>
                <h5>TECNOLOGÍAS </h5>
            </div>
            <div>
                <p>
                    HTML, CSS, JavaScript, TypeScript, Vue 3, Vuetify, PHP, MySQL, Docker, GIT
                </p>
            </div>
            
        </div>

        <div class="content_iconos">
            <a href="https://github.com/limbervue/Prestamo_vue3" target="blank">
                <img class="github" src="/images/github.png" alt="">
            </a>
            <a href="https://prestamo.limbermolina95.com/" target="blank">
                <img class="web" src="/images/web.png" alt="">
            </a>
            
        </div>
    </div>

    <div v-if="$route.path === '/experiencia/retratos'" class="content-description" >
        <h3>Retratos LimbertArt </h3>
        <div class="image">
            <li v-for="img in retratos" :key="img.id">
                <img :src="`/images/${img.imageName}`">
            </li>
        </div>
       
        <div v-if="min1750" class="tecnologias ">

            <div>
                <h5>TECNOLOGÍAS </h5>
            </div>
            <div>
                <p>
                    HTML, CSS, JavaScript, Vue 3, SASS, GIT
                </p>
            </div>

        </div>

        <div class="content_iconos">
            <a href="https://github.com/limbervue/gallery_vuejs" target="blank">
                <img class="github" src="/images/github.png" alt="">
            </a>
            <a href="https://limbervue.github.io/gallery_vuejs/#/" target="blank">
                <img class="web" src="/images/web.png" alt="">
            </a>
            
        </div>
    </div>

</template>

<style scoped>

    .tecnologias{
       position: relative;
       left: 50px;
       top: 10px;
    }
    .image{

        list-style: none;
        display: flex;
        margin: 10px;
        margin: 0 auto;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 30px;
        justify-content: center;
    }

    .image img{
        margin-top: 40px;
        width: 800px;
        border-radius: 5%;
    }
    .video video{
        margin-top: 40px;
        border-radius: 5%;
    }

    .github{
        width: 50px;
    }
    .web{
        width: 30px;
        opacity: 0.6;
    }
    .content_iconos{
        padding: 20px;
        margin-top: 20px;
    }
    .content_iconos img{
        margin-right: 30px;
        transition: all 300ms;
    }
    .content_iconos img:hover{
        transform: scale(1.2);
    }
    
    @media (max-width: 910px) {
       
        .image img{
            width: 100%;
        }
    }

    @media (max-width: 638px) {
        .tecnologias{
            display: contents;
            
        }
        h5, p {
            padding: 0px 30px;
        }
   }

   
    
</style>