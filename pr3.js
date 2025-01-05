let a = Number(prompt())
let b = Number(prompt())
let c = Number(prompt())
let a1
let b1
let c1

if (a%2==0) {
    a1 = 1
}
if (b%2==0) {
    b1 = 1
}
if (c%2==0) {
    c1 = 1
}

if (a1=1 && a%10==4) {
    a1 = 2
}
if (b1=1 && b%10==4) {
    b1 = 2
}
if (c1=1 && c%10==4) {
    c1 = 2
}

if (a1=2 && a%4==0) {
    a1 = 3
}
if (b1=2 && b%4==0) {
    b1 = 3
}
if (c1=2 && c%4==0) {
    c1 = 3
}

if (a>b && a>c && a1==3){
    alert(a)
}
if (b>a && b>c && b1==3){
    alert(b)
}
if (c>b && c>a && c1==3){
    alert(c)
}
else{
    alert('No')
}

