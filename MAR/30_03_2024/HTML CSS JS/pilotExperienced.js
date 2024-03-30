var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

let experienced=[pilots[0]];

for(let i=1;i<pilots.length;i++){

    if(pilots[i].years>experienced[0].years){
        experienced=[pilots[i]];
    }

    else if(pilots[i].years===experienced[0].years){
        experienced.push(pilots[i])
    }
}

console.log(experienced);