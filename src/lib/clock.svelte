<script lang="ts">

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

    setInterval(()=>{
        minutes += 1;
        minutes = minutes == 60 ? 0 : minutes; //If it has been 60 minutes, then you are back at 0
        hours = minutes == 60 ? hours + 1 : hours; //Otherwise, you are starting the new hour;
        hours = hours >= 24 ? hours - 24 : hours;
        amPm = hours > 12 ? "PM" : "AM";
    }, 60000);


</script>

<div>

    <p><span>{region}</span> <span>{hours}</span> <span class="semi-colon">:</span> <span>{minutes < 10 ? "0" : ""}{minutes}</span> <span>{amPm}</span></p>

</div>

<style lang="scss">

    @import "../styles/theme.scss";

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

    p {
        :nth-child(1) {
            padding:5px 10px 3px 10px;
            background-color:$offBlack;
            color:$offWhite;
            border-radius:20px;
        }

        .semi-colon {
            opacity:1;
            animation: blink 1s linear infinite;
        }
    }
</style>