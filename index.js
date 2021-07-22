let clothesData = {
  Company:"lative",
  companyLogo:"https://s4.lativ.com.tw/images/logo-2011.png?22221",
  gender:"mail",
  style:"short sleeve",
  data:[
    {
      id:"52126041",
      name:"純棉拉克蘭袖T恤-男",
      originalPrice:299,
      salePrice:233, 
      stoke:[
        {color:"blueWhite",buttonImg:"https://s4.lativ.com.tw/i/52126/52126011/5212601_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52126/52126011/5212601_500.jpg",size:["M","L","XL","XXL"]},
        {color:"redWhite",buttonImg:"https://s4.lativ.com.tw/i/52126/52126021/5212602_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52126/52126021/5212602_500.jpg",size:["S","L","XL","XXL"]},
        {color:"grayWhite",buttonImg:"https://s4.lativ.com.tw/i/52126/52126031/5212603_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52126/52126031/5212603_500.jpg",size:["S","M","XL","XXL"]},
        {color:"yellowWhite",buttonImg:"https://s4.lativ.com.tw/i/52126/52126041/5212604_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52126/52126041/5212604_500.jpg",size:["S","M","L","XXL"]},
        {color:"blackGray",buttonImg:"https://s4.lativ.com.tw/i/52126/52126051/5212605_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52126/52126051/5212605_500.jpg",size:["S","M","L","XL"]}
      ]  
    },    
    {
      id:"52136052",
      name:"竹節棉口袋圓領T恤-男",
      oreginalPrice:299,
      salePrice:266,
      stoke:[
        {color:"gray",buttonImg:"https://s4.lativ.com.tw/i/52136/52136031/5213603_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52136/52136031/5213603_500.jpg",size:["M","L","XL","XXL"]},
        {color:"blue",buttonImg:"https://s4.lativ.com.tw/i/52136/52136041/5213604_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52136/52136041/5213604_500.jpg",size:["S","M","L","XL","XXL"]},
        {color:"black",buttonImg:"https://s4.lativ.com.tw/i/52136/52136051/5213605_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52136/52136051/5213605_500.jpg",size:["M","L","XL","XXL"]}
      ]  
    },
    {
      id:"52135043",
      name:"竹節棉亨利領T恤-男",
      oreginalPrice:299,
      salePrice:299,
      stoke:[
        {color:"black",buttonImg:"https://s4.lativ.com.tw/i/52135/52135051/5213505_48.jpg",clothesImg:"https://s4.lativ.com.tw/i/52135/52135051/5213505_500.jpg",size:["L"]}
      ]  
    }  
  ]
}

//找出與顏色相符的index 
const checkColor = (colorStr) => {
  for(let i = 0; i < stoke.length; i++){
    if(stoke[i].color === colorStr)
    index = i
  }
  return index
}

//清空element裡所有子結點
const removeAllChildNodes = () => {
  let el = document.getElementById("sizeButton")
  while (el.firstChild) {
      el.removeChild(el.firstChild);
  }
}

//換圖片
const changImg = (colorStr) => {
  let index = checkColor(colorStr);
  document.getElementById("img").src = stoke[index].clothesImg;
  
  clothesName.innerHTML = data.name
  clothesName.innerHTML += `(${colorStr})` 

}

const whenPressSButton = (size,colorStr) => {
  let index = checkColor(colorStr);
  clothesName.innerHTML = data.name + `(${stoke[index].color}`
  // console.log(clothesName)
  clothesName.innerHTML += "-" + size + ")"
}

//創建 size button
const addSButton = (colorStr) => {
  console.log(typeof(colorStr))
  let index = checkColor(colorStr)
  let sButton = 0;
  for(let i = 0; i < stoke[index].size.length; i++){
    sButton = document.createElement("button");
    sButton.innerHTML = stoke[index].size[i];
    document.getElementById("sizeButton").append(sButton);
    let onclickStr = "whenPressSButton(" + "\'" + stoke[index].size[i] + "\'" + ",\'" + colorStr + "\'" + ")"
    sButton.setAttribute("onclick",onclickStr);
    // console.log(stoke[index].size[i]);
    document.getElementById("sizeButton").append(sButton)
  }
}

//換衣服尺寸
const changSize = (colorStr) => {
  //清空之前的
  removeAllChildNodes()
  addSButton()
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
  cButton.src = stoke[index].buttonImg
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

//使clothesIndex可以從網址抓
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params.id)
let clothesIndex = findIdCorrespondingIndex(params.id)

//化簡
//化簡clothesData.data[clothesIndex] to data
let data = clothesData.data[clothesIndex]
console.log(data)
//化簡data.stoke to stoke
let stoke = data.stoke
console.log(stoke)

//換頁面的超連結
for(let i = 0; i < clothesData.data.length; i++){
  // creatTable(clothesData.data[i].name , clothesData.data[i].id)
  let aTag = document.createElement("a")
  console.log(clothesData.data[i].id)
  aTag.href = "file:///Users/huangzhiju/Documents/Daniel%20Huang/%E7%A8%8B%E5%BC%8F/%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E7%B0%A1%E4%BB%8B/clothes_data/clothes-lativ5/index.html" + "?id=" + clothesData.data[i].id;
  aTag.innerHTML = clothesData.data[i].name
  let aHref = document.getElementById("aHref");
  aHref.append(aTag);
  aHref.innerHTML += "<br>"
}

//創建衣服名稱
let clothesName  = document.getElementById("clothesName")
clothesName.innerHTML = data.name + `(${stoke[0].color})`

//初始設定
const InitialSetting = () => {

  // document.getElementById("title").innerHTML = clothesData[0].information.Company;
  document.getElementById("companyLogo").src = clothesData.companyLogo
  document.getElementById("originalPrice").innerHTML = data.originalPrice
  document.getElementById("salePrice").innerHTML = data.salePrice
  document.getElementById("img").src = stoke[0].clothesImg
  addSButton(stoke[0].color);

  //呼叫加入顏色按鈕
  for(let i = 0; i < stoke.length; i++){
    addColorButton(stoke[i].color)
  }
}

