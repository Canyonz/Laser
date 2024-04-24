import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/screen/home/Home";
import "./assets/styles/global.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	</React.StrictMode>
);

/*
{
  "schemaVersion": 2,
  "dockerfileLines": [
    "FROM node:20.11.0",
    "WORKDIR /app",
    "COPY package.json yarn.lock ./",
    "RUN yarn install",
    "COPY . .",
    "RUN yarn build",
    "EXPOSE 80",
    "CMD [\"yarn\", \"preview\", \"--port\", \"80\"]"
  ]
}
*/
