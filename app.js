let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogi', 'racoo'];
let extension = ['.com', '.net', '.us', '.io'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extension.length; l++) {
                if (noun[k].substring(noun[k].length - 3) == extension[l].substring(extension[l].length - 3)) {
                    console.log(pronoun[i] + adj[j] + noun[k].substring(0, noun[k].length - 3) + extension[l]);
                } else if (noun[k].substring(noun[k].length - 2) == extension[l].substring(extension[l].length - 2)) {
                    console.log(pronoun[i] + adj[j] + noun[k].substring(0, noun[k].length - 2) + extension[l]);
                } else {
                    console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
                }
            }
        }
    }
}