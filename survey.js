const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (answer1) => {
  rl.question('What is an activity you like? ', (answer2) => {
      rl.question('What do you like to listen while doing that?', (answer3) =>{
        rl.question(`Which is your favorite meal? breakfast, lunch or dinner?`, (answer4) =>{
          rl.question(`What do you love to eat during that meal?`, (answer5) => {
            rl.question(`What is your favorite movie?`, (answer6) => {
              rl.question(`What is your superpower?`, (answer7) => {
                console.log(`Your name is ${answer1} and you love to ${answer2}. You like to listen to ${answer3}. You love ${answer4} during which you like to eat ${answer5}. You love the movie ${answer6} and your superpower is ${answer7}`);
                rl.close();
              })
            })
          })

        })
      })
      ;
  });
});


