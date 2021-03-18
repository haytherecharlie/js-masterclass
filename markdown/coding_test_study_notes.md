<center>
<img src="https://raw.githubusercontent.com/charliehay/js_masterclass/main/images/logo.png" height="50" alt="Charlie Hay\'s JS MasterClass" />
</center>
---

# Coding Test Study Notes:

---

## Determine if a number includes another number:

- Use the indexOf string function: "432".indexOf('4') -> 0

## Determine if an array includes a number in a number

- Use the findIndex or some function and then return the indexOf function 

```
// Some
const index = arr.some(val => val.indexOf('7') > -1) 
return index ? 'Boom!' : 'There is no 7.'

// Find Index
const index = arr.findIndex(val => val.indexOf('7') > -1) 
return index > -1 ? 'Boom!' : 'There is no 7.'
```

## Tetrahedral Numbers

- Kinda pointless but it's:

```
return (n * (n + 1) * (n * 2)) / 6
```

## Filter out values in an array

- Creates a new array and removes any value that is calculated as boolean false

- eg [true, false, true].filter(v => v) => [true, true]

```
// Cool Hack! Use the Boolean() method in the callback.
arr.filter(Boolean) === arr.filter(x => Boolean(x)) === arr.filter(x => !!x)
```

## Convert Object to Array

- eg. { hello: 'world' } => [["hello", "world"]]

- Just use Object.entries(obj) - it's the same as mapping and returning values.

```
return Object.entries(obj) === Object.entries(obj).map(([key, val]) => [key, val])
```

## Concatinate Arrays into one

- Use the concat method and spread in the arrays 

```
function concatArr(...args) {
  return [].concat(...args)
}
```

## Fix number to 2 decimals
```
// Converts to string
number.toFixed(2)

// Maintains number format
+number.toFixed(2)
```

# Every method
- Determines if every value in the array meets the criteria

```
[1, 2, 3].every(x => x > 0) // true
```