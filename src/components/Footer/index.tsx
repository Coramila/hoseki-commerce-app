import React, { ReactNode } from "react";
import styles from "./Footer.module.css";
import FooterSection from "./FooterSection";
import Divider from "../Divider";
import { LogoVerdeIcon } from "../../common/icons";
import Typography from "../Typography";

type Section = {
  title: string;
  items: string[];
};

type FooterProps = {
  sections: Section[];
  paymentIcons: ReactNode[];
  socialIcons: ReactNode[];
};

export default function Footer({
  sections,
  paymentIcons,
  socialIcons,
}: FooterProps) {
  return (
    <>
      <footer className={styles.footer}>
        <section className="container">
          <div className={styles.sectionsContainer}>
            <div className={styles.logoAndSlogan}>
              <LogoVerdeIcon />
              <Typography className={styles.sloganText}>
                Descubra o Brilho que Fala por Você
              </Typography>
            </div>

            {sections.map((section, index) => (
              <FooterSection
                key={`footer-item-${index}`}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>

          <Divider />

          <div className={styles.subFooter}>
            <div className={styles.paymentMethods}>
              <Typography variantStyle="body-large-bold">
                Formas de Pagamento
              </Typography>
              <div className={styles.paymentIcons}>
                {paymentIcons.map((icon, index) => icon)}
              </div>
            </div>

            <div className={styles.socialMedia}>
              <Typography variantStyle="body-large-bold">
                Siga nossas redes:
              </Typography>
              <div className={styles.socialIcons}>
                {socialIcons.map((icon, index) => icon)}
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
