let row=5;
for(let i=1;i<=row;i++){
    let m=``;
    let space=row-i;
    for(let s=1;s<=space;s++){
        m+=` `+` `;
      
    }
    let column = 2*i-1;
    for(let j=1;j<=column;j++){
        m+=j+` `;
        
    }console.log(m);
}