// var imgelement = document.getElementById('img');
// console.log(imgelement.src);

// function doiAnh() {
//     if (imgelement.src == ('d1.jpg')
//     }

var array = ['Nam', 'Thach', 'Phong', 'Nhan', 'Hien', 'Thuan', 'Tai'];
for (var i = 0; i < array.length; i++) {
    document.getElementById('p-' + i).innerHtml = array[i];
}