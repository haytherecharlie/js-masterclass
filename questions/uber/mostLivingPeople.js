function mostLivingPeople(people) {
  let map = {}, max = [0,0], living = 0

  for(let i = 0; i < people.length; i++) {
    let person = people[i]
    let birth = person[0]
    let death = person[1] + 1

    if(map[birth]) map[birth] += 1
    else map[birth] = 1

    if(map[death]) map[death] -= 1
    else map[death] = -1
  }

  Object.entries(map).map(([date, change]) => {
    living += change
    if(living > max[1]) max = [date, living]
  })

  return max[0]
}

console.log(mostLivingPeople([[1970, 2000], [1856, 1901], [1945, 1999], [1900, 1987], [1920, 1944], [1919, 1921], [1910, 1940]]))
