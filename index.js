function theBeatlesPlay(musicians, instruments) {
  var pair = []

  for(var i=0; i<musicians.length; i++)
  {
      pair.push('${musicians} plays ${instruments}')
  }
  return pair
}
