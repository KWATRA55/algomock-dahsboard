import Head from 'next/head'
import Login from './login'


export default function Home() {
  return (
    <>
      <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.js" crossorigin="anonymous"></script>
      </Head>
      <main>
      </main>
      <Login />
    </>
  )
}