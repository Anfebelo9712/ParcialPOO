var map = L.map('map').setView([4.637769653872971, -74.06160518983587], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon (){
    
    let myData = await fetch('pardorubio.geojson');
    let myPolygon = await myData.json();
    
    L.geoJSON(myPolygon,
        {
            style:{
                color:'red'


            }
        }
    ).addTo(map);
}

loadPolygon();

async function loadPoints (){
    
    let myData2 = await fetch('arboles_pardorubio.geojson');
    let myPoint = await myData2.json();
    
    L.geoJSON(myPoint,
        {
            style:{
                color:'red'


            }
        }
    ).addTo(map);
}

loadPoints();




let btnTrees = document.getElementById("btnTrees");

btnTrees.addEventListener('click', ()=>alert("Hola"));