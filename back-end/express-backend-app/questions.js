module.exports = [
  {
    id: "1",
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    acceptance: "44%",
    difficulty: "Medium",
    testCases: [
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]"
      }
    ]
  },
  {
    id: "2",
    title: "Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    acceptance: "66%",
    difficulty: "Medium",
    testCases: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[0]"
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]"
      }
    ]
  },
  {
    id: "3",
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    acceptance: "78%",
    difficulty: "Hard",
    testCases: [
      {
        input: "s = 'abcabcbb'",
        output: "3"
      },
      {
        input: "s = 'bbbbb'",
        output: "1"
      }
    ]
  },  
  {
    id: "4",
    title: "Unique Binary Search Trees II",
    description: "Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.",
    acceptance: "54.5%",
    difficulty: "Medium",
    testCases: [
      {
        input: "n = 3",
        output: "[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]"
      },
      {
        input: "n = 1",
        output: "[[1]]"
      }
    ]
  },
  {
    id: "5",
    title: "Check if Object Instance of Class",
    description: `Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
    
    There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined`,
    acceptance: "30%",
    difficulty: "Medium",
    testCases: [
      {
        input: "func = () => checkIfInstanceOf(new Date(), Date)",
        output: "true"
      },
      {
        input: `func = () => { class Animal {};
                class Dog extends Animal {};
                return checkIfInstanceOf(new Dog(), Animal); }`,
        output: "true"
      }
    ]
  },
  {
    id: "6",
    title: "Array Prototype Last",
    description: `Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

    You may assume the array is the output of JSON.parse.`,
    acceptance: "72.5%",
    difficulty: "Easy",
    testCases: [
      {
        input: "nums = [null, {}, 3]",
        output: "3"
      },
      {
        input: "nums = []",
        output: "-1"
      }
    ]
  },
  {
    id: "7",
    title: "Counter",
    description: "Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).",
    acceptance: "81.5%",
    difficulty: "Easy",
    testCases: [
      {
        input: `n = 10 
        ["call","call","call"]`,
        output: "[10,11,12]"
      },
      {
        input: `n = -2
        ["call","call","call","call","call"]`,
        output: "[-2,-1,0,1,2]"
      }
    ]
  },
  {
    id: "8",
    title: "Sleep",
    description: "Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.",
    acceptance: "86.4%",
    difficulty: "Easy",
    testCases: [
      {
        input: "millis = 100",
        output: "100"
      },
      {
        input: "millis = 200",
        output: "200"
      }
    ]
  },
  {
    id: "9",
    title: "Cache With Time Limit",
    description: `Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

    The class has three public methods:
    
    set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
    
    get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
    
    count(): returns the count of un-expired keys.`,
    acceptance: "76.9%",
    difficulty: "Medium",
    testCases: [
      {
        input: `["TimeLimitedCache", "set", "get", "count", "get"]
        [[], [1, 42, 100], [1], [], [1]]
        [0, 0, 50, 50, 150]`,
        output: "[null, false, 42, 1, -1]"
      },
      {
        input: `["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
        [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
        [0, 0, 40, 50, 120, 200, 250]`,
        output: "[null, false, true, 50, 50, -1]"
      }
    ]
  },
  {
    id: "10",
    title: "Memoize",
    description: `Given a function fn, return a memoized version of that function.

    A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
    
    You can assume there are 3 possible input functions: sum, fib, and factorial.
    
    sum accepts two integers a and b and returns a + b.
    fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
    factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.`,
    acceptance: "63.1%",
    difficulty: "Medium",
    testCases: [
      {
        input: `"sum"
        ["call","call","getCallCount","call","getCallCount"]
        [[2,2],[2,2],[],[1,2],[]]`,
        output: "[4,4,1,3,2]"
      },
      {
        input: `"factorial"
        ["call","call","call","getCallCount","call","getCallCount"]
        [[2],[3],[2],[],[3],[]]`,
        output: "[2,6,2,2,6,2]"
      }
    ]
  }
  
];