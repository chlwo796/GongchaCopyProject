// 지도 //const map에서 var map으로 바꿔봄..
//구글 지도 보여주기
window.initMap = function () {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.526475, lng: 126.981340 },//서울
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

    {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">강남점</div><br>
    <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style="font-size: medium; color: darkgrey;">서울특별시 강남구 역삼동 619-11</span></p>
        <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
        <span style="font-size: medium; color: darkgrey;">02-561-3568</span></p>
        `,address:"aa", number:"aa", lat: 37.499453, lng: 127.029647 },
        
        {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">홍대상수점</div><br>
        <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">서울특별시 마포구 동교동 184-24</span></p>
            <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">02-323-3568</span></p>
            `,address:"aa", number:"aa",  lat: 37.554245, lng: 126.926171 },

            {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">분당서현점</div><br>
        <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">경기도 성남시 분당구 서현동 252-1</span></p>
            <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">031-712-3568</span></p>
            `,address:"aa", number:"aa",  lat: 37.387365, lng: 127.122079  },

            {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">신세계백화점 영등포점</div><br>
        <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">서울특별시 영등포구 여의도동 23-3 신세계백화점 본점</span></p>
            <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">02-2639-9565</span></p>
            `,address:"aa", number:"aa", lat: 37.525069, lng: 126.924936  },

            {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">일산벨라시타점</div><br>
        <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">경기도 고양시 일산동구 백석동 1231 벨라시타</span></p>
            <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">031-919-3568</span></p>
            `,address:"aa", number:"aa",lat: 37.651028, lng: 126.787874 },

            {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">판교테크노밸리점</div><br>
        <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">경기도 성남시 분당구 삼평동 대왕판교로 670 유스페이스2 b-116</span></p>
            <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">031-2639-9565</span></p>
            `,address:"aa", number:"aa", lat: 37.393412, lng: 127.110802  },

            {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">용산점</div><br>
        <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">서울특별시 용산구 한강대로23길 55 아이파크몰 6층 703호</span></p>
            <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">02-2639-9565</span></p>
            `,address:"aa", number:"aa", lat: 37.531351, lng: 126.981305   },

            {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">일산호수공원점</div><br>
            <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style="font-size: medium; color: darkgrey;">경기도 고양시 일산동구 식사동 668-25</span></p>
                <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
                <span style="font-size: medium; color: darkgrey;">031-2639-9565</span></p>
                `,address:"aa", number:"aa", lat: 37.656807, lng: 126.780276  },

                {label: "!", name: `  <div style="font-size: 17px; font-weight:700; ">성수이스트점</div><br>
        <p style="font-size: 15px; font-weight: 700;">주소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">서울특별시 성동구 성수동2가 333-16 이마트 성수점</span></p>
            <p style="font-size: 15px; font-weight: 700;">전화번호&nbsp;&nbsp;&nbsp;
            <span style="font-size: medium; color: darkgrey;">02-2639-9565</span></p>
            `,address:"aa", number:"aa", lat: 37.546735, lng: 127.052968 },

  





















  
    // {label: "!", name: `<img src="../location_brand_home.png"></img>`,address:"aa", number:"aa", lat: 37.554245, lng: 126.926171},
    // {label: "!", name:`<img src="../location_brand_home.png"></img>`, lat: 37.387365, lng: 127.122079 },
    // {label: "!", name: "신세계백화점 영등포점", lat: 37.525069, lng: 126.924936},
    // {label: "!", name: "일산벨라시타점", lat: 37.651028, lng: 126.787874 },
    // {label: "!", name: "판교테크노밸리점", lat: 37.393412, lng: 127.110802 },
    // {label: "!", name: "용산점", lat: 37.531351, lng: 126.981305 },
    // {label: "!", name: "일산호수공원점", lat: 37.656807, lng: 126.780276 },
    // {label: "!", name: "성수이스트점", lat: 37.546735, lng: 127.052968 }

 /*   {label: "!", name: `<div style="font-size: large; background-color: cadetblue;">강남점</div>

<div style="font-size: medium; color: darkgrey;">(서울특별시 강남구 역삼동 619-11)<br>02-561-3568</div>`,address:"aa", number:"aa", lat: "37.499453", lng: "127.029647" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">홍대상수점</div>

<div style="font-size: medium; color: darkgrey;">(서울특별시 마포구 동교동 184-24)<br>02-323-3568</div>`,address:"aa", number:"aa", lat: "37.554245", lng: "126.926171" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">분당서현점</div>

<div style="font-size: medium; color: darkgrey;">(경기도 성남시 분당구 서현동 252-1)<br>031-712-3568</div>`,address:"aa", number:"aa", lat: "37.387365", lng: "127.122079" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">해운대점</div>

<div style="font-size: medium; color: darkgrey;">(부산광역시 해운대구 좌동 1407-2)<br>051-742-3568</div>`, address:"aa", number:"aa",lat: "35.161587", lng: "129.168217" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">신세계백화점 영등포점</div>

<div style="font-size: medium; color: darkgrey;">(서울특별시 영등포구 여의도동 23-3 신세계백화점 본점)<br>02-2639-9565</div>`,address:"aa", number:"aa", lat: "37.525069", lng: "126.924936" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">일산벨라시타점</div>

<div style="font-size: medium; color: darkgrey;">(경기도 고양시 일산동구 백석동 1231 벨라시타)<br>031-919-3568</div>`,address:"aa", number:"aa", lat: "37.651028", lng: "126.787874" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">대구칠성로점</div>

<div style="font-size: medium; color: darkgrey;">(대구 중구 대신동 67-10 1층)<br>053-423-1811</div>`, address:"aa", number:"aa",lat: "35.871028", lng: "128.594264" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">대전둔산점</div>

<div style="font-size: medium; color: darkgrey;">(대전 서구 둔산동 1114-4 1층)<br>042-484-8838</div>`,address:"aa", number:"aa", lat: "36.355125", lng: "127.384811" },

{label: "!", name: `<div style="font-size: large; background-color: cadetblue;">대전중앙로점</div>

<div style="font-size: medium; color: darkgrey;">(대전 중구 중앙로4가 393 한성빌딩 1층)<br>042-254-6623</div>`, address:"aa", number:"aa",lat: "36.326851", lng: "127.426211" }
*/
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




  //시도군구 검색
function cityCategoryChange(e) {
    const city=document.getElementById("city");
  
    const city1=["강남구","강동구","강북구","강서구"];
    const city2=["강서구","금정구","기장구","남구"];
    const city3=["남구","달서구","달성군"];
    const city4=["강화군","계양구","미추홀구","남동구"];
    const city5=["광산구","남구"];
    const city6=["대덕구","동구","서구","유성구","중구"];
    
  
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
  