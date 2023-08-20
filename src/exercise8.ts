/**
 * Exercise 8 - Design patterns
 * 
 * In this exercise, we use the design pattern Template Method and the design pattern Adapter.
 * (https://refactoring.guru/design-patterns/template-method)
 * (https://refactoring.guru/design-patterns/adapter)
 * 
 * 1.   In your class Event, create the abstract method toString(). Implement the method in all the subclasses of Event.
 *      Change the method print() from abstract to concrete. It should call the method toString(). Remove the old
 *      implementation of print() from the subclasses of Event.
 * 
 * 2.   For a new system development, we need an object allowing us to historize important events that may happen in the
 *      system. (errors, authentication, ...). The interface Log is provided in the file exercise8/log.ts. addEvent should
 *      allow to add a system event to the log, caracterized by a date, a time and a message. The method displayLog should
 *      display all the events in the log through a logging method provided by the caller (ie. console.log).
 *      Create a class that implements the interface Log while reusing the previously created classes. You should
 *      use the design pattern Adapter. You will create two versions of the adapter: one using inheritance and one using
 *      composition, respectively called LogAdapterInheritance and LogAdapterComposition.
 *      Complete the file exercise8/log.ts by adding a class LogError extending the standard class Error. In the methods
 *      addEvent() you've developped, throw a LogError if the date of the new event is before the date of the last event.
 * 
 * 3. (opinionated) Which version of the adapter do you prefer? Why?
 */
