import { GetServerSideProps, NextPage } from "next";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { withSSRAuth } from "../../utils/withSSRAuth";

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext);
  return <h1>{JSON.stringify(user)}</h1>;
};

export default Dashboard

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})