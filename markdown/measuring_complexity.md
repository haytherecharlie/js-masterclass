![MJS Logo](https://raw.githubusercontent.com/charliehay/modern_js_masterclass/main/images/logo-small.png)

---

# Measuring Complexity:

---

For any problem in programming there are multiple ways to reach a solution. However, the best solutions are those that consume the least amount of time and resources (computationally). Therefore, when it comes to writing quality code, it's imperative that we learn how to measure the complexity of our algorithms using something called Big O Notation.

## A) What is Big O Notation?

**Big O Notation** is a way to compare code and to measure it's _performance_. It's a spectrum of values that represent time complexity of algorithms and ranges from Fantastic O(1) to Atrocious O(N!). Big O notation has a specific vocabulary which is crucial to learn if you want to be able to communicate performance metrics during interviews and on the job.

### List of Big O Time Complexities:

|  Rank  | Performance | Time Complexity |
| :----: | ----------- | :-------------: |
| **01** | Perfect     |      O(1)       |
| **02** | Fantastic   |    O(log² n)    |
| **03** | Great       |      O(√n)      |
| **04** | Good        |      O(n)       |
| **05** | Okay        |   O(n log² n)   |
| **06** | Bad         |      O(n²)      |
| **07** | Terrible    |      O(2ⁿ)      |
| **08** | Atrocious   |      O(n!)      |

### Visualizing Big O Time Complexities:

![MJS Logo](https://miro.medium.com/max/517/1*Y778QvQkpLBKqu6qOneqqg.png)

## B) What Does Big O Actually Measure?

Big O Time Complexities measure two main things:

### 1) Speed:

How fast the algorithm performs the computation. You can see from the graph above that this isn't measured once - it's measured across a range of input sizes (loops). Some algorithms are efficent when they run once or twice, but become extremly slow at 100, 1,000 or even 10,000 loops. The best algorithms don't loop according to the input (n) instead they perform the task in a similar manner regardless of input size.

and example of this is an algorithm that takes a number (n) and adds all numbers from 1 to n and returns the result. So for example if the input (n) was `5` then the result would be `15` and we'd get that by calculating `1 + 2 + 3 + 4 + 5`.

Here are two algoritms that solve this problem:

_Figure A_: Add numbers using a for loop.

```
const forLoopAdd = (n) => {
	let total = 0
	for (let i = 1; i <= n; i++) {
		total += i
	}
	return total
}
```

_Figure B_: Using Faulhaber's formula.

```
const FaulhaberAdd = (n) => {
	return n * (n + 1) / 2
}
```

---

#### Analyzing Figure A:

_Figure A_ uses a standard for loop to summate the values - once it reaches the input value (n) it stops and returns the total. In this example the loop will run the same amount of times as the input value (n). So if we called this function with an input of `5` (`forLoopAdd(5)`) this function would loop _5_ times and perform _5_ adding operations.

- 1. `0 + 1`,
- 2. `(0 + 1) + 2`,
- 3. `(0 + 1 + 2) + 3`,
- 4. `(0 + 1 + 2 + 3) + 4`
- 5. `(0 + 1 + 2 + 3 + 4) + 5`

This means that as `n` grows (ie. `n`= 10 or `n`= 2000) so to does the number of loops and operations needed to calculate the total. In fact, the number of loops and operations is exactly corrilated to the value of `n`. If `n`= 40, there will be 40 operations. Therefore _Figure A_ has a Big O Time Complexity of O(n).

---

#### Analyzing Figure B:

_Figure B_ on the otherhand uses a mathimatical shortcut called Faulhaber's formula that doesn't require a for loop at all. **\*It's important to note that this solution isn't something that the average developer is expected to know, and it's being used here soley to demonstrate how there are all kinds of solutions to these types of problems.** However, what is of importance here is that this function only performs one operation no matter the size of the input value. Whether `n`= 1 or `n`= 200, the result will be calculated with a single mathimatical operation - making the Big O Time Complexity: O(1), which is perfect.

### 2) Memory:

How intensive the alorithm is on system resources.

## <br/>

© 2020 Charlie Hay

Under the Canadian Copyright Act, individuals may not copy substantial parts of copyright protected course, code or audio files without the permission of the Charlie Hay.
