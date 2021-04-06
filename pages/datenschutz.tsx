import Head from "next/head";
import styles from "../styles/Static.module.css";
import Headerbar from "../components/head/Head";
import MainMenu from "../components/mainmenu/Mainmenu";
import { useState } from "react";
import Navigationbar from "../components/navbar/Navbar";

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Datenschutz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headerbar onBurgerClick={() => setShowMenu(true)} />
      <main className={styles.staticmain}>
        <p>
          <span>Datenschutz</span>
        </p>
        <h2>
          <span>1. Datenschutz auf einen Blick</span>
        </h2>
        <h3>
          <span>Allgemeine Hinweise</span>
        </h3>
        <p>
          <span>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick
            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
            Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgef&uuml;hrten
            Datenschutzerkl&auml;rung.
          </span>
        </p>
        <h3>
          <span>Datenerfassung auf dieser Website</span>
        </h3>
        <h4>
          <span>
            Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
            Website?
          </span>
        </h4>
        <p>
          <span>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum
            dieser Website entnehmen.
          </span>
        </p>
        <h4>
          <span>Wie erfassen wir Ihre Daten?</span>
        </h4>
        <p>
          <span>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </span>
        </p>
        <p>
          <span>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie diese Website betreten.
          </span>
        </p>
        <h4>
          <span>Wof&uuml;r nutzen wir Ihre Daten?</span>
        </h4>
        <p>
          <span>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
            Analyse Ihres Nutzerverhaltens verwendet werden.
          </span>
        </p>
        <h4>
          <span>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</span>
        </h4>
        <p>
          <span>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
            Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
            Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
            haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die
            Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
            bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
            ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
            zu.
          </span>
        </p>
        <p>
          <span>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
            Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns
            wenden.
          </span>
        </p>
        <h3>
          <span>Analyse-Tools und Tools von Dritt&shy;anbietern</span>
        </h3>
        <p>
          <span>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit sogenannten
            Analyseprogrammen.
          </span>
        </p>
        <p>
          <span>
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
            der folgenden Datenschutzerkl&auml;rung.
          </span>
        </p>
        <h2>
          <span>2. Hosting und Content Delivery Networks (CDN)</span>
        </h2>
        <h3>
          <span>Externes Hosting</span>
        </h3>
        <p>
          <span>
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
            und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
            Websitezugriffe und sonstige Daten, die &uuml;ber eine Website
            generiert werden, handeln.
          </span>
        </p>
        <p>
          <span>
            Der Einsatz des Hosters erfolgt zum Zwecke der
            Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
            bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
            einer sicheren, schnellen und effizienten Bereitstellung unseres
            Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
            lit. f DSGVO).
          </span>
        </p>
        <p>
          <span>
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
            Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere
            Weisungen in Bezug auf diese Daten befolgen.
          </span>
        </p>
        <p>
          <span>Wir setzen folgenden Hoster ein:</span>
        </p>
        <p>
          <span>ALL-INKL.COM &ndash; Neue Medien M&uuml;nnich</span>
        </p>
        <p>
          <span>Inhaber: Ren&eacute; M&uuml;nnich</span>
        </p>
        <p>
          <span>Hauptstra&szlig;e 68 | D-02742 Friedersdorf</span>
        </p>
        <p>
          <span>Telefon:+49 35872 353-10</span>
        </p>
        <p>
          <span>Telefax:+49 35872 353-30</span>
        </p>
        <p>
          <span>E-Mail:info@all-inkl.com</span>
        </p>
        <p>
          <span>Umsatzsteuer-ID: DE 212657916</span>
        </p>
        <p>
          <span>Steuernummer: 208/251/03091</span>
        </p>
        <h2>
          <span>3. Allgemeine Hinweise und Pflicht&shy;informationen</span>
        </h2>
        <h3>
          <span>Datenschutz</span>
        </h3>
        <p>
          <span>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerkl&auml;rung.
          </span>
        </p>
        <p>
          <span>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die
            vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten
            wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch,
            wie und zu welchem Zweck das geschieht.
          </span>
        </p>
        <p>
          <span>
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
            (z. B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
            aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht m&ouml;glich.
          </span>
        </p>
        <h3>
          <span>Hinweis zur verantwortlichen Stelle</span>
        </h3>
        <p>
          <span>
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
            Website ist:
          </span>
        </p>
        <p>
          <span>Glanzlicht Designagentur</span>
        </p>
        <p>
          <span>Inh. Sascha Haselhuhn</span>
        </p>
        <p>
          <span>S&uuml;dwall 5</span>
        </p>
        <p>
          <span>41179 M&ouml;nchengladbach</span>
        </p>
        <p>
          <span>Telefon: +49 (0) 2161-9909664</span>
        </p>
        <p>
          <span>E-Mail: info@glanzlicht-design.de</span>
        </p>
        <p>
          <span>
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
            Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
            und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
            Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
          </span>
        </p>
        <h3>
          <span>Speicherdauer</span>
        </h3>
        <p>
          <span>
            Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
            Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder
            eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
            Daten gel&ouml;scht, sofern wir keinen anderen rechtlich
            zul&auml;ssigen&nbsp; Gr&uuml;nde f&uuml;r die Speicherung Ihrer
            personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche
            Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
            L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
          </span>
        </p>
        <h3>
          <span>Hinweis zur Datenweitergabe in die USA</span>
        </h3>
        <p>
          <span>
            Auf unserer Website sind unter anderem Tools von Unternehmen mit
            Sitz in den USA eingebunden. Wenn diese Tools aktiv sind,
            k&ouml;nnen Ihre personenbezogenen Daten an die US-Server der
            jeweiligen Unternehmen weitergegeben werden. Wir weisen darauf hin,
            dass die USA kein sicherer Drittstaat im Sinne des
            EU-Datenschutzrechts sind. US-Unternehmen sind dazu verpflichtet,
            personenbezogene Daten an Sicherheitsbeh&ouml;rden herauszugeben,
            ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen
            k&ouml;nnten. Es kann daher nicht ausgeschlossen werden, dass
            US-Beh&ouml;rden (z.B. Geheimdienste) Ihre auf US-Servern
            befindlichen Daten zu &Uuml;berwachungszwecken verarbeiten,
            auswerten und dauerhaft speichern. Wir haben auf diese
            Verarbeitungst&auml;tigkeiten keinen Einfluss.
          </span>
        </p>
        <h3>
          <span>Widerruf Ihrer Einwilligung zur Datenverarbeitung</span>
        </h3>
        <p>
          <span>
            Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
            ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die
            Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
          </span>
        </p>
        <h3>
          <span>
            Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
            sowie gegen Direktwerbung (Art. 21 DSGVO)
          </span>
        </h3>
        <p>
          <span>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
            ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
            GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
            DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
            EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
            GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
            EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
            DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
            IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
            SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE
            F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
            UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER
            GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
            RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
          </span>
        </p>
        <p>
          <span>
            WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
            BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
            VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
            DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
            PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
            WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
            ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
            (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
          </span>
        </p>
        <h3>
          <span>
            Beschwerde&shy;recht bei der zust&auml;ndigen
            Aufsichts&shy;beh&ouml;rde
          </span>
        </h3>
        <p>
          <span>
            Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
            Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
            insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
            Rechtsbehelfe.
          </span>
        </p>
        <h3>
          <span>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</span>
        </h3>
        <p>
          <span>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
            sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
            Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
            &Uuml;bertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </span>
        </p>
        <h3>
          <span>SSL- bzw. TLS-Verschl&uuml;sselung</span>
        </h3>
        <p>
          <span>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
            &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
            Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
            senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
            verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von &bdquo;http://&ldquo; auf
            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </span>
        </p>
        <p>
          <span>
            Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
            k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
            Dritten mitgelesen werden.
          </span>
        </p>
        <h3>
          <span>Auskunft, L&ouml;schung und Berichtigung</span>
        </h3>
        <p>
          <span>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie
            zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie
            sich jederzeit unter der im Impressum angegebenen Adresse an uns
            wenden.
          </span>
        </p>
        <h3>
          <span>Recht auf Einschr&auml;nkung der Verarbeitung</span>
        </h3>
        <p>
          <span>
            Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in
            folgenden F&auml;llen:
          </span>
        </p>
        <ul>
          <li>
            <span>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
              Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
              der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </span>
          </li>
          <li>
            <span>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten
              unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
              der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
              verlangen.
            </span>
          </li>
          <li>
            <span>
              Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
              Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung
              von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht,
              statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen.
            </span>
          </li>
          <li>
            <span>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abw&auml;gung zwischen Ihren und unseren
              Interessen vorgenommen werden. Solange noch nicht feststeht,
              wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
              Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </span>
          </li>
        </ul>
        <p>
          <span>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
            Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
            Geltendmachung, Aus&uuml;bung oder Verteidigung von
            Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
            nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
            eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </span>
        </p>
        <h2>
          <span>4. Datenerfassung auf dieser Website</span>
        </h2>
        <h3>
          <span>Cookies</span>
        </h3>
        <p>
          <span>
            Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
            Cookies sind kleine Textdateien und richten auf Ihrem Endger&auml;t
            keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r
            die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente
            Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden
            nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente
            Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese
            selbst l&ouml;schen oder eine automatische L&ouml;schung durch Ihren
            Webbrowser erfolgt.
          </span>
        </p>
        <p>
          <span>
            Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem
            Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten
            (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die
            Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B.
            Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </span>
        </p>
        <p>
          <span>
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
            technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht
            funktionieren w&uuml;rden (z.B. die Warenkorbfunktion oder die
            Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten
            auszuwerten oder Werbung anzuzeigen.
          </span>
        </p>
        <p>
          <span>
            Cookies, die zur Durchf&uuml;hrung des elektronischen
            Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung
            bestimmter, von Ihnen erw&uuml;nschter Funktionen (funktionale
            Cookies, z. B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung
            der Website (z.B. Cookies zur Messung des Webpublikums) erforderlich
            sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
            Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
            von Cookies zur technisch fehlerfreien und optimierten
            Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
            Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der
            betreffenden Cookies ausschlie&szlig;lich auf Grundlage dieser
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
            jederzeit widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das
            Setzen von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder
            generell ausschlie&szlig;en sowie das automatische L&ouml;schen der
            Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der
            Deaktivierung von Cookies kann die Funktionalit&auml;t dieser
            Website eingeschr&auml;nkt sein.
          </span>
        </p>
        <p>
          <span>
            Soweit Cookies von Drittunternehmen oder zu Analysezwecken
            eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser
            Datenschutzerkl&auml;rung gesondert informieren und ggf. eine
            Einwilligung abfragen.
          </span>
        </p>
        <h3>
          <span>Server-Log-Dateien</span>
        </h3>
        <p>
          <span>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns &uuml;bermittelt. Dies sind:
          </span>
        </p>
        <ul>
          <li>
            <span>Browsertyp und Browserversion</span>
          </li>
          <li>
            <span>verwendetes Betriebssystem</span>
          </li>
          <li>
            <span>Referrer URL</span>
          </li>
          <li>
            <span>Hostname des zugreifenden Rechners</span>
          </li>
          <li>
            <span>Uhrzeit der Serveranfrage</span>
          </li>
          <li>
            <span>IP-Adresse</span>
          </li>
        </ul>
        <p>
          <span>
            Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </span>
        </p>
        <p>
          <span>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
            der technisch fehlerfreien Darstellung und der Optimierung seiner
            Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst
            werden.
          </span>
        </p>
        <h3>
          <span>Kontaktformular</span>
        </h3>
        <p>
          <span>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
            den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </span>
        </p>
        <p>
          <span>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
            Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
            vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
            &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
            berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
            wurde.
          </span>
        </p>
        <p>
          <span>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
            entf&auml;llt (z. B. nach abgeschlossener Bearbeitung Ihrer
            Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
            Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
          </span>
        </p>
        <h3>
          <span>Anfrage per E-Mail, Telefon oder Telefax</span>
        </h3>
        <p>
          <span>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
            Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen
            Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
            uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter.
          </span>
        </p>
        <p>
          <span>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
            Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
            vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
            &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
            berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
            wurde.
          </span>
        </p>
        <p>
          <span>
            Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
            verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
            Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die
            Datenspeicherung entf&auml;llt (z. B. nach abgeschlossener
            Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
            &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash;
            bleiben unber&uuml;hrt.
          </span>
        </p>
        <h2>
          <span>5. Soziale Medien</span>
        </h2>
        <h3>
          <span>Social-Media-Plugins mit Shariff</span>
        </h3>
        <p>
          <span>
            Auf dieser Website werden Plugins von sozialen Medien verwendet (z.
            B. Facebook, Twitter, Instagram, Pinterest, XING, LinkedIn, Tumblr).
          </span>
        </p>
        <p>
          <span>
            Die Plugins k&ouml;nnen Sie in der Regel anhand der jeweiligen
            Social-Media-Logos erkennen. Um den Datenschutz auf dieser Website
            zu gew&auml;hrleisten, verwenden wir diese Plugins nur zusammen mit
            der sogenannten &bdquo;Shariff&ldquo;-L&ouml;sung. Diese Anwendung
            verhindert, dass die auf dieser Website integrierten Plugins Daten
            schon beim ersten Betreten der Seite an den jeweiligen Anbieter
            &uuml;bertragen.
          </span>
        </p>
        <p>
          <span>
            Erst wenn Sie das jeweilige Plugin durch Anklicken der
            zugeh&ouml;rigen Schaltfl&auml;che aktivieren, wird eine direkte
            Verbindung zum Server des Anbieters hergestellt (Einwilligung).
            Sobald Sie das Plugin aktivieren, erh&auml;lt der jeweilige Anbieter
            die Information, dass Sie mit Ihrer IP-Adresse dieser Website
            besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen
            Social-Media-Account (z. B. Facebook) eingeloggt sind, kann der
            jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto
            zuordnen.
          </span>
        </p>
        <p>
          <span>
            Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des
            Art. 6 Abs. 1 lit. a DSGVO dar. Diese Einwilligung k&ouml;nnen Sie
            jederzeit mit Wirkung f&uuml;r die Zukunft widerrufen.
          </span>
        </p>
        <h3>
          <span>Facebook Plugins (Like &amp; Share-Button)</span>
        </h3>
        <p>
          <span>
            Auf dieser Website sind Plugins des sozialen Netzwerks Facebook
            integriert. Anbieter dieses Dienstes ist die Facebook Ireland
            Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten
            werden nach Aussage von Facebook jedoch auch in die USA und in
            andere Drittl&auml;nder &uuml;bertragen.
          </span>
        </p>
        <p>
          <span>
            Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem
            &bdquo;Like-Button&ldquo; (&bdquo;Gef&auml;llt mir&ldquo;) auf
            dieser Website. Eine &Uuml;bersicht &uuml;ber die Facebook Plugins
            finden Sie hier:{" "}
          </span>
          <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE">
            <span>
              https://developers.facebook.com/docs/plugins/?locale=de_DE
            </span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>
            Wenn Sie diese Website besuchen, wird &uuml;ber das Plugin eine
            direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server
            hergestellt. Facebook erh&auml;lt dadurch die Information, dass Sie
            mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den
            Facebook &bdquo;Like-Button&ldquo; anklicken w&auml;hrend Sie in
            Ihrem Facebook-Account eingeloggt sind, k&ouml;nnen Sie die Inhalte
            dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann
            Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir
            weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis
            vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch
            Facebook erhalten. Weitere Informationen hierzu finden Sie in der
            Datenschutzerkl&auml;rung von Facebook unter:{" "}
          </span>
          <a href="https://de-de.facebook.com/privacy/explanation">
            <span>https://de-de.facebook.com/privacy/explanation</span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>
            Wenn Sie nicht w&uuml;nschen, dass Facebook den Besuch dieser
            Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich
            bitte aus Ihrem Facebook-Benutzerkonto aus.
          </span>
        </p>
        <p>
          <span>
            Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in den
            Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt
            wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
            von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
            widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Die Daten&uuml;bertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
            finden Sie hier:{" "}
          </span>
          <a href="https://www.facebook.com/legal/EU_data_transfer_addendum">
            <span>
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </span>
          </a>
          <span> und </span>
          <a href="https://de-de.facebook.com/help/566994660333381">
            <span>https://de-de.facebook.com/help/566994660333381</span>
          </a>
          <span>.</span>
        </p>
        <h3>
          <span>Twitter Plugin</span>
        </h3>
        <p>
          <span>
            Auf dieser Website sind Funktionen des Dienstes Twitter eingebunden.
            Diese Funktionen werden angeboten durch die Twitter International
            Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07,
            Irland. Durch das Benutzen von Twitter und der Funktion
            &bdquo;Re-Tweet&ldquo; werden die von Ihnen besuchten Websites mit
            Ihrem Twitter-Account verkn&uuml;pft und anderen Nutzern bekannt
            gegeben. Dabei werden auch Daten an Twitter &uuml;bertragen. Wir
            weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis
            vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch
            Twitter erhalten. Weitere Informationen hierzu finden Sie in der
            Datenschutzerkl&auml;rung von Twitter unter:{" "}
          </span>
          <a href="https://twitter.com/de/privacy">
            <span>https://twitter.com/de/privacy</span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>
            Die Verwendung des Twitter-Plugins erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in den
            Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt
            wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
            von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
            widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Die Daten&uuml;bertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
            finden Sie hier:{" "}
          </span>
          <a href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html">
            <span>
              https://gdpr.twitter.com/en/controller-to-controller-transfers.html
            </span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>
            Ihre Datenschutzeinstellungen bei Twitter k&ouml;nnen Sie in den
            Konto-Einstellungen unter{" "}
          </span>
          <a href="https://twitter.com/account/settings">
            <span>https://twitter.com/account/settings</span>
          </a>
          <span> &auml;ndern.</span>
        </p>
        <h3>
          <span>Instagram Plugin</span>
        </h3>
        <p>
          <span>
            Auf dieser Website sind Funktionen des Dienstes Instagram
            eingebunden. Diese Funktionen werden angeboten durch die Facebook
            Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin
            2, Irland integriert.
          </span>
        </p>
        <p>
          <span>
            Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k&ouml;nnen Sie
            durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit
            Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch
            dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin,
            dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
            &uuml;bermittelten Daten sowie deren Nutzung durch Instagram
            erhalten.
          </span>
        </p>
        <p>
          <span>
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in den
            Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt
            wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
            von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
            widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Die Daten&uuml;bertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
            finden Sie hier:{" "}
          </span>
          <a href="https://www.facebook.com/legal/EU_data_transfer_addendum">
            <span>
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </span>
          </a>
          <span>, </span>
          <a href="https://help.instagram.com/519522125107875">
            <span>https://help.instagram.com/519522125107875</span>
          </a>
          <span> und </span>
          <a href="https://de-de.facebook.com/help/566994660333381">
            <span>https://de-de.facebook.com/help/566994660333381</span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>
            Weitere Informationen hierzu finden Sie in der
            Datenschutzerkl&auml;rung von Instagram:{" "}
          </span>
          <a href="https://instagram.com/about/legal/privacy/">
            <span>https://instagram.com/about/legal/privacy/</span>
          </a>
          <span>.</span>
        </p>
        <h3>
          <span>Tumblr Plugin</span>
        </h3>
        <p>
          <span>
            Diese Website nutzt Schaltfl&auml;chen des Dienstes Tumblr. Anbieter
            ist die Tumblr, Inc., 35 East 21st St, 10th Floor, New York, NY
            10010, USA.
          </span>
        </p>
        <p>
          <span>
            Diese Schaltfl&auml;chen erm&ouml;glichen es Ihnen, einen Beitrag
            oder eine Seite bei Tumblr zu teilen oder dem Anbieter bei Tumblr zu
            folgen. Wenn Sie eine unserer Websites mit Tumblr-Button aufrufen,
            baut der Browser eine direkte Verbindung mit den Servern von Tumblr
            auf. Wir haben keinen Einfluss auf den Umfang der Daten, die Tumblr
            mit Hilfe dieses Plugins erhebt und &uuml;bermittelt. Nach aktuellem
            Stand werden die IP-Adresse des Nutzers sowie die URL der jeweiligen
            Website &uuml;bermittelt.
          </span>
        </p>
        <p>
          <span>
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in den
            Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt
            wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
            von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
            widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Weitere Informationen hierzu finden sich in der
            Datenschutzerkl&auml;rung von Tumblr unter:{" "}
          </span>
          <a href="https://www.tumblr.com/privacy/de">
            <span>https://www.tumblr.com/privacy/de</span>
          </a>
          <span>.</span>
        </p>
        <h3>
          <span>Pinterest Plugin</span>
        </h3>
        <p>
          <span>
            Auf dieser Website verwenden wir Social Plugins des sozialen
            Netzwerkes Pinterest, das von der Pinterest Europe Ltd., Palmerston
            House, 2nd Floor, Fenian Street, Dublin 2, Irland betrieben wird.
          </span>
        </p>
        <p>
          <span>
            Wenn Sie eine Seite aufrufen, die ein solches Plugin enth&auml;lt,
            stellt Ihr Browser eine direkte Verbindung zu den Servern von
            Pinterest her. Das Plugin &uuml;bermittelt dabei Protokolldaten an
            den Server von Pinterest in die USA. Diese Protokolldaten enthalten
            m&ouml;glicherweise Ihre IP-Adresse, die Adresse der besuchten
            Websites, die ebenfalls Pinterest-Funktionen enthalten, Art und
            Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre
            Verwendungsweise von Pinterest sowie Cookies.
          </span>
        </p>
        <p>
          <span>
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in den
            Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt
            wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
            von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
            widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Weitere Informationen zu Zweck, Umfang und weiterer Verarbeitung und
            Nutzung der Daten durch Pinterest sowie Ihre diesbez&uuml;glichen
            Rechte und M&ouml;glichkeiten zum Schutz Ihrer Privatsph&auml;re
            finden Sie in den Datenschutzhinweisen von Pinterest:{" "}
          </span>
          <a href="https://policy.pinterest.com/de/privacy-policy">
            <span>https://policy.pinterest.com/de/privacy-policy</span>
          </a>
          <span>.</span>
        </p>
        <h2>
          <span>6. Analyse-Tools und Werbung</span>
        </h2>
        <h3>
          <span>Matomo (ehemals Piwik)</span>
        </h3>
        <p>
          <span>
            Diese Website benutzt den Open Source Webanalysedienst Matomo.
            Matomo verwendet Technologien, die die seiten&uuml;bergreifende
            Wiedererkennung des Nutzers zur Analyse des Nutzerverhaltens
            erm&ouml;glichen (z.B. Cookies oder Device-Fingerprinting). Die
            durch Matomo erfassten Informationen &uuml;ber die Benutzung dieser
            Website werden auf unserem Server gespeichert. Die IP-Adresse wird
            vor der Speicherung anonymisiert.
          </span>
        </p>
        <p>
          <span>
            Mit Hilfe von Matomo sind wir in der Lage Daten &uuml;ber die
            Nutzung unserer Website durch die Websitebesucher zu erfassen und zu
            analysieren. Hierdurch k&ouml;nnen wir u. a. herausfinden, wann
            welche Seitenaufrufe get&auml;tigt wurden und aus welcher Region sie
            kommen. Au&szlig;erdem erfassen wir verschiedene Logdateien (z.B.
            IP-Adresse, Referrer, verwendete Browser und Betriebssysteme) und
            k&ouml;nnen messen, ob unsere Websitebesucher bestimmte Aktionen
            durchf&uuml;hren (z.B. Klicks, K&auml;ufe u. &Auml;.).
          </span>
        </p>
        <p>
          <span>
            Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an der anonymisierten Analyse des Nutzerverhaltens, um
            sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern
            eine entsprechende Einwilligung abgefragt wurde (z. B. eine
            Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung
            ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO;
            die Einwilligung ist jederzeit widerrufbar.
          </span>
        </p>
        <h4>
          <span>Hosting</span>
        </h4>
        <p>
          <span>
            Wir hosten Matomo ausschlie&szlig;lich auf unseren eigenen Servern,
            sodass alle Analysedaten bei uns verbleiben und nicht weitergegeben
            werden.
          </span>
        </p>
        <h3>
          <span>WordPress Statistik</span>
        </h3>
        <p>
          <span>
            Diese Website nutzt &bdquo;WordPress Statistik&ldquo;, um
            Besucherzugriffe statistisch auszuwerten. Anbieter ist die
            Automattic Inc., 60 29th Street #343, San Francisco, CA 94110-4929,
            USA.
          </span>
        </p>
        <p>
          <span>
            WordPress Statistik verwendet Technologien, die die Wiedererkennung
            des Nutzers zum Zwecke der Analyse des Nutzerverhaltens
            erm&ouml;glichen (z.B. Cookies oder Device-Fingerprinting).
            WordPress Statistik erfasst zur Analyse u. a. Logdateien (Referrer,
            IP-Adresse, Browser u. a.), die Herkunft der Websitebesucher (Land,
            Stadt) und welche Aktionen sie auf der Seite get&auml;tigt haben
            (z.B. Klicks, Ansichten, Downloads). Die so erfassten Informationen
            &uuml;ber die Benutzung dieser Website werden auf Servern in den USA
            gespeichert. Ihre IP-Adresse wird nach der Verarbeitung und vor der
            Speicherung anonymisiert.
          </span>
        </p>
        <p>
          <span>
            Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an der anonymisierten Analyse des Nutzerverhaltens, um
            sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern
            eine entsprechende Einwilligung abgefragt wurde (z. B. eine
            Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung
            ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO;
            die Einwilligung ist jederzeit widerrufbar.
          </span>
        </p>
        <h2>
          <span>7. Newsletter</span>
        </h2>
        <h3>
          <span>Newsletter&shy;daten</span>
        </h3>
        <p>
          <span>
            Wenn Sie den auf der Website angebotenen Newsletter beziehen
            m&ouml;chten, ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse sowie
            Informationen, welche uns die &Uuml;berpr&uuml;fung gestatten, dass
            Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
            Empfang des Newsletters einverstanden sind. Weitere Daten werden
            nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden
            wir ausschlie&szlig;lich f&uuml;r den Versand der angeforderten
            Informationen und geben diese nicht an Dritte weiter.
          </span>
        </p>
        <p>
          <span>
            Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen
            Daten erfolgt ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur
            Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum
            Versand des Newsletters k&ouml;nnen Sie jederzeit widerrufen, etwa
            &uuml;ber den &bdquo;Austragen&ldquo;-Link im Newsletter. Die
            Rechtm&auml;&szlig;igkeit der bereits erfolgten
            Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf unber&uuml;hrt.
          </span>
        </p>
        <p>
          <span>
            Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten
            Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei
            uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
            Abbestellung des Newsletters aus der Newsletterverteilerliste
            gel&ouml;scht. Daten, die zu anderen Zwecken bei uns gespeichert
            wurden bleiben hiervon unber&uuml;hrt.
          </span>
        </p>
        <p>
          <span>
            Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre
            E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in
            einer Blacklist gespeichert, um k&uuml;nftige Mailings zu
            verhindern. Die Daten aus der Blacklist werden nur f&uuml;r diesen
            Zweck verwendet und nicht mit anderen Daten zusammengef&uuml;hrt.
            Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der
            Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern
            (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO).
            Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie
            k&ouml;nnen der Speicherung widersprechen, sofern Ihre Interessen
            unser berechtigtes Interesse &uuml;berwiegen.
          </span>
        </p>
        <h2>
          <span>8. Plugins und Tools</span>
        </h2>
        <h3>
          <span>YouTube</span>
        </h3>
        <p>
          <span>
            Diese Website bindet Videos der Website YouTube ein. Betreiber der
            Website ist die Google Ireland Limited (&bdquo;Google&ldquo;),
            Gordon House, Barrow Street, Dublin 4, Irland.
          </span>
        </p>
        <p>
          <span>
            Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube
            eingebunden ist, wird eine Verbindung zu den Servern von YouTube
            hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche
            unserer Seiten Sie besucht haben.
          </span>
        </p>
        <p>
          <span>
            Des Weiteren kann YouTube verschiedene Cookies auf Ihrem
            Endger&auml;t speichern oder vergleichbare Technologien zur
            Wiedererkennung verwenden (z.B. Device-Fingerprinting). Auf diese
            Weise kann YouTube Informationen &uuml;ber Besucher dieser Website
            erhalten. Diese Informationen werden u. a. verwendet, um
            Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu
            verbessern und Betrugsversuchen vorzubeugen.
          </span>
        </p>
        <p>
          <span>
            Wenn Sie in Ihrem YouTube-Account eingeloggt sind, erm&ouml;glichen
            Sie YouTube, Ihr Surfverhalten direkt Ihrem pers&ouml;nlichen Profil
            zuzuordnen. Dies k&ouml;nnen Sie verhindern, indem Sie sich aus
            Ihrem YouTube-Account ausloggen.
          </span>
        </p>
        <p>
          <span>
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO;
            die Einwilligung ist jederzeit widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerkl&auml;rung von YouTube unter:{" "}
          </span>
          <a href="https://policies.google.com/privacy?hl=de">
            <span>https://policies.google.com/privacy?hl=de</span>
          </a>
          <span>.</span>
        </p>
        <h3>
          <span>Google Web Fonts (lokales Hosting)</span>
        </h3>
        <p>
          <span>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Google bereitgestellt werden. Die Google
            Fonts sind lokal installiert. Eine Verbindung zu Servern von Google
            findet dabei nicht statt.
          </span>
        </p>
        <p>
          <span>
            Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
          </span>
          <a href="https://developers.google.com/fonts/faq">
            <span>https://developers.google.com/fonts/faq</span>
          </a>
          <span> und in der Datenschutzerkl&auml;rung von Google: </span>
          <a href="https://policies.google.com/privacy?hl=de">
            <span>https://policies.google.com/privacy?hl=de</span>
          </a>
          <span>.</span>
        </p>
        <h3>
          <span>Font Awesome (lokales Hosting)</span>
        </h3>
        <p>
          <span>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
            Font Awesome. Font Awesome ist lokal installiert. Eine Verbindung zu
            Servern von Fonticons, Inc.&nbsp; findet dabei nicht statt.
          </span>
        </p>
        <p>
          <span>
            Weitere Informationen zu Font Awesome finden Sie und in der
            Datenschutzerkl&auml;rung f&uuml;r Font Awesome unter:{" "}
          </span>
          <a href="https://fontawesome.com/privacy">
            <span>https://fontawesome.com/privacy</span>
          </a>
          <span>.</span>
        </p>
        <h3>
          <span>Google Maps</span>
        </h3>
        <p>
          <span>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
            Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow
            Street, Dublin 4, Irland.
          </span>
        </p>
        <p>
          <span>
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
            IP-Adresse zu speichern. Diese Informationen werden in der Regel an
            einen Server von Google in den USA &uuml;bertragen und dort
            gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
            Daten&uuml;bertragung.
          </span>
        </p>
        <p>
          <span>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote und an einer leichten
            Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies
            stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
            DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
            erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art.
            6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Die Daten&uuml;bertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details
            finden Sie hier:{" "}
          </span>
          <a href="https://privacy.google.com/businesses/gdprcontrollerterms/">
            <span>
              https://privacy.google.com/businesses/gdprcontrollerterms/
            </span>
          </a>
          <span> und </span>
          <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/">
            <span>
              https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
            </span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerkl&auml;rung von Google:{" "}
          </span>
          <a href="https://policies.google.com/privacy?hl=de">
            <span>https://policies.google.com/privacy?hl=de</span>
          </a>
          <span>.</span>
        </p>
        <h3>
          <span>Google reCAPTCHA</span>
        </h3>
        <p>
          <span>
            Wir nutzen &bdquo;Google reCAPTCHA&ldquo; (im Folgenden
            &bdquo;reCAPTCHA&ldquo;) auf dieser Website. Anbieter ist die Google
            Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street,
            Dublin 4, Irland.
          </span>
        </p>
        <p>
          <span>
            Mit reCAPTCHA soll &uuml;berpr&uuml;ft werden, ob die Dateneingabe
            auf dieser Website (z. B. in einem Kontaktformular) durch einen
            Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu
            analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand
            verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald
            der Websitebesucher die Website betritt. Zur Analyse wertet
            reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse,
            Verweildauer des Websitebesuchers auf der Website oder vom Nutzer
            get&auml;tigte Mausbewegungen). Die bei der Analyse erfassten Daten
            werden an Google weitergeleitet.
          </span>
        </p>
        <p>
          <span>
            Die reCAPTCHA-Analysen laufen vollst&auml;ndig im Hintergrund.
            Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
            stattfindet.
          </span>
        </p>
        <p>
          <span>
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse daran, seine Webangebote vor missbr&auml;uchlicher
            automatisierter Aussp&auml;hung und vor SPAM zu sch&uuml;tzen.
            Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
          </span>
        </p>
        <p>
          <span>
            Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
            Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen
            unter folgenden Links:{" "}
          </span>
          <a href="https://policies.google.com/privacy?hl=de">
            <span>https://policies.google.com/privacy?hl=de</span>
          </a>
          <span> und </span>
          <a href="https://policies.google.com/terms?hl=de">
            <span>https://policies.google.com/terms?hl=de</span>
          </a>
          <span>.</span>
        </p>
        <p>
          <span>Quelle: </span>
          <a href="https://www.e-recht24.de/">
            <span>https://www.e-recht24.de</span>
          </a>
        </p>
        <p>
          <br />
          <br />
        </p>
      </main>{" "}
      <Navigationbar onBurgerClick={() => setShowMenu(true)} />
      <MainMenu open={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}
export {};
