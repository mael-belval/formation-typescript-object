/**
 * Exercise 5 - Inheritance
 * 
 * The goal of this exercise is to get familiar with the concept of inheritance.
 * 
 * To build a calendar, we want a set of classes to represent the different types of events that can be added to the
 * calendar (ie. birthday, appointment, holiday, ...). An event happen at a specific a date. It has a name. Some events
 * have a starting time and a duration. Among those events, some have a location.
 * 
 * 1. After reading questions 2 and 3, draw the UML diagram of the classes to create.
 * 
 * 2.   Create a class SingleDayEventWithTimeAndDuration that inherits from the class SingleDayEvent. It has two additional
 *      properties: a starting time and a duration. It has getters for those two properties. It has a method print().
 * 
 * 3.   Create a class Appointment that inherits from the class SingleDayEventWithTimeAndDuration. It has two additional
 *      properties: a location and a list of atendee. It has getters for those two properties. We will use string for 
 *      the location and the list of atendee (a single string with the names of the atendee separated by a comma). It
 *      has a method print().
 *      
 * 4.   Add console.log() statements in the constructors of the classes to see when they are called. Understand the order
 *      in which the constructors are called.
 * 
 * 5. Write a program to test the classes you created.
 */

import { Date } from "./exercice5/time.utils";
import { SingleDayEvent } from "./exercice5/event";

const event1: SingleDayEvent = new SingleDayEvent(new Date(4,5,2024), "Star Wars Day");
const event2: SingleDayEvent = new SingleDayEvent(new Date(1,1,1970), "Unix Epoch");
event1.print();
event2.print();
