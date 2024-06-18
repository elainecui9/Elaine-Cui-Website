import Image from 'next/image'
import Button from './button'
import './globals.css';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col bg-pink-50 font-serif min-h-screen place-content-center place-items-center">
        <div className="flex flex-col text-green-500 text-opacity-50 place-items-center bg-white p-16">
          <h1 className="text-4xl">Welcome to my world...</h1>
          <h2 className="text-2xl mb-4">Elaine Cui</h2>
          <div className="Button">
          <Button text="Enter"></Button>
          </div>
        </div>
      </div>
    </main>
  )
}
