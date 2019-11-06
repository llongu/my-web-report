
function test () {
  if (a) { }
}
function test2 () {
  new Image().src = 'http://pic.9ht.com/up/2018-4/2018041015573052273211.jpg'
}

function test3 () {
  fetch('./api/test3', {
    body: JSON.stringify({ test: 123 }), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  }).then(e => {
  })
}

function test4 (a) {
  let url = './api/test4'
  if (a) {
    url = './json'
  }

  $.ajax({
    url,
    method: 'POST',
    data: {
      test: 123
    },
    success (e) {

    }
  })
}

function test5 () {
  axios.post('./api/test5', {
    test: 123,
  })
    .then(function (response) {
    })

}
