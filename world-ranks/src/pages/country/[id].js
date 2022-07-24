import Layout from '../../components/Layout/Layout';

const Country = ({ country }) => {
  console.log(country);
  return <Layout title={country.name}>Country</Layout>;
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `http://restcountries.com/v3.1/name/{name}/${params.id}`
  );

  const country = await res.json();

  return {
    props: { country },
  };
};
