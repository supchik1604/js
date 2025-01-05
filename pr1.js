let N = Number(prompt());
if (N >= 100 && N <= 999) {
    if (N % 2 == 0) {
        alert(N * 10 + 10)
    }
    if (N % 2 != 0 && N % 3 == 0) {
        alert(N * 10 + 100)
    }
    if (N % 2 != 0 && N % 3 != 0) {
        alert(N * 100 * 5)
    }
}
else {
    alert("не трёхзначное число")
}

