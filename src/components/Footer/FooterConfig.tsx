import Footer from ".";
import {
  InstagramIcon,
  VisaIcon,
  MastercardIcon,
  EloIcon,
  PixIcon,
  DinnersIcon,
  WhatsAppIcon,
  TiktokIcon,
} from "../../common/icons";

export default function FooterConfig() {
  const sections = [
    {
      title: "Funcionamento",
      items: [
        "Segunda a Sexta - 8h às 18h",
        "sac@hoseki.com.br",
        "0800 541 320",
      ],
    },
    {
      title: "Institucional",
      items: [
        "Sobre nós",
        "Contato",
        "Política de Privacidade",
        "LGPD - Lei de proteção de dados",
      ],
    },
    {
      title: "Informações",
      items: ["Entregas", "Garantia", "Trocas e devoluções"],
    },
  ];

  const paymentIcons = [
    <VisaIcon />,
    <MastercardIcon />,
    <EloIcon />,
    <DinnersIcon />,
    <PixIcon />,
  ];

  const socialIcons = [<WhatsAppIcon />, <InstagramIcon />, <TiktokIcon />];

  return (
    <Footer
      sections={sections}
      paymentIcons={paymentIcons}
      socialIcons={socialIcons}
    />
  );
}
