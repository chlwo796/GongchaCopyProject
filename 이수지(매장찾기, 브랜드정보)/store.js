// 지도
//(1) 구글 지도 보여주기
window.initMap = function () {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.526475, lng: 126.981340 },//서울
      zoom: 10,
    });
  

  //(3) 마커로 위치 표시하기
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
  ];
  
  //(4) 마커 움직일 때마다 허허벌판 쳐내기
  //(4-1) 
  const bounds = new google.maps.LatLngBounds();  
  

  //(5) 정보창
  //(5-1) 클릭 시 정보 보여주기(B)
  const infowindow = new google.maps.InfoWindow();
   
  //(2) 마커 설정
  malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      name,
      map,
    });

    //(4-2) 
  bounds.extend(marker.position);
  
    //(5-2)
  marker.addListener("click", () => {
    map.panTo(marker.position); //지도 중심 이동하기
    infowindow.setContent(name);
    infowindow.open({
      anchor: marker, 
      map,
      });
    });
  });

  //(4-3)
  map.fitBounds(bounds);
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
    add=city4;
  } else if(e.value=="city05"){
    add=city5;
  } else if(e.value=="city06"){
    add=city6;
  }
    
  city.options.length=1;
  
  for(b in add){
    let opt=document.createElement("option");
    opt.value=add[b];
    opt.innerHTML=add[b];
    city.appendChild(opt);
  }
  }
  