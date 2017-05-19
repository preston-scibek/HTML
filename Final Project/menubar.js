var menuBar = [
    {title: "Home", url: "projectfinal.html"},
    {title: "History", url: "history.html"},
    {title: "Super Bowl 1", url: "superbowl1.html"},
    {title: "Super Bowl 2", url: "superbowl2.html"},
    {title: "Current Players", url: "currentplayers.html"},
    {title: "Ray Lewis", url: "lewisray.html"},
    {title: "Records", url: "statistics.html"},
    {title: "Alumni", url: "alumni.html"}
];
function generateMenuBar() {
    var i;
    for (i = 0; i < menuBar.length; i++) {
        var menuBars = menuBar[i];
        var button1 = document.createElement("BUTTON");
        var title1 = document.createTextNode(menuBars.title);
        button1.appendChild(title1);
        document.getElementById("menuBar").appendChild(button1);
        button1.onclick = clicker(menuBars);
        function clicker(menuBars) {
            return function() {
                showMenuBar(menuBars)
            };
        }
    }
}

function showMenuBar(menuBars){
    window.location.assign(menuBars.url);
}

