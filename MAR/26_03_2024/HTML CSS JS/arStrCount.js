let str=["jack","And","jack", "jill","jack","jill"];

let count={};

str.forEach(word=>{
    if(count[word]){
        count[word]++
    }
    else{
        count[word]=1;
    }
});

let res=[];

for(let word in count){
    res.push(`${word}:${count[word]}`);
}

console.log('Word Counts:',res);