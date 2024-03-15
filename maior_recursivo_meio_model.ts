function maior_n(a:number []):number{
    if(a.length==1){
        console.log("Caso base atingido!");
        console.log("Array:",a)
        return a[0];
    }
    else{
        let metade:number = a.length/2;
        console.log("Chamando de novo!")
        console.log("Chamando maior_n(",a.slice(0,metade),");");
        console.log("Chamando maior_n(",a.slice(metade),");");
        let maior_restante = maior_n(a.slice(1,a.length))
        if(a[0]>= maior_restante){
            return a[0];
        }
        else{
            return maior_restante;
        }
    }
}
export{
    maior_n
}