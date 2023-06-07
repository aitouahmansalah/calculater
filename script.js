let exp='';
function calc(x) {
    
        document.getElementById('output').value = document.getElementById('output').value+x;

    exp=exp+x;
    console.log(exp);
}
function c(x){
    document.getElementById('output').value = '';
    document.getElementById('output').value = '';
    exp='';
}
function back() {
    document.getElementById('output').value= document.getElementById('output').value.substring(1,document.getElementById('output').value.length - 1);
}
function calculer() {
    
    document.getElementById('output').value  =  eval(exp);
    exp='';
}
function calcs(x) {
    
    document.getElementById('output').value = document.getElementById('output').value+x;

exp=exp+"Math."+x;
console.log(exp);

}
function calcl(x,y) {
    document.getElementById('output').value = document.getElementById('output').value+y;
exp=exp+"Math."+x;
console.log(exp);


}

