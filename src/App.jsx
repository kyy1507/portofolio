import DataImage, { listTools, listProyek } from "./data"

function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <div className="flex justify-center items-center bg-gradient-to-b from-violet-600/0 via-violet-500/70 to-blue-700 rounded-b-lg w-[50px] md:ml-auto">
              <img src={DataImage.HeroImage} alt="Hero Image" loading="lazy" className="w-8" />
            </div>
            <q>Kode yang indah, lahir dari ketekunan.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Misbahur Rizqi</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website, ketertarikan pada bidang ini sudah berlangsung lebih dari 2 Tahun untuk Bidang ini.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/assets/cv.pdf"
              download="CV-Misbahur-Rizqi.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>

            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gradient-to-b from-violet-600/0 via-violet-500/70 to-blue-700 rounded-b-[40px] w-[400px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s">
          <img src={DataImage.HeroImage} alt="Hero Image" loading="lazy" className="w-[250px] pt-20" />
        </div>
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Hero Image" loading="lazy" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Misbahur Rizqi, seorang Front End Web Developer untuk UI/UX Design maupun Product Digital, Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center bg-gradient-to-b from-violet-600/0 via-violet-500/70 to-blue-700 rounded-b-lg w-[65px]">
              <img src={DataImage.HeroImage} alt="Hero Image" loading="lazy" className="w-12 sm:block hidden" />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">6<span className="text-violet-500">+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">1<span className="text-violet-500">+</span></h1>
                <p>Tahun Pengamalan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">Berikut ini beberapa tools yang biasa dipakai untuk pembuatan Website</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tools => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md group" key={tools.id} data-aos="fade-up" data-aos-once="true" data-aos-delay={tools.dad}>
                <img src={tools.gambar} alt="Tools image" loading="lazy" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">{tools.nama}</h4>
                  <p className="opacity-50">{tools.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* project */}
      <div className="proyek mt-32" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">Project yang telah saya buat</p>
        <div className="mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 project-box">
          {listProyek.map(project => (
            <div key={project.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-once="true" data-aos-delay={project.dad}>
              <img src={project.gambar} alt="Project Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tools, i) => (
                    <p className="text-sm py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={i}>{tools}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600" href={project.link} target="_blank">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/misbah.rizqi5@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama Lengkap" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukan Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
