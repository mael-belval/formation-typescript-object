/**
 * Exercise 3 - Game Set!
 * 
 * The goal of this exercise is to get familiar with the concept of association, aggregation and composition.
 * The goal is to create a set of classes allowing to play "Set!" (https://en.wikipedia.org/wiki/Set_(card_game))
 * The card game "Set!" is a game where the goal is to find a set of 3 cards that have either all the same or all different
 * properties on 4 different dimensions: number, shape, color and filling. Each card has 4 properties, each of which can
 * take 3 different values. There are 81 cards in total.
 * 
 * Three cards form a set only if:
 * - they all have the same number or have three different numbers;
 * - they all have the same shape or have three different shapes;
 * - they all have the same color or have three different colors;
 * - they all have the same filling or have three different fillings.
 * 
 * At the beginning of the game, the deck is shuffled and 12 cards are placed face-up on the table.
 * 
 * During the exercise, update the UML diagram of the classes.
 * 
 * 1.   Create a class Card with 4 properties: color, number, shape and filling, initialized in the constructor.
 *      Add getters for each property. Create a method toString() that returns a string representation of the card.
 * 
 * The class Game will handle the lyfecycle of the cards. It will contain an array of cards. The cards will be created
 * in the constructor of the class Game.
 * The class will have a method getNumberOfCards() that returns the number of cards in the game. It will also have a
 * method getCard(index) that returns the card at the given index. The method getCard() will throw an error if the index
 * is out of bounds.
 * 
 * 2. What is the association between the classes Game and Card? Is it an association, an aggregation or a composition?
 * 
 * 3. Create the class Game with the constructor and the methods described above.
 * 
 * The class Deck will handle the lifecycle of the deck of cards. The constructor will take an instance of the class Game
 * as parameter. It will contain initially an array of all the cards of the game. It will have a getter numberOfCards().
 * It will have a method isEmpty() that returns true if the deck is empty, false otherwise. The method drawCard() will
 * return a random card from the deck. It will throw an error if the deck is empty. The method drawCard() will remove the
 * card from the deck.
 * 
 * 4. What is the association between the classes Deck and Card? Is it an association, an aggregation or a composition?
 * 
 * 5. Create the class Deck with the constructor and the methods described above.
 * 
 * The class Board will handle the visible cards on the table. It will contain an array of cards, initially empty. It will
 * have a method addCard(card) that adds a card to the board. It will have a method removeCard(card) that removes a card
 * from the board. It will have a method getNumberOfCards() that returns the number of cards on the board. It will have
 * a method getCard(index) that returns the card at the given index. The method getCard() will throw an error if the index
 * is out of bounds. The method printBoard() will print the cards on the board in the console.
 * 
 * 6. What is the association between the classes Board and Card? Is it an association, an aggregation or a composition?
 * 
 * 7. Create the class Board with the constructor and the methods described above.
 * 
 * The class MySet will handle the set of cards selected by the player. It will contain three cards. It will have a
 * constructor that takes three cards as parameters. It will have a method isSet() that returns true if the three cards
 * form a set, false otherwise. It will have a method printSet() that prints the three cards in the console. It will have
 * the methods getCard1(), getCard2() and getCard3() that return the three cards.
 * 
 * 8. What is the association between the classes MySet and Card? Is it an association, an aggregation or a composition?
 * 
 * 9. Create the class MySet with the constructor and the methods described above.
 * 
 * The class Controller will handle the game. It will have a constructor with no parameter. It create a new instance of
 * the class Game, a new instance of the class Deck and a new instance of the class Board. It will have a method distribute()
 * that will distribute 12 cards from the deck to the board. If the board contain at least 12 cards, the method will add
 * 1 card to the board. It wont add a card if the deck is empty, but wont throw an error.
 * 
 * 10.   What is the association between the classes Controller and Game?
 *       What is the association between the classes Controller and Deck?
 * 
 * 11. Create the class Controller with the constructor and the methods described above.
 * 
 * 12. Draw a UML diagram of the classes and their associations. Add multiplicities. (with PlantUML or MermaidJS)
 * 
 * 13. What critics can you make about the design of the classes? How would you improve it?
 */

import { printColors, printFillings, printNumbers, printShapes } from "./exercise3/set";

(() => {
    printColors();
    printNumbers();
    printShapes();
    printFillings();
})();
