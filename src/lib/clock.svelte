<script lang="ts">

    export let otherRegion : number = 0;
    export let region : string = "Irvine";
    let date : Date = new Date();
    let day : number = date.getDay();
    let hours : number = date.getHours();
    hours += otherRegion;
    let amPm : string = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    let year : number = date.getUTCFullYear();
    let minutes : number = date.getMinutes();

    setInterval(()=>{
        minutes += 1;
        minutes = minutes == 60 ? 0 : minutes; //If it has been 60 minutes, then you are back at 0
        hours = minutes == 60 ? hours + 1 : hours; //Otherwise, you are starting the new hour;
        amPm = hours > 12 ? "PM" : "AM";
        hours = hours > 12 ? hours - 12 : hours;
    }, 60000);


</script>

<div>

    <p><span>{region}</span> <span>{hours}</span> : <span>{minutes < 10 ? "0" : ""}{minutes}</span> <span>{amPm}</span></p>

</div>

<style lang="scss">

    @import "../styles/theme.scss";

    p {
        :nth-child(1) {
            padding:5px 10px 2px 10px;
            background-color:$offBlack;
            color:$offWhite;
            border-radius:20px;
        }
    }
</style>