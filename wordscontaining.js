const fs=require("fs");
const RIDICULOUS_THRESHOLD=250;

fs.readFile("words.txt", function(err, data){
    if(err){
        console.log("that didn't go as planned\r\n");
        throw err;
    }
    if (process.argv.length>2){
        var query=process.argv.slice(2).join(" ");
        console.log("words that contain the substring \""+query+":\"\r\n");
        var words = data.toString().split('\n');
        var n=0;
        for (var i=0; i<words.length; i++){
            if (words[i].includes(query)){
                console.log(words[i]);
                n++;
            }
        }
        console.log("\n"+n+" results out of "+words.length+" total\r\n");
        if (n>RIDICULOUS_THRESHOLD){
            console.log("(if there are too many for you to manage in a console window you may want to pipe the output to a file instead.)\r\n");
            console.log("(in windows you want to do node wordscontaining.js query > output.txt)\r\n");
            console.log("(in linux you want to do the same thing)\r\n");
            console.log("(i'm going to assume none of you are using macs)\r\n");
        }
    } else {
        console.log("you're supposed to pass the search string as the command line argument thanks\r\n");
    }
});