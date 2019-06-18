import Director from './director/Director'
import DirectorCN from './director/DirectorCN'
import DirectorEU from './director/DirectorEU'
import DirectorUS from './director/DirectorUS'

let director: Director = null

director = new DirectorCN()
director.construct()

director = new DirectorEU()
director.construct()

director = new DirectorUS()
director.construct()