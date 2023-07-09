<script lang="ts">

    export let path : string = "";
    export let screenSize : number;
    import Clock from "../clock.svelte";

</script>

<div id="landing">

    <img id="wolf" alt="wolf" src="{path}/images/wolf.png" width=80px/>

    <div id="clocks">
        <Clock/>

        <Clock otherRegion={10} region="Bucharest"/>
    </div>

    <div id="intro">

        <h3 id="intro_text">Hi,<br> my name is Kenny Weeks. <br> Welcome to my ... </h3>

        <img src="{path}/images/portfolio_title{screenSize >= 811 ? "_large" : "_small"}.svg" alt="portfolio_text"/>

    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #landing {
        width:100vw;
        height:100vh;
        background-color:$offWhite;
        overflow:hidden;
        position:relative;

        @media only screen and (max-width:810px) {
            @include flexCenter;
        }

        #wolf {
            position:absolute;
            top:10px;
            left:10px;
        }

        #clocks {
            @media only screen and (min-width:811px) {
                @include flexRow;
                margin-left:calc((100vw - 300px) / 2);
                margin-top:12.5px;
            }

            @media only screen and (max-width:810px) {
                position:absolute;
                bottom:20px;
                left:10px;
            }
            width:350px;
        }

        #intro {
            width:100vw;
            overflow:hidden;

            @media only screen and (min-width:811px) {
                position:absolute;
                bottom:0px;
            }

            h3 {
                font-family:"Goldoni";
                @media only screen and (min-width:811px) {
                    font-size:50px;
                    margin-bottom:0px;
                    margin-left:20px;
                }
                @media only screen and (max-width:810px) {
                    font-size:25px;
                    margin-left:10px;
                }   
            }

            img {
                width:90%;
            }
        }
    }

</style>