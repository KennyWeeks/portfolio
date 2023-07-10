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

            <p>I am a computer science
                graduate, currently attending
                the University of California,
                Irvine. I have a Bachelors of Science
                in Computer Science from UNLV and two
                minors in mathematics and physics. I’ve
                been programming since high school, and I
                enjoy working at the lowest level of a 
                computer, specifically O.S. and compilers.
                </p>

            <img src="{path}/images/pattern.svg" alt="pattern"/>

        </div>
    </div>

    <div class="surrounding_image_intros">
        <img id="projects_intro" src="{path}/images/projects_header.png" width=275px alt="contact_header"/>
    </div>

    <div id="education">

        <p>
            University of Nevada, Las Vegas<br>
            GPA: 3.657<br>
            Bachelors in Computer Science<br>
            Minors in Physics and Mathematics
        </p>

        <p>
            University of California, Irvine<br>
            GPA: 3.9<br>
            Masters in Computer Science
        </p>

    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #about {
        width:100vw;

        @media only screen and (min-width:811px) {
            height:700px;
            max-width:1600px;
            margin:auto;
        }
        background-color:$offWhite;
        padding:20px 0px;
        position:relative;

        #education {
            @media only screen and (max-width:810px) {
                display:none;
            }
            width:340px;
            overflow:hidden;
            font-family:"Goldoni";
            font-size:20px;
            margin-left:80px;
            margin-top:50px;
            p {
                width:340px;
            }
            & > p:nth-of-type(2) {
                border-top:2px solid #000;
                padding-top:20px;
            }
        }

        #picture_of_me {
            @media only screen and (max-width:810px) {
                width:40vw;
                height:40vw;
                box-shadow:inset 0 0 0 10px $offBlack;
                margin-left:10px;
                margin-bottom:0px;
            }

            @media only screen and (min-width:811px) {
                width:340px;
                height:340px;
                box-shadow:inset 0 0 0 20px $offBlack;
                margin-left:50px;
            }
            
            border-radius:50%;
            
        }

        .surrounding_image_intros {

            @media only screen and (max-width:810px) {
                width:100%;
                text-align:right;
            }

            @media only screen and (min-width:811px) {
                width:700px;
                position:absolute;
            }
            overflow:hidden;  
            margin-bottom:10px;
            transform:rotate(-25deg);
        }

        .surrounding_image_intros:nth-of-type(2) {
            @media only screen and (max-width:810px) {
                margin-top:-40px;
            }

            @media only screen and (min-width:811px) {
                right:140px;
                z-index:1000;
                bottom:540px;
            }
        }

        .surrounding_image_intros:nth-of-type(4) {
            @media only screen and (max-width:810px) {
                text-align:left;
                margin-top:25px;
                margin-bottom:0px;
            }

            @media only screen and (min-width:811px) {
                right:-140px;
                bottom:-50px;
            }
            
        }

        #surrounding_area {

            @media only screen and (max-width:810px) {
                width:200vw;
                margin-left:-50vw;
            }

            @media only screen and (min-width:811px) {
                width:700px;
                position:absolute;
                bottom:0px;
                right:0px;
                border-radius:20px;
            }
            
            transform:rotate(-25deg);
            overflow-x:hidden;
            text-align:right;


            #content_area {
                @media only screen and (max-width:810px) {
                    width:200vw;
                    height:500px;
                }
                @media only screen and (min-width:811px) {
                    width:700px;
                    height:600px;
                }
                
                background-color:$offBlack;
                text-align:center;
                position:relative;
                color:$offWhite;
                overflow:hidden;
                
                img {
                    max-height:130px;
                    max-width:1300px;
                    position:absolute;
                    left:0px;
                }

                p {
                    @media only screen and (max-width:810px) {
                        width:250px;
                    }

                    @media only screen and (min-width:811px) {
                        width:400px;
                        font-size:20px;
                        text-align:left;
                    }
                    margin:auto;
                    display:inline-block;
                    text-align:center;
                    transform:rotate(25deg);
                    height:100%;
                    @include flexCenter;
                }

                :nth-child(3) {
                    bottom:0px;
                }
            }
        }
    }

</style>