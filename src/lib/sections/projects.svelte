<script lang="ts"></script>

<div id="projects">

    <div id="projects_floating_tab"></div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #projects {
        width:100vw;
        padding:10px 0px;

        #projects_floating_tab {

            @media only screen and (min-width:811px) {
                width:100vw;
                margin-left:0vw;
            }

            @media only screen and (max-width:810px) {
                width:90vw;
                margin-left:5vw;
            }
            height:300vh;/*This will be a dummy height, will size to content*/
            background-color:$offBlack;
            border-radius:30px;
            margin-top:calc(18vw);
            
        }
    }
</style>