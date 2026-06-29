import { Roboto, Poppins, Gabarito, Manrope } from 'next/font/google';

export const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const poppins = Poppins({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const gabarito = Gabarito({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
})

export const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
})