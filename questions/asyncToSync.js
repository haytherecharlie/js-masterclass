const async = {
  results: [],
  series(funcs, callback) {
    try {
      _callback = (err, result) => {
        if (err) callback(err)
        this.results.push(result)
      }

      for (let func of funcs) {
        func(_callback)
      }

      callback(null, this.results)
    } catch (err) {
      callback(err)
    }
  },
}

async.series(
  [
    function (callback) {
      // do some stuff ...
      callback(null, "one")
    },
    function (callback) {
      // do some more stuff ...
      callback(null, "two")
    },
  ],
  // optional callback
  function (err, results) {
    // results is now equal to ['one', 'two']
    console.log(results)
  }
)
