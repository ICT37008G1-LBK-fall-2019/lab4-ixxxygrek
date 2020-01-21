function Min(a, b, c) {
    let bb = a;

    if (b < a && b < c) {
        bb = b;
    } else if (c < a && c < b) {
        bb = c
    }

    alert(bb)
}

console.log(Min(1, 25, 0));
