function updateClock(){
    var now = new Date();
    var hou = now.getHours();
    
    var message;

        if(hou >= 0 && hou < 6)
            message = "Senhores\ntoque de recolher\nchega de SEMEAR por hj\nvai dormir";
        else if(hou < 12)
            message = "Senhores\ntoque de acordar\nchega de dormir por hoje\nvai SEMEAR";
        else if(hou < 18)
            message = "Hora de reunião\nbora trabalhar\nvai NRE"
        else{
            message = "Hora de pós-reunião\nvai NRE"
        }

        document.getElementById('msg').innerText = message;
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}