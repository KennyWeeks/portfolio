<script lang="ts">
    export let path : string = ""
    export let screenWidth : number;
</script>


<div id="contacts">

    <img src="{path}/images/contact_header{screenWidth <= 810 ? "_no_overlay" : "_dark"}.png" width=250px alt="contact_header"/>

    <p>I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS</p>

    <ul>
        <li><span><img src="{path}/images/linkedin{screenWidth <= 810 ? "_off_white" : ""}.png" alt="linkedin" width=20/></span>LinkedIN</li>
        <li><span><img src="{path}/images/octocat{screenWidth <= 810 ? "": "_off_black"}.png" alt="github" width=25/></span>Github</li>
        <li><span><img src="{path}/images/resume{screenWidth <= 810 ? "_off_white" : ""}.png" alt="resume" width=20/></span>Resume</li>
        <li><span><img src="{path}/images/gmail{screenWidth <= 810 ? "_off_white" : ""}.png" alt="gmail" width=20/></span>Email</li>
    </ul>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #contacts {
        overflow:hidden;
        width:100vw; 
        position:relative;
        @media only screen and (max-width:810px) {
            background-color:$offBlack;
            padding-left:10vw;
            padding-bottom:30px;
        }
        @media only screen and (min-width:811px) {
            background-color:$offWhite;
            padding-left:5vw;
        }
        margin-top:0px;

        p {
            margin-top:0px;
            font-family:"Arial Black";
            font-size:15px;
            width:70vw;
            @media only screen and (max-width:810px) {
                color:$offWhite;
            }
            @media only screen and (min-width:811px) {
                color:$offBlack;
            }
        }

        ul {
            text-decoration:none;
            list-style: none;
            padding:0px;
            display:block;
            float:right;
            @media only screen and (max-width:810px) {
                margin-right:20vw;
            }

            @media only screen and (min-width:811px) {
                margin-right:10vw;    
            }
            
            cursor:default;

            li {
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Safari */
                -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Old versions of Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;
                text-align:right;
                margin-bottom:2.5px;
                font-family:"Goldoni";
                font-weight:lighter;
                font-size:25px;
                @media only screen and (max-width:810px) {
                    color:$offWhite;
                }
                @media only screen and (min-width:811px) {
                    color:$offBlack;
                }
                
                &:hover {
                    text-decoration:line-through;
                }

                span {
                    margin-right:10px;
                }
            }
        }
    }

</style>