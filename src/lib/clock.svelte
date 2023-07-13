<script lang="ts">

    export let path : string = "";
    let image : string = "";
    export let otherRegion : number = 0;
    export let region : string = "Irvine";
    let date : Date = new Date(); //This will be the date here
    let day : number = date.getDay();
    let hours : number = date.getHours();
    hours += otherRegion;
    hours = hours >= 24 ? hours - 24 : hours;
    let amPm : string = hours > 12 ? "PM" : "AM";
    let year : number = date.getUTCFullYear();
    let minutes : number = date.getMinutes();

    if(amPm == "PM") {
        image = "night";
    } else {
        image = "sun";
    }

    setInterval(()=>{
        minutes += 1;
        minutes = minutes == 60 ? 0 : minutes; //If it has been 60 minutes, then you are back at 0
        hours = minutes == 60 ? hours + 1 : hours; //Otherwise, you are starting the new hour;
        hours = hours >= 24 ? hours - 24 : hours;
        amPm = hours > 12 ? "PM" : "AM";
    }, 60000);


</script>

<div>

    <!--<p><span><img src="{path}/images/sun.png"alt="time_of_day"/></span><span>{region}</span> <span>{hours}</span> <span class="semi-colon">:</span> <span>{minutes < 10 ? "0" : ""}{minutes}</span> <span>{amPm}</span></p>-->

    <div class="total_time_area">
        <div class="title_image_color">
            <img src="{path}/images/{image}.png"alt="time_of_day"/>
            <p>{region}</p>
        </div>

        <p>{hours} <span class="semi-colon">:</span> {minutes < 10 ? "0" : ""}{minutes} {amPm}</p>
    </div>

</div>

<style lang="scss">

    @import "../styles/theme.scss";

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

    .total_time_area {
        @include flexRow;
        .title_image_color {
            background-color:$offBlack;
            @include flexRow;
            padding:5px 10px;
            border-radius:20px;

            img {
                height:20px;
            }

            p {
                color:$offWhite;
                margin:3px 0px 0px 5px;
            }
        }

        p {
            margin:8px 0px 0px 5px;
        }

    }

    /*p {
        :nth-child(1),
        :nth-child(2) {
            padding:7px 10px 5px 10px;
            background-color:$offBlack;
            color:$offWhite;
            border-radius:20px;
            line-height:0px;
            text-transform:uppercase;
        }

        :nth-child(1) {
            padding:0px;
        }

        .semi-colon {
            opacity:1;
            animation: blink 1s linear infinite;
        }

        span > img {
            height:20px;
        }
    }*/
</style>