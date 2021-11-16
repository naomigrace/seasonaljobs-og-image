import Image from "next/image";
import Head from "next/head";
export default function meta({ title, description }) {
  return (
    <div className="bg-laborers bg-cover">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="grid h-screen justify-center align-center bg-white bg-opacity-90">
        <div className="self-center text-center">
          <Image
            priority={true}
            src="/logo-dol.svg"
            alt=""
            width={150}
            height={150}
          />
          <h1 className="self-center mt-4 text-6xl font-bold self-center font-serif max-w-4xl">
            {title}
          </h1>
          <h2 className="self-center mt-6 text-4xl font-light max-w-4xl">
            {description}
          </h2>
          <p className="mt-12 text-dolBlue text-lg">
            <strong>SeasonalJobs.dol.gov</strong> | Department of Labor | Office
            of Foreign Labor Certification
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      title: query.title || "SeasonalJobs.dol.gov",
      description: query.description || "",
    },
  };
}
