//시도군구 검색
function cityCategoryChange(e) {
  const city=document.getElementById("city");

  const city1=["1","2","3"];
  const city2=["4","5","6"];
  const city3=["7","8","9"];
  const city4=["10","11","12"];

if(e.value=="city01") {
  add=city1;
} else if(e.value=="city02"){
  add=city2;
} else if(e.value=="city03"){
  add=city3;
} else if(e.value=="city04"){
  add=city4
}

city.options.length=1;

for(b in add){
  let opt=document.createElement("option");
  opt.value=add[b];
  opt.innerHTML=add[b];
  city.appendChild(opt);
}
}

// 지도 //const map에서 var map으로 바꿔봄..
//구글 지도 보여주기
window.initMap = function () {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.561468, lng: 127.19333 },//미사역
    zoom: 10,
  });

// function initMap() {
//   var seoul = { lat: 37.5642135 ,lng: 127.0016985 };
//   map = new google.maps.Map( document.getElementById('map'), {
//       zoom: 10,
//       center: seoul
//     });

//   new google.maps.Marker({
//     position: seoul,
//     map: map,
//     label: "서울 중심 좌표"
//   });
// }

//마커로 위치 표시하기<!!!!!!!!https://apis.map.kakao.com/web/sample/removableCustomOverlay/
const malls = [
  { label: "!", name: "서울특별시청", lat:  37.5662952, lng: 126.9779451 },
  { label: "!", 
  name: `<div style="font-size: large; background-color: cadetblue;">하남시청</div>
  <div style="font-size: medium; color: darkgrey;" >주소<br>0000</div>
  <a href="https://www.hanam.go.kr/intro_new.jsp">자세히보기> </a>
  `, address:"aa", number:"aa",lat: 37.5391091, lng: 127.2146082 },
  { label: "!", name: "구리시청", lat: 37.5942844, lng: 127.1297424 },
  { label: "!", name: "광주시청", lat: 37.4294077, lng: 127.2551421 },
  { label: "!", name: "성남시청", lat: 37.420023, lng: 127.1266546 },
  { label: "!", name: "광명시청", lat: 37.4785138, lng: 126.8646843 },
];



//마커들이 지도의 가장자리에 딱 맞도록 좀 더 타이트하게 배치(A)
//(A)google.maps.LatLngBounds() 생성자로 경계 객체를 생성한 후 
const bounds = new google.maps.LatLngBounds();

//클릭 시 정보 보여주기(B)
//(B)google.maps.InfoWindow() 생성자로 정보창을 하나 생성합니다.
const infowindow = new google.maps.InfoWindow();
 
malls.forEach(({ label, name, lat, lng }) => {
  const marker = new google.maps.Marker({
    position: { lat, lng },
    label,
    name,
    map,
  });
  //(A)extend() 메서드를 호출하여 각 마커의 위치 정보를 넘겨줍니다. 
  bounds.extend(marker.position);

  //(B)마커의 클릭(click) 이벤트가 발생하면 정보창이 뜨도록 설정(되게 조그맣게 나오네)
  marker.addListener("click", () => {
      //지도 중심 이동하기
      map.panTo(marker.position);
      infowindow.setContent(name);
      infowindow.open({
        anchor: marker,
        map,
      });
    });

});
//(A)그 다음에 지도 객체의 fitBounds() 메서드에 지도 경계 객체를 넘겨주세요.
map.fitBounds(bounds);
}

// //!!!!!!버튼을 클릭하면 마커가 눌리도록..
// //버튼 불러와서 변수(btn)에 담기
// const btn1=document.getElementById("store1");
// const btn2=document.getElementById("store2");
// const btn3=document.getElementById("store3");
// //버튼에 이벤트 추가
// btn1.addEventListener("click",()=>{
 
// });
//!!!!!!버튼을 클릭하면 마커가 눌리도록..
//버튼 불러와서 변수(btn)에 담기
// const btn1=document.getElementById("store1");
// const btn2=document.getElementById("store2");
// const btn3=document.getElementById("store3");
// //버튼에 이벤트 추가
// btn1.addEventListener("click",()=>{
//   malls[0]](({ label, name, lat, lng }) => {
//     marker = new google.maps.Marker({
//       position: { lat, lng },
//       label,
//       name,
//       map,
//     });

// });


// });



let button1 = document.getElementById('TEST');
console.log("iiiii" + button1);
button1.addEventListener('click',changeStore1);

//위치이동
function changeStore1(){
  console.log("ooooooo");
  var test = { lat:  45.288298, lng: 95.965470 };
  map.panTonTo(test);//인수 형식이 틀림
  map.setZoom(10);
}



