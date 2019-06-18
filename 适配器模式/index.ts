import CN_Socket from './CN_Socket';
import EN_Adapter from './EN_Adapter';

const cnSocket = new CN_Socket();
const enSokect = new EN_Adapter(cnSocket);

enSokect.power();