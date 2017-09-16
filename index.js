function theBeatlesPlay(musicians, instruments) {
  var pair = []

  for(var i=0; i<musicians.length; i++)
  {
      var a = musicians[i] +" plays ${instruments[i]}"
      pair.push(a)
  }
  return pair
}
