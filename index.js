function theBeatlesPlay(musicians, instruments) {
  var pair = []

  for(var i=0; i<musicians.length; i++)
  {
      var a = musicians[i] +' plays ${instruments}'
      pair.push(a)
  }
  return pair
}
