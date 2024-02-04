<script setup>
    
</script>

<template>

    <div class="content_profile">
        <div class="content_profile_foto col-md-12">
            <img src="/images/mi_foto.jpeg" alt="">
        </div>

        <div class="content_profile_descripcion col-md-12">
            <p>
            <b>LIMBERT EMANUEL MOLINA INTRIAGO</b><br><br>
            Me considero una persona respetuosa, creativa, muy constante y  dedicada cuando empiezo un nuevo desafío de cualquier tipo.
            Me gusta mucho la programación Web, disfruto programar, y dar mi punto de vista para la solución del problema y abierto al aprendizaje. Quiero utilizar mi pensamiento creativo para la realización de las tareas.
            </p>
            <br>
            <p class="text_idiomas">
            <b>IDIOMAS</b> <br><br>
            Español - Nativo <br>
            Inglés - Básico <br>
            </p>
        </div>
    </div>
    
    
</template>

<style scoped>
    p{
        font-size: 18px;
    }
    .content_profile{
        display: flex;
        flex-wrap: wrap;
        opacity: 0.7;
        height: 862px;
        overflow: auto;
        position: relative;
        bottom: -80px;
    }
    .content_profile_foto{
        display: flex;
        margin-top: 180px;
        width: 100%;
    }
    .content_profile_descripcion{
        display: flex;
        flex-wrap: wrap;
        
        text-align: justify;
    }
    .content_profile_descripcion p{
       
        padding: 60px;
       
    }
    .content_profile_foto img{
        width: 270px;
        margin: 0 auto;
        border-radius: 5%;
      
    }

    @media (max-width: 767px) {
        .content_profile_foto img{
            display: flex;
            align-items: center;
        }
    }
</style>
