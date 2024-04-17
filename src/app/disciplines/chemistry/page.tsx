import Link from 'next/link';
import { Button } from '../../components/Button';

export default function Home() {
  return (
    <main>
      <div className='container'>
          <h1 className=' flex justify-center text-white text-3xl'>Quimica</h1>
          <h1 className=' flex justify-center text-white text-2xl'>Vamos aprender !!</h1>
        
        <div className='flex justify-center'>
          <Link href='/menuCQV'>
            <Button>Alotropia</Button>
          </Link>
        </div>

        <div className='flex justify-center'>
          <Link href=''>
            <Button size='full'>Estados fisicos e estados de agregacao das moleculas</Button>
          </Link>
        </div>

        <div className='flex justify-center'>
          <Link href=''>
             <Button size='full'> Ligacao quimicas</Button>
          </Link>            
        </div>
        

      </div>
    </main>
  )
}

