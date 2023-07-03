<script lang="ts">

    import "../styles/fonts.css"
    import Menu from "$lib/menu.svelte";

</script>

<Menu/>

<div id="landing">

    <div id="intro">

        <h3 id="intro_text">Hi,<br> my name is Kenny Weeks. <br> Welcome to my ... </h3>

        <img src="images/test.svg" alt="portfolio_text"/>

    </div>

</div>

<style lang="scss">
    @import "../styles/theme.scss";

    #landing {
        width:100vw;
        height:100vh;
        background-color:$offWhite;
        overflow:hidden;
        @include flexCenter;

        #intro {
            width:100vw;
            overflow:hidden;

            h3 {
                font-family:"Goldoni";
                font-size:25px;
                margin-left:10px;
            }
        }
    }

</style>