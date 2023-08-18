/**
 * Exercise 4
 * 
 * In our game of Set!, Cards are created in the constructor of the class Game. The class Game is responsible for the
 * lifecycle of the cards.
 * 
 * 1.   Explain why we could use the design pattern Singleton to create the cards. What would be the advantages and
 *      disadvantages of using the design pattern Singleton? Change the code to use the design pattern Singleton.
 *      (https://refactoring.guru/design-patterns/singleton)
 * 
 * 2.   Change the classes using Game to use the central instance of Game instead of creating a new instance of Game.
 *      Update the UML diagram.
 * 
 * 3.   (optional) Make the game playable in the console. You can use the example code below to get started with the
 *      console interaction.
 */

import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

(async () => {
    const rl = readline.createInterface({
        input: input,
        output: output
    });

    const exampleUserInput = await rl.question("What is your name? ");
    console.log(`Hello ${exampleUserInput}!`);
    rl.close();
})();
