const info = {  email: 'charlie@hay.com', password: 'top$ecret123', content: 'Charlie' }
console.log(info)

delete { ...info, name: info.content }.content

console.log(info)