var test = require('tape')
var cutter = require('../index.js')

var description = "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"

/**
* @result: My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm...
*/
test('defaults', function (t) {
  t.plan(1)
  var snippet = cutter(description)
  t.equal(snippet.length, 143)
})

/**
* @result: My money's in that office, right? If she start giving me some bullshit about it ...
*/
test('0.5 sentence + ellipsis', function (t) {
  t.plan(1)
  var snippet = cutter(description, {
    min: 70,
    max: 80,
    ellipsis: '...'
  })
  t.equal(snippet.length, 83)
})

/**
* @result: My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.
*/
test('1 sentence', function (t) {
  t.plan(1)
  var snippet = cutter(description, {
    min: 170,
    max: 200,
    ellipsis: '...'
  })
  t.equal(snippet.length, 184)
})

/**
* @result: My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in ...
*/
test('1.5 sentences + ellipsis', function (t) {
  t.plan(1)
  var snippet = cutter(description, {
    min: 200,
    max: 220,
    ellipsis: '...'
  })
  // 220 + 3
  t.equal(snippet.length, 223)
})

/**
* @result: My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is.
*/
test('2 sentences', function (t) {
  t.plan(1)
  var snippet = cutter(description, {
    min: 260,
    max: 280,
    ellipsis: '...'
  })
  t.equal(snippet.length, 269)
})

/**
* @result: My money's in that office, right?
*/
test('delimeter', function (t) {
  t.plan(1)
  var snippet = cutter(description, {
    delimeter: '?',
    ellipsis: '...'
  })
  t.equal(snippet.length, 33)
})

/**
* @result: My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna ...
*/
test('min higher than max', function (t) {
  t.plan(1)
  var snippet = cutter(description, {
    min: 200
  })
  t.equal(snippet.length, 203)
})
