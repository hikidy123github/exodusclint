/*jslint node: true */
"use strict";
// Seed math

exports.random = x => {
    return x * Math.random();
};

exports.randomAngle = () => {
    return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.irandom = i => {
    let max = Math.floor(i);
    return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
    let x1, x2, w;
    do {
        x1 = 2*Math.random() - 1;
        x2 = 2*Math.random() - 1;
        w = x1 * x1 + x2 * x2;
    } while (0 == w || w >= 1);

    w = Math.sqrt(-2 * Math.log(w) / w);
    return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
    let range = max - min;
    let output = exports.gauss(0, range / clustering);

    while (output < 0) {
        output += range;
    }
    
    while (output > range) {
        output -= range;
    }
    
    return output + min;
};

exports.gaussRing = (radius, clustering) => {
    let r = exports.random(Math.PI * 2);
    let d = exports.gauss(radius, radius*clustering);
    return {
        x: d * Math.cos(r),
        y: d * Math.sin(r),
    };
};

exports.chance = prob => {
    return exports.random(1) < prob;
};

exports.dice = sides => {
    return exports.random(sides) < 1;
};

exports.choose = arr => {
    return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
    let o = [];
    for (let i=0; i<n; i++) {
        o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
    }
    return o;
};

exports.chooseChance = (...arg) => {
    let totalProb = 0;
    arg.forEach(function(value) { totalProb += value; });
    let answer = exports.random(totalProb);
    for (let i=0; i<arg.length; i++) {
        if (answer<arg[i]) return i;
        answer -= arg[i];
    }
};


exports.chooseBotName = () => {
    return exports.choose([
      'i hate you',
      'why',
      'WHAT UHJKHUJH',
      'Mission: Impossible',
      '.exe',
      'testbed',
      'give me token',
      'plz i want token',
      'fuck you for not giving me token',
      'Hikidy123',
      'hikidy123',
      'colossus',
      'SPIN=TEAM!!',
      'spin team',
      'noob',
      'Colossus Emperors',
      'Wither123',
      'woomy is better',
      'why steal exerras code',
      'amongus',
      'pee',
      '[!] crucify it',
      'hi',
      'square',
      '3.141579',
      'pi',
      'woody',
      'dooky',
      'Dooky',
      'The only flying tank',
      'maracas good',
      'fuck',
      'Sunbeam op',
      'red destroyer is to op',
      'tank need nerf',
      'Justin Beiber',
      'Rick Astley',
      'https://outerspacearras-.glitch.me',
      'https://phoenix-arras-io.glitch.me',
      'russia must win',
      'ukraine must win',
      'russia and ukraine are equal',
      'ba',
      'windows',
      'Flamethrower179',
      'when pigs fly',
      'Sharkdragon379',
      'ebomb320',
      'T-REXTURTLE',//sor
      'katala-yaroslav', //hi?
      'among us is sus',
      'green and red light', //i dont think the tanks like fnf
      'phones',
      'token is nevergonnagiveyouup',
      'i am a dev',
      'a fish who sings',
      'a mcdonalds fry',
      'i am a boss no joke',
      'GIME TOKENNN', //no
      //lol
      //k
      //xd wait a minute twin ranger is already in the game so im probs gonna do clockworks or whatever it was called that upgrades from cruiser
      'mcnhjurn',
      'outer space arras',
      'noob',//omg lol XD once i played among us i see everything as it
      'totally not a ip grabber',//wait dropship from mogus?!?!?!?!?!??!??? yeah
      'rick never gonna give up',//i think XD
      'waaaaaaaaaaaaaaaaaa',//ye :D hope you remember how to code tanks, you coded in yo freetime?   from woomy? i think i can do that
      'tablet is better',//im back horray check this https://scratch.mit.edu/projects/124095661 - that i saw its funny im gonna add twin ranger lol or ragner
      
      'Witiky123dev',//ok time for tonk time :)
      '- Basic: 1 Googol',//brb bye
      'asdfghjkl',//yeah ill be back, prob like couple mins :)
      'Hierarchy',//gtg i gotta eat soup becuz my mouth is messed up  be back?
      'Monarchy',//xd, remember when i made that booster team thing on scratch? that was pure cringe
      'im so sussy',//sus references allowed
      'to a bot',//back in 2019, 3 straight years of coding and i still can't figure out color barrels
      //i couldnt either so i just stole the code from exerras lol
      'booster spin 4 life',//i found out about diep and i put a youtuber to troll as lol when did you found out about diep
      'totally not a exerras code stealer',
      'im peppa pig',
      'Gunner=Team', //I actually used this name when i was first starting diep.io and found out about gunner
    ]);
};//xd

exports.chooseBossName = (code, n) => {
    switch (code) {
    case 'a':
    return exports.chooseN([
        'Archimedes',
        'Akilina',
        'Anastasios',
        'Athena',
        'Alkaios',
        'Amyntas',
        'Aniketos',
        'Artemis',
        'Anaxagoras',
        'Apollon',
    ], n);
    case 'castle':
    return exports.chooseN([
        'Berezhany',
        'Lutsk',
        'Dobromyl',
        'Akkerman',
        'Palanok',
        'Zolochiv',
        'Palanok',
        'Mangup',
        'Olseko',
        'Brody',
        'Isiaslav',
        'Kaffa',
        'Bilhorod',
    ], n);
    default: return 'Godly being';
    }
};
