import data from "../data/ProgramingLenguages.json";
import { useState } from "react";
interface Lenguage {
  title: string;
  value: string;
}

const LenguagesSelector = () => {
  const lenguagesData: Lenguage[] = data;
  const [selectedLenguage, setSelectedLenguage] =
    useState<string>("Select a Lenguage");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <div
      className="drop-down-menu"
      style={{ overflowY: modalIsOpen ? "scroll" : "hidden" }}
    >
      <div
        className="selected-element"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        {selectedLenguage}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            transform: modalIsOpen ? "rotate(-90deg)" : "rotate(90deg)",
          }}
        >
          <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
        </svg>
      </div>
      {modalIsOpen &&
        lenguagesData.map((lenguage) => (
          <div
            className="element"
            key={lenguage.value}
            onClick={() => {
              setSelectedLenguage(lenguage.title);
              setModalIsOpen(false);
            }}
          >
            {lenguage.title}
          </div>
        ))}
    </div>
  );
};

export default LenguagesSelector;
