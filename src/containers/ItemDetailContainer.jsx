
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer(){
  const { id } = useParams()
  return (
    <main style={{ padding: 16 }}>
      <h1>Detalle del producto</h1>
      <p>ID: {id}</p>
    </main>
  )
}
