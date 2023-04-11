import Sidebar from './Sidebar.js';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

function BasvuruGoruntule() {

    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        const bilgiGetir = async () => {
            const isim = sessionStorage.getItem('isim');
            const soyisim = sessionStorage.getItem('soyisim');
            const bolum = sessionStorage.getItem('bolum');
            const kimlikno = sessionStorage.getItem('kimlikno');
            const dogumtarihi = sessionStorage.getItem('dogumtarihi');
            const cinsiyet = sessionStorage.getItem('cinsiyet');
            const mezuniyetDurumu = sessionStorage.getItem('mezuniyetDurumu');
            const adresUlke = sessionStorage.getItem('adresUlke');
            const adresSehir = sessionStorage.getItem('adresSehir');
            const adresIlce = sessionStorage.getItem('adresIlce');
            const acikAdres = sessionStorage.getItem('acikAdres');
            const engelDurumu = sessionStorage.getItem('engelDurumu');
            const engelBilgisi = sessionStorage.getItem('engelBilgisi');
            const mezuniyetTarihi = sessionStorage.getItem('mezuniyetTarihi');
            const ortalama = sessionStorage.getItem('ortalama');
            const email = sessionStorage.getItem('email');
            const telefon = sessionStorage.getItem('telefon');
            const dokuman = sessionStorage.getItem('dokuman');


            setBilgi(prevState => ({
                ...prevState,

                isim,
                soyisim,
                bolum,
                kimlikno,
                dogumtarihi,
                cinsiyet,
                mezuniyetDurumu,
                adresUlke,
                adresSehir,
                adresIlce,
                acikAdres,
                engelDurumu,
                engelBilgisi,
                mezuniyetTarihi,
                ortalama,
                email,
                telefon,
                dokuman,

            }));
        }
        bilgiGetir();

    }, [])



    return (
        <>
            <div className="row">
                <div className="col-3">
                    <Sidebar
                        gor_active="active"
                        gor_disable="disabled"
                        form_to="/portal/BasvuruFormu"

                    />
                </div>

                <div className="col-9">
                    <h2 className='text-center my-4'>Basvuru Görüntüle</h2>
                    <form>
                        <div id="basvuru2" className="row">
                            <div className="col-4">

                                <label for="formGroupExampleInput"
                                    class="form-label">İsim:</label>
                                <br />
                                <input type="text"
                                    placeholder="İsminiz"
                                    value={bilgi.isim}
                                /><br />
                                <label for="formGroupExampleInput"
                                    class="form-label">Soyisim:</label>
                                <br />
                                <input type="text"
                                    placeholder="Soyisminiz"
                                    value={bilgi.soyisim}
                                /><br />
                                <label for="formGroupExampleInput"
                                    class="form-label">Bölüm:</label>
                                <br />
                                <input type="text"
                                    placeholder="Bolumunuz"
                                    value={bilgi.bolum}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Kimlik No:</label>
                                <br />
                                <input type="number"
                                    placeholder="Kimlik No"
                                    value={bilgi.kimlikno}
                                /><br />
                                <label for="formGroupExampleInput"
                                    class="form-label">Doğum Tarihi:</label>
                                <br />
                                <input type="date"
                                    placeholder="Doğum Tarihi"
                                    value={bilgi.dogumtarihi}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Cinsiyet:</label>
                                <br />
                                <input type="number"
                                    placeholder="Cinsiyet"
                                    value={bilgi.cinsiyet}
                                /><br />
                            </div>
                            <div className="col-4">



                                <label for="formGroupExampleInput"
                                    class="form-label">Mezuniyet Durumu:</label>
                                <br />
                                <input type="number"
                                    placeholder="Mezuniyet Durumu"
                                    value={bilgi.mezuniyetDurumu}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Adres-Ülke:</label>
                                <br />
                                <input type="text"
                                    placeholder="Adres-Ülke"
                                    value={bilgi.adresUlke}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Adres-Şehir:</label>
                                <br />
                                <input type="text"
                                    placeholder="Adres-Şehir"
                                    value={bilgi.adresSehir}
                                /><br />





                                <label for="formGroupExampleInput"
                                    class="form-label">Adres-İlçe:</label>
                                <br />
                                <input type="text"
                                    placeholder="Adres-İlçe"
                                    value={bilgi.adresIlce}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Açık Adres:</label>
                                <br />
                                <input type="text"
                                    placeholder="Açık Adres"
                                    value={bilgi.acikAdres}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Engel Durumu:</label>
                                <br />
                                <input type="number"
                                    placeholder="Engel Durumu"
                                    value={bilgi.engelDurumu}
                                /><br />
                            </div>
                            <div className="col-4">
                               <label for="formGroupExampleInput"
                                    class="form-label">EngelBilgisi</label>
                                <br />
                                <input type="text"
                                    placeholder="Engel Bilgisi"
                                    value={bilgi.engelBilgisi}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Mezuniyet Tarihinizi Yazınız:</label>
                                <br />
                                <input type="date"
                                    placeholder="Mezuniyet Tarihi"
                                    value={bilgi.mezuniyetTarihi}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Ortalamanız:</label>
                                <br />
                                <input type="number"
                                    placeholder="Ortalama"
                                    value={bilgi.ortalama}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Email::</label>
                                <br />
                                <input type="email"
                                    placeholder="Email"
                                    value={bilgi.email}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Telefon:</label>
                                <br />
                                <input type="number"
                                    placeholder="Telefon"
                                    value={bilgi.telefon}
                                /><br />

                                <label for="formGroupExampleInput"
                                    class="form-label">Yüklenen Döküman:</label>
                                <br />
                                <input type="text"
                                    placeholder="Döküman"
                                    value={bilgi.dokuman}
                                /><br />
                            </div>

                        </div>

                        <br />




                    </form>
                    {error && <p style={{ color: 'red' }}> {error} </p>}
                </div>
            </div>
        </>
    );

}

export default BasvuruGoruntule;













































































































