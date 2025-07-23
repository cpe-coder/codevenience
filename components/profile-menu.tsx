"use client";

import { Building2, UserRound } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const ProfileMenu = () => {
	const [activeSection, setActiveSection] = React.useState<
		"personalInfo" | "businessDetails"
	>("personalInfo");
	return (
		<div className="flex ">
			<div className="w-full">
				<Button
					onClick={() => setActiveSection("personalInfo")}
					className={`w-full rounded-sm  border-0 shadow-none hover:cursor-pointer hover:bg-transparent transition-all duration-200 ${
						activeSection == "personalInfo"
							? "bg-white text-slate-700 hover:bg-white"
							: "bg-transparent text-slate-500"
					}`}
				>
					<UserRound className="text-slate-500" />
					<span>Personal Information</span>
				</Button>
			</div>
			<div className="w-full">
				<Button
					onClick={() => setActiveSection("businessDetails")}
					className={`w-full rounded-sm  border-0 shadow-none hover:cursor-pointer hover:bg-transparent transition-all duration-200  ${
						activeSection == "businessDetails"
							? "bg-white text-slate-700 hover:bg-white"
							: "bg-transparent text-slate-500"
					}`}
				>
					<Building2 className="text-slate-500" />
					<span>Business Details</span>
				</Button>
			</div>
		</div>
	);
};

export default ProfileMenu;
