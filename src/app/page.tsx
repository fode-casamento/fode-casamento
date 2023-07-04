/* eslint-disable @next/next/no-img-element */
import { images } from '../../utils'

export default function Home() {

  return (
  
    <main>
      <h1>FODENDO CASAMENTOS DESDE 1969</h1>

      <section>
        {images.map((imagem, index) => (
          <div key={index}>
            <img  src={`./${imagem}`} alt="" />
          </div>
        ))}
      </section>

    </main>
  )
}
