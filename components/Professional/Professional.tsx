export function Professional() {
    return (
        <div className="w-max flex flex-row items-center justify-center gap-x-6">
            <img src="./noticia.png" alt="" className="w-[144px] h-[114px]" />
            <div className="flex flex-col items-start justify-center space-y-1">
                <h2 className="text-blue-450 font-bold text-xl">Clinica Bem Estar</h2>
                <span className="text-zinc-450 font-bold text-lg ">(11) 91234-1234</span>
                <p className="font-normal text-sm text-zinc-450 ">Rua das  Flores, 128 - Bragança, SP</p>
                <p className="font-normal text-sm text-zinc-450 ">www.clinicabemestar.com.br</p>
            </div>
        </div>
    )
}