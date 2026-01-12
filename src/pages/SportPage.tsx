import { useParams } from 'react-router'

function SportPage() {
  const { slug } = useParams()

  return <div>SportPage {slug}</div>
}

export default SportPage
