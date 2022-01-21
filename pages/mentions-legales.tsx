/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";

const Charter: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie | Mentions légales</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.lafranceprie.org/mentions-legales"></meta>
      </Head>
      <Layout>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 my-8 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl tracking-tight font-extrabold text-indigo-400 md:text-3xl lg:text-4xl ">
              Mentions légales
            </h3>
          </div>
          <div className="text-justify prose lg:prose-lg p-1 my-12 lg:my-24 w-full mx-auto prose-h3:relative prose-h3:-left-2">
            <h3>Qui sommes-nous ?</h3>
            <p>Une équipe de laïcs catholiques bénévoles</p>
            <p>
              Directeur de publication : Julien Le Page
              <br />
              Responsable technique : Joseph Page
            </p>

            <h3>Notre hébergeur</h3>
            <p>
              <b>Cloudflare, Inc.</b>
              <br />
              Attn: Legal Department
              <br />
              101 Townsend St,
              <br />
              San Francisco, CA 94107
            </p>

            <h3>Cookies</h3>
            <p>
              Nous n'utilisons pas de cookies. Pour mesurer les visites nous
              utilisons seulement les données de notre hébergeur qui nous
              donnent le nombre de personnes qui chargent les pages, sans
              davantage d'informations personnelles.
            </p>

            <p>
              En revanche nous utilisons les services de Google (Maps et
              Youtube) qui, eux, sont susceptibles d'utiliser des cookies, de
              vous reconnaitre et de vous suivre sur d'autres sites.
              Malheureusement nous ne pouvons pas les en empêcher. Rassurez-vous
              nous travaillons à les remplacer par des équivalents.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Charter;
