import { useState, useEffect, useRef, FormEvent } from "react";
import InputRow from "./rows/inputRow";
import ButtonsRow from "./rows/buttonsRow";
import AdvSearch from "../modals/advSearch";
import ErrorModal from "../modals/error";
import { ICountryCode } from "../../../interfaces/countryCode";
import { useAppContext } from "../../../context/context";
import axios from "axios";

export default function Form(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>(``);
  const [countriesList, setCountriesList] = useState<ICountryCode[]>([]);
  const [error, setError] = useState<string>(``);

  const advSearchRef = useRef<HTMLDialogElement | null>(null);
  const errorRef = useRef<HTMLDialogElement | null>(null);

  const { state } = useAppContext();

  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.showModal();
    }
  }, [error]);

  useEffect(() => {
    function fetchData() {
      axios
        .get(`http://localhost:4000/api/search/${state.inputText}`)
        .then((res) => {
          setCountriesList(res.data.countries);
        })
        .catch((err: any) => {
          setError("Something went wrong, please try again later.");
        });
    }
    if (state.inputText.length < 3) return setCountriesList([]);
    fetchData();
  }, [state.inputText]);

  const openAdvSearchModal = (): void => {
    if (advSearchRef.current) {
      advSearchRef.current.showModal();
    }
  };

  //The itinerary is generated only after clicking the submit button
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80vw] md:w-[50vw] lg:w-[35vw]">
        {/* 1st Row */}
        <InputRow
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          countriesList={countriesList}
        />

        {/* 2nd Row */}
        <ButtonsRow
          setError={setError}
          openAdvSearchModal={openAdvSearchModal}
        />
      </form>

      {/* Advanced Search Modal */}
      <dialog
        ref={advSearchRef}
        id="advancedSearchModal"
        className="modal rounded-lg"
      >
        <AdvSearch />
      </dialog>

      {/* Error Modal */}
      <dialog ref={errorRef} id="errorModal" className="modal">
        <ErrorModal error={error} setError={setError} />
      </dialog>
    </>
  );
}
