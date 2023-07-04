<script lang="ts">

    let marginLeft : number = 50;
    let width : number = 50;
    let open : number = -1;

</script>

<div id="menu" on:mouseenter={()=>{
    marginLeft = 12.5;
    width = 75;
}} on:mouseleave={()=>{
    console.log(marginLeft);
    width = 50;
    marginLeft = (open === -1) ? 50 : 0;
}} on:click={()=>{
   marginLeft = (open === -1) ? 0 : 50;
   open *= -1;
   width:50; 
}}>

    <div class="menu_bar"></div>
    <div class="menu_bar" style="margin-left:{marginLeft}%; width:{width}%"></div>

</div>

<style lang="scss">
    @import "../styles/theme.scss";

    #menu {
        position:absolute;
        top:15px;
        right:15px;
        z-index:10000;
        width:20px;
        height:20px;
        padding:10px;
        border-radius:50%;
        @include flexCol;
        background-color:$offWhite;

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
</style>