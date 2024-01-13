import dynamic from "next/dynamic"
import Header from "../../components/Header/Header";
import Head from "next/head";

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

// reason using dyanmic so map can render



export default function Home() {
  return (
<>
<Header></Header>
<DynamicMap/>
</>
  )
}
