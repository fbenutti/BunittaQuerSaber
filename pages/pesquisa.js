import React, { useState } from 'react'
import PageTitle from '../components/pageTitle'


const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    // Email: '',
    Whatsapp: '',
    Nota: '0',
    Mensagem: ''
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle title="Pesquisa" />
      <h1 className='text-center font-bold my-4 text-2xl'>Opiniões e Sugestões</h1>
      <p className='text-center'>
        Preencha agora abaixo os campos!
      </p>
      {!sucess && <div className='flex flex-col lg:w-3/4 mt-6 mx-5 lg:mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input className='w-full p-4 block shadow-md bg-verde-claro-bunitta rounded-lg my-2' placeholder='Nome' type="text" onChange={onChange} name="Nome" value={form.Nome} />
        {/* <label className='font-bold'>E-mail:</label>
        <input className='w-full p-4 block shadow-md bg-verde-claro-bunitta rounded-lg my-2' placeholder='Email' type="text" onChange={onChange} name="Email" value={form.Email} /> */}
        <label className='font-bold'>WhatsApp:</label>
        <input className='w-full p-4 block shadow-md bg-verde-claro-bunitta rounded-lg my-2' placeholder='WhatsApp' type="text" onChange={onChange} name="Whatsapp" value={form.Whatsapp} />
        <label className='font-bold mt-4 block'>Nota para o estabelecimento:</label>
        <div className='flex pb-6 pt-3'>
          {notas.map(nota => {
            return (
              <label className='block w-1/6 text-left'>
                {nota} <br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} />
              </label>
            )
          })
          }
        </div>
        <label className='font-bold'>Digite a sua crítica, sugestão ou um simples comentário:</label>
        <textarea
          className='w-full h-52 p-4 block shadow-md bg-verde-claro-bunitta rounded-lg my-5'
          onChange={onChange} name="Mensagem" value={form.Mensagem} />
        <button
          className='bg-verde-bunitta w-1/3 mx-auto mb-6 sm:px-12 py-4 
          font-bold rounded-lg shadow-lg hover:shadow'
          onClick={save}>
          Salvar
        </button>
      </div>}
      {sucess &&
        <div className='mt-6 w-1/5 mx-auto'>
          <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>
            Obrigado por contribuir com sua sugestão ou crítica!
          </p>
          {
            retorno.showCupom && <div className='text-center border mb-4 p-4'>
              Seu Cupom: <br />
              <span className='font-bold text-2xl'>{retorno.Cupom}</span>
            </div>
          }
          {
            retorno.showCupom && <div className='text-center border mb-4 p-4'>
              <span className='font-bold block mb-2'>{retorno.Promo}</span>
              <br />
              <span className='italic'>Tire um print ou foto desta tela e apresente na loja para obter o desconto na próxima compra!</span>
            </div>
          }
        </div>
      }

    </div>
  )
}

export default Pesquisa