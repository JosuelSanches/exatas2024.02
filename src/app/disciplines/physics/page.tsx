import Link from 'next/link';
import { Button } from '../../components/Button';

export default function Home() {
  return (
    <main>
      <div className='container'>
          <h1 className=' flex justify-center text-white text-3xl'>Fisica</h1>
          <h1 className=' flex justify-center text-white text-2xl'>Vamos aprender !!</h1>
        
        <div className='flex justify-center'>
          <Link href='/question'>
            <Button>Movimento uniforme</Button>
          </Link>
        </div>

        <div className='flex justify-center'>
          <Link href=''>
            <Button size='full'>Movimento uniforme variado</Button>
          </Link>
        </div>

        <div className='flex justify-center'>
          <Link href=''>
             <Button size='full'>Movimento Vertical</Button>
          </Link>            
        </div>
      </div>
    </main>
  )
}
