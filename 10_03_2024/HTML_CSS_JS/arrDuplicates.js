let ar=["jack","And","jack", "jill","jack","jill"];
let findDuplicates=(ar)=>{
    let counts={};
    ar.forEach(word=>{
        if(counts[word]){
            counts[word]++
        }
        else{
            counts[word]=1;
        }
    });

    let output=[];
    for(let word in counts){
        output.push(`${word}:${counts[word]}`);
    }
    return output;
}

console.log(findDuplicates(ar));
