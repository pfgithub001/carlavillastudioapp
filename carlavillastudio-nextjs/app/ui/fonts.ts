import { Raleway, Maven_Pro, Hanken_Grotesk } from 'next/font/google';

export const raleway = Raleway ({subsets:['latin']})

export const hk_grotesk = Hanken_Grotesk ({
    weight:['100','200','300','500', '600', '700', '800', '900'],
    style:['italic', 'normal'],
    subsets:['latin']
})

export const lusitana = Maven_Pro ({
    weight: ['400', '700'],
    subsets: ['latin']
})