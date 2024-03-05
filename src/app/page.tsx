import Link from 'next/link';
import { Button } from './components/Button';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1 className=' flex justify-center'>Exatas</h1>
        <Link href='/question'>
          <h1 className=' flex justify-center'>Selecione uma disciplina</h1>
          <div className='flex flex-box justify-center'>
            <Button variant='submit'>Matemática</Button>
            <Button>Física</Button>
            <Button>Quimica</Button>
          </div>
        </Link>
      </div>
    </main>
  )
}
