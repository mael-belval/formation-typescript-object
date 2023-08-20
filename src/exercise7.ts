/**
 * Exercise 7 - Abstract classes
 * 
 * We now want event that last more than one day. We will call them multi-day events.
 * Before introducing a class MultiDayEvent, we will refactor the class SingleDayEvent to make it more generic : to do so,
 * we will extract the common properties of SingleDayEvent and MultiDayEvent in a new class Event. Event wont be contrained
 * by the number of days it last.
 * 
 * 1. Create an abstract class Event which contain the abstract method print().
 * 
 * 2. Try to create an instance of Event. What happens? Why?
 * 
 * 3.   Modify the inheritance of the previously created classes to make them inherit from the class Event. Move the
 *      property subject from the class SingleDayEvent to the class Event.
 * 
 * 4. Modify the method addEvent(event) of the class Calendar to accept all types of events.
 * 
 * 5. Create the class MultiDayEvent that inherits from the class Event.
 * 
 * 6. Update the UML diagram.
 * 
 * 7.   Calendar will now handle the lifecycle of the events. In the method addEvent(event), the calendar will clone the
 *      event and add the clone to the list of events. The calendar will not modify the original event.
 * 
 * 8. Update the UML diagram.
 */