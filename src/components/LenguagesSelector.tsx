import data from "../data/ProgramingLenguages.json";
import { useState, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContextProvider";
interface Lenguage {
  title: string;
  value: string;
}

const LenguagesSelector = () => {
  const lenguagesData: Lenguage[] = data;

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { setSelectedLenguage, selectedLenguage } = useContext(GlobalContext);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalIsOpen]);

  return (
    <div
      ref={modalRef}
      className="drop-down-menu"
      style={{ overflowY: modalIsOpen ? "scroll" : "hidden" }}
    >
      <div
        className="selected-element"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        {selectedLenguage?.title}
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
              setSelectedLenguage(lenguage);
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
