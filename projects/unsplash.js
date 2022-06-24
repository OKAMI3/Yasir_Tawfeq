
function resize() {
let url=document.getElementById('url').value;
let width=document.getElementById('width').value;
let height=document.getElementById('height').value;

let urlchange=url.lastIndexOf('/');
let lastpart=url.substring(urlchange);

let resizedurl=`https://source.unsplash.com${lastpart}/${width}x${height}`;
document.getElementById('img').src=resizedurl;
document.getElementById('new-url').value=resizedurl;

}

function copytext(){
    let copy=document.getElementById('new-url');
    copy.select();
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value);
}
