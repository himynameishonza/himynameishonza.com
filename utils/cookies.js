
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const cookiesExist = cookies.get('cookiesSaved') === undefined ? false : true;
const cookiesTheme = cookies.get('theme') === undefined ? 'light' : cookies.get('theme');