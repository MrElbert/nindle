import styles from "../styles/Home.module.css";
import { useStore } from "../stores/store";
import { isPropertySignature } from "typescript";
import { useEffect } from "react";
import Router from "next/router";

// create a react form component that returns a react element

interface Props {
  token: string;
}

export default function Form(props: any): JSX.Element {
  const accessToken = useStore((state) => state.accessToken);
  const setAccessToken = useStore((state) => state.setAccessToken);

  useEffect(() => {
    if (props.token) {
      setAccessToken(props.token);
    }
  });

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      fullName: event.target.fullName.value,
      amazonEmail: event.target.amazonEmail.value,
      amazonPassword: event.target.amazonPassword.value,
      token: accessToken ? accessToken : "no token",
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    fetch(endpoint, options);

    Router.push("/thanks");
  };

  return (
    <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
      <div className="py-12">
        <h2 className="text-2xl font-bold">Underline</h2>
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <form onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-white-700">Full name</span>
                <input
                  type="text"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                    text-black
                  "
                  placeholder=""
                  id="fullName"
                  name="fullName"
                />
              </label>
              <label className="block">
                <span className="text-white-700">Amazon Email</span>
                <input
                  type="email"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                    text-black
                  "
                  placeholder="john@example.com"
                  id="amazonEmail"
                  name="amazonEmail"
                />
              </label>
              <label className="block">
                <span className="text-white-700">Amazon Password</span>
                <input
                  type="text"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                    text-black
                  "
                  placeholder="********"
                  id="amazonPassword"
                  name="amazonPassword"
                />
              </label>
              <label className="block">
                <span className="text-white-700">
                  How often do you want Nindle to work?
                </span>
                <select
                  className="
                    block
                    w-full
                    mt-0
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                >
                  <option>Once a day</option>
                  <option>Once a week</option>
                  <option>Once a month</option>
                </select>
              </label>
              <label className="block">
                <span className="text-white-700">Additional details</span>
                <textarea
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                    text-black
                  "
                ></textarea>
              </label>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="
                          border-gray-300 border-2
                          text-black
                          focus:border-gray-300 focus:ring-black
                        "
                      />
                      <span className="ml-2">
                        I consent to Nindle accessing my Amazon account
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="text-white pt-10" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { code } = query;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Basic NDYwYzNmZmEtM2Q4OS00YTUwLTg0NTgtNGQ0YjMyZWMzZDc5OnNlY3JldF84SEZ5Q1BpcDg5YmZpNm15QlB0UWJ0UjdlSng4Y0pCd3Rpb3lWRG95V0tH"
  );

  var raw = JSON.stringify({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:3000/form",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = fetch(
    "https://api.notion.com/v1/oauth/token",
    requestOptions
  )
    .then((response) => {
      const data = response.json();
      return data;
    })
    .catch((error) => console.log("error", error));

  const result = await response;
  console.log("Result:", result);

  return {
    props: {
      token: result ? result.access_token : "No token",
    }, // will be passed to the page component as props
  };
}
