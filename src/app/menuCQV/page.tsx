import Link from 'next/link';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <main>
      {/**<div className='container'>
          <h1 className=' flex justify-center text-white text-3xl'>Conteúdo</h1>
          <h1 className=' flex justify-center text-white text-2xl'>Vamos aprender !!</h1>
  **/} 
        
        <div className='flex justify-center'>
          <Link href='/conteudo'>
            <Button>Conteúdo</Button>
          </Link>
        </div>

        <div className='flex justify-center'>
          <Link href='/Videos'>
            <Button size='full'>Videos</Button>
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href='../question'>
            <Button size='full'>Questoes</Button>
          </Link>
        </div>

        
        

      {/**</div>**/}
    </main>
  )
}

