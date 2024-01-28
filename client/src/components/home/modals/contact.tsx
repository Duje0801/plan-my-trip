import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact(): JSX.Element {
  return (
    <div className="modal-box flex flex-col border-2 border-black border-solid rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-justify">
        For any inquiries, comments, or suggestions, feel free to reach out to
        us via email.
      </p>
      <p className="my-2 text-center">
        <a href="mailto:info@plan-my-trip.com">
          <b>info@not-plan-my-trip-mail.com</b>
        </a>
      </p>
      <p className="my-2 text-justify">
        You can also follow us on social media:
      </p>
      <ul className="flex flex-row gap-2 mx-auto">
        <li>
          <a href="https://www.facebook.com/not-plan-my-trip-facebook">
            <FaFacebookSquare className="text-4xl" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/not-plan-my-trip-X">
            <FaSquareXTwitter className="text-4xl" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/not-plan-my-trip-instagram">
            <FaInstagramSquare className="text-4xl" />
          </a>
        </li>
      </ul>
      <div className="modal-action mt-4">
        <form method="dialog">
          <button className="btn bg-slate-300">Close</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
