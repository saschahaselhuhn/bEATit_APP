import Head from "next/head";
import styles from "../styles/Static.module.css";
import Headerbar from "../components/head/Head";
import MainMenu from "../components/mainmenu/Mainmenu";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Impressum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headerbar onBurgerClick={() => setShowMenu(true)} />
      <main className={styles.staticmain}>
        <p>
          <span>IMPRESSUM</span>
        </p>
        <h2>
          <span>Angaben gem&auml;&szlig; &sect; 5 TMG</span>
        </h2>
        <p>
          <span>Sascha Haselhuhn</span>
        </p>
        <p>
          <span>Glanzlicht Designagentur (Haselhuhn Media Group)</span>
        </p>
        <p>
          <span>S&uuml;dwall 5</span>
        </p>
        <p>
          <span>41179 M&ouml;nchengladbach</span>
        </p>
        <h2>
          <span>Kontakt</span>
        </h2>
        <p>
          <span>Telefon: +49 (0) 2161-9909664</span>
        </p>
        <p>
          <span>E-Mail: info@glanzlicht-design.de</span>
        </p>
        <h2>
          <span>
            Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
          </span>
        </h2>
        <p>
          <span>Sascha Haselhuhn</span>
        </p>
        <p>
          <span>S&uuml;dwall 5</span>
        </p>
        <p>
          <span>41179 M&ouml;nchengladbach</span>
        </p>
        <h2>
          <span>EU-Streitschlichtung</span>
        </h2>
        <p>
          <span>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
          </span>
          <a href="https://ec.europa.eu/consumers/odr">
            <span>https://ec.europa.eu/consumers/odr</span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>Unsere E-Mail-Adresse finden Sie oben im Impressum.</span>
        </p>
        <h2>
          <span>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </span>
        </h2>
        <p>
          <span>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </span>
        </p>
        <h3>
          <span>Haftung f&uuml;r Inhalte</span>
        </h3>
        <p>
          <span>
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
            f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
            gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </span>
        </p>
        <p>
          <span>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </span>
        </p>
        <h3>
          <span>Haftung f&uuml;r Links</span>
        </h3>
        <p>
          <span>
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </span>
        </p>
        <p>
          <span>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </span>
        </p>
        <h3>
          <span>Urheberrecht</span>
        </h3>
        <p>
          <span>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </span>
        </p>
        <p>
          <span>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </span>
        </p>
        <p>
          <span>Quelle: </span>
          <a href="https://www.e-recht24.de/impressum-generator.html">
            <span>https://www.e-recht24.de/impressum-generator.html</span>
          </a>
        </p>
        <p>&nbsp;</p>
      </main>{" "}
      <MainMenu open={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}
export {};
