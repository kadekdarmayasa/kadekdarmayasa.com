import { AchievementItemProps } from '@features/certification/Item'

import javascriptCertification from '@assets/images/certifications/belajar-dasar-pemrograman-javascript.webp'
import webProgrammingCertification from '@assets/images/certifications/belajar-dasar-pemrograman-web.webp'
import frontendFundamentalCertification from '@assets/images/certifications/belajar-fundamental-frontend-web.webp'
import frontendWebBeginnerCertification from '@assets/images/certifications/belajar-membuat-front-end-web-untuk-pemula.webp'
import frontendWebExpertCertification from '@assets/images/certifications/menjadi-front-end-web-developer-expert.webp'
import backendWebBeginnerCertification from '@assets/images/certifications/belajar-membuat-aplikasi-back-end-untuk-pemula.webp'
import webDesignFinalistIFC2022Certification from '@assets/images/certifications/finalis-web-design-ifc-2022.webp'
import webDesignFinalistParasICTVIII from '@assets/images/certifications/finalis-web-design-instiki-2023.webp'
import piagamPenghargaanJuaraUmum2KelasXI from '@assets/images/certifications/piagam-penghargaan-juara-umum-2-kelas-xi.webp'
import juniorProgrammerBNSP from '@assets/images/certifications/junior-programmer-bnsp.webp'
import certifiedProgrammerBNSP from '@assets/images/certifications/certified-programmer-bnsp.webp'
import webDeveloperBismaInformatika from '@assets/images/certifications/web-developer-bisma-informatika.webp'

const achievements: AchievementItemProps[] = [
  {
    imgUrl: javascriptCertification,
    title: 'Belajar Dasar Pemrograman JavaScript',
    provider: 'Dicoding Indonesia',
    issuedDate: '15 September 2023',
    detailsUrl: 'https://www.dicoding.com/certificates/JMZV1NNONXN9',
  },
  {
    imgUrl: webProgrammingCertification,
    title: 'Belajar Dasar Pemrograman Web',
    provider: 'Dicoding Indonesia',
    issuedDate: '20 June 2022',
    detailsUrl: 'https://www.dicoding.com/certificates/4EXG5KELGXRL',
  },
  {
    imgUrl: frontendFundamentalCertification,
    title: 'Belajar Fundamental Front-End Web Development',
    provider: 'Dicoding Indonesia',
    issuedDate: '11 November 2022',
    detailsUrl: 'https://www.dicoding.com/certificates/EYX496YM6PDL ',
  },
  {
    imgUrl: frontendWebBeginnerCertification,
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    provider: 'Dicoding Indonesia',
    issuedDate: '06 July 2022',
    detailsUrl: 'https://www.dicoding.com/certificates/L4PQ45YJ2XO1',
  },
  {
    imgUrl: frontendWebExpertCertification,
    title: 'Menjadi Front-End Web Developer Expert',
    provider: 'Dicoding Indonesia',
    issuedDate: '05 July 2023',
    detailsUrl: 'https://www.dicoding.com/certificates/NVP7ON3J4PR0',
  },
  {
    imgUrl: backendWebBeginnerCertification,
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    provider: 'Dicoding Indonesia',
    issuedDate: '26 September 2023',
    detailsUrl: 'https://www.dicoding.com/certificates/N9ZO5OK8DPG5',
  },
  {
    imgUrl: webDesignFinalistIFC2022Certification,
    title: 'Finalis Web Design - Informatics Festival and Competition',
    provider: 'Universitas Udayana',
    issuedDate: '29 October 2022',
    detailsUrl:
      'https://drive.google.com/file/d/1YyL-dGkcjlDY-cVryWs5Rfz59lBwlOS2/view?usp=sharing',
  },
  {
    imgUrl: webDesignFinalistParasICTVIII,
    title: 'Peserta Lomba Design Web - Paras ICT VIII',
    provider: 'INSTIKI',
    issuedDate: '03 March 2023',
    detailsUrl:
      'https://drive.google.com/file/d/1SoXW_ps6XFHMxJ8Btlm-WmypiuZ-6HJm/view?usp=sharing',
  },
  {
    imgUrl: piagamPenghargaanJuaraUmum2KelasXI,
    title: 'Juara Umum 2 Kelas XI - Rekayasa Perangkat Lunak',
    provider: 'SMK TI Bali Global Denpasar',
    issuedDate: '04 June 2022',
    detailsUrl:
      'https://drive.google.com/file/d/1tlqle7-T0Jfq48OE4V21vQu9GtRXa7in/view?usp=sharing',
  },
  {
    imgUrl: juniorProgrammerBNSP,
    title: 'Junior Programmer - Software Development',
    provider: 'Indonesian Professional Certification Authority',
    issuedDate: '10 May 2023',
    detailsUrl:
      'https://drive.google.com/file/d/1j6NGDC8m5iXXQdWiF3ar7RWSh2dB7cjE/view?usp=sharing',
  },
  {
    imgUrl: certifiedProgrammerBNSP,
    title: 'Certified Programmer - Software Development',
    provider: 'Indonesian Professional Certification Authority',
    issuedDate: '20 April 2026',
    detailsUrl:
      'https://drive.google.com/file/d/1sXSjPgK12-a5Ce6y03BRshU5McHhyK1o/view?usp=sharing',
  },
  {
    imgUrl: webDeveloperBismaInformatika,
    title: 'Web Developer Certification',
    provider: 'Bisma Informatika',
    issuedDate: '16 July 2026',
    detailsUrl:
      'https://drive.google.com/file/d/1i69ASLYYLihzLnPCyfayRnZjYTwan1-G/view?usp=sharing',
  },
]

export { achievements }
