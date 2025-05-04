import React, { createContext, useState } from "react";

interface Lenguage {
  title: string;
  value: string;
}
interface WithChildrenProps {
  children: React.ReactNode;
}
interface GlobalContextType {
  selectedLenguage?: Lenguage;
  setSelectedLenguage: (value: Lenguage) => void;
  getRandomRepoByLanguage: () => Promise<any> | false;
}
export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

const GlobalContextProvider: React.FC<WithChildrenProps> = ({ children }) => {
  const [selectedLenguage, setSelectedLenguage] = useState<Lenguage>({
    title: "Select a Lenguage",
    value: "",
  });

  const getRandomRepoByLanguage = async () => {
    const perPage = 100;
    const maxResults = 1000;
    const totalPages = Math.floor(maxResults / perPage);

    const randomPage = Math.floor(Math.random() * totalPages) + 1;

    const url = `https://api.github.com/search/repositories?q=language:${selectedLenguage.value}&sort=stars&order=desc&per_page=${perPage}&page=${randomPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const randomRepo =
          data.items[Math.floor(Math.random() * data.items.length)];
        console.log(randomRepo);
        return randomRepo;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  };

  const value: GlobalContextType = {
    selectedLenguage,
    setSelectedLenguage,
    getRandomRepoByLanguage,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
