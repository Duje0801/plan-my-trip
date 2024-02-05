import { useRef } from "react";
import About from "../modals/about";
import Contact from "../modals/contact";

export default function TopMenu(): JSX.Element {
  const aboutModal = useRef<HTMLDialogElement | null>(null);
  const contactModal = useRef<HTMLDialogElement | null>(null);

  const openAboutModal = (): void => {
    if (aboutModal.current) {
      aboutModal.current.showModal();
    }
  };

  const openContactModal = (): void => {
    if (contactModal.current) {
      contactModal.current.showModal();
    }
  };

  return (
    <>
      <ul className="flex flex-row absolute text-xl top-0 right-2 gap-2 xl:text-3xl">
        <li
          onClick={openAboutModal}
          className="text-slate-700 hover:text-slate-300 md:cursor-pointer"
        >
          About
        </li>
        <li
          onClick={openContactModal}
          className="text-slate-700 hover:text-slate-300 md:cursor-pointer"
        >
          Contact
        </li>
      </ul>
      <dialog ref={aboutModal} id="aboutModal" className="modal">
        <About />
      </dialog>
      <dialog ref={contactModal} id="aboutModal" className="modal">
        <Contact />
      </dialog>
    </>
  );
}
