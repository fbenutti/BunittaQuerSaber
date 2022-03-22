import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  //return (<pre>{JSON.stringify(data)}</pre>)
  return (
    <div>
      <PageTitle title="Seja bem-vindo" />
      <p className='text-2xl mt-12 text-center'>
        A Bunitta Brasil sempre busca atender melhor as nossas clientes!! <br />
        Por isso estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='sm:text-2xl bg-verde-bunitta px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>
      {!data &&
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" >
          <div class="flex justify-center">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
            <div>
              <p class="font-bold">Carregando...</p>
            </div>
          </div>
        </div>

        // <p className='text-center mb-6'>Carregando...</p>
      }
      {!error && data && data.showCoupon &&
        //TODO: colocar promoção do dia como título
        <p className='text-xl my-12 text-center'>
          {data.message}
        </p>
      }

    </div>
  )
}

export default Index