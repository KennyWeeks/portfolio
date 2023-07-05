<script lang="ts">
    export let path : string = ""
</script>

<div id="about">

    <div id="picture_of_me"></div>

    <div class="surrounding_image_intros">
        <img id="about_intro" src="{path}/images/about_header.png" width=200px alt="contact_header"/>
    </div>

    <div id="surrounding_area">
        <div id="content_area">

            <img src="{path}/images/pattern.svg" alt="pattern"/>

            <img src="{path}/images/pattern.svg" alt="pattern"/>

        </div>
    </div>

    <div class="surrounding_image_intros">
        <img id="projects_intro" src="{path}/images/projects_header.png" width=275px alt="contact_header"/>
    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #about {
        width:100vw;
        background-color:$offWhite;
        padding:20px 0px;
        position:relative;

        #picture_of_me {
            width:40vw;
            height:40vw;
            box-shadow:inset 0 0 0 10px $offBlack;
            border-radius:50%;
            margin-left:10px;
            margin-bottom:0px;
        }

        .surrounding_image_intros {
            width:100%;
            overflow:hidden;
            text-align:left;
            transform:rotate(-25deg);
            margin-bottom:10px;
            text-align:right;
            
        }

        .surrounding_image_intros:nth-of-type(2) {
            margin-top:-40px;
        }

        .surrounding_image_intros:nth-of-type(4) {
            text-align:left;
            margin-top:25px;
            margin-bottom:0px;
        }

        #surrounding_area {
            width:200vw;
            overflow-x:hidden;
            transform:rotate(-25deg);
            margin-left:-50vw;
            text-align:right;


            #content_area {
                width:200vw;
                height:500px;
                background-color:$offBlack;
                text-align:left;
                position:relative;
                
                img {
                    max-height:130px;
                    max-width:1300px;
                    position:absolute;
                }

                :nth-child(2) {
                    bottom:0px;
                }
            }
        }
    }

</style>