<script lang="ts">
    export let path : string = ""
</script>


<div id="contacts">

    <img src="{path}/images/contact_header.png" width=250px alt="contact_header"/>

    <p>I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS</p>

    <ul>
        <li>LinkedIN</li>
        <li>Github</li>
        <li>Resume</li>
        <li>Email</li>
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
            }
        }
    }

</style>