function maior_n(a:number []):number{
    if(a.length==1){
        return a[0];
    }
    const metade = Math.floor(a.length/2);
    const metade_esquerda = a.slice(0,metade);
    const metade_direita = a.slice(metade,a.length)
    const maior_esquerda = maior_n(metade_esquerda);
    const maior_direita = maior_n(metade_direita)
    if(metade_esquerda > metade_direita){
        return maior_esquerda;
    }
    else{
        return maior_direita;
    }
}
export{
    maior_n
}
