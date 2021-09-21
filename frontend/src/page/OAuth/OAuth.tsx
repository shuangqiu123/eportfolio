import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";


interface IQuery {
	origin: string;
}

const OAuth: React.FC = () => {
	const { origin } = useParams<IQuery>();
	const search = useLocation().search;
	const token = new URLSearchParams(search).get("code");

	useEffect(() => {
		console.log(token, origin);
	}, [origin, token]);

	return (
		<div></div>
	);
};

export default OAuth;
