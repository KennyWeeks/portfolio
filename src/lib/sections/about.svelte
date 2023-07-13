<script lang="ts">
    export let path : string = ""
</script>

<div id="about">

    <div id="picture_of_me">

        <img src="{path}/images/about_ring.png" alt="about ring"/>

    </div>

    <div id="surrounding_area">
        <div id="content_area">

            <img src="{path}/images/pattern.png" alt="pattern"/>

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

        </div>
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
        background-color:$offWhite;
        position:relative;

        @include phoneVert {
            //This will pretty much just be the mobile size of the content;
            padding:20px 0px;
        }

        @include tablet {
            width:100vw;
            padding:50px 0px;
        }

        @include laptop {
            //So this is the full screen size, and it will maximize the screen size.
            height:100vh;
            max-width:1600px;
            margin:auto;
            @include flexRow;
        }

        #picture_of_me {
            box-shadow:inset 0 0 0 20px $offBlack;
            border-radius:50%;
            @include flexCenter;

            @include phoneVert {
                width:40vw;
                height:40vw;   
                box-shadow:inset 0 0 0 15px $offBlack;
                margin-left:30vw;
                margin-bottom:30px;
                margin-top:30px;
            }

            @include tablet {
                margin:auto;
                margin-bottom:0px;
                width:30vw;
                height:30vw;  
                box-shadow:inset 0 0 0 15px $offBlack; 
            }

            @include laptop {
                width:340px;
                height:340px;
                margin-top:calc((100vh - 340px) / 2);
                margin-left:calc(((100vw - 700px) - 340px) / 2);
            }

            @include desktop {
                width:340px;
                height:340px;
                margin-top:calc((100vh - 340px) / 2);
                margin-left:calc(((1600px - 700px) - 340px) / 2);
            }

            //This is the spinning part of the image
            img {
                @include laptop {
                    width:470px;
                    animation: rotate 10s linear infinite;
                }

                @include tablet {
                    width:42vw;
                    animation: rotate 10s linear infinite;
                }

                @include phoneVert {
                    width:58vw;
                    animation: rotate 10s linear infinite;
                }
            }
        }

        //This is the black box that the content is stored in.
        #surrounding_area {
            overflow-x:hidden;
            text-align:right;

            @include phoneVert {
                width:100vw;
                height:auto;
            }

            @include tablet {
                width:100vw;
                height:650px;
                margin-top:80px;
            }

            @include laptop {
                width:700px;
                bottom:0px;
                right:0px;
                border-radius:20px;
                height:90vh;
                margin-top:5vh;
                @include flexCenter;
            }


            #content_area {
                text-align:center;
                position:relative;
                color:$offWhite;
                overflow:hidden;

                @include phoneVert {
                    width:90vw;
                    margin-left:5vw;
                }

                @include tablet {
                    width:90vw;
                    height:650px;
                    margin-left:5vw;
                    border-radius:20px;
                }
                @include laptop {
                    width:calc(700px - 5vw);
                    height:calc(700px - 5vw);
                    border-radius:20px;
                    margin-right:5vw;
                    @include flexCenter;
                }

                //This is the pattern at the top
                
                img {
                    height:50px;
                    position:absolute;
                    left:0px;
                    top:0px;
                    display:none;
                }

                .content_container {
                    display:flex;
                    flex-direction:row;
                    flex-wrap:wrap;
                    
                    @media only screen and (max-width:600px) {
                        height:100%;
                        padding:20px 0px;
                    }
                    //So this is when the screen shrinks
                    @include tablet {
                        width:80%;
                        margin-left:10%;
                        height:100%;
                        border-radius:20px;
                    }

                    @media only screen and (min-width:1080px) {
                        width:100%;
                        height:100%;
                    }


                    .content_section {
                        width:100%;

                        @include randomTest(">600px") {
                            height:50%;
                        }

                        border-radius:20px;
                        background-color:$offBlack;
                        @include flexCenter;
                        

                        p {
                            margin:auto;
                            display:inline-block;
                            text-align:center;
                            @include flexCenter;
                            font-family:"Arial Black";

                            @include phoneVert {
                                width:80%;
                                margin:auto;
                                text-align:left;
                                font-size:18px;
                                padding:50px 0px;
                            }

                            @include tablet {
                                text-align:left;
                                font-size: 17px;
                                width:80%;
                            }

                            @include laptop {
                                width:500px;
                                font-size:17px;
                                text-align:left;
                            }
                        }
                    }

                    

                    #education {
                        @include randomTest(">600px") {
                            width:calc(50% - 5px);
                            height:calc(50% - 10px);
                        }

                        @include phoneVert {
                            width:100%;
                            padding:20px 0px;
                        }
                        
                        overflow:hidden;
                        background-color:$offBlack;
                        border-radius:20px;
                        margin-top:10px;
                        text-align:left;
                        position:relative;
                        @include flexCenter;
                        
                        #in-edu {
                            @include randomTest(">600px") {
                                position:absolute;
                            }

                            text-align:center;
                            overflow:hidden;

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
                        @include randomTest(">600px") {
                            width:calc(50% - 5px);
                            height:calc(50% - 10px);
                            margin-left:10px;
                        }

                        @include phoneVert {
                            width:100%;
                            padding:20px 0px;
                        }
                        
                        overflow:hidden;
                        background-color:$offBlack;
                        border-radius:20px;
                        margin-top:10px;
                        text-align:left;
                    }

                }

            }
        }
    }

</style>