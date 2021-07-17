let clothesData = {
    Company:"lative",
    companyLogo:"img/logo.png",
    gender:"mail",
    style:"short sleeve",
    data:[
      {
        id:"52126041",
        name:"純棉拉克蘭袖T恤-男",
        originalPrice:299,
        salePrice:233, 
        stoke:[
          {color:"blueWhite",buttonImg:"img/button/c1-blueWhite.jpeg",clothestImg:"img/clothest/c1-blueWhite.jpeg",size:["M","L","xL","xxl"]},
          {color:"redWhite",buttonImg:"img/button/c1-redWhite.jpeg",clothestImg:"img/clothest/c1-redWhite.jpeg",size:["S","L","xL","xxl"]},
          {color:"yellowWhite",buttonImg:"img/button/c1-yellowWhite.jpeg",clothestImg:"img/clothest/c1-yellowWhite.jpeg",size:["S","M","L","xxl"]},
          {color:"blackGray",buttonImg:"img/button/c1-blackGray.jpeg",clothestImg:"img/clothest/c1-blackGray.jpeg",size:["S","M","L","xL"]}
        ]  
      },    
      {
        id:"52136052",
        name:"竹節棉口袋圓領T恤-男",
        oreginalPrice:299,
        salePrice:266,
        stoke:[
          {color:"gray",buttonImg:"img/button/c2-gray.jpeg",clothestImg:"img/clothest/c2-gray.jpeg",size:["M","L","xL","xxl"]},
          {color:"blue",buttonImg:"img/button/c2-blue.jpeg",clothestImg:"img/clothest/c2-blue.jpeg",size:["S","M","L","xL","xxl"]},
          {color:"black",buttonImg:"img/button/c2-black.jpeg",clothestImg:"img/clothest/c2-gray.jpeg",size:["M","L","xL","xxl"]}
        ]  
      },
      {
        id:"52135043",
        name:"竹節棉亨利領T恤-男",
        oreginalPrice:299,
        salePrice:299,
        stoke:[
          {color:"gree",buttonImg:"img/button/c3-gree.jpeg",clothestImg:"img/clothest/c3-gree.jpeg",size:["L"]},
          {color:"blue",buttonImg:"img/button/c3-blue.jpeg",clothestImg:"img/clothest/c3-blue.jpeg",size:["L","xL","xxl"]},
          {color:"black",buttonImg:"img/button/c3-black.jpeg",clothestImg:"img/clothest/c3-black.jpeg",size:["L","xL"]}
        ]  
      }  
    ]
  }
  
//找出與顏色相符的index 
const checkColor = (colorStr) => {
  for(let i = 0; i < clothesData.data[clothesIndex].stoke.length; i++){
    if(clothesData.data[clothesIndex].stoke[i].color === colorStr)
    index = i
  }
  return index
}

//換圖片
const changImg = (colorStr) => {
  let index = checkColor(colorStr);
  document.getElementById("img").src = clothesData.data[clothesIndex].stoke[index].clothestImg;
}

//清空element裡所有子結點
const removeAllChildNodes = () => {
  let el = document.getElementById("sizeButton")
  while (el.firstChild) {
      el.removeChild(el.firstChild);
  }
}

//創建 size button
const addsButton = (colorStr) => {
  let index = checkColor(colorStr)
  let sButton = 0;
  for(let i = 0; i < clothesData.data[clothesIndex].stoke[index].size.length; i++){
    sButton = document.createElement("button");
    sButton.innerHTML = clothesData.data[clothesIndex].stoke[index].size[i];
    document.getElementById("sizeButton").append(sButton)
  }
}

//換衣服尺寸
const changSize = (colorStr) => {
  //清空之前的
  removeAllChildNodes()
  addsButton()
}

//當顏色按鈕被按時
const whenPressButton = (colorStr) => {
  changImg(colorStr)
  changSize(colorStr)
}

//加入顏色按鈕
const addColorButton = (colorStr) => {
  let cButton = document.createElement("img");
  cButton.setAttribute("id","");
  cButton.setAttribute("src","");
  let onclickStr = "whenPressButton(" + "\'" + colorStr + "\'" + ")";
  cButton.setAttribute("onclick",onclickStr);
  cButton.id = colorStr + "Button"
  let index = checkColor(colorStr)
  cButton.src = clothesData.data[clothesIndex].stoke[index].buttonImg
  document.getElementById("colorButton").append(cButton)
}

//找出id對應的index
const findIdCorrespondingIndex = (cid) => {
  let index = 0
  for(let i = 0; i < clothesData.data.length; i++){
    if(clothesData.data[i].id === cid){
      index = i
    }
  }
  return index
}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params.id)
let clothesIndex = findIdCorrespondingIndex(params.id)

//說明如何換頁面
let message = document.getElementById("message")


for(let i = 0; i < clothesData.data.length; i++){
  // creatTable(clothesData.data[i].name , clothesData.data[i].id)
  let aTag = document.createElement("a")
  console.log(clothesData.data[i].id)
  aTag.href = "https://danielwija.github.io/lative-daniel/" + "?id=" + clothesData.data[i].id;
  aTag.innerHTML = clothesData.data[i].name
  let aHref = document.getElementById("aHref");
  aHref.append(aTag);
  aHref.innerHTML += "<br>"
}


//初始設定
const InitialSetting = () => {

  // document.getElementById("title").innerHTML = clothesData[0].information.Company;
  document.getElementById("companyLogo").src = clothesData.companyLogo
  document.getElementById("originalPrice").innerHTML = clothesData.data[clothesIndex].originalPrice
  document.getElementById("salePrice").innerHTML = clothesData.data[clothesIndex].salePrice
  document.getElementById("img").src = clothesData.data[clothesIndex].stoke[0].clothestImg
  
  addsButton(clothesData.data[clothesIndex].stoke[0].color)

  //呼叫加入顏色按鈕
  for(let i = 0; i < clothesData.data[clothesIndex].stoke.length; i++){
    addColorButton(clothesData.data[clothesIndex].stoke[i].color)
  }
}

