import React, { useState } from "react";
import styles from "./Newsletter.module.css";
import { validateEmail } from "../../common/utils/emailValidation";
import Button from "../Button";
import Input from "../Input";
import Typography from "../Typography";

type NewsletterProps = {
  onSubscribe: (email: string) => void;
};

export default function Newsletter({ onSubscribe }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Por favor, insira um endereço de e-mail válido.");
      return;
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <Typography variant="h5" className={styles.title}>
          Inscreva-se para ganhar descontos!
        </Typography>
        <Typography variantStyle="body-large" className={styles.description}>
          Cadastre seu email, receba novidades e descontos imperdíveis antes de
          todo mundo!
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            variant="primary"
            style={{ width: "678px" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu melhor endereço de email"
          />
          <Button
            onClick={(e) => console.log("inscrever")}
            style={{ width: "145px", borderRadius: "32px", height: "56px" }}
          >
            Inscrever
          </Button>
        </form>
        {error && (
          <div style={{ display: "flex" }}>
            <p className={styles.error}>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
}
