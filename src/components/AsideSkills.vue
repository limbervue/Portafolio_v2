<script setup>
    
</script>

<template>
    <nav class="menu" v-if="$route.path === '/'">
        
        <ul>           
            <h5>TECNOLOGÍAS</h5>
            
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>TYPESCRIPT</li>
            <li>JQUERY</li>
            <li>VUE3</li>
            <li>VUETIFY</li>
            <li>BOOTSTRAP</li>
            <li>SASS</li>
            <li>PHP</li>
            <li>MYSQL</li>
            <li>DOCKER</li>
            <li>GIT</li>
            
        </ul>
   </nav>

    <nav class="menu" v-if="$route.path === '/experiencia/prestamo'">
        
        <ul>           
            <h5>TECNOLOGÍAS</h5>
            
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>TYPESCRIPT</li>
            <li>VUE3</li>
            <li>VUETIFY</li>
            <li>PHP</li>
            <li>MYSQL</li>
            <li>DOCKER</li>
            <li>GIT</li>
            
        </ul>
   </nav>

   <nav class="menu" v-if="$route.path === '/experiencia/retratos'">
        
        <ul>           
            <h5>TECNOLOGÍAS</h5>
            
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>VUE3</li>
            <li>SASS</li>
            <li>GIT</li>
            
        </ul>
   </nav>
   
</template>

<style scoped>
    .menu{
        bottom: 0;
        padding-top: 41px;
        font-family: Helvetica, Arial;
        width: 230px;
        background-color: #172d38;
        color: #eee; 
        text-transform: uppercase;
        margin-bottom: 20px;
        height: 769px;
        margin-top: 120px;
        right: 105px;
    }

    .menu ul{
        line-height: 46px;
        margin-left: 18px;
        padding-left: 0px;
    }

    .menu ul li{
        height: 50px;
        display: inline-block;
        transition: all 300ms;
        width: 200px;
        padding-left: 30px;
    }

    .menu ul h5{
        padding-left: 22px;
    }
    .menu ul li:hover{
        background: #172d38;
        transform: scale(1.1);
    }

    .menu a{
        display: block;
        text-decoration: none;
        color: white;
        
    }
</style>