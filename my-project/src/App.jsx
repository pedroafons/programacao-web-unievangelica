export default function App() {
  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="h-[600px] w-[992px] flex justify-center">
          <div className="h-[600px] w-[496px] border-2 border-[#CBFF4D] bg-[url('./assets/Rectangle8.png')] rounded-l-lg">
          </div>
          <div className="h-[600px] w-[496px] border-2 border-[#CBFF4D] bg-[#1A1A1A] rounded-r-lg">
            <div className="mt-12 font-serif">
              <h1 className="mx-11 text-[#D9D9D9] text-4xl mb-4">Registrar</h1>
              <p className="mx-11 text-[#D9D9D9]">Crie um conta. É grátis.</p>
            </div>
            <div className="font-sans mt-11">
              <div className="flex justify-between mt-5 mx-11">
                <input className="w-[195px] h-12 px-4 border-2 border-[#474747] bg-[#1A1A1A] rounded-sm placeholder-[#474747]" type="text" placeholder="Nome" />
                <input className="h-12 w-[195px] px-4 border-2 border-[#474747] bg-[#1A1A1A] rounded-sm placeholder-[#474747]" type="text" placeholder="Sobrenome" />
              </div>
              <div className="flex flex-col mt-5">
                <input className="mb-[25px] h-12 mx-11 px-5 border-2 border-[#474747] bg-[#1A1A1A] rounded-sm placeholder-[#474747]" type="email" placeholder="E-mail" />
                <input className="mb-[25px] h-12 mx-11 px-5 border-2 border-[#474747] bg-[#1A1A1A] rounded-sm placeholder-[#474747]" type="password" placeholder="Senha" />
                <input className="h-12 mx-11 border-2 px-5 border-[#474747] bg-[#1A1A1A] rounded-sm placeholder-[#474747]" type="password" placeholder="Confirmar Senha" />
              </div>
            </div>

            <div className="mt-2 font-sans">
              <input className="ml-11" type="checkbox" name="confirm" id="confirm" />
              <label className="ml-2 text-[#474747]" htmlFor="confirm">Eu aceito os <span className="text-[#CBFF4D]">Termos de Uso</span> & <span className="text-[#CBFF4D]">Políticas de Privacidade</span></label>
            </div>
            <div className="mx-11 mt-10 font-sans">
              <button className="bg-[#CBFF4D] border-2 border-[#474747] w-[405px] h-[45px] rounded-sm text-[#1A1A1A] font-bold">Registrar</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}