
# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

# Your answer: 

    In basic math, a basic function is referred to as f(), where if we used f(x), it would be said that x is some value that the function needs as an input to provide an output.

    In other words, x is the *argument* of the function f.

    Anything we use as x to give to f so f can do it's job is referred to as the *parameter*.

    A *parameter* fulfills the role of the *argument* of a function. 

    A function could have many *arguments*;

        f(x,y,z) 

    and we could fulfill this requirement of f with things of our own, such as i,j, or k, which would look like f(i,j,k), which will, in turn, produce a valid result, as long as our *parameters*, i,j, and k, fulfill the requirements of the *arguments* x, y, and z.

# Researched answer:
    To be more specific, and with the help of Mozilla documentation, I'll end by saying parameters are defined by the function, and arguments are their initial values.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

# Your answer:
    I am only aware of arrays having access to the .map() method.

    In that context I would state the following, from memory:

    The predefined parameters of the map method are value, index, array.

    The value parameter:
        allows us access to the item itself, 
     
    the index parameter:
        is the "current item-number-minus-one" that we are on, 
        
    and the array parameter:
        is a reference to the array itself.

    The .map() method allows for a function to be called on each entry in the array and produces a new array without altering the original.
    
# Researched answer:

    According to W3 schools the only required parameter for the map method (which is an array method) is a function, and the current value parameter I attempted to describe above. 
    
    References to the index and the original array are optional. 

3. What is the difference between map and filter?

# Your answer: 

    The map method is meant to create a new array as a result of having performed a function on each element of the previous array.

    In contrast, the filter method is meang to create a new array depending on a conditional statement applied to each element of the previous array.

# Researched answer:

    Both map and filter have identical syntax, according to Mozilla docs. Very interesting.

4. What is iteration?

# Your answer:

    Iteration is the process of sequentially going through some sort of series.

    A some pertinent examples are iterating through elements in an array, or characters in a string.

# Researched answer:

    I would add some of the different tools used in iteration in the Javascript language, including the use of the following keywords:
    for, while, switch, and, using higher order functions, map, and filter.

5. What is the difference between a class and an object?

# Your answer

A class is a blue-print, or a framework, that is used to create an object, that has all of the methods, properties, and/or attributes, of the class it was created from. 

The object is considered to be an instance of its class.

# Researched answer:

6. STRETCH: What is hoisting in JavaScript?

# Your answer:

Hoising is behind-the-scenes work that is being done where variables, functions, objects or other "things" can be accessed outside of their normal scope, or are made more accessible. 

The two examples I know are having access to "things" before their import or declaration, or again, outside of their expected block of scope.

# Researched answer:

I would take this opportunity to expand the vocabulary to add that hoisting includes moving declarations "to the top" of the current block. 
This has certain limitations including different behavior depending on initialization keywords (let vs var).

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:

    A user story is a story one can say that tells of the experience of the end user. This helps developers accomplish their tasks by describing what the end result will be from the perspective of the user. 

2. Spread operator:

    The spread operator allows us to quickly combine objects, using the following syntax:

    const obj1 = [1,2,"dog"]
    const obj2 = [2,3,"cat"]
    const obj3 = [...obj1, ...obj2)

    While there are certainly other benefits to, and uses for, using the spread operator, they are beyond me at this point in time.

3. React:

    My understanding of React, is that it is a compilation of Javascript libraries, which allow for modular implementation of testing and website component material.

    I am sure there is more to it than that, but that is as big a picture as I can paint of React. We have so far used it to aggregate components of a website and do testing on objects.

4. React props:

    The reactjs documentations says React props are "arbitrary inputs" for React components. Props is short for properties. To say any more would be disingenuous, as I already do not understand what I am talking about.

5. DOM events:

    DOM is the Domain Object Model, or a representation of our web site with all of its components and subcomponents.

    A DOM event is when a change occurs within the DOM, such as a user interaction, a refresh of the website, or any event which causes a change that needs to be addressed within the software. 