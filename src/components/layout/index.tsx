import React from "react";
import NavBar from "../navbar/NavBar";

type Props = {
	children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div className="px-[6%]">
			<NavBar />
			{
				children
			}
		</div>
	)
}

export default Layout;