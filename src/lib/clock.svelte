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
            <p>{region}</p>

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
        margin-top:10px;
        p {
            line-height:0px;
            margin:0px;
            padding:20px;
            display:inline-block;
            border-radius:20px;
            @include desktop {
                font-size:20px;
            }
        }

        p:nth-of-type(1) {
            background-color:$offBlack;
            color:$offWhite;
        }

    }

</style>