<script setup>

</script>

<template>
    <header class="header" >
        <div class="header_content">
        
            <div class=" img_left ">
                
                    <router-link to="/">
                        <img src="/images/home.png" alt="">
                    </router-link>
                
                
                <div class="proyect">
                    <router-link to="/perfil">
                        <img src="/images/proyect.png" alt="">
                    </router-link>
                    
                </div>
                

            </div>

            <div class="center">
                <h1>Limbert Molina Intriago</h1>
            </div>

            <div class="img_right">    

                <a href="https://wa.me/c/593961203563" target="_blank">
                    <img src="/images/whats.png" alt="">
                </a>
                    
                <a href="https://github.com/limbervue?tab=repositories" target="blank">
                    <img src="/images/github.png" alt="">
                </a> 
            </div>
        </div>
    </header>
</template>

<style scoped>
    .header {
        background-color: #172d38; /* Color de fondo oscuro */
        color: #eee; /* Color del texto blanco */
        padding: 10px 20px; /* Ajusta el espaciado según sea necesario */
        border-bottom: 4px solid rgb(115, 205, 198);
        height: 120px;
        position: fixed;
        z-index: 9;
        width: 100%;
    }

    .header_content{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
        padding-top: 10px;
    }
    
    .img_left img {
        width: 45px;
        transition: all 300ms;
        float: left;
        margin-right: 50px;
    }
    .img_left{
       position: absolute;
       left: 20px;
       display: flex;
    }
    .img_left img:hover {
        transform: scale(1.3);
        cursor: pointer;
    }

    .img_right img {
        transition: all 300ms;
        width: 35px;
        margin-left: 50px;
        float: right;
    }
    .img_right {
        position: absolute;
        right: 20px;
    }

    .img_right img:hover {
        transform: scale(1.3);
        cursor: pointer;
    }
    .center {
        text-align: center;
        left: auto;
    }

    h1 {
    margin: 0;
    font-size: 50px;
    }
    .proyect{
        display: none;
        opacity: 0.6;
    }
    
    @media (max-width: 1274px) {
        h1{
            font-size: 40px;
        }
        .proyect{
            display: block;
        }
    }

    @media (max-width: 800px) {
        h1{
            font-size: 35px;
        }
    }

    @media (max-width: 690px) {
        .img{
            display: none;
        }
    }

</style>