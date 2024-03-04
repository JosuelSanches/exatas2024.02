import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1 className=' flex justify-center'>Exatas</h1>
        <Link href='/question'>
          <h1 className=' flex justify-center'>Selecione uma disciplina</h1>
          <div className='flex flex-box justify-center'>
            <button  className=" flex justify-center gap-2 mr-2  bg-slate-400 ">Matemática</button>
            <button  className=" flex justify-center gap-2 mr-2 bg-red-500">Física</button>
            <button  className=" flex justify-center gap-2 bg-blue-600">Quimica</button>
          </div>
        </Link>
      </div>
    </main>
  )
}
