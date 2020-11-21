

var canvas = $("#myCanvas");
var ctx = canvas[0].getContext("2d");
var canvas2 = $("#myCanvas2");
var ctx2 = canvas2[0].getContext("2d");


$("#pic").change(function() {
    //ここの部分は引用
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var file = this.files[0];

    var image = new Image();
    var reader = new FileReader();

    reader.onload = function(evt) {

      // 画像がloadされた後に、canvasに描画する
      image.onload = function() {
          var image_w = image.width
          var image_h = image.height
        ctx.drawImage(image, 0, 0, image_w, image_h, 0, 0, 400, 300);
      }

      image.src = evt.target.result;
    }
    reader.readAsDataURL(file);
  });


    $("#save").on("click",function(){
        const key=$("#key").val();
        var dataUrl = canvas[0].toDataURL(); 
         console.log(dataUrl); 
         localStorage.setItem(key,dataUrl);
         const html =`<li><span>${key}</span></li>`
         $("#list").append(html);
     });

     $("#clear").on('click', function () {
        var data = localStorage.getItem("dataUrl");
        var canvas2 =$("#myCanvas2");
        var ctx2 = canvas2[0].getContext("2d");
        var image = new Image();
    

          var image_w = image.width
          var image_h = image.height
        ctx2.drawImage(image, 0, 0, image_w, image_h, 0, 0, 400, 300);

           
        //    image.src = data;
    //   localStorage.clear();
    //   $("#list").empty();
    });

     
    // $("#save").on("click",function(){

    //     const key=$("#key").val();
    //     // const key2=$("#key2").val();
    //     var  dataUrl=$("#myCanvas").val();
    //     // var canvas =$("#pic")[0];
    //     // var base64 = canvas[0].toDataURL()
    //     // window.localStorage.setItem("save",base64)


    //     console.log(key)
    //     console.log(dataUrl)

    //     localStorage.setItem(key,dataUrl);
  


    //     const html =`<li><span>${key}</span><span>${dataUrl}</li>`
    //     $("#list").append(html);

    //     $("#key").val("");
    //     $("#key2").val("");
        
    // });


 




