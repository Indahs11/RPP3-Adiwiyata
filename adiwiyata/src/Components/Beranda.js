import React from 'react';
import jumbo from '../images/Adiwiyata.jpg'
import info from '../images/info.jpg'
import desk from '../images/desk.jpg'

class Beranda extends React.Component{
    render(){
        return(
            <div className="jumbootron">
                <img alt="jumbo" src={jumbo}/>
                <div className="container">
                <div className="card mb-3 ">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={info} alt="info" width="300px" height="300px"/>
                        </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">PENGERTIAN ADIWIYATA</h3>
                            <p className="card-text">Pedoman Pelaksanaan Program Adiwiyata menyatakan bahwa sekolah adiwiyata
                            yaitu suatu program untuk dapat mewujudkan sekolah yang peduli serta berbudaya lingkungan.Adiwiyata memiliki pengertian atau makna sebagai salah satu tempat 
                            yang baik dan juga ideal yang diperoleh segala ilmu pengetahuan dan beragai norma serta etika yang menjadi dasar 
                            manusia menuju terciptanya kesejahteraan hidup kita untuk menuju kepada cita-cita pembangunan berkelanjutan.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card mb-3 ">
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={desk} alt="desk" width="300px" height="300px"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">TUJUAN ADIWIYATA</h3>
                            <p className="card-text">Menciptakan kondisi yang lebih baik bagi pada sekolah untuk menjadi 
                            wadah pembelajaran dan penyadaran segenap warga sekolah, Warga sekolah turut bertanggung jawab 
                            dalam mengupayakan penyelamatan lingkungan hidup serta juga pembangunan yang berkelanjutan, 
                            Mendorong dan membantu sekolah untuk dapat turut serta didalam melaksanakan upaya pemerintah 
                            demi melestarikan lingkungan hidup dalam pembangunan yang berkelanjutan.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>  
            </div>
        )
    }
}

export default Beranda;