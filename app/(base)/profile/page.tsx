"use client";

import BusinessDetails from "@/components/form/BusinessDetails";
import PersonalInformation from "@/components/form/PersonalInformation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Building2, Edit, UserRound } from "lucide-react";
import React from "react";

export default function Profile() {
	const [activeSection, setActiveSection] = React.useState<
		"personalInfo" | "businessDetails"
	>("personalInfo");
	return (
		<div className="flex flex-col w-full h-full  p-10 justify-center space-y-8">
			<div className="shadow p-2 rounded-md flex gap-2 items-center justify-between">
				<div className="flex items-center gap-1">
					<Button className="bg-transparent border-0 hover:bg-slate-200 hover:cursor-pointer">
						<ArrowLeft color="black" />
					</Button>
					<div>
						<h1 className="text-black font-medium text-xls">
							Profile Management
						</h1>
						<p className="text-xs font-medium text-slate-500">
							Manage your account settings and preferences
						</p>
					</div>
				</div>
				<div>
					<Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:cursor-pointer">
						<Edit />
						<p>Edit Profile</p>
					</Button>
				</div>
			</div>
			<div className="flex space-x-6">
				<div className="space-y-8">
					<div className="flex flex-col space-y-3 justify-center text-center shadow rounded-md w-90 p-6">
						<div className="flex-1 items-center justify-center p-6 border-4 border-purple-500/20 self-center rounded-full">
							<UserRound className="w-12 h-12" color="gray" />
						</div>
						<div className="text-center">
							<h1 className="text-2xl font-medium text-slate-700">
								Maria Santos
							</h1>
							<h2 className="text-md font-normal text-slate-500">
								Store Manager
							</h2>
							<p className="text-sm font-normal text-slate-400">Operations</p>
						</div>
						<div>
							<Button className="bg-purple-500/10 rounded-full text-purple-500">
								Manager
							</Button>
						</div>
						<p className="text-sm font-normal text-slate-500">
							Oversee operations and manage team members
						</p>
					</div>
					<div className="flex space-y-2 flex-col justify-center text-center shadow rounded-md w-90 p-6">
						<Label className="text-slate-500">Simulate User Role:</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue
									className="text-slate-500"
									placeholder="Select role..."
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="employee">Employee</SelectItem>
								<SelectItem value="manager">Manager</SelectItem>
								<SelectItem value="owner">Business Owner</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="w-full space-y-8">
					<div className="w-full">
						<div className="p-1 rounded-md shadow bg-slate-100">
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
						</div>
					</div>
					<div className="rounded-md shadow p-6 space-y-8">
						<div className="flex gap-2 items-center">
							{activeSection == "personalInfo" ? (
								<UserRound className="text-slate-700 w-5 h-5" />
							) : (
								<Building2 className="text-slate-700 w-5 h-5" />
							)}
							<Label className="text-slate-700 text-xl">
								{activeSection == "personalInfo"
									? "Personal Information"
									: "Business Details"}
							</Label>
						</div>
						{activeSection == "personalInfo" ? (
							<PersonalInformation />
						) : (
							<BusinessDetails />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
