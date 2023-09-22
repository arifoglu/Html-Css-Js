//window.onload = function(){
//
//let tabs = document.querySelectorAll("ul#onglet > li");
//console.log(tabs);
//let textImages = document.querySelectorAll("#page > div");
//console.log(textImages);
//
//tabs.forEach(function(tab){
//console.log(tab); // 3 li come
//    tab.onclick = function(){
//        console.log(tab) // each click make come li
//
//        tabs.forEach(function(t,index){
//            if(tab === t){
//                
//                t.classList.add("onglet_actif");
//                textImages[index].classList.add("txt_onglet_actif");
//                textImages[index].classList.remove("txt_onglet_invisible");
//            }else {
//                t.classList.remove("onglet_actif");
//                textImages[index].classList.add("txt_onglet_invisible");
//                textImages[index].classList.remove("txt_onglet_actif");
//            }
//        })
//    }
//
//})
//}
///////////////////////////////
//////////////////////////////
window.onload = function(){

    const tabs = document.querySelectorAll("#onglet > li");
    console.log(tabs);    //  NodeList(3) [ li.onglet_actif, li, li ]

    const panels = document.querySelectorAll("#page > div");
    console.log(panels); // NodeList(3) [ div.txt_onglet_actif, div.txt_onglet_invisible, div.txt_onglet_invisible ]

  tabs.forEach(function( tab ){
    console.log(tab);    //  3 <li> comes

    tab.onclick = function(){
        console.log(tab); // every click bring <li>

        tabs.forEach(function(panel,index){
            if(tab === panel){
                panel.classList.add("onglet_actif");
                panels[index].classList.add("txt_onglet_actif");
                panels[index].classList.remove("txt_onglet_invisible");
            }else{
                panel.classList.remove("onglet_actif");
                panels[index].classList.add("txt_onglet_invisible");
                panels[index].classList.remove("txt_onglet_actif");

            }
        })
    }
  })

}