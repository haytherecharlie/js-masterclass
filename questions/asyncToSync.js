function asyncFunc(num) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log(`func ${num} complete`)
            return res()
        }, 3000)
    })
}

async function asyncToSync(funcArr) {
    while (funcArr.length) {
        await funcArr[0]()
        funcArr.splice(0, 1)
    }
    console.log("done")
}

asyncToSync([asyncFunc.bind(null, 1), asyncFunc.bind(null, 2), asyncFunc.bind(null, 3)])