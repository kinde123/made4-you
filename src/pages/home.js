import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    MDBFooter,
    
} from 'mdb-react-ui-kit';

class Home extends React.Component {
    render() {
        return (< > <Navbar
            fixed="top"
            collapseOnSelect="collapseOnSelect"
            expand="lg"
            bg="dark"
            variant="dark">
            <Container >
                <Navbar.Brand href="#home">
                    <img src="assets/image/kk3.png" classNameName="img-responsive" alt="logo" />
                    < /Navbar.Brand >
                        < Navbar.Toggle ariaControls="responsive-navbar-nav">
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                < /Nav>
                                    < Nav>
                                        < Nav.Link href="#deets">
                                            Oferta < /Nav.Link >
                                            <Nav.Link href="#deets">
                                                Panel Architekta < /Nav.Link> < Nav.Link href = "#deets" > Newsroom < /Nav.Link
                                                >
                                                <Nav.Link href="#deets">
                                                    Wnetrza3D < /Nav.Link> < Nav.Link href = "#deets" > Kontact < /Nav.Link > {} < div className = "d-flex" > <ul >
                                                        <li >
                                                            <span className="social-icon social-facebook">
                                                                <i className="fa fa-facebook">
                                                                    < /i></span >
                                                                    < /li>
                                                                        < li>
                                                                            < span className="social-icon social-instagram">
                                                                                < i className="fa fa-instagram">
                                                                                    < /i ></span >
                                                                                    < /li>

                                                                                        < /ul>
                                                                                            <div className="select">
                                                                                                <select >
                                                                                                    <option >
                                                                                                        PL < /option > 
                                                                                                        < option > EN < /option > < /select > < /div > < /div> < /Nav >
                                                                                                        < /Navbar.Collapse> < /Navbar.Toggle > < /Container > 
                                                                                                        
                                                                               
                                                                               
                                                                               
                                                                                 < /Navbar >

                                                                                                        <div className="made4you-image">
                                                                                                            <div className="made4you">
                                                                                                                <h3
                                                                                                                    style={{
                                                                                                                        color: 'white'
                                                                                                                    }}>We make your vision into reality</h3>
                                                <button type="button" className="btn btn-dark btn-lg download-button">

                                                    Kontakt</button>
                                            </div>

                                        </div>

                                        <div id="features">

                                            <div className="container-fluid">

                                                <div className="row">
                                                    <div className="feature-box col-lg-4 col-sm-12">

                                                        <h3 className="feature-title">KIM JESTE??MY?</h3>
                                                        <p>Made 4 You to rewolucyjne narz??dzie dla architekt??w, kt??re dzi??ki nowoczesnym
                                                            technologiom i unikatowym produktom pozwala tworzy?? wyrafinowane wn??trza.
                                                            Jeste??my polsko - brytyjska mark?? dzia??aj??c?? w Wielkiej Brytanii, a teraz tak??e
                                                            w Polsce.</p>
                                                    </div>

                                                    <div className="feature-box col-lg-4 col-sm-12">

                                                        <h3 className="feature-title">JAK DZIA??AMY?
                                                        </h3>
                                                        <p>Naszym celem jest wspieranie architekt??w na ka??dym poziomie procesu
                                                            projektowego, dlatego w jednym miejscu znajdziesz kompleksowe wyposa??enie wn??trz
                                                            z wyko??czeniem pod klucz. Unikatowe, wyselekcjonowane produkty oraz
                                                            customizacja, kt??ra jest podstaw?? naszej dzia??alno??ci, pozwalaj?? na kreowanie
                                                            niepowtarzalnych rozwi??za??.</p>
                                                    </div>

                                                    <div className="feature-box col-lg-4 col-sm-12">

                                                        <h3 className="feature-title">CO NAS WYR????NIA?</h3>
                                                        <p>W Made 4 You rozwijamy wykorzystanie najnowszych technologii, by wspiera??
                                                            prac?? architekt??w i tym, chcemy si?? z Wami dzieli??! Do????cz do nas i sprawd??, jak
                                                            mo??esz z nami rozwija?? swoj?? dzia??alno????.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="white-section" id="features">

                                            <div className="container-fluid">
                                                <div className="row">
                                                     <div className="col  ">

                                                        <div className="feature-box col-lg-6">

                                                            <div
                                                                className="card"
                                                                style={{
                                                                    "width" : "500",
                                                                }}>
                                                                <img
                                                                    className="card-img-top"
                                                                    src="assets/image/pp1.jpg"
                                                                    alt="CardImage"
                                                                    style={{
                                                                        width: '100%'
                                                                    }}/>
                                                                <div className="card-body">
                                                                    <h7
                                                                        className="card-title"
                                                                        style={{
                                                                            textAlign: 'center'
                                                                        }}>CUSTOMIZACJA</h7>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="feature-box col-lg-6">
                                                            <img src="assets/image/new.jpg" className="img" alt="hand"/>
                                                            <p>
                                                                UNIKATOWE PRODUKTY
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="feature-box col-lg-4">
                                                            <img src="assets/image/glass.jpg" className="img" alt="hand"/>
                                                            <p>
                                                                NOWOCZESNE TECHNOLOGIE
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="feature-box col-lg-4">

                                                            <div className="feature-box col-lg-4">
                                                                <img src="assets/image/hand.jpg" className="img" alt="hand"/>
                                                                <p>
                                                                    PARTNER W ROZWOJU/ SPO??ECZNO???? ARCHITEKT??W
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div>
                                                        <h3>Zobacz nasz?? ofert??</h3>
                                                    </div>
                                                    <div className="feature-box col-lg-4">
                                                        <h4>
                                                            Kuchnia
                                                        </h4>
                                                        <img
                                                            src="assets/image/kuch.jpeg"
                                                            className="responsive1"
                                                            alt="hand"
                                                            width="260"
                                                            height="145"/></div>

                                                    <div className="feature-box col-lg-4">
                                                        <h4>
                                                            Drzwi
                                                        </h4>
                                                        <img
                                                            src="assets/image/drz.jpeg"
                                                            className="responsive1"
                                                            alt="hand"
                                                            width="260"
                                                            height="145"/></div>

                                                    <div className="feature-box col-lg-4">
                                                        <h4>
                                                            Okna
                                                        </h4>
                                                        <img
                                                            src="assets/image/okno.jpeg"
                                                            className="responsive1"
                                                            alt="hand"
                                                            width="260"
                                                            height="145"/></div>
                                                </div>

                                            </div>

                                        </div>
                                        < div className="row" id="image-side">
                                            <div className="col-lg-6">
                                                <p
                                                    style={{
                                                        paddingTop: 20
                                                    }}>
                                                    CZYM JEST MADE 4 YOU ? < /p> < p > LICZBA PRODUKT??W MADE4YOU??? LICZBA DZIA??AMY W
                                                    KRAJACH - LICZBA LICZBA ZROBIONYCH PROJEKT??W W ANGLII - LICZBA ARCHITEKCI
                                                    WSP????PRACUJ??CY - LICZBA < /p > < /div> < div className = "col-lg-6" > < div
                                                    className = "right" > < img className = "banner-image" src =
                                                    "assets/image/m2.jpeg " alt = "made" /> < /div > < /div> < /div >
                                                    <div className="row" id="image-side">
                                                        <div className="col-lg-6">
                                                            <img className="banner-image" src="assets/image/m3.jpeg" alt="made4"/>
                                                            < /div>

                                                                < div className="col-lg-6">
                                                                    < div className="right">
                                                                        <p
                                                                            style={{
                                                                                paddingTop: 20
                                                                            }}>
                                                                            CUSTOMIZACJA < /p >
                                                                            <p >
                                                                                Czas unifikacji i masowej produkcji d??br, odchodzi w niepami????.Klienci, zm??czeni
                                                                                powtarzalno??ci?? oferowanych produkt??w, coraz cz????ciej poszukuj?? oryginalnych
                                                                                rozwi??za????? spe??niaj??cych ich potrzeby estetyczne, ale r??wnie?? idealnie
                                                                                dopasowanych do przestrzeni, jak?? dysponuj??.Stawiamy na spersonalizowane
                                                                                rozwi??zania, kt??re architekci mog?? uzyska?? w jednym miejscu - w Made 4
                                                                                You.Wyselekcjonowane produkty oraz szeroka gama materia????w wyko??czeniowych
                                                                                pozwalaj?? w dowolny spos??b komponowa?? wn??trza i zadowala?? najbardziej
                                                                                wymagaj??cych inwestor??w. < /p> < /div > < / div > < /div >
                                                                                <div class="row" id="pytanie">
                                                                                    <div
                                                                                        className=" col-lg-6"
                                                                                        style={{
                                                                                            textAlign: 'left',
                                                                                            paddingLeft: 20
                                                                                        }}>

                                                                                        <h6>
                                                                                            PYTANIE 1. < /h6>
                                                                                            <p>
                                                                                                AK WYGL??DA REALIZACJA PROJEKTU ? < br /> MAPKA??? DZIA??ANIA 1 SPOTKANIE??? om??wienie
                                                                                                koncepcji. < br /> 2. WYB??R OPCJI dost??pnych w M4Y : < br /> I.Produkty
                                                                                                II.Produkty + monta?? III.Produkty + monta?? + us??ugi. < br /> 3. DOPASOWANIE???
                                                                                                pomagamy dopasowa?? nasze produkty do koncepcji projektowej. < br /> 4.
                                                                                                DOPASOWANIE??? WZORNIKI??? dostarczamy niezb??dnych wzornik??w i pr??bek materia????w <
                                                                                                br /> 5. WYCENA - precyzyjna wycena, okre??lenie termin??w realizacji < br /> 6.
                                                                                                REALIZACJA??? my dzia??amy, architekt ma podgl??d na proces wyko??czeniowy < br /> 7.
                                                                                                ODBI??R??? wsp??lnie z architektem dokonujemy odbioru zrealizowanego projektu. < /p>
                                                                                                < /div> < /div> < div className = "made4you-image1" > < img src =
                                                                                                "assets/image/pic2.png" alt = "" className = "responsive" width = "600" height =
                                                                                                "400" /> < /div> < div class = "row" id="pytanie"> < div className = " col-lg-6"
                                                                                                style ={{textAlign:'left', paddingLeft: 20,}}
                                                                                                > < h6 > PYTANIE 2 < /h6> < p > CZY MO??NA ZAM??WI?? TYLKO PRODUKTY BEZ US??UGI
                                                                                                WYKO??CZENIA LUB CZY MO??NA ZAM??WI?? TYLKO US??UG?? WYKO??CZENIOW?? ? < /p> < p >
                                                                                                Dost??pne opcje wsp????pracy :
                                                                                                <br/>
                                                                                                I.PRODUKTY < br /> II.PRODUKTY + MONTA?? produkty customizowane s?? dost??pne
                                                                                                jedynie w opcji z monta??em) < br /> III.PRODUKTY + MONTA?? + US??UGA WYKO??CZENIA
                                                                                                POD KLUCZ < /p> < /div> < /div> < div class = "row" id="pytanie" > < div
                                                                                                className = " col-lg-6" style ={{textAlign:'left', paddingLeft: 20,}}
                                                                                                > < h6 > PYTANIE 3 < /h6> < p > CZY MO??NA WYKONA?? PROJEKT WN??TRZA W MADE 4 YOU ?
                                                                                                < /p> < p > Tak!Made 4 You to platforma dla architekt??w, kt??ra kompleksowo
                                                                                                obs??uguje inwestycj??.Dzi??ki temu, ??e wsp????pracujemy z wieloma uznanymi
                                                                                                architektami??? ch??tnie polecamy naszym inwestorom architekt??w, z kt??rymi
                                                                                                realizujemy dla Pa??stwa zlecenie.Dowiedz si?? wi??cej < /p> < /div> < /div>

                                                                                                <div>

                                                                                                    <img src="assets/image/kich.jpeg" className="responsive1" alt="kuchnia"/>
                                                                                                </div>

                                                                                                 <MDBFooter className='text-center' color='white' bgColor='dark'>
                                                                                                 <div className='text-center p-3' style={{ backgroundColor: 'rgba(#212529)' }}>
                                                                                                        ??2023 Copyright. Designed by Kinde Tesfaye.
                       <
                       a className = 'text-white' href="#home"
                    >
                        <
                       /a> <
                       /div>
                   < /MDBFooter>
  


   < />


        );
    }
}

export default Home;