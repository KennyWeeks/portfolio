<script lang="ts">
    export let path : string = ""
</script>

<div id="about">

    <div id="picture_of_me">

        <img src="{path}/images/about_ring.png" alt="about ring"/>

    </div>

    <div class="surrounding_image_intros">
        <img id="about_intro" src="{path}/images/about_header.png" width=200px alt="contact_header"/>
    </div>

    <div id="surrounding_area">
        <div id="content_area">

            <img src="{path}/images/pattern.svg" alt="pattern"/>

            <div class="content_container">

                <div class="content_section">
                    <p>
                        I am a computer science
                        graduate, currently attending
                        the University of California,
                        Irvine. I have a Bachelors of Science
                        in Computer Science from UNLV and two
                        minors in mathematics and physics. I’ve
                        been programming since high school, and I
                        enjoy working at the lowest level of a 
                        computer, specifically O.S. and compilers.
                    </p>
                </div>

                <div id="education">

                    <div id="in-edu">

                        <p>
                            University of Nevada, Las Vegas<br>
                            GPA: 3.657<br>
                            Bachelors in Computer Science<br>
                            Minors in Physics and Mathematics<br>
                        </p>
                        <p>
                            University of California, Irvine<br>
                            GPA: 3.9<br>
                            Masters in Computer Science
                        </p>

                    </div>
            
                </div>

                <div id="skills"></div>

            </div>

            <img src="{path}/images/pattern.svg" alt="pattern"/>

        </div>
    </div>

    <div class="surrounding_image_intros">
        <img id="projects_intro" src="{path}/images/projects_header.png" width=275px alt="contact_header"/>
    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    @keyframes rotate {
        0% {
            transform:rotate(0deg);
        }
        100% {
            transform:rotate(360deg);
        }
    }

    //So I know the max width should be 1080px, and the it will end around 600, before it switches to the mobile styles
    #about {
        width:100vw;

        @media only screen and (min-width:1080px) {
            //So this is the full screen size, and it will maximize the screen size.
            height:100vh;
            max-width:1600px;
            margin:auto;
            @include flexRow;
        }

        @media only screen and (min-width:601px) and (max-width:1079px) {
            width:100vw;
            padding:50px 0px;
        }

        @media only screen and (max-width:600px) {
            //This will pretty much just be the mobile size of the content;
            padding:20px 0px;
        }
        background-color:$offWhite;
        position:relative;

        #picture_of_me {
            @media only screen and (max-width:600px) {
                width:40vw;
                height:40vw;   
                box-shadow:inset 0 0 0 15px $offBlack;
                margin-left:5vw;
                margin-bottom:0px;
            }

            @media only screen and (min-width:601px) and (max-width:1079px) {
                margin:auto;
                margin-bottom:0px;
                width:30vw;
                height:30vw;  
                box-shadow:inset 0 0 0 15px $offBlack; 
            }

            @media only screen and (min-width:1080px) {
                width:340px;
                height:340px;
                margin-top:calc((100vh - 340px) / 2);
                margin-left:calc(((100vw - 700px) - 340px) / 2);
            }
            box-shadow:inset 0 0 0 20px $offBlack;
            border-radius:50%;
            @include flexCenter;

            img {
                @media only screen and (min-width:1080px) {
                    width:470px;
                    animation: rotate 10s linear infinite;
                }

                @media only screen and (max-width:1079px) and (min-width:600px) {
                    width:42vw;
                    animation: rotate 10s linear infinite;
                }

                @media only screen and (max-width:600px) {
                    display:none;
                }
            }
        }

        .surrounding_image_intros {

            @media only screen and (max-width:600px) {
                width:100%;
                text-align:right;
            }

            @media only screen and (min-width:600px) and (max-width:1079px) {
                display:none;
            }

            @media only screen and (min-width:1080px) {
                width:700px;
                position:absolute;
                display:none;
            }
            overflow:hidden;  
            margin-bottom:10px;
            transform:rotate(-25deg);
        }

        .surrounding_image_intros:nth-of-type(2) {
            @media only screen and (max-width:600px) {
                margin-top:-40px;
            }

            @media only screen and (min-width:1080px) {
                right:140px;
                z-index:1000;
                bottom:540px;
            }
        }

        .surrounding_image_intros:nth-of-type(4) {
            @media only screen and (max-width:600px) {
                text-align:left;
                margin-top:25px;
                margin-bottom:0px;
            }

            @media only screen and (min-width:1080px) {
                right:-140px;
                bottom:-50px;
            }
            
        }

        //This is the black box that the content is stored in.
        #surrounding_area {

            @media only screen and (max-width:600px) {
                width:200vw;
                margin-left:-50vw;
                transform:rotate(-25deg);
            }

            @media only screen and (min-width:601px) and (max-width:1079px) {
                width:100vw;
                height:500px;
                margin-top:60px;
            }

            @media only screen and (min-width:1080px) {
                width:700px;
                bottom:0px;
                right:0px;
                border-radius:20px;
                height:90vh;
                margin-top:5vh;
                @include flexCenter;
            }

            overflow-x:hidden;
            text-align:right;


            #content_area {
                @media only screen and (max-width:600px) {
                    width:200vw;
                    height:500px;
                }
                @media only screen and (min-width:601px) and (max-width:1079px) {
                    width:90vw;
                    height:500px;
                    margin-left:5vw;
                    border-radius:20px;
                    @include flexCenter;
                }
                @media only screen and (min-width:1080px) {
                    width:calc(700px - 5vw);
                    height:calc(700px - 5vw);
                    border-radius:20px;
                    margin-right:5vw;
                }
                
                text-align:center;
                position:relative;
                color:$offWhite;
                overflow:hidden;
                
                img {
                    max-height:130px;
                    max-width:1000px;
                    position:absolute;
                    left:0px;
                }

                .content_container {
                    display:flex;
                    flex-direction:row;
                    flex-wrap:wrap;
                    @media only screen and (max-width:600px) {
                        height:100%;
                    }
                    //So this is when the screen shrinks
                    @media only screen and (min-width:601px) and (max-width:1079px) {
                        width:80%;
                        height:100%;
                    }

                    @media only screen and (min-width:1080px) {
                        width:100%;
                        height:100%;
                    }


                    .content_section {
                        width:100%;
                        height:50%;
                        border-bottom-right-radius:20px;
                        border-bottom-left-radius:20px;
                        @include flexCenter;
                        background-color:$offBlack;

                        p {
                            @media only screen and (max-width:600px) {
                                width:250px;
                                transform:rotate(25deg);
                                height:100%;
                            }

                            @media only screen and (min-width:601px) and (max-width:1079px) {
                                text-align:left;
                            }

                            @media only screen and (min-width:1080px) {
                                width:500px;
                                font-size:17px;
                                text-align:left;
                            }
                            margin:auto;
                            display:inline-block;
                            text-align:center;
                            @include flexCenter;
                            font-family:"Arial Black";
                            font-size:15px;
                            padding-top:35px;
                        }
                    }

                    

                    #education {
                        width:calc(50% - 5px);
                        
                        overflow:hidden;
                        background-color:$offBlack;
                        border-radius:20px;
                        
                        margin-top:10px;
                        text-align:left;
                        height:calc(50% - 10px);
                        position:relative;
                        @include flexCenter;
                        
                        #in-edu {
                            position:absolute;
                            text-align:center;
                            overflow:hidden;
                            margin-top:-40px;

                            p {
                                //width:calc(100% - 10px);
                                width:80%;
                                font-family:"Arial";
                                font-size:15px;
                                text-align:left;
                                display:inline-block;
                            }

                            & > p:nth-of-type(2) {
                                margin-top:10px;
                            }
                        }
                    }

                    #skills {
                        width:calc(50% - 5px);
                        overflow:hidden;
                        background-color:$offBlack;
                        border-radius:20px;
                        
                        margin-top:10px;
                        margin-left:10px;
                        text-align:left;
                        height:calc(50% - 10px);
                    }

                }

                //So this will position both images in there respective position
                img:nth-of-type(1) {
                    top:0px;
                }
                img:nth-of-type(2) {
                    bottom:0px;
                }

            }
        }
    }

</style>