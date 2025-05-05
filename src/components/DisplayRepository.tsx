import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContextProvider";
import ErrorFatchingRepo from "./ErrorFatchingRepo";
import FoundedRepo from "./FoundedRepo";
const DisplayRepository = () => {
  const { getRandomRepoByLanguage, selectedLenguage } =
    useContext(GlobalContext);

  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState<any>(null);
  const fetchData = async () => {
    setLoading(true);
    const data = await getRandomRepoByLanguage();
    setRepo(data);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedLenguage?.value === "") {
      return;
    }
    setLoading(true);
    fetchData();
  }, [selectedLenguage]);

  if (selectedLenguage?.value === "") {
    return (
      <div className="answer">
        <h2>Please select a language...</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="answer">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (!repo) {
    return (
      <>
        <ErrorFatchingRepo retry={fetchData} />
      </>
    );
  }
  return <FoundedRepo repo={repo} refresh={fetchData} />;
};

export default DisplayRepository;
