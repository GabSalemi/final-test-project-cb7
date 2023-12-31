import Head from 'next/head'
import DefaultLayout from '@/layout/defaultLayout'
import Hero from "@/components/hero"
import FilterBar from '@/components/filterbar'
import CardSection from '@/components/cardsection'
import GroupList from '@/components/grouplist'
import Info from '@/components/info'
import RandomSection from '@/components/randomsection'
import styles from '@/styles/Home.module.scss'
import { useState, useContext, useReducer } from 'react'
import { MainContext } from '@/state'
import { filterReducer } from '@/state/reducer'
import FilteredList from '@/components/filteredlist'


export default function Home({data}) {
  const { state, dispatch } = useContext(MainContext);
  const [value, setValue] = useState(state.value)
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="src\assets\images\logo.svg" />
      </Head>
      <DefaultLayout>
        <main className={styles.Main}>
          <Hero />
          <FilterBar data={data} />
          {state.filter === "Group" ? <GroupList data={data}/> : null}
          {state.filter === "All" ? <CardSection data={data} /> : null}
          {state.filter === "Filter" ? <FilteredList data={data} value={state.value} /> : null}
          <Info data={data} />
          <RandomSection data={data} />
        </main>
      </DefaultLayout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.npoint.io/421e815a115c2fcb3b68`);
  const data = res.status === 200 ? await res.json() : {};

  return { props: { data } };
}



//  Call by ID or index https://api.npoint.io/421e815a115c2fcb3b68/0/id