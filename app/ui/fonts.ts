import {Inter} from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin']});
// this is a secondary font, used for the paragraphs 
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });