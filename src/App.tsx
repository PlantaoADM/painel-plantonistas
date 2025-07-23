import React, { useState } from 'react'

export default function App() {
  const [senha, setSenha] = useState('')
  const [acessoLiberado, setAcessoLiberado] = useState(false)

  function verificarSenha() {
    if (senha === '1234') {
      setAcessoLiberado(true)
    } else {
      alert('Senha incorreta')
    }
  }

  if (acessoLiberado) {
    return <div><h1>Painel de Plantonistas</h1></div>
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Digite a senha:</h2>
      <input
        type="password"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button onClick={verificarSenha}>Entrar</button>
    </div>
  )
}
