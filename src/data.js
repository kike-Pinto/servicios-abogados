// import profile images
import ProfilePhoto1 from '../src/assets/img/profile1.png'
import ProfilePhoto2 from '../src/assets/img/profile2.png'
import ProfilePhoto3 from '../src/assets/img/profile3.png'

// import about icons
import Skill1 from '../src/assets/img/skills/skill1.png'
import Skill2 from '../src/assets/img/skills/skill2.png'
import Skill3 from '../src/assets/img/skills/skill3.png'
import Skill4 from '../src/assets/img/skills/skill4.png'
import Skill5 from '../src/assets/img/skills/skill5.png'
import Skill6 from '../src/assets/img/skills/skill6.png'

// import team images
import TeamMember1 from '../src/assets/img/lawyer1.png'
import TeamMember2 from '../src/assets/img/lawyer2.png'
import TeamMember3 from '../src/assets/img/lawyer3.png'

// import Servicio Juridico
import ServicioJuridico1 from '../src/assets/img/servicio_juridico1.png'
import ServicioJuridico2 from '../src/assets/img/servicio_juridico2.png'
import ServicioJuridico3 from '../src/assets/img/servicio_juridico3.png'

// import social icons
import FacebookIcon from '../src/assets/img/social/facebook.png'
import TwitterIcon from '../src/assets/img/social/twitter.png'
import InstagramIcon from '../src/assets/img/social/instagram.png'
import YoutubeIcon from '../src/assets/img/social/youtube.png'
import PinterestIcon from '../src/assets/img/social/pinterest.png'

// navigation data
export const navigation = [
  {
    name: 'Inicio',
    href: 'home',
  },
  {
    name: '¿Que Hacémos?',
    href: 'skills',
  },
  {
    name: 'Servicios Jurídicos',
    href: 'team',
  },
  {
    name: 'Contáctanos',
    href: 'contact',
  },
  {
    name: '¿Dónde Estámos?',
    href: 'ubicacion',
  },
]

// testimonials data
export const testimonials = [
  {
    text: 'El abogado fue crucial en mi caso civil; su enfoque estratégico y conocimiento fueron imprescindibles.',
    name: 'Juana Mamani',
    image: ProfilePhoto1,
    position: 'Ama de casa',
  },
  {
    text: 'Gracias al abogado, resolví mi problema penal de manera eficaz y con total confianza.',
    name: 'Teresa Flores',
    image: ProfilePhoto2,
    position: 'Vendedora',
  },
  {
    text: 'Excelente asesoría legal; el abogado negoció mi contrato con resultados excepcionales.',
    name: 'Katalina Miranda',
    image: ProfilePhoto3,
    position: 'Profesora Basica',
  },
]

// skills data
export const skills = [
  {
    icon: Skill1,
    title: 'Corrupción',
    description:
      'Combatimos la corrupción con integridad y experiencia en litigación y derecho penal. Su justicia, nuestra misión.',
  },
  {
    icon: Skill2,
    title: 'Empleabilidad',
    description:
      'Maximizamos oportunidades laborales con asesoramiento experto en leyes laborales y negociación de contratos. Su carrera, nuestro compromiso.',
  },
  {
    icon: Skill3,
    title: 'Bienes Raices',
    description:
      'Facilitamos transacciones inmobiliarias con conocimientos profundos en derecho de bienes raíces. Su propiedad, nuestra especialización.',
  },
  {
    icon: Skill4,
    title: 'Impuestos',
    description:
      'Optimizamos su situación fiscal con estrategias legales y cumplimiento normativo riguroso. Su tranquilidad financiera, nuestro objetivo.',
  },
  {
    icon: Skill5,
    title: 'Corporacion',
    description:
      'Impulsamos el éxito corporativo con asesoría legal integral en formación de empresas y cumplimiento normativo. Su visión empresarial, nuestra guía legal.',
  },
  {
    icon: Skill6,
    title: 'Bancario',
    description:
      'Optimizamos operaciones bancarias con conocimientos especializados en regulaciones financieras y transacciones seguras. Su confianza financiera, nuestra prioridad.',
  },
]

// team data
export const team = [
  {
    image: TeamMember1,
    name: 'Jane William',
    position: 'Band & Financial Lawyer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    image: TeamMember2,
    name: 'Andrea Collins',
    position: 'Family Lawyer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    image: TeamMember3,
    name: 'John Smith',
    position: 'Business Lawyer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
]

// social data
export const social = [
  {
    icon: FacebookIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: InstagramIcon,
  },
  {
    icon: YoutubeIcon,
  },
  {
    icon: PinterestIcon,
  },
]

// Servicio Juridico
export const ServicioJuridico = [
  {
    image: ServicioJuridico1,
    name: 'Litigación y Defensa Penal',
    description:
      'Representación en casos penales, desde delitos menores hasta graves, asegurando una defensa robusta y protectora de los derechos del cliente.',
  },
  {
    image: ServicioJuridico2,
    name: 'Asesoramiento en Derecho Civil',
    description:
      'Orientación y representación en asuntos civiles como divorcios, herencias, contratos y disputas de propiedad, garantizando soluciones justas y equitativas.',
  },
  {
    image: ServicioJuridico3,
    name: 'Negociación y Redacción de Contratos',
    description:
      'Servicios de negociación y elaboración de contratos personalizados para asegurar acuerdos legales claros y protectores de los intereses de los clientes.',
  },
]
