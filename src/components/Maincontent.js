import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusantik from "./../assets/jurusantik.jpg";
import jurusansisteminformasi from "./../assets/jurusansisteminformasi.jpg";
import jurusanmanajemenkomputerisasi from "./../assets/jurusanmanajemenkomputerisasi.jpg";
import ukmfutsal from "./../assets/ukmfutsal.jpg";
import ukmband from "./../assets/ukmband.jpg";
import ukmpaskibra from "./../assets/ukmpaskibra.jpg";
import ukmprogramming from "./../assets/ukmprogramming.jpg";

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Jurusan Mahasiswa</h1>
          </div>
          <div className="col-lg-4 justify-content-center">
            <Cardjurusan image={jurusantik} jurusan="Teknik Informatika" />
          </div>
          <div className="col-lg-4">
            <Cardjurusan
              image={jurusansisteminformasi}
              jurusan="Sistem Informasi"
            />
          </div>
          <div className="col-lg-4">
            <Cardjurusan
              image={jurusanmanajemenkomputerisasi}
              jurusan="Manajamen Komputerisasi"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Unit Kegiatan Mahasiswa</h1>
          </div>
          <div className="col-12 my-3">
            <h1>
              <Cardkegiatan
                image={ukmfutsal}
                description="Futsal STMIK Mercusuar"
              />
            </h1>
          </div>
          <div className="col-12 my-3">
            <h1>
              <Cardkegiatan
                image={ukmband}
                description="Band STMIK Mercusuar"
              />
            </h1>
          </div>
          <div className="col-12 my-3">
            <h1>
              <Cardkegiatan
                image={ukmpaskibra}
                description="Paskibra STMIK Mercusuar"
              />
            </h1>
          </div>
          <div className="col-12 my-3">
            <h1>
              <Cardkegiatan
                image={ukmprogramming}
                description="Programming STMIK Mercusuar"
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
