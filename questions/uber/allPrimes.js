function isPrime(exp) {
  if (exp < 2) return false

  const sqrt = Math.floor(Math.sqrt(exp))

  for (let i = 2; i <= sqrt; i++) {
    if (exp % i === 0) return false
  }

  return true
}

function allPrimesUnder(limit) {
  const primes = []
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i)
  }

  return primes
}

console.log(allPrimesUnder(1000))
