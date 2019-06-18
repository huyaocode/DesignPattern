import House from '../House'
import Build from '../build/Build';

abstract class Director {
	protected build: Build
  abstract construct(): House
}

export default Director