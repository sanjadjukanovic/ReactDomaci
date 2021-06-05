import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/about.jpg";
import one from "../assets/portfolio/01-full.jpg";
import two from "../assets/portfolio/02-full.jpg";
import three from "../assets/portfolio/03-full.jpg";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="O nama"
          subtitle="Istinita priča"
          showbutton={false}
          image={image}
        />
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  L'amie Salon de Beaute
                </h2>
                <h3 className="section-subheading text-muted">
                  Pre dve godine smo imali viziju da L'amie Salon de Beaute
                  jednog dana postane primer salona u kojem se po pristupačnim
                  cenama i u lepom ambijentu svaka osoba može osetiti kao deo
                  Hollywood-a. Danas, kada smo ovo ostvarili, želimo da isti
                  ovaj ugođaj u jednom momentu osete naši sugrađani iz ostalih
                  delova grada. Tako da su naši trenutni ciljevi da opravdamo
                  poverenje koje ste nam do sada ukazali na Novom Beogradu I da
                  eventualno proširimo naše usluge na jos neka područja
                  Beograda.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={one}
                        style={{ height: 160, width: 160 }}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2019-2021</h4>
                        <h4 className="subheading">Naš cilj</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Verujemo da se uspeh u kozmetickim uslugama meri po
                          broju stalnih mušterija. Sada, možemo da pohvalimo
                          kako se ovaj broj dana u dan sve vise povećava. Ovo
                          postižemo konstantnim unapređenjem tehnologije, obukom
                          kadrova I istraživanjem kozmetičkih proizvoda koje
                          koristimo u skladu sa zahtevima naših mušterija.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={two}
                        style={{ height: 160, width: 160 }}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2020</h4>
                        <h4 className="subheading">Ponosni na</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Posebno smo ponosni na usluge nadogradnje kose u kojoj
                          smo zahvaljujući proverenom kvalitetu kose,
                          najpristupačnijim cenama i desetogodišnjem iskustvu
                          zauzeli zasluženo prvo mesto. Slobodno nas pozovite i
                          naši zaposleni će vam dati sve informacije i pružiti
                          najbolji savet.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={three}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2020</h4>
                        <h4 className="subheading">Zaposlenje</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Uvek smo radi da radimo sa novim kolegama i da primamo
                          ljude na obuke.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>
                        Budi deo
                        <br />
                        naše
                        <br />
                        priče!
                      </h4>
                      <Link className="btn btn-primary" to="/contact">
                        Prijavi se
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
