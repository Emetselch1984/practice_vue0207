document.addEventListener('DOMContentLoaded',()=>{
    console.log('hello')
    let result = document.getElementById('result')
    let current = new Date();
    result.textContent = current.toLocaleString()

    let a = document.getElementsByTagName('a')
    for(let i = 0 ,len = a.length ; i < len; i++)
    {
        console.log(a.item(i))
    }

    let time = document.getElementsByName('time')
    time[0].value = current.toLocaleString()

    let my = document.getElementsByClassName('my')
    for(let i = 0 ,len = my.length ; i < len; i++)
    {
        console.log(my.item(i))
    }

    let my_class = document.getElementById('my_class')
    let my_arry = []
    for(let i = 0 ,len = my.length ; i < len; i++)
    {
        my_arry.push(my.item(i))
    }
    my_class.textContent = my_arry.join('\n')
    
    let orange = document.querySelectorAll("#orange .orange")
    for(let i = 0 ,len = orange.length ; i < len; i++)
    {
        console.log(orange.item(i))
    }
    let orange_list = document.getElementById('orange_list')
    let orange_arry = []
    for(let i = 0 ,len = orange.length ; i < len; i++)
    {
        orange_arry.push(my.item(i))
    }
    orange_list.textContent = orange_arry.join("\n")

    document.getElementById('btn').addEventListener(
        "click",function (e) {
            window.alert("hello")
        }
    )
    let image = document.getElementsByTagName('img')
    for(let i = 0 ,len = image.length ; i < len; i++)
    {
        console.log(image.item(i))
    }
    let image_id = document.getElementById('logo').attributes
    for(let i = 0 ,len = image_id.length ; i < len; i++)
    {
        console.log(image_id.item(i).name + ":" + image_id.item(i).value + "\n")
    }
    let my_image = document.getElementById('my_image')
    let my_image_ary = [];
    for(let i = 0 ,len = image_id.length ; i < len; i++)
    {
        my_image_ary.push(image_id.item(i).name + ":" + image_id.item(i).value + "\n")
    }
    my_image.textContent = my_image_ary.join("")

    let textContent = document.getElementById("textContent")
    textContent.textContent =
        "   <a href=\"https://www.mint.example.com\" class=\"my\">\n" +
        "      mint\n" +
        "    </a>"
    let innerHtml = document.getElementById("innerHtml")
    innerHtml.innerHTML =
        "   <a href=\"https://www.mint.example.com\" class=\"my\">\n" +
        "      mint\n" +
        "    </a>"

    document.getElementById('btn2').addEventListener(
        "click",function (e) {
           let foods = document.getElementsByName("foods")
            let foods_ary = [];
            for(let i = 0 ,len = foods.length ; i < len; i++)
            {
                let food = foods.item(i)
                if(food.checked){
                    foods_ary.push(food.value)
                }
            }
            window.alert(foods_ary.toString())
          }
    )
    document.getElementById('btn3').addEventListener(
        "click",function (e) {
            let foods = document.getElementsByName("foods")
            let select = "";
            for(let i = 0 ,len = foods.length ; i < len; i++)
            {
                let food = foods.item(i)
                if(food.checked){
                    select = food.value
                }
            }
            window.alert(select)
        })

    document.getElementById("file").addEventListener(
        "change",function (e) {
            let files = document.getElementById("file").files
            for(let i = 0 ,len = files.length ; i < len; i++)
            {
                let file = files.item(i)
                console.log(file)
            }
                }
    )
    document.getElementById("text_file").addEventListener(
        "change",function (e) {
            let text = document.getElementById("text_file").files[0]
            let reader = new FileReader();
            reader.addEventListener(
                "load",function (e) {
                    document.getElementById("open_file") .textContent= reader.result;
                },true)
            reader.readAsText(text,"UTF-8")
        },true)

})
// document.addEventListener('DOMContentLoaded',() => {
//         console.log("hello")
//         var current = new Date();
//         var result = document.getElementById('result');
//         result.textContent = current.toLocaleString();
//         var list = document.getElementsByTagName('a');
//         for (var i = 0, len = list.length; i < len; i++) {
//             console.log(list.item(i));
//         }
//         var nam = document.getElementsByName('time');
//         nam[0].value = current.toLocaleString();
//         var class_list = document.getElementsByClassName('my')
//         for (var i = 0, len = class_list.length; i < len; i++) {
//             console.log(class_list.item(i).href);
//         }
//         var my_list = document.getElementById('my_list')
//         var my_list_ary = []
//         for (var i = 0, len = class_list.length; i < len; i++) {
//             my_list_ary.push(class_list.item(i));
//         }
//         my_list.textContent = my_list_ary.join(',\n');
//         var orange = document.querySelectorAll('#orange .orange')
//         for (var i = 0, len = orange.length; i < len; i++) {
//             console.log(orange.item(i).href);
//         }
//         document.getElementById('btn1').onclick =
//             function () {
//                 alert("hello")
//             }
//         var logo = document.getElementById('logo')
//         var logo_attrs = logo.attributes;
//         for (var i = 0, len = logo_attrs.length; i < len; i++) {
//             var logo_attr = logo_attrs.item(i);
//             console.log(logo_attr.name + ":" + logo_attr.value)
//         }
//         var image_info = document.getElementById('image_info')
//         image_info.textContent = logo_attr.name + ":" + logo_attr.value
//         document.getElementById("textContent").textContent =
//             "    <a href=\"https://www.mint.example.com\" class=\"my\">\n" +
//             "      mint\n" +
//             "    </a>";
//         document.getElementById("innerHtml").textContent =
//             "    <a href=\"https://www.mint.example.com\" class=\"my\">\n" +
//             "      mint\n" +
//             "    </a>"
//         var list_li = document.getElementById("list_li")
//         console.log(list_li.textContent)
//         console.log(list_li.innerText)
//         console.log(list_li.innerHTML)
//         document.getElementById("btn").addEventListener("click", function () {
//             var result = [];
//             var foods = document.getElementsByName('food');
//             for (var i = 0, len = foods.length; i < len; i++) {
//                 var food = foods.item(i);
//                 if (food.checked) {
//                     result.push(food.value);
//                 }
//             }
//             window.alert(result.toString())
//         }, false);
//         document.getElementById("file").addEventListener("change", function (e) {
//                 var inputs = document.getElementById('file').files;
//                 for (var i = 0, len = inputs.length; i < len; i++) {
//                     var input = inputs[i];
//                     console.log(input)
//                 }
//             }
//         )
//         document.getElementById("text_file").addEventListener("change", function (e) {
//             var input = document.getElementById("text_file").files[0];
//             var reader = new FileReader();
//             reader.addEventListener("load", function () {
//                 document.getElementById("output_text").textContent = reader.result;
//             }, true);
//             reader.readAsText(input, "UTF-8");
//         }, true);
//     }
// )
//     var getElementValue = function (name) {
//         var radio_result = "";
//         var elems = document.getElementsByName(name);
//         for(var i =0, len= elems.length; i < len ; i++)
//         {
//             var elem = elems.item(i);
//             if (elem.checked) {
//                 radio_result = elem.value;
//                 break;
//             }
//         }
//     }
//     document.getElementById("btn2").addEventListener("click",function () {
//         window.alert(getElementValue('food2'));
//     });
//
