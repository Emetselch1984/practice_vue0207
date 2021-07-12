document.addEventListener('DOMContentLoaded', () => {
    let exs = document.querySelectorAll('a[rel="external"]')
    for (let i =0; i < exs.length; i++){
        exs[i].setAttribute('title',"外部サイトに移動します")
    }
    let exs_jq = $('.js-a a[rel=external]')
    $.each(exs_jq,function (index,val) {
        val.setAttribute('title',"外部サイトに移動します")
    })
    let elems1 = document.getElementsByClassName('js-outer')
    for (let i =0; i < elems1.length; i++){
        console.log(elems1.item(i).getAttribute('href'))
    }
    let elems2 = $('.js-a2')
    $.each(elems2,function (index,val) {
        console.log(val.getAttribute('href'))
    })
    let main = document.getElementById('main')
    let attrs = main.attributes
    for (let i =0; i < attrs.length; i++){
        let attr = attrs.item(i)
        console.log(attr.name + ":" + attr.value)
    }
    let main2 = $("#main")
    let attrs2 = main2[0].attributes
    $.each(attrs2,function (index,val) {
        console.log(val.name + ":" + val.value)
    })
    let elems4 = document.querySelectorAll("section#js-173 a:not(.js-a2)")
    for (let i =0; i < elems4.length; i++){
        elems4.item(i).removeAttribute("target")
    }
    let elems5 = $('section#js-173 a.js-a2')
    $.each(elems5,function (index,val) {
        val.removeAttribute('target')
    })
    // 174
    // テキストだとsrcがない場合、写真を配置するというif文だが、
    // image_tagを用いると、自動的にsrcが設定される。
    // よって、srcが空っぽかどうかで判定するif文に変更した
    let img1 = document.querySelectorAll("section#js-174 img:not(.js-img)")
    for (let i =0; i < img1.length; i++){
        if(!img1.item(i).hasAttributes('src')){
            img1.item(i).setAttribute('src',"/assets/image-2.jpg")
        }
        if(img1.item(i).getAttribute('src') === ""){
            img1.item(i).setAttribute('src',"/assets/image-2.jpg")
        }
    }
    // jqueryに書き換え
    let img2 = $('section#js-174 img.js-img')
    console.log(img2)
    $.each(img2,function (index,val) {
        console.log(val.getAttribute('src'))

        if(val.getAttribute('src') === ""){
           val.setAttribute('src',"/assets/image-2.jpg")
        }
    })
    // タイポした時の挙動の確認
    let img3 = $('sections#js-174 img.js-img')
    console.log(img3)
})