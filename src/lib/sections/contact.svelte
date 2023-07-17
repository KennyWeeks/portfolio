<script lang="ts">
    export let path : string = ""
    export let screenWidth : number;
</script>


<div id="contacts">

    
    <h3>contact</h3>

    <p>I am currently not accepting any freelance work, but feel free to message me and view other projects.</p>

    <ul>
        <li><span><img src="{path}/images/linkedin{screenWidth <= 1049 ? "_off_white" : ""}.png" alt="linkedin" width=20/></span>LinkedIN</li>
        <li><span><img src="{path}/images/octocat{screenWidth <= 1049 ? "": "_off_black"}.png" alt="github" width=25/></span>Github</li>
        <li><span><img src="{path}/images/resume{screenWidth <= 1049 ? "_off_white" : ""}.png" alt="resume" width=20/></span>Resume</li>
        <li><span><img src="{path}/images/gmail{screenWidth <= 1049 ? "_off_white" : ""}.png" alt="gmail" width=20/></span>Email</li>
    </ul>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #contacts {
        overflow:hidden;
        width:100vw; 
        position:relative;
        margin-top:0px;
        padding-bottom:30px; 

        @include phoneVert {
            background-color:$offBlack;
            padding-left:10vw;
        }
        @include tablet {
            background-color:$offBlack;
            padding-left:calc(5vw + 20px);
        }
        @include laptop {
            background-color:$offWhite;
            padding-left:calc(5vw + 20px);
        }
        @include desktop {
            width:1600px;
            margin-left:calc((100vw - 1600px) / 2);
            padding-left:20px;
        }

        h3 {
            font-size:50px;
            font-family:$font-family;
            margin:0px 0px 10px 0px;

            @include randomTest("<#{$tabletMax}") {
                color:$offWhite;
            }
            @include laptop {
                color:$offBlack;
            }
        }
        

        p {
            margin-top:0px;
            font-family:$font-family;
            width:70vw;
            @include randomTest("<#{$tabletMax}") {
                color:$offWhite;
                font-size:15px;
            }
            @include laptop {
                color:$offBlack;
                font-size:20px;
            }
            @include desktop {
                font-size:20px;
            }
        }

        ul {
            text-decoration:none;
            list-style: none;
            padding:0px;
            display:block;
            float:right;
            @include phoneVert {
                margin-right:20vw;
            }

            @include tablet {
                margin-right:15vw;
            }

            @include laptop {
                margin-right:calc(10vw + 40px);    
            }

            @include desktop {
                margin-right:40px;
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
                font-family:$font-family;
                font-weight:lighter;
                font-size:25px;
                @include randomTest("<#{$tabletMax}") {
                    color:$offWhite;
                }
                @include randomTest(">#{$tabletMax}") {
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