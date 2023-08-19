<script lang="ts">
    export let path : string = ""
    export let screenWidth : number;
</script>


<div id="contacts">

    <h3>contact</h3>

    <p>I am currently not accepting any freelance work, but feel free to message me and view other projects.</p>

    <ul>
        <li><span><img src="{path}/images/linkedin.png" alt="linkedin" width=20/></span>LinkedIN</li>
        <li><span><img src="{path}/images/octocat.png" alt="github" width=25/></span>Github</li>
        <li><span><img src="{path}/images/resume.png" alt="resume" width=20/></span>Resume</li>
        <li><span><img src="{path}/images/gmail.png" alt="gmail" width=20/></span>Email</li>
    </ul>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #contacts {
        //This will style the main area display
        @include mainAreaAndHeader;
        
        h3 {
            text-transform:uppercase;
            width:80vw;
            margin:auto;
        }

        p {
            margin:10px auto;
            font-family:$font-family;
            width:80vw;
            font-size:1.15rem;

        }

        ul {
            text-decoration:none;
            list-style: none;
            padding:0px;
            display:block;
            float:right;
            margin-right:10vw;
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
                font-size:1.15rem;
                color:$offBlack;
                
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