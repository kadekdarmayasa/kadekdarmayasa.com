import { CertificationItemProps } from '@features/certification/Item'

import javascriptCertification from '@assets/images/certifications/belajar-dasar-pemrograman-javascript.png'
import webProgrammingCertification from '@assets/images/certifications/belajar-dasar-pemrograman-web.png'
import frontendFundamentalCertification from '@assets/images/certifications/belajar-fundamental-frontend-web.png'
import frontendWebBeginnerCertification from '@assets/images/certifications/belajar-membuat-frontend-web-untuk-pemula.png'
import frontendWebExpertCertification from '@assets/images/certifications/menjadi-frontend-web-developer-expert.png'
import backendWebBeginnerCertification from '@assets/images/certifications/belajar-membuat-aplikasi-backend-untuk-pemula.png'

const certifications: CertificationItemProps[] = [
  {
    imgUrl: javascriptCertification,
    title: 'Certification of Belajar Dasar Pemrograman JavaScript by Dicoding',
  },
  {
    imgUrl: webProgrammingCertification,
    title: 'Certification of Belajar Dasar Pemrograman Web by Dicoding',
  },
  {
    imgUrl: frontendFundamentalCertification,
    title:
      'Certification of Belajar Fundamental Front-End Web Development by Dicoding',
  },
  {
    imgUrl: frontendWebBeginnerCertification,
    title:
      'Certification of Belajar Membuat Front-End Web untuk Pemula by Dicoding',
  },
  {
    imgUrl: frontendWebExpertCertification,
    title:
      'Certification of Menjadi Front-End Web Developer Expert by Dicoding',
  },
  {
    imgUrl: backendWebBeginnerCertification,
    title:
      'Certification of Belajar Membuat Aplikasi Back-End Untuk Pemula by Dicoding',
  },
]

export { certifications }
