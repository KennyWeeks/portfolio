<script lang="ts">

    let marginLeft : number = 50;
    let width : number = 50;
    let open : number = -1;
    let size : string = "20";
    let menuOpts = ["landing", "about", "projects", "contacts"]

</script>

<button id="menu" on:mouseenter={()=>{
    marginLeft = 25;
}} on:mouseleave={()=>{
    console.log(marginLeft);
    marginLeft = (open === -1) ? 50 : 0;
}} on:click={()=>{
   marginLeft = (open === -1) ? 0 : 50;
   open *= -1;
   size = size == "20" ? "100" : "20";
}}>

    <div class="menu_bar"></div>
    <div class="menu_bar" style="margin-left:{marginLeft}%; width:{width}%"></div>

</button>

<div id="background_menu" style="width:{size}{size == "100" ? "vw" : "px"}; 
height:{size}{size == "100" ? "vh" : "px"}; 
background-color:{size == "100" ? "#D4F1F4" : "transparent"}; 
top:{size == "100" ? "0px" : "15px"}; 
right:{size == "100" ? "0px" : "15px"};">

    <ul id="menu-options" style="visibility:{size == "100" ? "visible" : "hidden"}">
        {#each menuOpts as mo}
            <li><a href="#{mo}" on:click={()=>{
                marginLeft = (open === -1) ? 0 : 50;
                open *= -1;
                size = size == "20" ? "100" : "20";
            }}>{mo}</a></li>
        {/each}
    </ul>

</div>

<style lang="scss">
    @import "../styles/theme.scss";

    #menu {
        position:absolute;
        top:15px;
        right:15px;
        z-index:10000;
        width:40px;
        height:40px;
        padding:10px;
        border-radius:50%;
        @include flexCol;
        background-color:$offWhite;
        border:none;

        .menu_bar {
            width:100%;
            height:7px;
            background-color:$offBlack;
            border-radius:10px;
        }

        :nth-child(2) {
            transition:all 0.2s linear;
        }

    }

    #background_menu {
        position:absolute;
        z-index:1000;
        overflow:hidden;
        text-align:center;
        @include flexCenter;

        ul {
            list-style-type:none;
            display:inline-block;
            padding:0px;
            text-align:left;
            margin-top:0px;
            font-size:60px;
            cursor:default;

            li {

                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Safari */
                -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Old versions of Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;


                a {
                    text-decoration:none;
                    color:$offBlack;

                    &:hover {
                        text-decoration:line-through;
                    }
                }
            }
        }
    }
</style>