function writeInitalText() {
    var message = "You... ";
    var messageSplit = message.split("");
    console.log(messageSplit);

    var writeProgress = -1;
    var messageLength = messageSplit.length;
    var writeText = setInterval(function() {
        writeProgress++;
        if (writeProgress == messageLength - 1) {
            clearInterval(writeText);
        }

        //console.log(messageSplit[writeProgress]);
        //console.log(writeProgress);
        var td = document.getElementById('td');
        var singleText = document.createTextNode(messageSplit[writeProgress]);
        td.appendChild(singleText);

        

        return "dummyvalue";
    }, 100);
}

function IDIOT() {
    var message = "IDIOT";
    var messageSplit = message.split("");
    console.log(messageSplit);

    var writeProgress = -1;
    var messageLength = messageSplit.length;
    var writeText = setInterval(function() {
        writeProgress++;
        if (writeProgress == messageLength - 1) {
            clearInterval(writeText);
        }

        //console.log(messageSplit[writeProgress]);
        //console.log(writeProgress);
        var td = document.getElementById('idiot');
        var singleText = document.createTextNode(messageSplit[writeProgress]);
        td.appendChild(singleText);

        

        return "dummyvalue";
    }, 500);
}

window.onload = function() {
    setTimeout(function() {
        writeInitalText();
        setTimeout(function() {
            IDIOT();
        }, 800);
    }, 500);
};