var pilots = [
    {
        id: 1,
        name: 'SHANMUGAM',
        years: 4
    },
    {
        id: 2,
        name: 'Kishore',
        years: 8
    },
    {
        id: 3,
        name: 'Rajaram',
        years: 14
    }
];

const experience=(pilots)=>{
let mostExperience=pilots[0];
for(let i=1;i<pilots.length;i++){
    if(pilots[i].years>mostExperience.years){
        mostExperience=pilots[i];
    }
}
return mostExperience;
}

console.log(experience(pilots));