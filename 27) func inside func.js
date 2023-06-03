// func inside function

const app = () => {
    const add2 = (n1,n2) => {
        return(n1+n2);
    }

    const mul = (n1,n2) => {
        return n1*n2;
    }
    
    console.log(mul(2,3));
}

app();