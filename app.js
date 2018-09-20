var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Hämta datum bara för år och använd webläsaren
    var d = new Date();
    var y = d.getFullYear();

    
    // Den functionen funkar när det inte är fyra sifror eller tomt
    var x = document.getElementById("myInput").value;
        if (x =='' | x.length != 4) {
        alert("Fylla fyra siffror för att kunna logga in");
        return false;
    }
    
    // Den function kolla om du är under eller över 18 år 
    if (x >= y-18) {
    alert ("Tyvärr! Du är under 18 år");
    } else {
        
    alert("kul! Du är över 18 år");
    window.location =  "https://salwa-sh.github.io/shopping/"
    };
});